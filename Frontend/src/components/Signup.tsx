import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react'
import { blue } from '@mui/material/colors';

interface Toggle {
    handleToggle : ()=>void;
}

export default function Singup( {handleToggle} : Toggle ){

	const [loading, setLoading] = useState(false);
	function handleClick(){
		setLoading(true);

		setTimeout(()=>{
			setLoading(false);
		}, 4000);
	}


	return(
        <div className="h-[400px] w-[350px] lg:h-[500px] lg:w-[900px] m-auto flex justify-center items-center bg-cover  bg-[url('https://wallpaperaccess.com/full/1119441.jpg')]">
			<div className="lg:h-[400px] lg:w-[800px] h-[400px] w-[350px] flex ">
                {/* quote */}
                <div className="h-full lg:w-1/2 w-0 bg-cover bg-[url('https://wpart.org/wp-content/uploads/2016/10/talk-is-cheap-show-me-the-code.-linus-torvalds.jpg')] " >
				</div>
                {/* signin */}
				<div className="h-full lg:w-1/2 w-full  p-8 shadow-xl bg-white">
					<p className='text-4xl font-bold text-blue-800'> Sign Up </p>
					<p className='text-lg font-semibold mb-8'> Welcome to Code-blog </p>
					<TextField
						id="standard-password-input"
						required
						label="Email"
						type="text"
						autoComplete="current-password"
						variant="standard"
						placeholder='Sowravnath14@gmail.com'
						sx={{mb:1}}
						className='w-full'
					/>
					<TextField
						id="standard-password-input"
						required
						label="Password"
						type="password"
						autoComplete="current-password"
						variant="standard"
						placeholder=''
						sx={{mb:1}}
						className='w-full'
					/>
					<TextField
						id="standard-password-input"
						required
						label="Confirm Password"
						type="password"
						autoComplete="current-password"
						variant="standard"
						placeholder=''
						sx={{mb:2}}
						className='w-full'
					/>
					<LoadingButton
						onClick={handleClick}
						endIcon={<SendIcon />}
						loading={loading}
						loadingPosition="end"
						variant="contained"
						sx={{ml:12, mb:2, bgcolor:blue[800]}}
					>
						Submit
					</LoadingButton>
					<br/>
					<span> Member of Code-blog? </span>
					<span onClick={handleToggle} className='text-blue-800 text-lg font-semibold underline cursor-pointer'> Sign In</span>
				</div> 
			</div>
		</div>
	)
}