import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import BlackLaptop from "@/assets/laptop-image.png";
export const HelpDesk = () => {
  return (
    <Box
      width={"100%"}
      bgcolor={"#d6d6d6"}
      zIndex={120}
      display={"flex"}
      position={"relative"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      sx={{
        "@media(max-width:768px)": {
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        width={"50%"}
        display={"flex"}
        marginBottom={"12%"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        padding={"70px 50px 100px 100px"}
        sx={{
          "@media(max-width:768px)": {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            padding: "70px 20px 0px 20px",
            marginBottom: "9%",
          },
        }}
      >
        <Typography
          paddingTop={"15%"}
          color="rgb(0,0,0)"
          fontWeight={"700"}
          fontSize={"52px"}
          lineHeight={"52px"}
          sx={{
            "@media(max-width:768px)": {
              fontSize: "35px",
            },
          }}
        >
          HELP DESK
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"400"}
          paddingTop={"4%"}
          color={"rgb(122,122,122)"}
          lineHeight={"30px"}
          sx={{
            "@media(max-width:768px)": {
              display: "flex",
              lineHeight: "25px",
              fontSize: "12px",
              paddingTop: "1%",
            },
          }}
        >
          Whether you contact our helpdesk by phone, email, customer portal or
          sms one of our highly trained techs will get back to you in no time
          and take care of your issue right away. We will track your issue in
          our advanced ticketing system and follow up with you until you are
          completely satisfied with the resolution to your problem.
        </Typography>
        <Typography
          fontWeight={"700"}
          fontSize={"35px"}
          paddingTop={"9%"}
          lineHeight={"35px"}
          color={"#3444af"}
          sx={{
            "@media(max-width:768px)": {
              paddingTop: "7%",
              fontSize: "35px",
            },
          }}
        >
          Managed Services
        </Typography>
        <Typography
          fontSize={"16px"}
          lineHeight={"30px"}
          paddingTop={"4%"}
          color={"rgb(122,122,122)"}
          fontWeight={"400"}
          sx={{
            "@media(max-width:768px)": {
              paddingTop: "3%",
              fontSize: "13px",
              lineHeight: "25px",
            },
          }}
        >
          Our Managed Services customers take full advantage of our helpdesk and
          make it their own. They get access to our customer portal where they
          can create and update tickets, track projects, review recommendations,
          run reports and much more.
        </Typography>
        <Button
          sx={{
            fontSize: "13px",
            display: "flex",
            alignSelf: "flex-start",
            padding: "12px",
            lineHeight: "1.4em",
            letterSpacing: "1px",
            marginTop: "5%",
            boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            bgcolor: "#ffffff !important",
            color: "#3444af",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media(max-width:768px)": {
              width: "100%",
              "&:hover": {
                transform: "scale(1)",
              },
            },
          }}
        >
          LEARN MORE
        </Button>
      </Box>
      <Box
        width={"50%"}
        paddingTop={"4%"}
        sx={{
          "@media(max-width:768px)": {
            width: "95%",
            // marginTop: "2px",
            marginLeft: "5%",
          },
        }}
      >
        <Image
          src={BlackLaptop}
          alt="Black Laptop Image"
          className="Laptop-image"
          style={{ width: "100%", height: "62%" }}
        />
      </Box>
    </Box>
  );
};
export default HelpDesk;
