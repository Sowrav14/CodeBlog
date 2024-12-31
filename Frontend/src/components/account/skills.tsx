

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
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const updateSuccessful = (
    <CheckCircleIcon color='success'/>
);
const updateUnsuccessful = (
    <ErrorIcon sx={{color:'red'}}/>
);


const mySkills : string[] = ['C', 'C++', 'Python', 'Java', 'Javascript', 'Go'];

export default function Skill() {

	const [snackOpen, setSnackopen] = useState<boolean>(false);
	const [snackSuccess, setSnacksuccess] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [skills, setSkills] = useState<string[]>([...mySkills])
    const [selected, setSelected] = useState<number>(-1);
    const [editing, setEditing] = useState<boolean>(false);
    const [formSkill, setFormskill] = useState<string>("");

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
        setFormskill(skills[id]);
    }

    const handleNew = ()=>{
        setEditing(true);
        setSelected(skills.length);
        setFormskill("");
    }

    const handleAdd = () => {
        // console.log(id);
        console.log(selected);
        if(selected == skills.length){
            // organs.push(formOrgan);
            setSkills([...skills, formSkill]);
        } else{
            setSkills(
                skills.map( (skill, id) => {
                    return id == selected ? formSkill : skill;
                })
            )
        }
        setEditing(false);
        setSelected(-1);
    }

    const handleDelete = () => {
        if(selected != skills.length){
            //@ts-ignore
            const temp = skills.filter((skill, id) => id != selected);
            setSkills(temp);
        }
        setEditing(false);
        setSelected(-1);
    }


	return (
		<div className='w-full'>
            {/* show all organization  */}
            <Box sx={{ flexGrow: 1, padding:1 }}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {skills.map((skill, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item onClick={()=>handleEdit(index)}>{skill}</Item>
                    </Grid>
                    ))}
                </Grid>
            </Box>
            
            {/* form for add new or edit existing  */}
            { selected != -1 &&  <div className='p-4 mt-4 border-2'>
                <label>  Skill </label>
                <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    size='small'
                    sx={{mb:2}}
                    className='w-full'
                    value={formSkill}
                    onChange={(e) => setFormskill(e.target.value)}
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