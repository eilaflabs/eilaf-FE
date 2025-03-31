"use client";
import Logo from "@/assets/pakitsystem-main-Logo.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const serviceData = [
  { ServiceName: "IT Outsourcing" },
  { ServiceName: "Break / Fix" },
  { ServiceName: "Help Disk" },
  { ServiceName: "Cloud Services" },
  { ServiceName: "Managed Security" },
  { ServiceName: "Disaster Recovery" },
  { ServiceName: "Free IT Assessment" },
];
const aboutData = [
  { aboutName: "About", Link: "/about" },
  { aboutName: "Why Us", Link: "/whyUs" },
  { aboutName: "Testimonials", Link: "/testimonials" },
];

export const Footer = () => {
  return (
    <Box
      position={"relative"}
      zIndex={"100"}
      bgcolor={"#000000"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      fontSize={"15px"}
      fontFamily={"sans-serif"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"71%"}
          bgcolor={"black"}
          alignItems={"center"}
          padding={"50px 0"}
          sx={{
            "@media (max-width:1024px)": {
              width: "80%",
              padding: "50 0",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            },
          }}
        >
          <Box
            display={"flex"}
            width={"201px"}
            height={"0"}
            padding={"10px"}
            fontSize={"15px"}
            fontFamily={"sans-serif"}
          >
            <Link href={"/"}>
              {" "}
              <Image
                src={Logo}
                alt="webLogo"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </Box>
          <Box padding={"10px"}>
            <Typography
              fontSize={"23px"}
              fontWeight={"600"}
              fontFamily={"sans-serif"}
              //   padding={"15px"}
              fontStyle={"italic"}
              sx={{
                "@media (max-width:620px)": {
                  fontSize: "18px",
                },
              }}
            >
              Because your technology should just work
            </Typography>
          </Box>
        </Box>

        <Box
          // bgcolor={"red"}
          display={"flex"}
          justifyContent={"flex-start"}
          width={"71%"}
          gap={"20px"}
          padding={"25px 0 70px 0"}
          sx={{
            "@media (max-width:1024px)": {
              width: "80%",
              gap: "20",
              flexWrap: "wrap",
            },
            "@media (max-width:768px)": {
              width: "90%",
              gap: "20",
              flexWrap: "wrap",
            },
            "@media (max-width:500px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            width={"275px"}
            // bgcolor={"green"}
            sx={{
              "@media (max-width:1024px)": {
                width: "auto",
              },
              "@media (max-width:768px)": {
                width: "200px",
              },
            }}
          >
            <Typography
              paddingLeft={"5px"}
              fontSize={"18px"}
              color="#ffffff"
              fontWeight={"500"}
            >
              Our Services
            </Typography>
            {serviceData.map((serviceData, index) => (
              <Box
                key={index}
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    "& .icon-svg": {
                      fill: "#3444af",
                    },
                  },
                }}
              >
                <ChevronRightIcon
                  className="icon-svg"
                  sx={{
                    height: "18px",
                    width: "18px",
                    color: "#ffffff99",
                    transition: "color 0.3s ease, ",
                    "&:hover": {
                      color: "#3444af",
                    },
                  }}
                />
                <Typography
                  color="#ffffff99"
                  fontSize={"13px"}
                  fontWeight={"300"}
                  sx={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#3444af",
                    },
                  }}
                >
                  {serviceData.ServiceName}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            width={"275px"}
            // bgcolor={"green"}
            sx={{
              "@media (max-width:1024px)": {
                width: "auto",
              },
              "@media (max-width:768px)": {
                width: "200px",
              },
            }}
          >
            <Typography
              paddingLeft={"5px"}
              fontSize={"18px"}
              color="#ffffff"
              fontWeight={"500"}
            >
              About
            </Typography>
            {aboutData.map((aboutData, index) => (
              <Box
                key={index}
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                sx={{
                  cursor: "pointer",

                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    "& .icon-svg": {
                      fill: "#3444af",
                    },
                  },
                }}
              >
                <ChevronRightIcon
                  className="icon-svg"
                  sx={{
                    height: "18px",
                    width: "18px",
                    color: "#ffffff99",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      fill: "#3444af",
                    },
                  }}
                />
                <Typography
                  color="#ffffff99"
                  fontSize={"13px"}
                  fontWeight={"300"}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "#3444af",
                    },
                  }}
                >
                  {aboutData.aboutName}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            width={"275px"}
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
            sx={{
              "@media (max-width:1024px)": {
                width: "auto",
              },
              "@media (max-width:500px)": {
                justifyContent: "flex-start",
              },
            }}
          >
            <Link href={"/contact"}>
              <Button
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "uppercase",

                  color: "#ffffff",
                  backgroundColor: "#3444af",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px 30px 10px 30px",
                  transition: "all .2s linear",
                  whiteSpace: "pre",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  "@media (max-width:420px)": {
                    fontSize: "12px",
                    padding: "12px 28px",
                  },
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/*  privacy sec */}
      <Box
        width={"100%"}
        height={"59px"}
        bgcolor={"#3a3a3a"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          "@media (max-width:786px)": {
            height: "auto",
            padding: "10px 0",
          },
        }}
      >
        <Box
          width={"71%"}
          height={"59px"}
          bgcolor={"#3a3a3a"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            "@media (max-width:1024px)": {
              width: "80%",
            },
            "@media (max-width:786px)": {
              width: "90%",
              flexWrap: "wrap",
              gap: "20px",
              height: "auto",
            },
          }}
        >
          <Box>
            <Typography
              fontSize={"14px"}
              color="#ffffff5e"
              fontWeight={"300"}
              fontStyle={"normal"}
            >
              Eilaf Labs © 2024 All Rights Reserved{" "}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
            sx={{
              ".icon": {
                "&:hover": {
                  fill: "white",
                },
              },
            }}
          >
            <FaFacebookF
              className="icon"
              style={{ color: "#ffffff63", cursor: "pointer" }}
            />
            <FaTwitter
              className="icon"
              style={{ color: "#ffffff63", cursor: "pointer" }}
            />
          </Box>
          <Box height={"auto"}>
            <Link href="/PrivacyPolicy">
              <Button
                className="hoverrPolicy"
                sx={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  bgcolor: "#61ce7000",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "#3444af",
                  padding: "7px",
                  color: "#ffffff",
                  fontStyle: "italic",
                  "&:hover": {
                    backgroundColor: "#3444af",
                    color: "white",
                  },
                }}
              >
                Privacy policy
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
