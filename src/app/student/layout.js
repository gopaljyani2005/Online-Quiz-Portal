"use client";
import Subheader from "@/components/subheader/page";
import { usePathname, useRouter } from "next/navigation";
export default function sublayout({children}) {
  const path = usePathname();
  const  router = useRouter();
  const display = path.startsWith("/student/logIn/portal");
    return (
        <div>
          {!display && <Subheader title={"Student"}/>}
          {children}
        </div>
    );
  }