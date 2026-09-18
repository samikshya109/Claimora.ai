import { createBrowserRouter, Outlet } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { UploadScreen } from "./components/UploadScreen";
import { AnalysisScreen } from "./components/AnalysisScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { HeatmapScreen } from "./components/HeatmapScreen";
import { GapsScreen } from "./components/GapsScreen";
import { MemoScreen } from "./components/MemoScreen";
import { Onboarding } from "./components/Onboarding";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RootLayout() {
  useEffect(() => {
    document.title = "Claimora — FCA Case Analysis";
  }, []);

  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Onboarding />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", Component: WelcomeScreen },
      { path: "/upload", Component: UploadScreen },
      { path: "/analyze", Component: AnalysisScreen },
      { path: "/results", Component: ResultsScreen },
      { path: "/heatmap", Component: HeatmapScreen },
      { path: "/gaps", Component: GapsScreen },
      { path: "/memo", Component: MemoScreen },
    ],
  },
]);
