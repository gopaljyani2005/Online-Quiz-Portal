"use client";
import TeacherPortalHeader from "@/components/teacherportalheader/page";


export default function sublayout({children}){
    return(
        <div>
            <TeacherPortalHeader/>
            {children}
        </div>
    )
}