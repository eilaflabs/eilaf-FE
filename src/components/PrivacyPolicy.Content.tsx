"use client";
import { GoDotFill } from "react-icons/go";

import { Container, Typography, List, ListItem, Box } from "@mui/material";

import React from "react";
// Define TypeScript types for the privacy policy structure
type PolicySection = {
  title: string;
  content: string[];
};

// Array of privacy policy sections
const privacyPolicy: PolicySection[] = [
  {
    title: "Collection of Personal Information",
    content: [
      " We collect personal information (such as names, email addresses, and phone numbers) solely for the purpose of providing our services and improving user experience.",
      " We do not collect any information without your consent.",
    ],
  },

  {
    title: "Use of Personal Information",
    content: [
      " We use your personal information only for the purposes explicitly stated during collection (e.g., account setup, customer support, order processing).",
      " We do not share your information with third parties for marketing or promotional purposes.",
    ],
  },
  {
    title: "Third-Party Disclosure",
    content: [
      " We do not sell, trade, or otherwise transfer your personal information to external parties.",
      " Exceptions include trusted service providers who assist us in operating our website, conducting business, or servicing you (e.g., payment processors, shipping partners). These parties are bound by confidentiality agreements and are not authorized to use your information for any other purpose.",
    ],
  },
  {
    title: "Opt-Out Options",
    content: [
      " If you wish to opt out of any communication from us (e.g., newsletters, promotional emails), please follow the instructions provided in those communications or contact our support team.",
    ],
  },
  {
    title: "Data Security",
    content: [
      " We implement industry-standard security measures to protect your personal information.",
      " However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "Updates to Privacy Policy",
    content: [
      " We may update our privacy policy periodically. Any changes will be posted on this page.",
    ],
  },
];

export const PrivacyPolicyContent = () => {
  return (
    <Container
      sx={{
        padding: "50px 50px",
        width: "90%",
        "@media (max-width:550px)": {
          padding: "50px 0px",
        },
        "@media (max-width:450px)": {
          paddingTop: "140px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "15px",
          color: "#7A7A7A",
          fontWeight: "700",
          padding: "30px 0px 15px 6px ",
          width: "90%",

          "@media (max-width:470px)": {
            fontSize: "14px",
          },
          // "@media (max-width:550px)": {
          //   padding: "50px 0px",
          // },
        }}
      >
        At Eilaf Labs we take your privacy seriously. This section outlines our
        commitment to safeguarding your personal information and ensuring
        transparency in our practices.
      </Typography>
      {privacyPolicy.map((section, index) => (
        <Box key={index} mb={4}>
          {/* Section Heading */}
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: "#7A7A7A",
              fontSize: "13.68px",
              fontWeight: "700",
              marginLeft: "20px",
            }}
          >
            {index + 1}. {section.title}
          </Typography>

          {/* Section Content */}
          <List sx={{ marginLeft: "40px" }}>
            {section.content.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  display: "list-item",
                  fontSize: "15px",
                  paddingLeft: 0,
                  color: "#7A7A7A",
                }}
              >
                <GoDotFill style={{ fontSize: "10px" }} />

                {item}
              </ListItem>
            ))}
          </List>

          {index < privacyPolicy.length - 1}
        </Box>
      ))}
      <Typography
        sx={{
          fontSize: "15px",
          color: "#7A7A7A",
          fontWeight: "400",
          padding: "30px 0px 15px 6px ",
          width: "90%",
          margin: "0px 0px 26.5px",
        }}
      >
        By using our website, you agree to the terms outlined in this privacy
        policy.
      </Typography>
    </Container>
  );
};
export default PrivacyPolicyContent;
