import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ReportIcon from '@mui/icons-material/Report';
import { styled } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import KeepMountedModal from '../message/modal';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#4169e1',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });


function StyledRatingButton(){
    return(
        <StyledRating
            name="connect"
            defaultValue={1}
            max={1}
            icon={<EmojiEmotionsIcon fontSize="inherit" />}
            emptyIcon={<EmojiEmotionsIcon fontSize="inherit" />}
            readOnly
            color='blue'
        />
    )
}


export default function Info(){

    const queryParams = useSearchParams();
    const name = queryParams[0].get('name');

    return(
        <div className=' lg:px-16 pt-8'>
            <div> 
                <span className=" text-4xl font-bold"> {name ? name : 'Sowrav Nath'} </span>
                <span className="text-md"> CUET </span> 
            </div>
            <p> Competitive Programmer </p>
            <br/>
            <Typography component="legend"> Ratings </Typography>
            <Rating name="read-only" value={2} readOnly /> 
            <br/> <br/>
            <p> Hi, I am a CS undergrad student from cuet. 
                Currently, I am focused on Competitive Programming.
                Also, I am looking for collaboration with other Programmer.
            </p>
            <br/>
            { name && 
            <Stack spacing={2} direction="row">
                <KeepMountedModal/>
                <Button variant="text"> <StyledRatingButton/> Connect </Button>
                <Button variant="text"> <ReportIcon/> Report User </Button>
            </Stack>
            }
        </div>
    )
}