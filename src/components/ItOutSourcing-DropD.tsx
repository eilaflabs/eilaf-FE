import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import ItImage from "@/assets/It-outsourcing-image.jpeg";

const ItOutSourcingDropD = () => {
  return (
    <Box
      width={"100%"}
      zIndex={"100"}
      bgcolor={"#ffffff"}
      position={"relative"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"flex-start"}
        sx={{
          "@media (max-width:768px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box width={"50%"} paddingTop={"17%"} marginLeft={"0px"}>
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
          width={"40%"}
          display={"flex"}
          justifyContent={"center"}
          paddingBottom={"6%"}
          flexDirection={"column"}
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
            lineHeight={"73px"}
            paddingTop={"17%"}
            fontWeight={"bold"}
            whiteSpace={"pre"}
            sx={{
              "@media (max-width:1000px)": {
                fontSize: "40px",
              },
              "@media (max-width:450px)": {
                fontSize: "34px",
              },
            }}
          >
            IT Outsourcing
          </Typography>
          <Typography
            color="rgb(122,122,122)"
            paddingTop={"2%"}
            fontSize={"15px"}
            lineHeight={"28px"}
            fontWeight={"400"}
          >
            Every business needs IT support, but not every business can afford
            to have a full time IT department in house. The solution to this
            problem is IT Outsourcing. With IT Outsourcing you get the same
            results of having a full time IT department in house for a fraction
            of the cost. Let us care for your technology so you can focus on
            running your business.
          </Typography>
          <Typography
            color="rgb(122,122,122)"
            fontSize={"15px"}
            lineHeight={"28px"}
            paddingTop={"29px"}
            fontWeight={"400"}
          >
            When you outsource your IT department to Eilaf Labs, you will get
            World-Class IT support along with our managed services all for a low
            monthly flat rate. In essence, you will have your own IT department
            at your disposal which you can use at any time and as much as
            needed.
          </Typography>
          <Typography
            color="rgb(122,122,122)"
            fontSize={"15px"}
            marginTop={"25px"}
            lineHeight={"28px"}
            fontWeight={"400"}
          >
            Outsource your IT to us and enjoy the benefits of having a full IT
            department at your disposal without having to pay for one.
          </Typography>
          <Box width={"70%"}>
            <Typography
              fontSize={"27px"}
              fontWeight={"700"}
              lineHeight={"27px"}
              paddingTop={"5%"}
              color="rgb(0,0,0)"
            >
              Find out more about how your business will benefit by moving from
              a reactive to a proactive approach to IT
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
              marginTop: "3%",
            }}
          >
            LEARN WORK
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ItOutSourcingDropD;
