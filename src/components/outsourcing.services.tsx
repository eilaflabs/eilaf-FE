import { Box, Typography } from "@mui/material";
import React from "react";
import { FaRegHandPointer } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSupport } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";

const services = [
  {
    id: 1,
    icon: <FaRegHandPointer style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "Eilaf Labs",
    description:
      "You don’t get just any IT department. You get an IT department ran the Eilaf Labs way. This means that we focus on the success of our customers. If you succeed, we succeed. This is translated into world-class customer service and response times combined with the latest technologies and services. Once you experience the benefits of the Eilaf Labs way, you will stop seeing technology as an expense and start seeing it as an investment",
  },
  {
    id: 2,
    icon: <IoDiamondOutline style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "SAVINGS",
    description:
      "When considering IT expenses, most companies consider only the invoices they receive from their IT provider, but forget to take into consideration the cost of having an employee trying to deal with an IT issue. It takes longer for the employee to resolve the issue, increasing business downtime, which in turn costs the business. There is also the opportunity cost of the employee not doing what they were hired to do. Once you take all that into consideration you will see that with Eilaf Labs",
  },
  {
    id: 3,
    icon: <MdOutlineSupport style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "UNLIMITED SUPPORT",
    description:
      "Our managed services plan includes unlimited on-site and remote support at a low flat rate. This allows you to finally budget your IT expenses without restricting the services you receive. Whenever you need assistance, just contact our helpdesk and let our experts resolve your problem for you",
  },
  {
    id: 4,
    icon: <LuClock4 style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "PROACTIVE MONITORING",
    description:
      "Why wait for things to break and bring your business to a halt? We will proactively manage and monitor your network and devices which reduces the number of issues as well as downtime. Your employees will be happier and more productive. More productive employees translates into higher profits",
  },
];
const outsourcingservices = () => {
  return (
    <Box
      position={"relative"}
      zIndex={"120"}
      bgcolor={"#f2f2f2"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"50px"}
      padding={"19px 0 50px 0"}
    >
      <Box
        width={"90%"}
        display={"flex"}
        flexWrap={"wrap"}
        // alignItems={"center"}
        justifyContent={"center"}
        // bgcolor={"aqua"}
        gap={"10px"}
        sx={{
          "@media (max-width:1120px)": {
            width: "95%",
          },
          "@media (max-width:768px)": {
            width: "95%",
          },
        }}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            width={"45%"}
            // height={"357px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            padding={"40px"}
            // bgcolor={"yellow"}
            sx={{
              "@media (max-width:768px)": {
                width: "100%",
                padding: "40px",
              },
              "@media (max-width:400px)": {
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

export default outsourcingservices;
