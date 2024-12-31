import Blog from "./blog";

interface Blogs{
    start : number
}

export default function Blogs({start} : Blogs){
    const blogs : number[] = Array.from({length:10}, (_, i) => i+start);
    return(
        <div>
            {
                blogs.map((blog)=>{
                    return <Blog id={blog}/>
                })
            }
        </div>
    )
}