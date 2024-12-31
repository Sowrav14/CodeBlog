import Moreauthor from "../components/blog/author";
import Blogbody from "../components/blog/body";
import Bloghead from "../components/blog/heading";
import Divider from '@mui/material/Divider';
import Recommended from "../components/blog/recommended";

export default function Blog() {
  return (
    <div className="lg:w-3/4 mt-12 m-auto ">
      <Bloghead/>
      <Blogbody/>
      <br/> <br/>
      <p className="text-lg"> Thanks for reading this blog. Hope you have learnt someting from 
            this blog.
        </p>
      <p className="text-xl"> Let me know if you have any Queries </p>
      <br/> <br/>
      <Divider/>
      <br/>
      <Moreauthor/>
      <br/>
      <Divider/>
      <br/> 
      <Recommended/>
    </div>
  )
}
