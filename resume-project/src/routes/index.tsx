import { createBrowserRouter, Navigate } from "react-router-dom";
import Index from "@/pages/index/Index";

// 라우트 설정을 객체 배열로 정의 (최신 권장 방식)
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
