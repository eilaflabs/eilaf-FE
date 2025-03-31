"use client";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export const RequiredFields: React.FC = () => {
  return (
    <>
      <Box
        width={"100%"}
        zIndex={190}
        bgcolor={"white"}
        position={"relative"}
        padding={"40px 0"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={"61%"}
          paddingTop={"2%"}
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
          <Typography
            fontSize={"12px"}
            color={"black"}
            lineHeight={"12px"}
            fontWeight={800}
            paddingRight={"70%"}
            sx={{
              "@media(max-width:1400px": {
                paddingRight: "7%",
                bgcolor: "red",
              },
            }}
          >
            * REQUIRED FIELDS
          </Typography>
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
              sx={{
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
                  // padding: '12px 24px',
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
              }}
            />
            <TextField
              fullWidth
              placeholder="Email*"
              autoComplete="off"
              margin="normal"
              type="text"
              sx={{
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
                  // padding: '12px 24px',
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
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Phone Number"
              autoComplete="off"
              margin="normal"
              type="number"
              sx={{
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
                  // padding: '12px 24px',
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
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
          </Box>
          <TextField
            fullWidth
            placeholder="Company Name"
            autoComplete="off"
            margin="normal"
            type="text"
            sx={{
              border: "1px solid #f2f2f2",
              borderRadius: "5px",
              fontWeight: "500",
              fontSize: "16px",

              lineHeight: "30px",
              letterSpacing: "-1.1%",
              color: "#1E1E1E",
              marginTop: "0px",
              bgcolor: "#f2f2f2",

              "& .MuiOutlinedInput-root": {
                // padding: '12px 24px',
                // width: "343px",
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
                  border: "1px solid #69727d",
                  transition: "0.9s",
                },
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="Address"
            autoComplete="off"
            margin="normal"
            type="text"
            sx={{
              bgcolor: "#f2f2f2",
              border: "1px solid #f2f2f2",
              borderRadius: "5px",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "30px",
              letterSpacing: "-1.1%",
              color: "#1E1E1E",
              marginTop: "0px",

              "& .MuiOutlinedInput-root": {
                // padding: '12px 24px',
                // width: "343px",
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
                  border: "1px solid #69727d",
                  transition: "0.9s",
                },
              },
            }}
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
              sx={{
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
                  // padding: '12px 24px',
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
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="State"
              autoComplete="off"
              margin="normal"
              type="text"
              sx={{
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
                  // padding: '12px 24px',
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
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Zip Code"
              autoComplete="off"
              margin="normal"
              type="number"
              sx={{
                bgcolor: "#f2f2f2",
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "-1.1%",
                color: "#1E1E1E",
                marginTop: "0px",
                width: "100%",

                "& .MuiOutlinedInput-root": {
                  // padding: '12px 24px',
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
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
          </Box>
          <TextField
            fullWidth
            multiline
            minRows={7} // Start with 3 rows
            placeholder="Message*"
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
              "&:hover": {
                backgroundColor: "#29368C",
              },
            }}
          >
            <TelegramIcon
              sx={{
                fontSize: "20px",
              }}
            />{" "}
            SUBMIT
          </Button>
        </Box>
        <Box width={"76%"}>
          <Typography
            color="#7A7A7A"
            fontSize="10px"
            margin="0px 42px 17.5px 0px"
          >
            By clicking ‘Submit’, you agree to Eilaf Labs’ Terms of Use and
            Privacy Policy. You consent to receive phone calls and SMS messages
            from Eilaf Labs to provide updates and information regarding your
            business with Eilaf Labs. Message frequency may vary. Message & data
            rates may apply. Reply STOP to opt-out of further messaging. Reply
            HELP for more information. See our Privacy Policy”.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default RequiredFields;
