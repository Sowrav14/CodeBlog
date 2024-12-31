import Avatar from '@mui/material/Avatar';

interface Features{
    name : string;
    category : string;
    description : string;
}


export default function FeaturedBlog({name, category, description} : Features){
    return(
        <div className='hover:shadow-lg hover:shadow-slate-600'>
            <div className='flex items-center gap-2 mt-4'>
                <Avatar sx={{height:20, width:20}} alt="Sharp" src="/static/images/avatar/1.jpg" />
                <span className='text-md font-semibold'> {name} </span>
                <span className='text-md'> in {category} </span>
            </div>
            <p className='text-2xl font-semibold'> {description} </p>
        </div>
    )
}