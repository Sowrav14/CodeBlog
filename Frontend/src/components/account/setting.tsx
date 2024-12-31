import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import FormControl from "@mui/material/FormControl";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const updateSuccessful = <CheckCircleIcon color="success" />;
const updateUnsuccessful = <ErrorIcon sx={{ color: "red" }} />;


interface Password{
	value : string;
	setValue : (e:any) => void;
	label : string;
}
function PasswordField({value, setValue, label} : Password) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{mt:2, width: "100%" }} variant="outlined">
      <label> {label} </label>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        placeholder={"Enter " + label}
				value={value}
				onChange={setValue}
      />
    </FormControl>
  );
}


export default function Setting() {
  const [snackOpen, setSnackopen] = useState<boolean>(false);
  const [snackSuccess, setSnacksuccess] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
	const [oldPass, setOldpass] = useState("");
	const [newPass, setNewpass] = useState("");
	const [confirmPass, setConfirmpass] = useState("");


	const handleOldpass = (e : any) => setOldpass(e.target.value)
	const handleNewpass = (e : any) => setNewpass(e.target.value)
	const handleConfirmpass = (e : any) => setConfirmpass(e.target.value)

  
  const handleSave = () => {
		console.log(oldPass, newPass, confirmPass);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleSnackopen();
      setSnacksuccess(false);
    }, 5000);
  };

  const handleSnackopen = () => {
    setSnackopen(true);
  };

  const handleSnackclose = (
    //@ts-ignore
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackopen(false);
  };

  return (
    <div>
      <div>
        <p className=" border-b-2 text-green-900 font-semibold"> Reset Password </p>

				<PasswordField value={oldPass} setValue={handleOldpass} label="Current Password"/>
				<PasswordField value={newPass} setValue={handleNewpass} label="New Password"/>
				<PasswordField value={confirmPass} setValue={handleConfirmpass} label="Confirm New Password" />
      </div>

      <div className="w-full p-2 pt-8 text-center">
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
  );
}
