import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MessageIcon from '@mui/icons-material/Message';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
	const [loading, setLoading] = React.useState(false);
  
	function handleClick() {
		setLoading(true);
    setTimeout(() => {
			setLoading(false);
			setOpen(false);
		}, 5000);
  }

  return (
    <div>
      <Button onClick={handleOpen}> <MessageIcon/> Send Message </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
					<label> MESSAGE </label>
					<TextField
						id="outlined-multiline-flexible"
						multiline
						rows={5}
						maxRows={10}
						className='w-full'
						sx={{mb:2, bgcolor:'#DAEDBD'}}
					/>
					<LoadingButton
						onClick={handleClick}
						endIcon={<SendIcon />}
						loading={loading}
						loadingPosition="end"
						variant="contained"
						className='float-end'
        	>
          	Send
        	</LoadingButton>
        </Box>
      </Modal>
    </div>
  );
}
