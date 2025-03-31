"use client";
import BreakFix from "@/components/Break_fix";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CompanyImages from "@/components/Company-images";
import FreeItAssessment from "@/components/FreeItAssessment";
import HomeSection from "@/components/Home-section";
import SLiderImages from "@/components/imagesSlider";
import ITOutsourcingBreakFix from "@/components/ITOutsourcing_BreakFix";
import OurServices from "@/components/Our.Services";
import OurClientsSays from "@/components/OurClients.Says";
import { Box } from "@mui/material";
import ClientLayout from "./ClientLayout";
import React from "react";

export default function Home() {
  return (
    <ClientLayout>
      <Box sx={{ position: "absolute", zIndex: 200, width: "100%" }}>
        <Header />
      </Box>
      <Box sx={{ position: "relative", zIndex: 0 }}>
        <HomeSection />
      </Box>
      <Box sx={{ position: "relative" }}>
        <ITOutsourcingBreakFix />
        <BreakFix />
        <FreeItAssessment />
        <OurServices />
        <OurClientsSays />
        <CompanyImages />
        <SLiderImages />
        <Footer />
      </Box>
    </ClientLayout>
  );
}
