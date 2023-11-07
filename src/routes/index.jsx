import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const LandingPageContainer = lazy(() => import("../components/LandingPage"));

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
