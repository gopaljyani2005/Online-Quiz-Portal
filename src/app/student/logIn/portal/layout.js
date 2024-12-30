import StudentPortalHeader from "@/components/studentportalheader/page";

export default function subroute({children}){
    return (
        <div>
            <StudentPortalHeader/>
            {children}
        </div>
    )
}