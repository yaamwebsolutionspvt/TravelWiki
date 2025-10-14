import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { SEOHeading, SEOParagraph, SEOButton, SEOContent } from "../utils/seoUtils.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faSnowboarding } from "@fortawesome/free-solid-svg-icons";
import { RiFlowerFill, RiTentFill, RiFocus2Fill, RiMessageFill, RiShieldCheckLine, RiTrophyLine, RiCheckboxCircleFill } from "react-icons/ri";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  const backgroundImageUrl = useMemo(
    () =>
      "https://res.cloudinary.com/dw1sh368y/image/upload/v1758517180/3._Kashmir_Sharing_6_Days_5_Nights_Experience_jczrbk.webp",
    []
  );

  // Preload the hero image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = backgroundImageUrl;
  }, [backgroundImageUrl]);

  const scrollToPackages = () => {
    let packagesSection =
      document.getElementById("bestseller-tours") ||
      document.getElementById("allpackages") ||
      document.getElementById("kashmir-tour-packages");

    const headerHeight = document.querySelector("header")?.offsetHeight || 80;
    const extraPadding = 20;

    if (packagesSection) {
      const scrollToPosition = Math.max(0, packagesSection.offsetTop - headerHeight - extraPadding);
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    } else {
      const estimatedPosition = window.innerHeight * 1.5;
      window.scrollTo({ top: estimatedPosition - headerHeight - extraPadding, behavior: "smooth" });
    }
  };

  return (
    <SEOContent
      semantic="section"
      className={`relative min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] pt-6 overflow-hidden transition-all duration-1000  ${isLoaded ? "opacity-100" : "opacity-0"
        }`}
      role="banner"
      aria-label="Kashmir Tourism Hero Section"
    >
      <Box sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <Box
          component="img"
          src={backgroundImageUrl}
          alt="Dal Lake, Srinagar at sunrise"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.3s ease",
            opacity: isLoaded ? 1 : 0,
          }}
        />
        {/* Light black overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />
      </Box>


      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",          // ensures full-screen height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",     // centers vertically
          alignItems: "center",         // centers horizontally
          textAlign: "center",
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >

        {/* Main Headings */}
        <SEOHeading
          level={1}
          keyword="Kashmir Tourism"
          className="font-bold mb-4 leading-tight"
        >
          <Typography
            component="span"
            sx={{
              display: "block",
              background: "white",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem", lg: "2.75rem", xl: "3.25rem" },
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.2 },
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            Kashmir Tour & Holiday Packages starting from just ₹7,999
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "block",
              mt: { xs: 1, sm: 1.5, md: 2 },
              background: "white",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
              fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem", xl: "2rem" },
              animation: "pulse 2s infinite",
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            Kashmir - The Paradise on Earth
          </Typography>
        </SEOHeading>

        {/* Subtitle */}
        <SEOParagraph
          keyword="Kashmir Tourism"
          className="text-gray-100 max-w-4xl mx-auto mt-4 mb-8 sm:mb-10"
        >
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              lineHeight: { xs: 1.5, sm: 1.6 },
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            Discover Kashmir's breathtaking beauty with our exclusive tour packages. Experience Dal Lake's serenity, Gulmarg's snow-capped peaks, Pahalgam's meadows, and Sonamarg's glaciers. Perfect for honeymoons, family vacations, and adventure seekers.
          </Typography>
        </SEOParagraph>
        {/* Destinations */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 2.5, md: 3 }}
          justifyContent="center"
          alignItems="center"
          mb={5}
        >
          <Link to="/places-to-visit-in-srinagar">
            <Button
              variant="outlined"
              sx={{
                color: "rgba(255,255,255,0.8)",
                borderColor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                px: { xs: 1.5, sm: 2, md: 2.5 },
                py: { xs: 0.6, sm: 0.8, md: 1 },
                borderRadius: 2,
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255,255,255,0.12)",
                },
              }}
              startIcon={<FontAwesomeIcon icon={faMountain} />}
            >
              Srinagar & Dal Lake
            </Button>
          </Link>

          <Link to="/packages/kashmir-gulmarg-tour">
            <Button
              variant="outlined"
              sx={{
                color: "rgba(255,255,255,0.8)",
                borderColor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                px: { xs: 1.5, sm: 2, md: 2.5 },
                py: { xs: 0.6, sm: 0.8, md: 1 },
                borderRadius: 2,
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255,255,255,0.12)",
                },
              }}
              startIcon={<FontAwesomeIcon icon={faSnowboarding} />}
            >
              Gulmarg Skiing
            </Button>
          </Link>

          <Link to="/packages/kashmir-pahalgam-tour">
            <Button
              variant="outlined"
              sx={{
                color: "rgba(255,255,255,0.8)",
                borderColor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                px: { xs: 1.5, sm: 2, md: 2.5 },
                py: { xs: 0.6, sm: 0.8, md: 1 },
                borderRadius: 2,
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255,255,255,0.12)",
                },
              }}
              startIcon={<RiFlowerFill />}
            >
              Pahalgam Valleys
            </Button>
          </Link>

          <Link to="/leh-ladakh-packages">
            <Button
              variant="outlined"
              sx={{
                color: "rgba(255,255,255,0.8)",
                borderColor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                px: { xs: 1.5, sm: 2, md: 2.5 },
                py: { xs: 0.6, sm: 0.8, md: 1 },
                borderRadius: 2,
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255,255,255,0.12)",
                },
              }}
              startIcon={<RiTentFill />}
            >
              Ladakh Adventures
            </Button>
          </Link>
        </Stack>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 2 }}
          justifyContent="center"
          mb={{ xs: 3, sm: 5 }}
        >
          {/* Explore Packages Button */}
          <Button
            onClick={scrollToPackages}
            sx={{
              px: { xs: 2.5, sm: 3.5 },
              py: { xs: 1, sm: 1.25 },
              borderRadius: 3,
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(to right, #3b82f6, #2563eb)",
              textTransform: "none",
              boxShadow: "0 6px 15px rgba(37,99,235,0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(to right, #2563eb, #1d4ed8)",
                transform: "translateY(-2px) scale(1.03)",
                boxShadow: "0 10px 25px rgba(37,99,235,0.5)",
              },
            }}
            startIcon={<RiFocus2Fill size={18} />}
          >
            Explore Kashmir Packages
          </Button>

          {/* WhatsApp Booking Button */}
          <Button
            component="a"
            href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20Kashmir%20tour%20packages%20from%20Travel%20Wiki."
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: { xs: 2.5, sm: 3.5 },
              py: { xs: 1, sm: 1.25 },
              borderRadius: 3,
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(to right, #22c55e, #16a34a)",
              textTransform: "none",
              boxShadow: "0 6px 15px rgba(22,163,74,0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(to right, #16a34a, #15803d)",
                transform: "translateY(-2px) scale(1.03)",
                boxShadow: "0 10px 25px rgba(22,163,74,0.5)",
              },
            }}
            startIcon={<RiMessageFill size={18} />}
          >
            Book Now on WhatsApp
          </Button>
        </Stack>




      </Box>
    </SEOContent>
  );
}