import { useRef } from "react";
import { Box } from "@mui/material";
import Header from "@/pages/index/Header";
// import Footer from "@/pages/index/Footer";
import Main from "@/pages/index/Main";
import "@/assets/css/common.css";

export default function Index() {
  const clickCountRef = useRef(0);
  const resetTimerRef = useRef<number | null>(null);

  const handleHiddenCornerClick = () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }

    clickCountRef.current += 1;

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      resetTimerRef.current = null;

      const prevTitle = document.title;
      document.title = "이진우 이력서";
      window.addEventListener(
        "afterprint",
        () => {
          document.title = prevTitle;
        },
        { once: true }
      );
      window.print();
      return;
    }

    resetTimerRef.current = window.setTimeout(() => {
      clickCountRef.current = 0;
      resetTimerRef.current = null;
    }, 2000);
  };

  return (
    <>
      <Box
        component="button"
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={handleHiddenCornerClick}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 64,
          height: 64,
          p: 0,
          m: 0,
          border: 0,
          bgcolor: "transparent",
          opacity: 0,
          cursor: "default",
          zIndex: 9999,
          "@media print": {
            display: "none",
          },
        }}
      />
      <Header />
      <Main />
      {/* <Footer /> */}
    </>
  );
}