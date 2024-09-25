import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import cloudService from "@/assets/cloudServices.jpeg";

const cloudServices = [
  {
    title: "EXCHANGE EMAIL",
    content:
      "Do you have to check the same email messages on your desktop, laptop and mobile device? Do you send an email from your laptop and don’t have it on your desktop when you need it? What if you could see your mailbox the same way whether you are looking at it from the browser, desktop, laptop of mobile device? With Exchange email you can. Read a message, in one device it will be marked as read on all your devices. Deleted a message in one device and it will be deleted on all of your devices. No more doing the same work on multiple devices. Not only will you be able to sync your mailbox, but also your calendar and contacts. View all your important data the same way across all of your devices. Need to share your calendar with your staff? No problem. We can take care of that too.",
  },
  {
    title: "SHAREPOINT",
    content:
      "Sharepoint sites give you a quick and easy way to manage information such as calendars, contacts, discussions, announcements and etc. You can also share files with check-in and check-out functionality and version history.",
  },
  {
    title: "LYNC",
    content:
      "Communicate and collaborate with customers and co-workers from anywhere with Lync. With Lync you can easily have voice and video calls as well as instant messaging conversations. Have online meetings with up to 5 meeting participants.",
  },
];

export const CloudServices = () => {
  return (
    <Box
      position={"relative"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      padding={"100px 0px 100px 0px"}
      bgcolor={"white"}
    >
      <Box
        width={"90%"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Box
          width={"45%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"60px"}
          paddingBottom={"12%"}
        >
          <Typography
            color="#000000"
            fontSize={"52px"}
            fontWeight={"bold"}
            padding={"19px 0px 32px 30px"}
          >
            Cloud Services
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
            {cloudServices.map((section, index) => (
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  paddingLeft={"6%"}
                  sx={{
                    color: "#000000DB",
                    fontSize: "24px",
                    fontWeight: "700",
                    // padding: "60px 0px 32px 11px",
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  lineHeight={"30px"}
                  paddingLeft={"6%"}
                  sx={{
                    color: "rgb(122,122,122)",
                    fontSize: "16px",
                    fontWeight: "400",
                    // padding: "60px 0px 32px 11px",
                  }}
                >
                  {section.content}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            width={"80%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"20px"}
          >
            <Typography fontSize={"30px"} color="#3444af" fontWeight={"800"}>
              Contact us today to find out more about how your business can
              benefit from our cloud services.
            </Typography>
            <Button
              sx={{
                fontSize: "13px",

                marginTop: "10px",
                letterSpacing: "1px",
                height: "",
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
        <Box width={"45%"}>
          <Box width={"100%"}>
            <Image
              src={cloudService}
              alt="Cloud Services Main"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CloudServices;
