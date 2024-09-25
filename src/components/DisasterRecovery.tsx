import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import DisasterImage from "@/assets/disasterRecoveryCloud.png";

export const DisasterRecovery = () => {
  return (
    <Box
      position={"relative"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      padding={"100px"}
      bgcolor={"white"}
      sx={{
        "@media(max-width:768px)": {
          paddingTop: "30px",
          paddingBottom: "33px",
        },
      }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent="space-between"
        sx={{
          "@media(max-width:768px)": {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"48px"}
          sx={{
            "@media(max-width:768px)": {
              width: "100%",
              gap: "45px",
            },
          }}
        >
          <Box>
            <Typography
              color="#000000"
              fontSize={"52px"}
              fontWeight={"bold"}
              padding={"17px 0px 7px 11px"}
              sx={{
                "@media(max-width:768px)": {
                  fontSize: "32px",
                  paddingBottom: "12px",
                  paddingTop: "0px",
                },
                "@media(,max-width:1200px)": {
                  fontSize: "30px",
                },
              }}
            >
              Disaster Recovery
            </Typography>

            {/* Section Heading */}
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                color: "#7A7A7A",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "30px",
                padding: "0px 0px 0px 12px",
                "@media(max-width:768px)": {
                  fontSize: "12px",
                  lineHeight: "23px",
                },
              }}
            >
              If something happened and your valuable business data was lost,
              what would you do? Would you be able to recover or would you go
              out of business? How fast would you be able to recover? Making
              sure you have a well designed disaster recovery plan in place is
              the single most important thing any business owner should do. Yet,
              many business owners don’t even think about it until the worse
              happens.
            </Typography>

            <Typography
              color="#7A7A7A"
              fontSize={"16px"}
              fontWeight={"700"}
              lineHeight={"30px"}
              padding={"25px 0px 0px 10px"}
              sx={{
                "@media(max-width:768px)": {
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "16px",
                  fontSize: "13px",
                },
              }}
            >
              DON&apos;T LET THE WORST HAPPEN TO YOUR BUSINESS
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            alignItems={"flex-start"}
          >
            <Typography
              width={"80%"}
              fontSize={"30px"}
              color="#3444af"
              lineHeight={"30px"}
              paddingLeft={"8px"}
              fontWeight={"800"}
              sx={{
                "@media(max-width:768px)": {
                  fontSize: "18px",
                  width: "100%",
                  padding: "0px",
                },
              }}
            >
              Contact us today to learn more about how your business can benefit
              from our Disaster Recovery services
            </Typography>
            <Button
              sx={{
                padding: "15px",
                fontSize: "13px",
                letterSpacing: "1px",
                fontWeight: "400",
                color: "#000000",
                backgroundColor: "#ffffff",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.5)",
              }}
            >
              CLICK HERE
            </Button>
          </Box>
        </Box>
        <Box
          width={"50%"}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            "@media(max-width:768px)": {
              width: "100%",
              paddingTop: "5%",
            },
          }}
        >
          <Image
            src={DisasterImage}
            alt="DisasterRecoveryImage"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DisasterRecovery;
