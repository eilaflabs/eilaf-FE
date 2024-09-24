"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import ITOutsourcingBreakFix from "@/components/ITOutsourcing_BreakFix";
import OurServices from "@/components/Our.Services";
import OurClientsSays from "@/components/OurClients.Says";
import Footer from "@/components/common/Footer";
import Breakfix from "@/components/Break_fix";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import SLiderImages from "@/components/imagesSlider";
import ClientLayout from "./ClientLayout";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <ClientLayout>
      <Box
        sx={{
          position: "relative",
          overflow: "auto",
          height: "100vh",
        }}
      >
        <Miniheader />
        <Box
          sx={{
            width: "100%",
            position: "sticky",
            top: "0px",
            zIndex: 1100,
          }}
        >
          <Header />
        </Box>
        <Homesection />
        <ITOutsourcingBreakFix />
        <Breakfix />
        <FreeItAssessment />
        <OurServices />
        <OurClientsSays />
        <Companyimages />
        <SLiderImages />
        <Footer />
      </Box>
    </ClientLayout>
  );
}
