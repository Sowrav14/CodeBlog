import { Button } from "@mui/material";


export default function Welcome(){
    return(
        <div className="w-full p-4 mt-4 text-center bg-slate-400">
            <p className="mb-4 font-semibold"> Writing on Medium </p>
            <p> New Writter FAQ's </p>
            <p> Expart writing advice </p>
            <p className="mb-8"> Grow your leadership </p>
            <Button variant="contained"> Write Blog </Button>
        </div>
    )
}