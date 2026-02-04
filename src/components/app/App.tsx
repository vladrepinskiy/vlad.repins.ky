import { MainLayout } from "./MainLayout";
import { Tui } from "@/components/pages/Tui";
import { useLocation } from "wouter";

export const App = () => {
  const [location] = useLocation();

  if (location === "/tui") {
    return <Tui />;
  }

  return <MainLayout />;
};
