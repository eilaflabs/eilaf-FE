"use client";
import React, {
  useState,
  // MouseEvent,
  useEffect,
} from "react";
import {
  Box,
  Typography,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import HeaderLogo from "@/assets/pakitsystem-main-Logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // State to handle hover for dropdown menus
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavMenu = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <AppBar
      sx={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        zIndex: 1000,
        width: "100%",
        height: "141px",
        backgroundColor: "#ffffff",
        // padding: "0 1%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #d8d8d8",
      }}
    >
      <Toolbar
        sx={{
          width: "98%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          "@media (max-width:800px)": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: "201px",
            display: "flex",
            alignItems: "center",

            "@media (max-width:850px)": {
              width: "180px",
            },
            "@media (max-width:600px)": {
              width: "160px",
              height: "68%",
            },
          }}
        >
          <Link href={"/"} passHref style={{ textDecoration: "none" }}>
            <Image
              src={HeaderLogo}
              alt="Logo"
              className="header-logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </Box>

        <Box
          sx={{
            display: isMobile && !isNavOpen ? "none" : "flex",
            alignItems: "center",
            gap: "20px",
            height: "100%",
            "@media (max-width: 800px)": {
              display: isNavOpen ? "flex" : "none", // Nav menu shows as a block on mobile when open
              flexDirection: "column",
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "#ffffff",
              height: "auto",
              width: "100%",
              zIndex: 999,
              padding: "20px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              gap: "20px",
              alignItems: "flex-start",
            },
          }}
        >
          {/* OUR SERVICES */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
              height: "100%",
              // bgcolor: "red",
              "&:hover": {
                borderBottom: "1px solid #3644af",
              },
            }}
            onMouseEnter={() => handleMouseEnter("ourServices")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services" passHref style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  display: "flex",
                  fontWeight: "bold",
                  alignItems: "center",
                  color: "#262A2B",
                }}
              >
                OUR SERVICES
                <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />
              </Typography>
            </Link>
            {hoveredMenu === "ourServices" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "101%",
                  left: 0,
                  backgroundColor: "#e2e2e2",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                  minWidth: "150px",
                }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  IT OUTSOURCING
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  BREAK / FIX
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  HELP DESK
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  CLOUD SERVICES
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  MANAGED SECURITY
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  DISASTER RECOVERY
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  FREE IT ASSESSMENT
                </MenuItem>
              </Box>
            )}
          </Box>

          {/* ABOUT */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "100%",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
              "&:hover": {
                borderBottom: "1px solid #3644af",
              },
            }}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" passHref style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  display: "flex",
                  fontWeight: "bold",
                  alignItems: "center",
                  color: "#262A2B",
                }}
              >
                ABOUT
                <ArrowDropDownIcon />
              </Typography>
            </Link>
            {hoveredMenu === "about" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "101%",
                  left: 0,
                  backgroundColor: "#e2e2e2",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                  minWidth: "150px",
                }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  ABOUT
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  WHY US
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  TESTIMONIALS
                </MenuItem>
              </Box>
            )}
          </Box>

          {/* CONTACT */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "100%",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
              "&:hover": {
                borderBottom: "1px solid #3644af",
              },
            }}
          >
            <Link href="/contact" passHref style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  display: "flex",
                  fontWeight: "bold",
                  alignItems: "center",
                  color: "#262A2B",
                }}
              >
                CONTACT
              </Typography>
            </Link>
          </Box>

          {/* SUPPORT */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "100%",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
              "&:hover": {
                borderBottom: "1px solid #3644af",
              },
            }}
            onMouseEnter={() => handleMouseEnter("support")}
            onMouseLeave={handleMouseLeave}
          >
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "12px",
                display: "flex",
                fontWeight: "bold",
                alignItems: "center",
                color: "#262A2B",
              }}
            >
              SUPPORT
              <ArrowDropDownIcon />
            </Typography>
            {hoveredMenu === "support" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "101%",
                  left: 0,
                  backgroundColor: "#e2e2e2",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                  minWidth: "150px",
                }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  CUSTOMER LOGIN
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3644af",
                    fontSize: "13px",
                    padding: "13px 20px",
                    "&:hover": {
                      bgcolor: "#3644af",
                      color: "#fff",
                      transition: "0.5s",
                    },
                  }}
                >
                  REMOTE SUPPORT
                </MenuItem>
              </Box>
            )}
          </Box>
        </Box>
        {isMobile && (
          <IconButton
            onClick={toggleNavMenu}
            sx={{ width: "30px", height: "30px" }}
          >
            {isNavOpen ? (
              <CloseIcon sx={{ width: "30px", height: "30px" }} />
            ) : (
              <MenuIcon sx={{ width: "30px", height: "30px" }} />
            )}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
