import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ShareIcon from '@mui/icons-material/Share';
import { Button, IconButton, Tooltip } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BlogContents = {
	title : "FREE SSL Certificate",
	description : "How to get FREE SSL Certificate for Website (HTTPS) ?",
	upvote : 14,
	comment : 4,
}
const ProfieContents = {
	name : "Sowrav Nath",
	follower : '14K',
	imageUrl : "https://res.cloudinary.com/dzu1eahgi/image/upload/v1726193460/pfszryfjfodanvg7y5jb.png"	
}



export default function Bloghead() {
	return (
		<div className='gap-4'>
			<p className='text-[4rem] font-bold'> {BlogContents.title} </p>
			<p className='text-xl font-semibold text-gray-700'> {BlogContents.description} </p>
			<br/>
			<Profileview/>
			<Interaction/>
		</div>
	)
}

function Profileview(){
	return(
		<div className='flex gap-4'>
			<Avatar
				alt={ProfieContents.name}
				src={ProfieContents.imageUrl}
				sx={{ width: 56, height: 56 }}
			/>
			<div >
				<p className='text-2xl font-bold text-blue-900'> 
					{ProfieContents.name}
					<Button color="success"> follow </Button>
				</p>
				<p> {ProfieContents.follower} followers </p>
			</div>
		</div>
	)
}

function Interaction(){
	return(
		<div className='flex justify-between border-y-[1px] my-8'>
			<div className='flex gap-8 text-center'>
				<p>
					<Tooltip title="Like">
						<IconButton>
							<ThumbUpIcon sx={{height:30, width:30}}/>
						</IconButton>
					</Tooltip>
					{BlogContents.upvote}
				</p>
				<p> 
					<Tooltip title="Message">
						<IconButton>
							<MapsUgcIcon sx={{height:30, width:30}}/>
						</IconButton>
					</Tooltip>
					{BlogContents.comment}  
				</p>
			</div>
			<div className='flex gap-8'>
				<Tooltip title="Bookmark">
					<IconButton>
						<BookmarkAddIcon sx={{height:30, width:30}}/>
					</IconButton>
				</Tooltip>
				<Tooltip title="Share">
					<IconButton>
						<ShareIcon sx={{height:30, width:30}}/>
					</IconButton>
				</Tooltip>
				<Tooltip title="More">
					<IconButton>
						<MoreHorizIcon sx={{height:30, width:30}}/>
					</IconButton>
				</Tooltip>
			</div>
		</div>
	)
}
