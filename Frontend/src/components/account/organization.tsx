

import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';


interface Organ{
	name : string;
    role : string;
    address : string;
    startDate : string;
}

const organs : Organ[] = [
    {
        name : "CUET",
        role : "Student CSE",
        address : "Raozan, Chittagong",
        startDate : "2021-03-01"
    },
    {
        name : "CUET",
        role : "Student CSE",
        address : "Raozan, Chittagong",
        startDate : "2021-03-01"
    }
]

const updateSuccessful = (
  <CheckCircleIcon color='success'/>
);
const updateUnsuccessful = (
  <ErrorIcon sx={{color:'red'}}/>
);

function Workcart({name, role, address, startDate} : Organ){
    return(
        <div className="pt-2 hover:shadow-md">
            <p className="text-lg font-semibold"> {name} </p>
            <p className="text-xs text-blue-600"> {role} </p>
            <p className="text-sm text-gray-600"> {address} </p>
            <p className="text-sm text-gray-600"> {startDate} </p>
        </div>
    )
}


export default function Organization() {

	const [snackOpen, setSnackopen] = useState<boolean>(false);
	const [snackSuccess, setSnacksuccess] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [organizations, setOrganizations] = useState<Organ[]>([...organs])
    const [selected, setSelected] = useState<number>(-1);
    const [editing, setEditing] = useState<boolean>(false);
    const [formOrgan, setFormorgan] = useState<Organ>({
        name : '',
        role : '',
        address : '',
        startDate : ''
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

    const handleEdit = (id : number)=>{
        if(selected != -1) return;
        setSelected(id);
        setEditing(true);
        setFormorgan(organizations[id]);
    }

    const handleNew = ()=>{
        setEditing(true);
        setSelected(organizations.length);
        setFormorgan({
            name : '',
            role : '',
            address : '',
            startDate : ''
        });
    }

    const handleAdd = () => {
        // console.log(id);
        console.log(selected);
        if(selected == organizations.length){
            // organs.push(formOrgan);
            setOrganizations([...organizations, formOrgan]);
        } else{
            setOrganizations(
                organizations.map( (organization, id) => {
                    return id == selected ? {...formOrgan} : {...organization};
                })
            )
        }
        setEditing(false);
        setSelected(-1);
    }

    const handleDelete = () => {
        if(selected != organizations.length){
            //@ts-ignore
            const temp = organizations.filter((value, id) => id != selected);
            setOrganizations(temp);
        }
        setEditing(false);
        setSelected(-1);
    }


	return (
		<div className='w-full'>
            {/* show all organization  */}
            <div>
                {
                    organizations.map((organization, id) => {
                        return(
                            <div 
                                onClick={()=>{handleEdit(id)}}
                            >
                                <Workcart {...organization} />
                            </div>
                        )
                    })
                }
            </div>
            
            {/* form for add new or edit existing  */}
            { selected != -1 &&  <div className='p-4 mt-4 border-2'>
                <label> Organization Name </label>
                <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    size='small'
                    sx={{mb:2}}
                    className='w-full'
                    value={formOrgan.name}
                    onChange={(e) => setFormorgan({...formOrgan, name:e.target.value})}
                />

                <label> Your Role in Organization </label>
                <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    size='small'
                    sx={{mb:2}}
                    className='w-full'
                    value={formOrgan.role}
                    onChange={(e) => setFormorgan({...formOrgan, role:e.target.value})}
                />

                <label> Organization Address </label>
                <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    size='small'
                    sx={{mb:2}}
                    className='w-full'
                    value={formOrgan.address}
                    onChange={(e) => setFormorgan({...formOrgan, address:e.target.value})}
                />

                <label> Starting Date in Organization </label>
                <input
                    value={formOrgan.startDate}
                    onChange={(e)=> setFormorgan({...formOrgan, startDate : e.target.value})}
                    type='date' 
                    className='border-[1.5px] p-2 w-full' 
                />
            </div> }

            {/* Buttons for handling  */}
			<div className='w-full flex p-2 pt-8 justify-around text-center'>
                { !editing ? 
                    <Button 
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={handleNew}
                        color='success'
                    >
                        New
                    </Button>
                :
                    <Button 
                        variant="outlined"
                        startIcon={<CheckCircleOutlineIcon />}
                        onClick={handleAdd}
                        color='success'
                    >
                        Add
                    </Button>
                }

                { editing &&
                    <Button 
                        variant="outlined" 
                        startIcon={<DeleteIcon />}
                        onClick={handleDelete}
                        color='success'
                    >
                        Delete
                    </Button>
                }

				<LoadingButton
					size="small"
					color='success'
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