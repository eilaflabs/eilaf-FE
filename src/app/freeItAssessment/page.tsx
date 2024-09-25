"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import Footer from "@/components/common/Footer";
import Companyimages from "@/components/Company-images";
import SLiderImages from "@/components/imagesSlider";
import ClientLayout from "./ClientLayout";
import FreeItAssessmentDropD from "@/components/FreeItAssessmentDropD";
import FreeItAsssessmentReport from "@/components/FreeItAsssessmentReport";
import RequiredFields from "@/components/RequiredFields";
import { Box } from "@mui/material";
export default function freeItAssessment() {
  return (
    <ClientLayout>
      <Box sx={{ position: "absolute", zIndex: 200, width: "100%" }}>
        <Miniheader />
        <Header />
      </Box>
      <Box sx={{ position: "relative", zIndex: 0 }}>
        <Homesection />
      </Box>
      <Box sx={{ position: "relative" }}>
        <FreeItAssessmentDropD />
        <FreeItAsssessmentReport />
        <RequiredFields />
        <Companyimages />
        <SLiderImages />
        <Footer />
      </Box>
    </ClientLayout>
  );
}
