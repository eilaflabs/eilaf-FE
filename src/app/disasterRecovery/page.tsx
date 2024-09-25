import Header from "@/components/common/Header";
import ClientLayout from "./ClientLayout";
import Miniheader from "@/components/mini.header";
import Homesection from "@/components/Home-section";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import SLiderImages from "@/components/imagesSlider";
import Footer from "@/components/common/Footer";
import DisasterRecovery from "@/components/DisasterRecovery";
import { Box } from "@mui/material";
export default function Contact() {
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
        <DisasterRecovery />

        <FreeItAssessment />
        <Companyimages />
        <SLiderImages />
        <Footer />
      </Box>
    </ClientLayout>
  );
}
