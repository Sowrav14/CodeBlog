
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Welcome from './welcome';
import FeaturedBlog from './featuredBlog';


interface Features{
    name : string;
    category : string;
    description : string;
}

const featuring : Features[] = [
    {
        name : "Sowrav Nath",
        category : "Competitive Programming",
        description : "Something special about CP..."
    },
    {
        name : "Rakib Hasan",
        category : "Web Development",
        description : "Something special about WD..."
    },
    {
        name : "Sojib Brinto",
        category : "Machine Learning",
        description : "Something special about ML..."
    },
    {
        name : "AJ Faisal",
        category : "Academic",
        description : "Something special about EDU..."
    }
]



export default function Featured(){
    return(
        <div>
            <p className='text-md mb-4'> Todays picks </p>
            <Divider/>

            {
                featuring.map((feature)=>{
                    return(
                        <FeaturedBlog {...feature} />
                    )
                })
            }

            <Welcome/>
        </div>
    )
}