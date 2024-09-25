"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import Footer from "@/components/common/Footer";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import SLiderImages from "@/components/imagesSlider";
import ClientLayout from "./ClientLayout";
import Managedsecurity from "@/components/ManagedSecurity";
import { Box } from "@mui/material";

export default function managedSecurity() {
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
        <Managedsecurity />

        <FreeItAssessment />
        <Companyimages />
        <SLiderImages />
        <Footer />
      </Box>
    </ClientLayout>
  );
}
