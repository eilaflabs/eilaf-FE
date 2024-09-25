import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import ItImage from "@/assets/It-outsourcing-image.jpeg";

const ITOutsourcingBreakFix = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      zIndex={"100"}
      bgcolor={"#ffffff"}
      position={"relative"}
      padding={"50px 0"}
      // marginBottom={"-30px"}
      sx={{
        "@media(max-width:768px)": {
          width: "100%",
          marginBottom: "-10%",
        },
      }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          "@media (max-width:768px)": {
            flexDirection: "column",
            display: "flex",
            // justifyContent: "center",
            alignContent: "center",
          },
        }}
      >
        <Box
          width={"100%"}
          padding={"0 2.5% 0 2.5%"}
          sx={{
            "@media (max-width:768px)": {
              display: "flex",
              width: "100%",
              alignSelf: "center",
              // marginBottom: "10%",
            },
          }}
        >
          <Image
            src={ItImage}
            alt="It outsourcing image"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          width={"100%"}
          padding={"0 10% 0 0"}
          display={"flex"}
          flexDirection={"column"}
          //   justifyContent={"flex-start"}
          gap={"20px"}
          alignItems={"flex-start"}
          sx={{
            "@media (max-width:786px)": {
              padding: "0 2.5%",
            },
          }}
        >
          <Typography
            color="#000000"
            fontSize={"52px"}
            lineHeight={"70px"}
            fontWeight={"bold"}
            whiteSpace={"pre"}
            sx={{
              "@media (max-width:768px)": {
                flexDirection: "column",
                width: "70%",
                display: "flex",
                alignSelf: "center",
              },
              "@media (max-width:380px)": {
                flexDirection: "column",
                width: "90%",
                display: "flex",
                alignSelf: "center",
              },
              "@media (max-width:450px)": {
                fontSize: "30px",
              },
            }}
          >
            IT Outsourcing
          </Typography>
          <Typography
            color="#7a7a7a"
            fontSize={"16px"}
            lineHeight={"1.2em"}
            fontWeight={"400"}
            sx={{
              "@media (max-width:768px)": {
                flexDirection: "column",
                width: "90%",
                alignSelf: "center",
              },
            }}
          >
            Let out IT worry about your technology so you can focus on growing
            your buisness. We will take care of all your IT needs for a low flat
            monthly fee. You will finally be able to budget your IT expenses and
            have peace of mind with our world class service.
          </Typography>
          <Button
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "1.4em",
              letterSpacing: "1px",
              boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
              padding: "15px",
              bgcolor: "#3644af !important",
              transition: "transform 0.3s ease",

              color: "#ffffff",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "@media (max-width:1024px)": {
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
              },
              "@media (max-width:768px)": {
                display: "flex",
                alignSelf: "center",
                marginBottom: "10%",
              },
              "@media(max-width:770px)": {},
              "@media(max-width:550px)": {
                marginBottom: "7% ",
              },
            }}
          >
            LEARN WORK
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ITOutsourcingBreakFix;
