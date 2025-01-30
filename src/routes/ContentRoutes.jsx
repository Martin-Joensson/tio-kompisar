import { Routes, Route } from "react-router-dom";
import { Game } from "../components/Game";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />

    </Routes>
  );
};
