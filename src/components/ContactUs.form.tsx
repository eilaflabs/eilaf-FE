/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaFacebookF } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, TextField, Button, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

import { useEffect, useState } from "react";

export const ContactUsform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    message: "",
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("dPMQ-tJyxS52WS8mg"); // Your public key
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lv00akq", // Your Service ID
        "template_rr62qud", // Your Template ID
        formData,
        "dPMQ-tJyxS52WS8mg" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <Box
      width={"100%"}
      position={"relative"}
      zIndex={190}
      bgcolor={"#fff"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        padding={"100px 0"}
        width={"100%"}
        bgcolor={"#d6d6d6"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Typography
          textAlign={"center"}
          fontSize={"35px"}
          color="#000"
          fontWeight={"bold"}
          fontStyle={"normal"}
          paddingBottom={"20px"}
          sx={{
            "@media (max-width:768px)": {
              fontSize: "30px",
            },
            "@media (max-width:350px)": {
              fontSize: "26px",
            },
          }}
        >
          Our Service Areas
        </Typography>
        <Box
          borderBottom={"1px dotted #3444af"}
          paddingBottom={"20px"}
          width={"30%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          sx={{
            "@media (max-width:768px)": {
              width: "50%",
            },
            "@media (max-width:500px)": {
              width: "90%",
            },
          }}
        >
          <Typography
            textAlign={"center"}
            fontSize={"20px"}
            color="#000"
            fontWeight={"800"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "18px",
              },
            }}
          >
            WASHINGTON DC METRO AREA
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={"28px"}
            color="#7a7a7a"
            fontWeight={"normal"}
            letterSpacing={"1px"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "26px",
              },
            }}
          >
            301.363.2823
          </Typography>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          sx={{
            "@media (max-width:768px)": {
              width: "50%",
            },
            "@media (max-width:500px)": {
              width: "90%",
            },
          }}
        >
          <Typography
            textAlign={"center"}
            fontSize={"20px"}
            color="#000"
            fontWeight={"800"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "18px",
              },
            }}
          >
            FLORIDA
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={"28px"}
            color="#7a7a7a"
            fontWeight={"normal"}
            letterSpacing={"1px"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "26px",
              },
            }}
          >
            407.537.9425
          </Typography>
        </Box>
      </Box>

      <Box
        width={"100%"}
        padding={"100px 0"}
        bgcolor={"#ffffff"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"60px"}
      >
        <Box
          alignItems={"center"}
          alignContent={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          sx={{
            "@media (max-width:768px)": {
              padding: "0 2.5%",
            },
          }}
        >
          <Typography
            color={"#3444af"}
            fontSize={"60px"}
            fontWeight={"600"}
            textAlign={"center"}
            sx={{
              "@media (max-width:1024px)": {
                fontSize: "50px",
              },
              "@media (max-width:768px)": {
                fontSize: "44px",
              },
              "@media (max-width:500px)": {
                fontSize: "36px",
              },
            }}
          >
            Call us now!{" "}
          </Typography>

          <Typography
            fontSize={"22px"}
            color={"#000000"}
            fontWeight={600}
            textAlign={"center"}
            sx={{
              "@media (max-width:1024px)": {
                fontSize: "20px",
              },
              "@media (max-width:768px)": {
                fontSize: "18px",
              },
              "@media (max-width:500px)": {
                fontSize: "16px",
              },
            }}
          >
            Otherwise, fill in the form below and we will get back to you right
            away.
          </Typography>

          <Box
            display={"flex"}
            justifyItems={"center"}
            justifyContent={"center"}
            gap={"10px"}
          >
            <Box
              width={"48px"}
              height={"48px"}
              bgcolor={"#3444af"}
              borderRadius={"100px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaFacebookF
                style={{
                  color: "#fff",
                  height: "1em",
                  width: "1em",
                }}
              />
            </Box>
            <Box
              width={"48px"}
              height={"48px"}
              bgcolor={"#3444af"}
              borderRadius={"100px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <TwitterIcon
                sx={{
                  color: "#fff",
                  height: "1em",
                  width: "1em",
                }}
              />
            </Box>
          </Box>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box
            width={"100%"}
            //   bgcolor={"#f5f5f5"}
            padding={"40px 0"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              // onClick={handleClick}
              width={"61%"}
              bgcolor={"white"}
              // padding={"40px"}
              gap={"15px"}
              display={"flex"}
              flexDirection={"column"}
              sx={{
                "@media (max-width:1424px)": {
                  width: "80%",
                },
              }}
            >
              <Box
                width={"100%"}
                display={"flex"}
                gap={"10px"}
                sx={{
                  "@media (max-width:768px)": {
                    flexDirection: "column",
                  },
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Name*"
                  autoComplete="off"
                  margin="normal"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />

                <TextField
                  fullWidth
                  placeholder="Email*"
                  autoComplete="off"
                  margin="normal"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />
                <TextField
                  fullWidth
                  placeholder="Phone Number"
                  autoComplete="off"
                  margin="normal"
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />
              </Box>
              <TextField
                fullWidth
                placeholder="Company Name"
                autoComplete="off"
                margin="normal"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                sx={textFieldStyles}
              />
              <TextField
                fullWidth
                placeholder="Address"
                autoComplete="off"
                margin="normal"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                sx={textFieldStyles}
              />
              <Box
                width={"100%"}
                display={"flex"}
                gap={"10px"}
                sx={{
                  "@media (max-width:768px)": {
                    flexDirection: "column",
                  },
                }}
              >
                <TextField
                  fullWidth
                  placeholder="City"
                  autoComplete="off"
                  margin="normal"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />
                <TextField
                  fullWidth
                  placeholder="State"
                  autoComplete="off"
                  margin="normal"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />
                <TextField
                  fullWidth
                  placeholder="Zip Code"
                  autoComplete="off"
                  margin="normal"
                  type="number"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />
              </Box>

              <TextField
                fullWidth
                multiline
                minRows={7} // Start with 3 rows
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    "& textarea": {
                      resize: "vertical", // Enables vertical resizing
                      overflow: "auto",
                    },
                  },
                }}
                sx={{
                  border: "1px solid #f2f2f2",
                  bgcolor: "#f2f2f2",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    padding: "14px 8px 8px 14px",

                    fontSize: "16px",
                    fontWeight: "400",
                    // lineHeight: '24px',
                    color: "#000000",
                    boxShadow: "0px 1px 2px 0px #1018280D",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#69727d",
                    },

                    // "& .MuiOutlinedInput-notchedOutline": {
                    //   borderColor: "#C2CCFF", // Initial border color
                    // },
                    "& fieldset": {
                      border: "none", // No border by default
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #69727d",
                      transition: "0.9s",
                    },
                  },
                }}
              />
            </Box>
            <Box
              // bgcolor={"red"}
              width={"61%"}
              padding={"40px 0"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              sx={{
                "@media (max-width:1424px)": {
                  width: "80%",
                },
              }}
            >
              <Button
                type="submit"
                sx={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  lineHeight: "1.9em",
                  letterSpacing: "1.6px",
                  borderStyle: "solid",
                  borderWidth: "0 0 3px 0",
                  borderRadius: "8px",
                  borderColor: "#7697e9",
                  bgcolor: "#3444fa",
                  color: "#ffffff",
                  padding: "15px 30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <TelegramIcon sx={{ fontSize: "20px" }} /> SUBMIT
              </Button>
            </Box>
            <Box width={"76%"}>
              <Typography
                color="#7A7A7A"
                fontSize="10px"
                margin="0px 42px 17.5px 0px"
              >
                By clicking ‘Submit’, you agree to Eilaf Labs’ Terms of Use and
                Privacy Policy. You consent to receive phone calls and SMS
                messages from Eilaf Labs to provide updates and information
                regarding your business with Eilaf Labs. Message frequency may
                vary. Message & data rates may apply. Reply STOP to opt-out of
                further messaging. Reply HELP for more information. See our
                Privacy Policy”.
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default ContactUsform;
const textFieldStyles = {
  bgcolor: "#f2f2f2",
  border: "1px solid #f2f2f2",
  borderRadius: "5px",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "30px",
  letterSpacing: "-1.1%",
  color: "#1E1E1E",
  marginTop: "0px",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    width: "100%",
    height: "54px",
    "& fieldset": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0 16px",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "30px",
      letterSpacing: "-1.1%",
      color: "#1E1E1E",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #797f86",
      transition: "0.9s",
    },
  },
};
