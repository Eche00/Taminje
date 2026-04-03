'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function page() {
    const [step, setStep] = useState(1);
    const [systemType, setSystemType] = useState('');
    const [peakLoad, setPeakLoad] = useState<number>(0);
    const [dailyKwh, setDailyKwh] = useState<number>(0);
    const [autonomy, setAutonomy] = useState(2);
    const [bessType, setBessType] = useState('LiFePO4');
    const [lifecycle, setLifecycle] = useState(5000);
    const [panelSpace, setPanelSpace] = useState('');
    const [voltageType, setVoltageType] = useState('LV');
    const [warranty, setWarranty] = useState(5);
    const [appliances, setAppliances] = useState<{ name: string; power: number; qty: number; hours: number }[]>([]);

    const addAppliance = () => {
        setAppliances([...appliances, { name: '', power: 0, qty: 1, hours: 8 }]);
    };

    const updateAppliance = (index: number, field: string, value: any) => {
        const updated = [...appliances];
        updated[index] = { ...updated[index], [field]: value };
        setAppliances(updated);
    };

    const removeAppliance = (index: number) => {
        setAppliances(appliances.filter((_, i) => i !== index));
    };

    const calculateDailyKwhFromAppliances = () => {
        return appliances.reduce((sum, app) => sum + (app.power * app.qty * app.hours), 0) / 1000;
    };

    const currentDailyKwh = dailyKwh || calculateDailyKwhFromAppliances();

    // Expanded battery formulas
    const getBatteryParams = () => {
        let dod = 0.5, efficiency = 0.8;
        if (bessType === 'LiFePO4') { dod = 0.9; efficiency = 0.95; }
        else if (bessType === 'Tubular') { dod = 0.7; efficiency = 0.85; }
        const usableEnergy = currentDailyKwh * autonomy;
        const requiredBatteryKwh = usableEnergy / (dod * efficiency);
        const systemVoltage = voltageType === 'HV' ? 384 : 48;
        const totalAh = (requiredBatteryKwh * 1000) / systemVoltage;
        return { dod, efficiency, usableEnergy, requiredBatteryKwh, systemVoltage, totalAh };
    };

    // Inverter surge
    const surgeFactor = systemType === 'Off-grid' ? 1.3 : 1.25;
    const inverterKW = (peakLoad * surgeFactor).toFixed(1);

    // Maintenance cost
    const batteryCostPerKwh = bessType === 'LiFePO4' ? 650000 : (bessType === 'Tubular' ? 320000 : 280000);
    const { requiredBatteryKwh } = getBatteryParams();
    const batteryCost = requiredBatteryKwh * batteryCostPerKwh;
    const annualMaintenance = bessType === 'LiFePO4' ? batteryCost * 0.01 : (bessType === 'Tubular' ? batteryCost * 0.03 : batteryCost * 0.05);
    const fiveYearMaint = annualMaintenance * 5;
    const tenYearMaint = annualMaintenance * 10;

    // PV sizing
    const peakSunHours = 5.2;
    const pvEfficiency = 0.85;
    const requiredPVkW = (currentDailyKwh * 1.25) / (peakSunHours * pvEfficiency);
    const panelCount = Math.ceil(requiredPVkW * 1000 / 550);

    // Refined cost estimation
    const usdToNgn = 1650;
    const panelCost = panelCount * 550 * 0.65;
    const inverterCost = parseFloat(inverterKW) * 850000;
    const protectionCost = voltageType === 'HV' ? 550000 : 420000;
    const installationCost = 1200000;
    const totalNGN = panelCost + batteryCost + inverterCost + protectionCost + installationCost;
    const totalUSD = (totalNGN / usdToNgn).toFixed(0);

    const next = () => setStep(step + 1);
    const prev = () => setStep(step - 1);

    const downloadExcel = () => {
        const csv = `data:text/csv;charset=utf-8,Taminje Solar PV Calculator\nDate,${new Date().toLocaleDateString()}\n\n` +
            `System Type,${systemType}\nDaily kWh,${currentDailyKwh}\nPeak Load,${peakLoad}\nInverter Size,${inverterKW} kW\nBattery Capacity,${requiredBatteryKwh.toFixed(1)} kWh\nTotal Cost NGN,₦${totalNGN.toLocaleString()}\n`;
        const link = document.createElement('a');
        link.href = encodeURI(csv);
        link.download = `Taminje_Solar_Design_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
    };

    const downloadPDF = async () => {
        const { jsPDF } = await import("jspdf");

        const doc = new jsPDF();

        const pageWidth = doc.internal.pageSize.getWidth();

        //  HEADER (Green Bar) 
        doc.setFillColor(51, 162, 89); // #33A259
        doc.rect(0, 0, pageWidth, 40, "F");



        // Title
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(16);
        doc.text("Taminje Solar PV Report", pageWidth / 2, 18, { align: "center" });

        doc.setFontSize(10);
        doc.text(
            "Advanced Battery Sizing • Inverter Surge • Maintenance Cost",
            pageWidth / 2,
            26,
            { align: "center" }
        );

        // Reset text color
        doc.setTextColor(0, 0, 0);

        let y = 55;

        //  SECTION HELPER 
        const sectionTitle = (title: string) => {
            doc.setFontSize(13);
            doc.setFont("bold");
            doc.text(title, 14, y);
            y += 6;

            doc.setDrawColor(200, 200, 200);
            doc.line(14, y, pageWidth - 14, y);
            y += 8;
        };

        const row = (label: string, value: string) => {
            doc.setFontSize(11);
            doc.setFont("normal");

            doc.text(`${label}:`, 14, y);
            doc.text(value, pageWidth - 14, y, { align: "right" });

            y += 7;
        };

        //  SYSTEM OVERVIEW 
        sectionTitle("System Overview");

        row("System Type", systemType || "Hybrid");
        row("Daily Energy", `${currentDailyKwh.toFixed(1)} kWh`);
        row("Peak Load", `${peakLoad.toFixed(1)} kW`);
        row("Inverter Size", `${inverterKW} kW`);

        y += 4;

        //  BATTERY 
        sectionTitle("Battery Design");

        row("Battery Capacity", `${requiredBatteryKwh.toFixed(1)} kWh`);
        row("System Voltage", `${getBatteryParams().systemVoltage} V`);
        row("Total Capacity", `${getBatteryParams().totalAh.toFixed(0)} Ah`);

        y += 4;

        //  COST 
        sectionTitle("Cost Estimation");

        row("PV Panels", `₦${panelCost.toLocaleString()}`);
        row("Battery", `₦${batteryCost.toLocaleString()}`);
        row("Inverter", `₦${inverterCost.toLocaleString()}`);
        row("Protection", `₦${protectionCost.toLocaleString()}`);
        row("Installation", `₦${installationCost.toLocaleString()}`);

        y += 2;

        // Total highlight box
        doc.setFillColor(245, 194, 66); // #f5c242
        doc.rect(14, y, pageWidth - 28, 12, "F");

        doc.setFontSize(12);
        doc.setFont("bold");
        doc.text(
            `TOTAL: ₦${totalNGN.toLocaleString()} (~$${totalUSD})`,
            pageWidth / 2,
            y + 8,
            { align: "center" }
        );

        y += 20;

        //  FOOTER NOTE 
        doc.setFontSize(9);
        doc.setFont("normal");
        doc.text(
            "Note: Prices are estimates based on current market conditions in Nigeria and may vary.",
            14,
            y
        );

        //  SAVE 
        const fileName = `Taminje_Solar_Report_${new Date()
            .toISOString()
            .slice(0, 10)}.pdf`;

        doc.save(fileName);

        //  TOAST 
        toast.success("PDF report generated successfully ✅");
    };

    return (
        <div className="min-h-screen bg-gray-50 sm:py-12">
            <div className="sm:max-w-4xl mx-auto bg-white sm:rounded-3xl sm:shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#33A259] text-white px-8 py-10 text-center">
                    {/* Logo   */}
                    <div className="flex flex-1 items-center justify-center relative  w-full">
                        <p className="flex items-center rounded-lg px-4 md:text-2xl text-xl font-extrabold text-[#33A259] tracking-wide">
                            <span
                                className=" bg-white border-2 border-[#33A259] rounded-full p-2 mr-2 flex items-center justify-center"
                            >
                                <img src="/logo.png" alt="" className=" w-8 h-8 object-cover" />
                            </span>
                        </p>
                    </div>

                    <h1 className="text-4xl font-semibold mt-2">Solar PV Power Requirement Calculator</h1>
                    <p className="mt-3 text-lg opacity-90">Advanced Battery Sizing • Inverter Surge • Maintenance Cost • Refined Estimates</p>
                </div>

                {/* Progress */}
                <div className="sm:px-8 px-4 py-8 flex justify-between relative">
                    {/* Background line */}
                    <div className="absolute top-12 left-8 right-8 h-2 bg-gray-200 rounded-full" />

                    {/* Animated progress line */}
                    <div
                        className="absolute top-12 left-8 h-2 bg-[#33A259] rounded-full transition-all duration-500 ease-in-out"
                        style={{
                            width: `${((step - 1) / (4 - 1)) * 100}%`,
                        }}
                    />

                    {[1, 2, 3, 4].map((i) => {
                        const isCompleted = step > i;
                        const isActive = step === i;

                        return (
                            <div
                                key={i}
                                className={`relative z-10 flex flex-col items-center transition-all duration-300 ${isActive || isCompleted
                                    ? "text-[#33A259]"
                                    : "text-gray-400"
                                    }`}
                            >
                                {/* Circle */}
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300
                    ${isCompleted
                                            ? "bg-[#33A259] text-white"
                                            : isActive
                                                ? "bg-[#f5c242] text-black scale-110 shadow-md"
                                                : "bg-gray-200"
                                        }`}
                                >
                                    {isCompleted ? "✓" : i}
                                </div>

                                {/* Label */}
                                <span className="text-xs mt-2 font-medium">
                                    Step {i}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className="sm:px-8 px-4 pb-12">
                    {/* STEP 1 */}
                    {step === 1 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">1. What type of solar system do you require?</h2>
                            <select value={systemType} onChange={(e) => setSystemType(e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-2xl text-lg">
                                <option value="">Select system type...</option>
                                <option value="Hybrid">Hybrid (Grid + Battery backup)</option>
                                <option value="Off-grid">Off-grid (Fully independent)</option>
                                <option value="Grid-tied">Grid-tied (No battery)</option>
                            </select>
                            <button onClick={next} className="mt-8 bg-[#33A259] text-white px-10 py-4 rounded-2xl text-lg font-semibold cursor-pointer">Continue →</button>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">2. Power Audit</h2>
                            <div className="flex gap-4 mb-8">
                                <button onClick={() => { setDailyKwh(0); setPeakLoad(0); }} className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 rounded-2xl font-semibold">I have the numbers</button>
                                <button onClick={() => { setDailyKwh(0); setPeakLoad(0); }} className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 rounded-2xl font-semibold">Help me calculate</button>
                            </div>

                            {/* Manual entry */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-2">Peak Load (kW)</label>
                                    <input type="number" value={peakLoad} onChange={(e) => setPeakLoad(Number(e.target.value))} className="w-full p-4 border-2 border-gray-200 rounded-2xl" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Daily Energy (kWh/day)</label>
                                    <input type="number" value={dailyKwh} onChange={(e) => setDailyKwh(Number(e.target.value))} className="w-full p-4 border-2 border-gray-200 rounded-2xl" />
                                </div>
                            </div>

                            {/* Appliance table */}
                            <div className="mt-10">
                                <h3 className="font-semibold mb-4">Or add your appliances</h3>
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="p-4 text-left">Appliance</th>
                                            <th className="p-4 text-left">Power (W)</th>
                                            <th className="p-4 text-left">Qty</th>
                                            <th className="p-4 text-left">Hours/day</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appliances.map((app, i) => (
                                            <tr key={i} className="border-b">
                                                <td className="p-4"><input type="text" value={app.name} onChange={(e) => updateAppliance(i, 'name', e.target.value)} className="w-full" /></td>
                                                <td className="p-4"><input type="number" value={app.power} onChange={(e) => updateAppliance(i, 'power', Number(e.target.value))} className="w-full" /></td>
                                                <td className="p-4"><input type="number" value={app.qty} onChange={(e) => updateAppliance(i, 'qty', Number(e.target.value))} className="w-full" /></td>
                                                <td className="p-4"><input type="number" value={app.hours} onChange={(e) => updateAppliance(i, 'hours', Number(e.target.value))} className="w-full" /></td>
                                                <td className="p-4"><button onClick={() => removeAppliance(i)} className="text-red-500">Remove</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button onClick={addAppliance} className="mt-4 px-6 py-3 bg-gray-700 text-white rounded-2xl">+ Add Appliance</button>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button onClick={prev} className="flex-1 py-4 border-2 border-gray-300 rounded-2xl font-semibold cursor-pointer">← Back</button>
                                <button onClick={next} className="flex-1 py-4 bg-[#33A259] text-white rounded-2xl font-semibold cursor-pointer">Continue →</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-8">3. Advanced Design Preferences</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <label className="block font-medium mb-2">Days of autonomy</label>
                                    <select value={autonomy} onChange={(e) => setAutonomy(Number(e.target.value))} className="w-full p-4 border-2 border-gray-200 rounded-2xl">
                                        <option value={1}>1 day</option>
                                        <option value={2}>2 days</option>
                                        <option value={3}>3 days</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Battery Chemistry</label>
                                    <select value={bessType} onChange={(e) => setBessType(e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-2xl">
                                        <option value="LiFePO4">Lithium Iron Phosphate (LiFePO4)</option>
                                        <option value="Tubular">Tubular Lead-Acid</option>
                                        <option value="Lead-Acid">Standard Lead-Acid</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Required lifecycle</label>
                                    <select value={lifecycle} onChange={(e) => setLifecycle(Number(e.target.value))} className="w-full p-4 border-2 border-gray-200 rounded-2xl">
                                        <option value={3000}>Up to 3,000 cycles</option>
                                        <option value={5000}>Up to 5,000 cycles</option>
                                        <option value={6000}>Up to 6,000 cycles</option>
                                        <option value={8000}>Up to 7,000–8,000 cycles</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Space for panels (m²)</label>
                                    <input type="number" value={panelSpace} onChange={(e) => setPanelSpace(e.target.value)} placeholder="Leave blank if no limit" className="w-full p-4 border-2 border-gray-200 rounded-2xl" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">System voltage</label>
                                    <select value={voltageType} onChange={(e) => setVoltageType(e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-2xl">
                                        <option value="LV">Low Voltage (LV)</option>
                                        <option value="HV">High Voltage (HV)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Warranty required</label>
                                    <select value={warranty} onChange={(e) => setWarranty(Number(e.target.value))} className="w-full p-4 border-2 border-gray-200 rounded-2xl">
                                        <option value={2}>2 years</option>
                                        <option value={3}>3 years</option>
                                        <option value={5}>5 years</option>
                                        <option value={10}>10 years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <button onClick={prev} className="flex-1 py-4 border-2 border-gray-300 rounded-2xl font-semibold cursor-pointer">← Back</button>
                                <button onClick={next} className="flex-1 py-4 bg-[#33A259] text-white rounded-2xl font-semibold cursor-pointer">Generate Full Design →</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 4 */}
                    {step === 4 && (
                        <div>
                            <h2 className="text-3xl font-semibold mb-8">Your Complete Solar PV System Design</h2>

                            <div className="space-y-8">
                                {/* Overview */}
                                <div className="bg-white border border-gray-200 rounded-3xl sm:p-8 p-4">
                                    <h3 className="text-xl font-semibold mb-4">System Overview</h3>
                                    <p><strong>Type:</strong> {systemType || 'Hybrid'} • <strong>Daily Demand:</strong> {currentDailyKwh.toFixed(1)} kWh • <strong>Peak Load:</strong> {peakLoad.toFixed(1)} kW • <strong>Autonomy:</strong> {autonomy} days</p>
                                </div>

                                {/* Battery Sizing */}
                                <div className="bg-white border border-gray-200 rounded-3xl sm:p-8 p-4">
                                    <h3 className="text-xl font-semibold mb-4">Expanded Battery Sizing Formulas</h3>
                                    <div className="grid grid-cols-2 gap-6 text-sm">
                                        <div>1. Usable Energy = Daily kWh × Autonomy = <strong>{getBatteryParams().usableEnergy.toFixed(1)} kWh</strong></div>
                                        <div>2. Nominal Battery Capacity = Usable / (DoD × Efficiency) = <strong>{requiredBatteryKwh.toFixed(1)} kWh</strong></div>
                                        <div>3. Total Ah @ {getBatteryParams().systemVoltage}V = <strong>{getBatteryParams().totalAh.toFixed(0)} Ah</strong></div>
                                    </div>
                                </div>

                                {/* Inverter */}
                                <div className="bg-white border border-gray-200 rounded-3xl sm:p-8 p-4">
                                    <h3 className="text-xl font-semibold mb-4">Inverter Surge Factor</h3>
                                    <p className="text-2xl font-bold">{inverterKW} kW Pure Sine Wave Inverter</p>
                                    <p className="text-sm mt-2">Surge factor applied: <strong>{surgeFactor}×</strong> (Off-grid = 1.3× for motor startup, Hybrid = 1.25×)</p>
                                </div>

                                {/* Maintenance */}
                                <div className="bg-white border border-gray-200 rounded-3xl sm:p-8 p-4">
                                    <h3 className="text-xl font-semibold mb-4">Maintenance Cost Calculator</h3>
                                    <p><strong>Annual:</strong> ₦{annualMaintenance.toFixed(0)}</p>
                                    <p><strong>5-Year Total:</strong> ₦{fiveYearMaint.toFixed(0)}</p>
                                    <p><strong>10-Year Total:</strong> ₦{tenYearMaint.toFixed(0)}</p>
                                </div>

                                {/* Cost Estimation */}
                                <div className="bg-white border border-gray-200 rounded-3xl sm:p-8 p-4">
                                    <h3 className="text-xl font-semibold mb-4">Refined Cost Estimation (2026 Nigeria)</h3>
                                    <table className="w-full">
                                        <tbody className="text-sm">
                                            <tr className="border-b"><td className="py-3">PV Panels</td><td className="text-right">₦{panelCost.toLocaleString()}</td></tr>
                                            <tr className="border-b"><td className="py-3">Batteries</td><td className="text-right">₦{batteryCost.toLocaleString()}</td></tr>
                                            <tr className="border-b"><td className="py-3">Inverter</td><td className="text-right">₦{inverterCost.toLocaleString()}</td></tr>
                                            <tr className="border-b"><td className="py-3">Protection &amp; Cables</td><td className="text-right">₦{protectionCost.toLocaleString()}</td></tr>
                                            <tr className="border-b"><td className="py-3">Installation</td><td className="text-right">₦{installationCost.toLocaleString()}</td></tr>
                                            <tr className="bg-[#f5c242] text-black font-semibold "><td className="py-4 px-2">TOTAL</td><td className="text-right">₦{totalNGN.toLocaleString()} (${totalUSD})</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Caveat */}
                                <div className="bg-amber-100 border border-amber-300 rounded-3xl p-6 text-sm">
                                    <strong>Important Pricing Caveat:</strong> All prices shown are approximations based on current 2026 market rates in Nigeria and are for preliminary planning only. Actual costs are subject to change due to the specific situation at the installation site, the exact equipment required by the client, prevailing market prices at the time of procurement, and any site-specific adjustments.
                                </div>
                            </div>

                            <div className="flex gap-4 mt-10">
                                <button onClick={prev} className="flex-1 py-4 border-2 border-gray-300 rounded-3xl font-semibold cursor-pointer">← Back</button>
                                <button onClick={downloadExcel} className="flex-1 py-4 bg-[#f5c242] text-black rounded-3xl font-semibold cursor-pointer">Export to Excel</button>
                                <button onClick={downloadPDF} className="flex-1 py-4 bg-[#33A259] text-white rounded-3xl font-semibold cursor-pointer">Download PDF</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}









