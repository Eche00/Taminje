'use client'

import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Button, Stack, Paper } from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupsIcon from "@mui/icons-material/Groups";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

function MissionAndVision() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 } }} component="section">
            <Container maxWidth="lg">

                {/* TOP SECTION */}
                <Box
                    display="flex"
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                    alignItems="center"
                    gap={6}
                >
                    {/* IMAGE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            component="img"
                            src="/industrial-processing1.png"
                            alt="Industrial operations and infrastructure"
                            sx={{ width: "100%", borderRadius: 3 }}
                        />
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Typography
                            variant="overline"
                            sx={{ letterSpacing: 1 }}
                            color="#33A259"
                        >
                            Mission & Vision
                        </Typography>

                        <Typography variant="h4" fontWeight={600} gutterBottom>
                            Driven by Purpose. Guided by Experience.
                        </Typography>

                        <Typography color="text.secondary" sx={{ mb: 3 }}>
                            At Taminje International Limited, our mission and vision
                            define how we work today and where we are headed tomorrow.
                            Though registered in February 2026, our foundation is built
                            on decades of leadership experience across public and private sectors.
                        </Typography>

                        <button className="border-2 border-[#33A259] text-[#33A259] rounded-[10px] py-2 px-4 font-medium hover:bg-[#33A259]/10 transition cursor-pointer">
                            Work With Us
                        </button>
                    </motion.div>
                </Box>

                {/* MISSION / VISION LIST */}
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={{ xs: 6, md: 10 }}
                    mt={{ xs: 6, md: 10 }}
                >
                    {/* LEFT STACK */}
                    <Stack spacing={3} flex={1}>
                        {/* MISSION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper elevation={0} sx={{ p: 3, display: "flex", gap: 2 }}>
                                <TrackChangesIcon color="success" />
                                <Box>
                                    <Typography fontWeight={600}>
                                        Our Mission
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        To deliver reliable, quality-driven design and fabrication,
                                        manufacturing, vegetable oil processing, consultancy, and
                                        contracting services through disciplined execution,
                                        professional planning, and accountable delivery.
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.div>

                        {/* VISION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Paper elevation={0} sx={{ p: 3, display: "flex", gap: 2 }}>
                                <VisibilityIcon color="info" />
                                <Box>
                                    <Typography fontWeight={600}>
                                        Our Vision
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        To be a trusted and results-driven partner known for
                                        operational excellence, safety, integrity, and long-term
                                        value creation across industrial and commercial sectors.
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.div>

                        {/* PEOPLE / CULTURE */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Paper elevation={0} sx={{ p: 3, display: "flex", gap: 2 }}>
                                <GroupsIcon color="warning" />
                                <Box>
                                    <Typography fontWeight={600}>
                                        Leadership & Culture
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our leadership team brings over 33 years and 12+ years
                                        of experience respectively, fostering a culture of
                                        professionalism, safety, continuous improvement,
                                        and clear accountability.
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Stack>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            component="img"
                            src="/industrial-processing.png"
                            alt="Manufacturing and processing systems"
                            sx={{ width: "100%", borderRadius: 3 }}
                        />
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}

export default MissionAndVision;
