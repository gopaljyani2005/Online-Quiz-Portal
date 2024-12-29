
import Subheader from "@/components/subheader/page";
export default function sublayout({ children }) {
    return (
        <div>
          <Subheader title={"Student"}/>
          {children}
        </div>
    );
  }