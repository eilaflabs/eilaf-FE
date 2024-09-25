import Header from "@/components/common/Header";
import ClientLayout from "./ClientLayout";
import Miniheader from "@/components/mini.header";
import Homesection from "@/components/Home-section";
import Outsourcingservices from "@/components/outsourcing.services";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import SLiderImages from "@/components/imagesSlider";
import Footer from "@/components/common/Footer";
import ItOutSourcingDropD from "@/components/ItOutSourcing-DropD";
import { Box } from "@mui/material";

export default function OutSourcing() {
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
        <ItOutSourcingDropD />
        <Outsourcingservices />
        <FreeItAssessment />
        <Companyimages />
        <SLiderImages />
        <Footer />
      </Box>
    </ClientLayout>
  );
}
