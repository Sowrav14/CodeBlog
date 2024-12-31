import { Comment, EditCalendar, ThumbUp } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';



interface Blog{
    author : string;
    tag : string;
    title : string;
    description : string;
    time : string
    upvotes : number;
    comments : number;
    image : string;
}

const blog : Blog = {
    author : 'Sowrav Nath',
    tag : 'number theory',
    title : 'Sieve of Erathosthenes for Prime check, factorization and many more',
    description : `Sieve of erathosthenes is an algorithm to check if a number is 
                    prime or not. also we can get the smallest prime factor from 
                    this algorthm which ....`,
    time : '5 Aug 2024',
    upvotes: 41,
    comments : 14,
    image : 'https://www.americanexecutivecenters.com/wp-content/uploads/2016/06/Blog.jpg'
}

interface Blogid{
    id : number;
}

export default function Blog({id} : Blogid){
    return(
        <div className=" w-full p-4 shadow-lg rounded-lg shadow-slate-200 bg-slate-50">
            <div className=" w-full">
                <img src="https://www.americanexecutivecenters.com/wp-content/uploads/2016/06/Blog.jpg"/>
            </div>
            <div className="w-full">
                <div className='flex items-center gap-2 mb-2'>
                    <Avatar sx={{height:20, width:20}} alt="Sharp" src="/static/images/avatar/1.jpg" />
                    <span className='text-sm font-semibold'> {blog.author} </span>
                    <span className='text-sm'> in {blog.tag} </span>
                </div>
                <p className='text-md font-bold'> {blog.title.substring(0, 40)} </p>
                <p className='text-lg'> {blog.description.substring(0, 30) + "..."} </p>
                {/* <div className='flex item-center gap-12 mt-4 ml-4'>
                    <div className='flex item-center gap-4'>
                        <EditCalendar sx={{color:'grey'}}/> 
                        {blog.time} 
                    </div>
                    <div className='flex item-center gap-4'> 
                        <ThumbUp sx={{color:'grey'}}/>    
                        {blog.upvotes} 
                    </div>
                    <div className='flex item-center gap-4'>
                        <Comment sx={{color:'grey'}}/> 
                        {id}
                    </div>
                </div> */}
            </div>
        </div>
    )
}