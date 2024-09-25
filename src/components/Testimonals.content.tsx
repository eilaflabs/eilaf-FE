import { Box, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    Description:
      "We are pleased with the services offered by HMBTECH for several years. Their expertise is great help when it comes to computer solving matters we encountered in our small business. We recommend their services to any company that are in need of tech support for networking and software matters. Thank you for a job well done!",
    name: "Liz Casanova, CTA, CSS",
    job: "Owner, Travel 4 LESS LLC",
  },
  {
    Description:
      "We want you to know that we are very pleased with the quality of service your company provides. We sincerely appreciate your responsiveness and the way you conduct business. AMAZING SERVICE and a GREAT TEAM!",
    name: "Melvin Bodmer, Jr.",
    job: "Office Manager, Public Risk Management Association (PRIMA)",
  },
  {
    Description:
      "2019 was an incredibly pivotal year for Manna. You and your team are key reasons we are thriving. Here's to more progress together.",
    name: "Jackie DeCarlo",
    job: "CEO, Manna Food Center",
  },
  {
    Description:
      "You do a great job communicating with everyone. Thanks for always being one step ahead.",
    name: "Julie Obenauer",
    job: "Controller, Foster & Associates",
  },
  {
    Description:
      "Due to your wonderful customer service and professional services that you are offering us at Commonwealth Home, I would like to send our special thanks to you on our staff’s behalf.Wishing you a lot more future businesses as well.",
    name: "Firouzeh Etminan",
    job: "Bookkeeper, Commonwealth Home Remodelers",
  },
  {
    Description:
      "I used HMBTECH yesterday for a small problem. He was here in a very short time, clean, and knew what he was doing. He even went and got a part for the computer. Service like that is hard to find nowdays. This is the second time I have used them; I do trust and believe what they say... Very GOOD SERVICE!!!!",
    name: "John Stringer",
    job: "",
  },
  {
    Description:
      "Yes, you absolutely may do that; it's what I intended. I gave one of your cards to my mother-in-law; she may be ready to get a new computer. Her's is about 10 years old and I told her you could get it and set it up for her and move her files. I'll let you know. Thanks again for the great service; just what I wanted.",
    name: "Randy Higgins",
    job: "",
  },
  {
    Description:
      "HMBTECH services is beyond a doubt the most trustworthy and reliable computer service agency out there. Not only do they do their jobs professionally; but they will also help by teaching the customer what the customer needs to know, and how to do things themselves. I rely on this company and am so glad I have began working with them.",
    name: "Paula Cogan Simon",
    job: "Potomac, Maryland",
  },
];

const data2 = [
  {
    discription:
      "We want to say how appreciative we are that you came in and helped us out last night when our internet was down. Thank you so, so much for on short notice physically coming to the office, taking care of the problem, and ensuring proper steps for problem resolution. It is very rare that you find a service company that is willing to come out late in the evening, especially when just being called. HMB Tech has always provided us with top quality service and treats us like a valued customer. You are so responsive to our needs and treat us like a family rather than just a customer. Beyond our true appreciation and thanks, please let me know if now, or at anytime, we can write reviews, help your business grow, write recommendation letters, etc... It would be my pleasure to help your business grow as you have done such a fabulous job for us. Thank you",
    name: "Jessica Garber",
    job: "Metro Orthopedics and Sports Therapy - The Centers for Advanced Orthopaedics",
  },
  {
    discription:
      "You know how most of us like to complain and not very often do we take the time to complement a job well done. Well I would like to congratulate you for bringing HMBTECH on board. I was actually shocked this morning when I found the library area (where there were all kinds of junk from empty boxes to old computers) and the computer room all cleaned and organized! The counters in the computer room actually seem to shine! I thought you should know how pleased ( at least I am) with the work HMBTECH is doing for us. Oh, and by the way, they did install Publisher on my computer yesterday as promised!",
    name: "Lynne Akhtar",
    job: "Foster & Associates",
  },
  {
    discription:
      "I’ve used HMBTECH for about three years as my primary local IT support for the business I manage (Silver Spring Extra Space Self Storage), and I found them to be very responsive & extraordinarily knowledgeable about all things networking & computing. I’m very pleased. I’ve also used them for my personal computers at home (laptops) & have been totally satisfied with their services. The prices for both my business & my personal computing needs are very competitive & the turn-around time on repairs has been extraordinarily fast. I highly recommend them to all for any computing or networking issues.",
    name: "Dick Weavil",
    job: "Property Manager, Storage Post l Extra Space",
  },
  {
    discription:
      "I have used HMBTECH to service my computer on numerous occasions. They explain what needs to be done, do it in a timely manner, and stand behind their work. I have recommended them to my friends and I’m happy I have a competent business I can rely on.",
    name: "Brigid Soueid",
    job: "",
  },
  {
    discription:
      "I highly recommend HMBTECH Computer Services. For five years, HMBTECH has assisted my small business with on-site maintenance to trouble shoot emergent problems and to plan, buy, install and checkout new hardware and software. HMBTECH was instrumental in using my legacy computer equipment and with establishing John Trent Associates’ home office IT system with four laptop and desktop workstations on multiple floors, access points, and printer sharing, fax and scanner.",
    name: "John Trent",
    job: "President, John Trent Associates",
  },
];
const Testimonalscontent = () => {
  return (
    <Box width={"100%"} position={"relative"} zIndex={"120px"} bgcolor={"#fff"}>
      <Box
        width={"100%"}
        display={"flex"}
        sx={{
          "@media (max-width:768px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box
          width={"50%"}
          padding={"30px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          sx={{
            "@media (max-width:768px)": {
              width: "100%",
            },
          }}
        >
          {data.map((text, index) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              key={index}
              gap={"15px"}
              padding={"30px 0"}
              borderBottom={"1px dotted #d8d8d8"}
            >
              <Typography
                fontSize={"18px"}
                fontWeight={"300"}
                fontStyle={"italic"}
                color="#7a7a7a"
              >
                {text.Description}
              </Typography>
              <Box>
                <Typography
                  lineHeight={"1.5"}
                  color="#3444af"
                  fontWeight={"bold"}
                >
                  {text.name}
                </Typography>
                <Typography fontSize={".85em"} color="#54595f" margin={"0"}>
                  {text.job}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          width={"50%"}
          padding={"30px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          sx={{
            "@media (max-width:768px)": {
              width: "100%",
            },
          }}
        >
          {data2.map((text, index) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              key={index}
              gap={"15px"}
              padding={"30px 0"}
              borderBottom={"1px dotted #d8d8d8"}
            >
              <Typography
                fontSize={"18px"}
                fontWeight={"300"}
                fontStyle={"italic"}
                color="#7a7a7a"
              >
                {text.discription}
              </Typography>
              <Box>
                <Typography
                  lineHeight={"27px"}
                  color="#3444af"
                  fontWeight={"bold"}
                >
                  {text.name}
                </Typography>
                <Typography fontSize={".85em"} color="#54595f" margin={"0"}>
                  {text.job}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonalscontent;
