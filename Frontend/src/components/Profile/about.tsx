import { Divider } from "@mui/material"
import { Link } from "react-router-dom"



export default function About(){
    return(
        <div>
            <p className="text-sm"> Contact Info </p>
            <Divider/>
            <div className="flex gap-12 my-4">
                <div>
                    <p> Phone </p>
                    <p> Address </p>
                    <p> Email </p>
                    <p> LinkedIn </p>
                    <p> Github </p>
                </div>
                <div>
                    <p> +880 1815 947477 </p>
                    <p> Noajishpur, Raozan, Chittagong, Bangladesh </p>
                    <p> Sowravnath05102002@gmail.com </p>
                    <Link className="text-blue-700 underline cursor-pointer" to={'https://www.linkedin.com/in/sowrav-nath'}> sowrav-nath </Link> <br/>
                    <Link className="text-blue-700 underline cursor-pointer" to={'https://github.com/Sowrav14'}> Sowrav14 </Link>
                </div>
            </div>
            <p className="text-sm"> Personal Info </p>
            <Divider/>
            <div className="flex gap-12 my-4">
                <div>
                    <p> Birthday </p>
                    <p> Gender </p>
                </div>
                <div>
                    <p> 05 October 2002 </p>
                    <p> Male </p>
                </div>
            </div>
        </div>
    )
}