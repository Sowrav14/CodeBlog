
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface Profileinfo{
	name : string;
	organization : string;
	tag : string;
	introduction : string;
	image : string;
}

const updateSuccessful = (
  <CheckCircleIcon color='success'/>
);
const updateUnsuccessful = (
  <ErrorIcon sx={{color:'red'}}/>
);


export default function Profile() {

	const [snackOpen, setSnackopen] = useState<boolean>(false);
	const [snackSuccess, setSnacksuccess] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [profileInfo, setProfileinfo] = useState<Profileinfo>({
		name : "Sowrav Nath",
		organization : "CUET",
		tag : "Competitive Programmer",
		introduction : `Hi, I am a CS undergrad student from cuet.Currently, I am focused on Competitive Programming. Also, I am looking for collaboration with other Programmer.`,
		image : 'https://res.cloudinary.com/dzu1eahgi/image/upload/v1726193460/pfszryfjfodanvg7y5jb.png'
	})

	const handleSave = () => {
		// console.log(profileInfo);
		// handleSnackopen();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			handleSnackopen();
			setSnacksuccess(false);
		}, 5000);
	}

	const handleSnackopen = () => {
    setSnackopen(true);
  };

	const handleSnackclose = (
		//@ts-ignore
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackopen(false);
  };


	return (
		<div className='w-full'>
			<div className='lg:flex'>

				<div>
					<div className='h-[300px] w-[250px] flex justify-center align-middle'>
					<img  src={profileInfo.image}/>
					</div>
					<input type='file'
					
					onChange={(e)=>{
						const file = e.target.files;
						if(file){
							// console.log(file[0]);
							// console.log(URL.createObjectURL(file[0]));
							setProfileinfo({...profileInfo, image : URL.createObjectURL(file[0])});
						}
					}}/>
				</div>

				<div>
					<br/> <br/>
					<TextField
						required
						id="outlined-required1"
						label="Name"
						defaultValue={profileInfo.name}
						sx={{width:'full', mb:2}}
						className='w-full'
						onChange={(e)=>setProfileinfo({...profileInfo, name:e.target.value})}
					/>
					<TextField
						id="outlined-required2"
						label="@organization"
						defaultValue={profileInfo.organization}
						sx={{width:'full', mb:2}}
						className='w-full'
						onChange={(e)=>setProfileinfo({...profileInfo, organization:e.target.value})}
					/>
					<TextField
						id="outlined-required3"
						label="@tag"
						defaultValue={profileInfo.tag}
						className='w-full'
						onChange={(e)=>setProfileinfo({...profileInfo, tag:e.target.value})}
					/>
				</div>

			</div>

			<br/> <br/>
			<TextField
				multiline
				id="outlined-required4"
				label="Introduce yourself"
				defaultValue={profileInfo.introduction}
				rows={3}
				className='w-full'
				onChange={(e)=>setProfileinfo({...profileInfo, introduction:e.target.value})}
			/>
			<div className='w-full p-2 pt-8 text-center'>
				<LoadingButton
					size="small"
					color="success"
					onClick={handleSave}
					loading={loading}
					loadingPosition="start"
					startIcon={<SaveIcon />}
					variant="contained"
				>
					Save
				</LoadingButton>
				<Snackbar
					open={snackOpen}
					autoHideDuration={5000}
					onClose={handleSnackclose}
					message={snackSuccess ? "Successfull" : "Error"}
					action={snackSuccess ? updateSuccessful : updateUnsuccessful}
				/>

			</div>
		</div>
	)
}