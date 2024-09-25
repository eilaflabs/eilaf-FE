"use client"; // Ensures it's a Client Component

import React from "react";
import { Box, Typography } from "@mui/material";
import HomeMainImage from "../assets/HomePageMainImage.jpeg";
import OurServicesImage from "@/assets/OurServicesImage.jpeg";
import AboutImage from "@/assets/AboutMainImage.jpeg";
import ContactImage from "@/assets/ContactMainImage.jpeg";
import OutsourcingImage from "@/assets/ITOutsourcingMainImage.jpeg";
import WhyUsImage from "@/assets/WhyUsMainPage.jpeg";
import TestimonalsImage from "@/assets/TestimonialsMainImage.jpeg";
import BreakFiximage from "@/assets/BreakFixMainImage.jpeg";
import HelpDeskimage from "@/assets/HelpDeskMainImage.jpeg";
import { usePathname } from "next/navigation";
import cloudServicesimage from "@/assets/CloudServicesMainImage.png";
import managedSecurityimage from "@/assets/ManagedSecurityMainPage.jpeg";
import DisasterRecoveryImage from "@/assets/DisasterRecoveryMainImage.jpeg";
import { keyframes } from "@mui/system";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%); /* Start off-screen */
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
  100% {
    transform: translateX(0); /* End at original position */
    stroke-dashoffset: 0;
  }
`;
const visibilityToggle = keyframes`
  0%, 71% {
    opacity: 1; /* Visible for 5 seconds (71% of 7s) */
  }
  72%, 100% {
    opacity: 0; /* Hidden for the remaining time */
  }
`;

import FreeItAssessmentImage from "@/assets/FreeITAssessmentMainImage.jpeg";
const Homesection: React.FC = () => {
  const pathname = usePathname();

  const content = {
    "/": {
      image: HomeMainImage.src,
      text: "Because your technology should ",
      animatedText: "JUST WORK",
    },
    "/services": {
      image: OurServicesImage.src,
      text: "Our services",
    },
    "/about": {
      image: AboutImage.src,
      text: "About us",
    },
    "/contact": {
      image: ContactImage.src,
      text: "",
    },
    "/OutSourcing": {
      image: OutsourcingImage.src,
      text: "",
    },
    "/whyUs": {
      image: WhyUsImage.src,
      text: "",
    },
    "/testimonals": {
      image: TestimonalsImage.src,
      text: "",
    },
    "/breakFix": {
      image: BreakFiximage.src,
      text: "",
    },
    "/HelpDesk": {
      image: HelpDeskimage.src,
      text: "",
    },
    "/cloudServices": {
      image: cloudServicesimage.src,
      text: "",
    },
    "/managedSecurity": {
      image: managedSecurityimage.src,
      text: "",
    },
    "/disasterRecovery": {
      image: DisasterRecoveryImage.src,
      text: "",
    },
    "/freeItAssessment": {
      image: FreeItAssessmentImage.src,
      text: "Free IT Assessment",
    },
  };

  const currentContent =
    content[pathname as keyof typeof content] || content["/"];

  // const animatedText =
  //   (currentContent as { animatedText?: string }).animatedText ?? "";

  return (
    <Box width="100%" height="80vh" position={"relative"}>
      <Box
        width="100%"
        height="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "fixed",
          backgroundImage: `url(${currentContent.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          zIndex: "0",
        }}
      >
        {/* Overlay */}
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 200,
        }}
      >
        {/* Text and Animated Line */}
        <Box
          sx={{
            position: "relative",

            zIndex: 220,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            marginTop: "12%",

            "@media (max-width:1285px)": {
              flexDirection: "column",
            },
            "@media (max-width:1025px)": {
              flexDirection: "row",
            },
            "@media (max-width:900px)": {
              flexDirection: "column",
            },
            "@media (max-width:768px)": {
              flexDirection: "row",
            },
          }}
        >
          {/* Static Text */}
          <Typography
            component="span"
            sx={{
              fontSize: "55px",
              color: "#ffffff",
              fontWeight: "600",
              lineHeight: "72px",
              textAlign: "center",
              "@media (max-width:1320px)": {
                fontSize: "50px",
              },
              "@media (max-width:1025px)": {
                fontSize: "37px",
              },
              "@media (max-width:768px)": {
                fontSize: "21px",
              },
            }}
          >
            {currentContent.text}
          </Typography>
          {pathname === "/" && (
            <Box display={"flex"} flexDirection={"column"} width={"auto"}>
              <Typography
                component="span"
                sx={{
                  fontSize: "55px",
                  color: "#3444af",
                  fontWeight: "600",
                  textAlign: "center",
                  "@media (max-width:1320px)": {
                    fontSize: "50px",
                  },
                  "@media (max-width:1025px)": {
                    fontSize: "37px",
                  },
                  "@media (max-width:768px)": {
                    fontSize: "21px",
                  },
                }}
              >
                {content["/"]?.animatedText}
              </Typography>

              {/* Animated SVG Line under c"WORK" */}
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                sx={{
                  width: "100%", // Adjust as needed
                  height: "50px",
                  marginTop: "-50px",
                  animation: `${visibilityToggle} 7s infinite`, // Visibility loop every 7 seconds (5s show, 2s hide)
                  "& path": {
                    transition: "0.9s ",
                    stroke: "#ffffff", // Ensure the stroke color is set
                    strokeWidth: "13",
                    fill: "none",
                    strokeDasharray: 500, // Length of the path
                    strokeDashoffset: 500, // Offset to start animation
                    animation: `${slideIn} 2s ease-in-out forwards`, // Slide in from left and draw SVG
                  },
                }}
              >
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Homesection;
