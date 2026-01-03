import { createBrowserRouter, Navigate } from "react-router-dom";
import Index from "@/pages/index/Index";

// 라우트 설정을 객체 배열로 정의 (최신 권장 방식)
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    // 추가 라우트가 필요하면 여기에 객체로 추가
    // {
    //   path: "/about",
    //   element: <About />,
    // },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  {
    // GitHub Pages 서브디렉토리 배포를 위한 basename 설정
    basename: '/resume',
    // React Router v7 호환성을 위한 future flags
    future: {
      v7_startTransition: true,
    },
  }
);