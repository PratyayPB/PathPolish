import React, { useEffect } from "react";
import HeroTemplate from "../ui/HeroTemplate";
import Features from "../ui/Features";
import About from "../ui/About";
import Pricing from "../ui/Pricing";
import Highlights from "../ui/Highlights";
import Faq from "../ui/Faq";
import bg from "../../assets/bgLong.png";
import heroImage from "../../assets/landingPageHero.jpg";
import Login from "../authentication/Login";
import { useNavigate, Link, useLocation } from "react-router-dom";
const Landingpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate home first then scroll
      // mark that navigation came from the header so landing page only
      // performs the scroll when intended by user interaction
      navigate("/", { state: { fromHeader: true, scrollTo: sectionId } });
    } else {
      // If already on home page, just scroll
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    // Only trigger when navigation explicitly came from the Header
    // (Header sets { fromHeader: true, scrollTo: '<id>' }). This
    // prevents scrolling on normal page loads or direct visits to '/'.
    const target = location.state?.scrollTo;
    const fromHeader = location.state?.fromHeader === true;

    if (fromHeader && target) {
      // Small delay to ensure DOM is ready, then scroll smoothly.
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });

        // Clear the navigation state so the scroll doesn't run again
        // on reload/back/forward. Use history.replaceState to avoid
        // causing a React navigation or re-render.
        try {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname +
              window.location.search +
              window.location.hash
          );
        } catch {
          // ignore if replaceState not allowed
        }
      }, 100);
    }
    // Intentionally depend on location.key would also work, but we
    // only need to re-run when location.state changes.
  }, [location.state]);
  return (
    <div>
      <HeroTemplate // Prop for the h1
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        // Prop for the p
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
        // Prop for the image
        image={{
          src: heroImage,
          alt: "A descriptive alt text for the image",
        }}
        // Prop for the buttons
        actions={
          <>
            <button
              className="bg-[#3E3651] font-semibold text-white rounded-4xl px-6 py-4 hover:bg-violet-800 cursor-pointer hover:scale-105"
              onClick={() => handleSectionNavigation("features")}
            >
              Explore
            </button>

            <Link to="/login">
              <button className="bg-[#3E3651] text-white rounded-4xl px-6 py-4 hover:bg-violet-800 cursor-pointer font-semibold hover:scale-105">
                Get Started
              </button>
            </Link>
          </>
        }
      />

      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <About />
        <Features />
        <Highlights />
        <Pricing />
        <Faq />
      </div>
    </div>
  );
};

export default Landingpage;
