import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ProductPage from "./components/pages/ProductPage";
import ProductCreatePage from "./components/pages/ProductCreatePage";
import ProductEditPage from "./components/pages/ProductEditPage";
import ReportPage from "./components/pages/ReportPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const theme = createTheme({
    typography:{
      fontFamily: "Kanit",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,

    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} onDrawerOpen={handleDrawerOpen} />
        <Menu open={open} onDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/create" element={<ProductCreatePage />} />
            <Route path="/product/edit/:id" element={<ProductEditPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
