import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import BlackLaptop from "@/assets/laptop-image.png";

const BreakFixDropD = () => {
  return (
    <Box
      zIndex={"100"}
      bgcolor={"#ffffff"}
      position={"relative"}
      width={"100%"}
      height={"auto"}
      color={"black"}
      display={"flex"}
      marginTop={"-2px"}
    >
      <Box
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"#d6d6d6"}
        justifyContent={"center"}
        gap={"20px"}
        alignItems={"flex-start"}
        sx={{
          "@media (max-width:1150px)": {
            padding: "0px  0 0 2.5%",
            // alignItems: "center",
            justifyContent: "center",
          },
          "@media (max-width:768px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          color="#000000"
          fontSize={"52px"}
          lineHeight={"70px"}
          paddingTop={"5%"}
          paddingLeft={"15%"}
          fontWeight={"bold"}
          sx={{
            "@media (max-width:768px)": {
              fontSize: "40px",
            },
          }}
        >
          Break / Fix
        </Typography>
        <Box>
          <Typography
            color={"rgb(122,122,122)"}
            fontSize={"16px"}
            lineHeight={"30px"}
            width={"91%"}
            paddingLeft={"15%"}
            fontWeight={"400"}
          >
            If for some reason you don’t want to take advantage of our Managed
            Services offering, we will be glad to help you on a Break/Fix
            arrangement. In a Break/Fix arrangement, you just contact us any
            time you need help with an IT issue or project and we will get right
            on it. Our Break/Fix clients get our best in class support and
            response times with a competitive hourly rate.
          </Typography>
        </Box>
      </Box>
      <Box
        width={"50%"}
        height={"auto"}
        bgcolor={"#d6d6d6"}
        sx={{
          "@media (max-width:950px)": {
            height: "400px",
            width: "50%",
          },

          "@media (max-width:768px)": {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          },
          "@media (max-width:400px)": {
            width: "100%",
            height: "330px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            paddingTop: "8%",
            paddingBottom: "6%",
            "@media (max-width:768px)": {
              width: "384px",
            },
            "@media (max-width:400px)": {
              width: "100%",
              height: "300px",
            },
          }}
        >
          <Image
            src={BlackLaptop}
            alt="Black Laptop Image"
            className="Laptop-image"
            style={{ width: "100%", height: "90%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BreakFixDropD;
