import { Box, Typography } from "@mui/material";
import React from "react";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import {
  FaWrench,
  FaPhone,
  FaCloud,
  FaCloudDownloadAlt,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <SettingsSuggestIcon sx={{ fontSize: "50px", color: "#3644af" }} />,
    title: "IT OUTSOURCING",
    description:
      "With Eilaf Labs’ managed services you can enjoy the benefits of having a full IT department at your disposal without having to pay for one.",
  },
  {
    id: 2,
    icon: <FaWrench style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "BREAK / FIX",
    description:
      "Not ready to fully outsource your IT? No problem. We can help as needed on issues and projects on a Break/Fix arrangement.",
  },
  {
    id: 3,
    icon: <FaPhone style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "HELPDESK",
    description:
      "Whether you contact our helpdesk by phone, email, customer portal or sms one of our highly trained techs will get back to you in no time and take care of your issue right away.",
  },
  {
    id: 4,
    icon: <FaCloud style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "CLOUD SERVICES",
    description:
      "Do you have to check the same email messages on your desktop, laptop and mobile device? Do you send an email from your laptop and don’t have it on your desktop when you need it?",
  },
  {
    id: 5,
    icon: <FaCloudDownloadAlt style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "DISASTER RECOVERY",
    description:
      "If something happened and your valuable business data was lost, what would you do? Would you be able to recover or would you go out of business? How fast would you be able to recover?",
  },
  {
    id: 6,
    icon: <FaLock style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "MANAGED SECURITY",
    description:
      "Do all your devices have antivirus protection? Is the antivirus up to date? Are your computers scanned regularly? Do you have different antivirus subscriptions expiring at different times?",
  },
];

const OurServices = () => {
  return (
    <Box
      position={"relative"}
      zIndex={"120"}
      bgcolor={"#ffffff"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"50px"}
      padding={"100px 0 50px 0"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          fontSize={"52px"}
          color="#000000"
          paddingTop={"3%"}
          fontWeight={"bold"}
          lineHeight={"1.4em"}
        >
          Our Services
        </Typography>
      </Box>
      <Box
        width={"1100px"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"10px"}
        sx={{
          "@media (max-width:1120px)": {
            width: "95%",
          },
        }}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            width={"320px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            padding={"40px"}
            sx={{
              "@media (max-width:684px)": {
                width: "340px",
              },
              "@media (max-width:450px)": {
                width: "100%",
                padding: "20px",
              },
            }}
          >
            <Box display={"flex"} justifyContent={"center"}>
              {service.icon}
            </Box>
            <Typography
              fontSize={"24px"}
              fontWeight={"900"}
              color="#000000"
              lineHeight={"1.4em"}
              textAlign={"center"}
            >
              {" "}
              {service.title}
            </Typography>
            <Typography
              fontSize={"14px"}
              fontWeight={"400"}
              color="#7a7a7a"
              textAlign={"center"}
            >
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurServices;
