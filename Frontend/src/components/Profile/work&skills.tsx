import Skills from "./skills";
import Works from "./works";
import Divider from '@mui/material/Divider';



export default function Work_Skill(){
    return(
        <div className="w-[340px]">
            <p className="text-sm mt-10"> Organizations </p>
            <Divider/>
            <Works/>
            <p className="text-sm mt-4"> Skills </p>
            <Divider/>
            <Skills/>
        </div>
    )
}