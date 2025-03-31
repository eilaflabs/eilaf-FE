"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

export const FreeItAsssessmentReport = () => {
  const assessmentItems = [
    "ACTIVE DIRECTORY ANALYSIS",
    "NETWORK AND ENDPOINT SECURITY",
    "NETWORK INFRASTRUCTURE",
    "NETWORK SERVICES",
    "ASSET SUMMARY",
  ];

  return (
    <>
      <Box
        width={"100%"}
        zIndex={190}
        position={"relative"}
        bgcolor={"#3444AF"}
      >
        <Box
          width={"100%"}
          height={"170px"}
          zIndex={190}
          position={"relative"}
          sx={{
            backgroundColor: "transparent",
            backgroundImage: "linear-gradient(5deg, #3444AF 45%, #ffffff 46%)",
            "@media(max-width:1440px)": {
              bgcolor: "#3444AF",
            },
            "@media(max-width:1070px)": {
              bgcolor: "#3444AF",
            },
          }}
        ></Box>

        <Box
          width={"95%"}
          display={"flex"}
          justifyContent={"center"}
          paddingLeft={"7%"}
          paddingTop={"2%"}
          sx={{
            flexWrap: "wrap",
            "@media(max-width:768px)": {
              paddingLeft: "0",
              justifyContent: "center",
            },
          }}
        >
          <Box
            width={{ xs: "100%", md: "50%" }}
            paddingBottom={{ xs: "20px", md: "0" }}
          >
            <Typography
              color="#fff"
              fontWeight={600}
              fontSize={{ xs: "24px", md: "33px" }}
              lineHeight={{ xs: "28px", md: "33px" }}
            >
              Our free IT assessment report will include:
            </Typography>
            <Box>
              {assessmentItems.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  paddingTop={"7px"}
                >
                  <FaAngleRight style={{ fontSize: "40px" }} />
                  <Typography
                    fontWeight={900}
                    fontSize={{ xs: "20px", md: "30px" }}
                    lineHeight={{ xs: "30px", md: "46px" }}
                    paddingLeft={"4%"}
                    color={"black"}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            width={{ xs: "80%", md: "45%" }}
            paddingLeft={{ md: "75px", xs: "0" }} // Remove padding on mobile
            paddingTop={{ xs: "20px", md: "0" }} // Adjust top padding on mobile
            display="flex"
            justifyContent="center"
          ></Box>
        </Box>
      </Box>

      <Box
        width={"100%"}
        height={"170px"}
        zIndex={190}
        bgcolor={"red"}
        position={"relative"}
        sx={{
          backgroundColor: "transparent",
          backgroundImage: " linear-gradient(176deg, #3444AF 45%, #ffffff 46%)",
          "@media(max-width:1440px)": {
            bgcolor: "#3444AF",
          },
          "@media(max-width:1070px)": {
            bgcolor: "#3444AF",
          },
        }}
      ></Box>
    </>
  );
};

export default FreeItAsssessmentReport;
