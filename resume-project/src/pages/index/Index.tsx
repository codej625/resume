import { useRef } from "react";
import { Box } from "@mui/material";
import Header from "@/pages/index/Header";
// import Footer from "@/pages/index/Footer";
import Main from "@/pages/index/Main";
import "@/assets/css/common.css";

function useHiddenCornerTrigger(onTrigger: () => void) {
  const clickCountRef = useRef(0);
  const resetTimerRef = useRef<number | null>(null);

  return () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }

    clickCountRef.current += 1;

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      resetTimerRef.current = null;
      onTrigger();
      return;
    }

    resetTimerRef.current = window.setTimeout(() => {
      clickCountRef.current = 0;
      resetTimerRef.current = null;
    }, 2000);
  };
}

const hiddenCornerButtonSx = {
  position: "fixed",
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
} as const;

export default function Index() {
  const handleHiddenCornerClick = useHiddenCornerTrigger(() => {
    const prevTitle = document.title;
    document.title = " ";
    window.addEventListener(
      "afterprint",
      () => {
        document.title = prevTitle;
      },
      { once: true }
    );
    window.print();
  });

  const handleHiddenBottomCornerClick = useHiddenCornerTrigger(() => {
    window.open("https://web.archive.org/", "_blank", "noopener,noreferrer");
  });

  return (
    <>
      <Box
        component="button"
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={handleHiddenCornerClick}
        sx={{ ...hiddenCornerButtonSx, top: 0 }}
      />
      <Box
        component="button"
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={handleHiddenBottomCornerClick}
        sx={{ ...hiddenCornerButtonSx, bottom: 0 }}
      />
      <Header />
      <Main />
      {/* <Footer /> */}
    </>
  );
}
