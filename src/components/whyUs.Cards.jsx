"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const dataText = [
  {
    title: "WE BELIEVE IN DOING OUR BEST",
    description:
      "We believe that technology, when managed properly, is an asset, not an expense. We partner with our clients and help them leverage technology to give them a competitive advantage. Technology when properly chosen, implemented and managed is an invaluable tool that can drive business success.",
  },
  {
    title: "WE BELIEVE IN BUSINESS SUCCESS",
    description:
      "We believe that technology, when managed properly, is an asset, not an expense. We partner with our clients and help them leverage technology to give them a competitive advantage. Technology when properly chosen, implemented and managed is an invaluable tool that can drive business success.",
  },
  {
    title: "WE BELIEVE IN BETTER RESULTS",
    description:
      "We believe that better results are achieved when you can focus on your primary goals. The goal of business owners and managers is to run their business not their IT. This is why we partner with our clients and take over all IT related responsibilities. You focus on running your business; We focus on IT. ",
  },
  {
    title: "WE BELIEVE IN HAPPY CLIENTS",
    description:
      "We believe that we are the best managed services provider in the DC metro area. We take pride in what we do and if for some reason you are not 100% satisfied, we will make it right or give you your money back. It’s that simple.",
  },
];

const whyUsCards = () => {
  return (
    <Box
      width={"100%"}
      position={"relative"}
      zIndex={"130"}
      bgcolor={"#fff"}
      padding={"60px 0"}
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
          flexDirection={"column"}
          alignItems={"center"}
          gap={"0px"}
        >
          <Typography
            component={"h2"}
            textAlign={"center"}
            color="#000000"
            fontSize={"35px"}
            fontWeight={"bold"}
            sx={{
              "@media (max-width:1200px)": {
                fontSize: "28px",
              },
              "@media (max-width:900px)": {
                fontSize: "22px",
              },
              "@media (max-width:700px)": {
                fontSize: "18px",
              },
            }}
          >
            There are many managed services providers out there.
          </Typography>
          <Typography
            component={"h1"}
            textAlign={"center"}
            color="#3444af"
            fontSize={"60px"}
            fontWeight={"700"}
            sx={{
              "@media (max-width:1200px)": {
                fontSize: "48px",
              },
              "@media (max-width:1200px)": {
                fontSize: "40px",
              },
              "@media (max-width:700px)": {
                fontSize: "34px",
              },
            }}
          >
            Why should you chosse us?
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={"20px"}
          width={"auto"}
          sx={{
            "@media (max-width:1200px)": {
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            },
          }}
        >
          {dataText.map((text, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column"}
              width={"275px"}
              padding={"20px"}
              gap={"20px"}
              textAlign={"justify"}
            >
              <Typography
                color="#000"
                textAlign={"center"}
                fontFamily={"20px"}
                fontWeight={"800"}
              >
                {text.title}
              </Typography>
              <Typography
                color="#7a7a7a"
                // textAlign={"justify"}
                fontWeight={"400"}
                fontSize={"1rem"}
                lineHeight={"1.5"}
              >
                {text.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default whyUsCards;
