"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";

const FreeItAssessment = () => {
  return (
    <Box
      zIndex={"100"}
      bgcolor={"#ffffff"}
      position={"relative"}
      width={"100%"}
      display={"flex"}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(80deg, #3658af 0%, #3644af 100%)",
        "@media (max-width:768px)": {
          flexDirection: "column",
          padding: "10% 2.5%",
        },
      }}
    >
      <Box
        width={"50%"}
        height={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"0 2.5%"}
        sx={{
          "@media (max-width:768px)": {
            display: "none",
          },
        }}
      ></Box>
      <Box
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"20px"}
        padding={"0 20px 20px 0 "}
        sx={{
          "@media(max-width:768px)": {
            width: "80%",
            padding: "0 2.5%",
          },
          "@media(max-width:490px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          sx={{
            variant: "h1",
            fontSize: "65px",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: "1.4em",
            // marginBottom={"20px"}
            "@media(max-width:1390px)": {
              fontSize: "50px",
            },
            "@media(max-width:1150px)": {
              fontSize: "44px",
            },
            "@media(max-width:935px)": {
              fontSize: "38px",
            },
            "@media(max-width:815px)": {
              fontSize: "34px",
            },
            "@media(max-width:400px)": {
              fontSize: "30px",
            },
          }}
        >
          Free IT Assessment
        </Typography>
        <Typography
          variant="h2"
          fontSize={"16px"}
          fontWeight={"400"}
          color="#ffffff"
          lineHeight={"1.3em"}
        >
          Click on the button below to request your FREE no-commitment IT
          assessment.
        </Typography>
        <Button
          sx={{
            fontSize: "13px",
            fontWeight: "500",
            lineHeight: "1.4em",
            letterSpacing: "1px",
            boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            padding: "15px",
            bgcolor: "#ffffff !important",
            color: "#3644af",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          REQUEST NOW
        </Button>
      </Box>
    </Box>
  );
};

export default FreeItAssessment;
