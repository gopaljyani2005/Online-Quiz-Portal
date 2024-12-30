"use client";
import Subheader from "@/components/subheader/page";
import { usePathname } from "next/navigation";
export default function sublayout({ children }) {
  const path = usePathname();
  const diplay = path.startsWith("/teacher/logIn/portal");
    return (
        <div>
          {!diplay && <Subheader title={"Admin"}/>}
          {children}
        </div>
    );
  }