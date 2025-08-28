import {
  AccountCircleOutlined,
  AccountTreeOutlined,
  DashboardOutlined,
  DescriptionOutlined,
  FolderOpenOutlined,
  HelpOutlineRounded,
  HomeOutlined,
  MenuOpenRounded,
  MoreVertRounded,
  PaymentsOutlined,
  SettingsOutlined,
  UpgradeRounded,
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Sidemenu = () => {
  return (
    <>
      <Grid container>
        <Grid
          size={3}
          sx={{
            height: "100vh",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1.5px solid #ECECEC",
          }}
        >
          <Box>
            <Box
              sx={{
                borderBottom: "1.5px solid #ECECEC",
                py: 1.5,
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "550",
                }}
              >
                PulseBoard
              </Typography>
              <IconButton>
                <MenuOpenRounded />
              </IconButton>
            </Box>
            <Box sx={{ p: 2 }}>
              <Box sx={{ borderBottom: "1.5px solid #E9E9E9", py: 3 }}>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <HomeOutlined /> Home
                  </Box>
                </Box>
                <Box
                  sx={{
                    pl: 1,
                    py: 1,
                    border: "2px solid #EAECEB",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    backgroundImage:
                      "linear-gradient(to right, #F1F6FF 20%, #BFD3FF)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#2432A1",
                      borderRight: "2px solid #5172C8",
                    }}
                  >
                    <DashboardOutlined sx={{ color: "#2432A1" }} /> Dashboard
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FolderOpenOutlined /> Projects
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <DescriptionOutlined /> Docs
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccountTreeOutlined /> Integrations
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "#838383", pt: 3, pb: 1 }}>
                  Others
                </Typography>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <SettingsOutlined /> Settings
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccountCircleOutlined /> Account
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PaymentsOutlined /> Payments
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <HelpOutlineRounded /> Help
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
              px: 2,
              py: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box
                sx={{
                  border: "1.5px solid #F0F0F0",
                  borderRadius: "12px",
                  p: 2,
                }}
              >
                <Box sx={{}}>
                  <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                    Boost with AI
                  </Typography>
                </Box>
                <Box sx={{ my: 1 }}>
                  <Typography sx={{ color: "#7A7A7A" }}>
                    Upgrade to get the latest
                  </Typography>
                  <Typography sx={{ color: "#7A7A7A", mt: -0.4 }}>
                    and exclusive features
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      textTransform: "none",
                      bgcolor: "#6086E4",
                      borderRadius: "12px",
                      color: "#FFFFFF",
                      border: "1.5px solid #ADBCF8",
                    }}
                    fullWidth
                    startIcon={<UpgradeRounded />}
                  >
                    Upgrade to Pro
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  border: "1.5px solid #F0F0F0",
                  borderRadius: "12px",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      position: "relative",
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={"/images/img.jpg"}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "14px", color: "#020202" }}>
                      Natalia
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#868686" }}>
                      natalia@pulseboard.com
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton>
                    <MoreVertRounded />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={9}></Grid>
      </Grid>
    </>
  );
};
