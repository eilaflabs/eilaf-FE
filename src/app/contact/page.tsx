import Header from "@/components/common/Header";
import ClientLayout from "./ClientLayout";
import Miniheader from "@/components/mini.header";
import Homesection from "@/components/Home-section";
import ContactUsform from "@/components/ContactUs.form";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import SLiderImages from "@/components/imagesSlider";
import Footer from "@/components/common/Footer";
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
        <ContactUsform />
        <FreeItAssessment />
        <Companyimages />
        <SLiderImages />
        <Footer />
      </Box>
    </ClientLayout>
  );
}
