import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import BlackLaptop from "@/assets/laptop-image.png";

const Break_fix = () => {
  return (
    <Box
      zIndex={"100"}
      bgcolor={"#ffffff"}
      position={"relative"}
      width={"100%"}
      height={"auto"}
      color={"black"}
      padding={"170px 0 150px 0"}
      display={"flex"}
      marginTop={"-2px"}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(7deg, #d6d6d6 76%, #ffffff 76%)",

        "@media (max-width:768px)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "-22%",
          paddingTop: "0px",
          backgroundImage: "linear-gradient(7deg, #ffffff 76%, #ffffff 76%)",
        },
      }}
    >
      <Box
        width={"50%"}
        padding={"100px 0px 100px 100px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        alignItems={"flex-start"}
        sx={{
          "@media (max-width:768px)": {
            width: "90%",
          },
        }}
      >
        <Typography
          color="#000000"
          fontSize={"52px"}
          lineHeight={"70px"}
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
            color="#7a7a7a"
            fontSize={"16px"}
            lineHeight={"1.2em"}
            fontWeight={"700"}
            sx={{
              "@media(max-width:768px)": {
                fontSize: "13px",
              },
            }}
          >
            Not ready to fully outsource your IT?
          </Typography>
          <Typography
            color="#7a7a7a"
            fontSize={"16px"}
            lineHeight={"1.2em"}
            fontWeight={"400"}
            sx={{
              "@media(max-width:768px)": {
                fontSize: "13px",
              },
            }}
          >
            No Problem! We can help as needed on issues and projects on a
            Break/Fix arrangement.
          </Typography>
        </Box>

        <Button
          sx={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "1.4em",
            letterSpacing: "1px",
            boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
            padding: "15px",
            bgcolor: "#3644af !important",
            color: "#ffffff",
            transition: "transform 0.3s ease",

            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media(max-width:768px)": {
              alignSelf: "center",
              marginRight: "15%",
            },
          }}
        >
          LEARN WORK
        </Button>
      </Box>
      <Box
        width={"50%"}
        height={"auto"}
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
            paddingTop: "9%",
            display: "block",
            "@media (max-width:768px)": {
              paddingTop: "2%",
              width: "90%",
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

export default Break_fix;
