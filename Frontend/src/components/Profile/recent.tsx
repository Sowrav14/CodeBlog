


interface Blog{
    title : string;
    tag:string;
    description : string;
}

const blogs : Blog[] = [
    {
        title : "first blog",
        tag:"Competitive Programming",
        description : `this is basic description of first blogs and so on
        this is basic description of first blogs and so on this is basic 
        description of first blogs and so on this is basic description of 
        first blogs and so on this is basic description of first blogs and so on
        this is basic description of first blogs and so on
        this is basic description of first blogs and so on this is basic 
        description of first blogs and so on this is basic description of 
        first blogs and so on this is basic description of first blogs and so on`
    },
    {
        title : "second blog",
        tag : "Machine Learning",
        description : `this is basic description of first blogs and so on
        this is basic description of first blogs and so on this is basic 
        description of first blogs and so on this is basic description of 
        first blogs and so on this is basic description of first blogs and so on
        this is basic description of first blogs and so on
        this is basic description of first blogs and so on this is basic 
        description of first blogs and so on this is basic description of 
        first blogs and so on this is basic description of first blogs and so on`
    },
    {
        title : "third blog",
        tag : "competitive programing",
        description : `this is basic description of first blogs and so on
        this is basic description of first blogs and so on this is basic 
        description of first blogs and so on this is basic description of 
        first blogs and so on this is basic description of first blogs and so on
        this is basic description of first blogs and so on
        this is basic description of first blogs and so on this is basic 
        description of first blogs and so on this is basic description of 
        first blogs and so on this is basic description of first blogs and so on`
    }
]

export default function Recent(){
    return(
        <div>
            {blogs.map((blog : Blog) => {
                return(
                    <div className="py-2">
                        <span className="text-lg"> {blog.title} </span> 
                        <span className="text-xs"> {blog.tag} </span> <br/>
                        <p className="text-sm"> {blog.description.substring(0, 200) + "..."} </p>
                    </div>
                )
            })}
            
        </div>
    )
}