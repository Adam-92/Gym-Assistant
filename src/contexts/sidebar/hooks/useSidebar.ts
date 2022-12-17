import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar can only be used inside SidebarProvider");
  }
  return ctx;
};
