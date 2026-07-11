import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* ── Animated Mesh Gradient Background ── */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />
      <div className="bg-blob bg-blob-3" aria-hidden="true" />

      {/* ── Content Layer ── */}
      <Box position="relative" zIndex={1}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
