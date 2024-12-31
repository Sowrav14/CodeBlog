
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


interface Profileinfo{
	phone : string;
    address : string;
    email : string;
    linkedIn : string;
    github : string;
    birthday : string;
    gender : string;
}

const updateSuccessful = (
  <CheckCircleIcon color='success'/>
);
const updateUnsuccessful = (
  <ErrorIcon sx={{color:'red'}}/>
);


export default function About() {

	const [snackOpen, setSnackopen] = useState<boolean>(false);
	const [snackSuccess, setSnacksuccess] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [profileInfo, setProfileinfo] = useState<Profileinfo>({
		phone: '+880 1815 947477',
        address : 'Noajishpur, Raozan, Chittagong',
        email : 'sowravnath05102002@gmail.com',
        github : 'sowravnath',
        linkedIn :'sowravnath',
        birthday : '2024-09-20',
        gender : 'Male'
	})

	const handleSave = () => {
		// console.log(profileInfo);
		// handleSnackopen();
		setLoading(true);
		setTimeout(() => {
            console.log(profileInfo);
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
            <div> 
                <p className='mb-4 border-b-2 text-green-900 font-semibold'> Contact Information </p>
                <label> Phone </label>
                <TextField
                    id="outlined-required1"
                    defaultValue={profileInfo.phone}
                    className='w-full'
                    sx={{width:'full', mb:2}}
                    onChange={(e)=>setProfileinfo({...profileInfo, phone:e.target.value})}
                />

                <label> Address </label>
                <TextField
                    id="outlined-required2"
                    defaultValue={profileInfo.address}
                    className='w-full'
                    sx={{width:'full', mb:2}}
                    onChange={(e)=>setProfileinfo({...profileInfo, address:e.target.value})}
                />

                <label> Email </label>
                <TextField
                    id="outlined-required3"
                    defaultValue={profileInfo.email}
                    className='w-full'
                    sx={{width:'full', mb:2}}
                    onChange={(e)=>setProfileinfo({...profileInfo, email:e.target.value})}
                />

                <label> Github Profile </label>
                <TextField
                    id="outlined-required4"
                    defaultValue={profileInfo.github}
                    className='w-full'
                    sx={{width:'full', mb:2}}
                    onChange={(e)=>setProfileinfo({...profileInfo, github:e.target.value})}
                />

                <label> LinkedIn Profile </label>
                <TextField
                    id="outlined-required5"
                    defaultValue={profileInfo.linkedIn}
                    className='w-full'
                    sx={{width:'full', mb:4}}
                    onChange={(e)=>setProfileinfo({...profileInfo, linkedIn:e.target.value})}
                />

                <p className='mb-4 border-b-2  text-green-900 font-semibold'> Personal Information </p>

                <label className='pr-12'> Date of Birth </label>
                <input
                    value={profileInfo.birthday}
                    onChange={(e)=> setProfileinfo({...profileInfo, birthday : e.target.value})}
                    type='date' 
                    className='border-[1.5px] border-slate-300 p-[0.8rem] w-full' 
                />
                <br/> <br/>

                <label className=' pr-14'> Gender </label>
                <Select
                    sx={{width:'100%'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={profileInfo.gender}
                    onChange={ (e)=> setProfileinfo({...profileInfo, gender:e.target.value})}
                >
                    <MenuItem value={'Male'}> Male </MenuItem>
                    <MenuItem value={'Female'}> Female </MenuItem>
                    <MenuItem value={'Prefer Not to say'}> Prefer Not to say </MenuItem>
                </Select>
            </div>

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