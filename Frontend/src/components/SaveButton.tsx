
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import { useAppSelector } from "../reduxStore/hooks";

const updateSuccessful = <CheckCircleIcon color="success" />;
const updateUnsuccessful = <ErrorIcon sx={{ color: "red" }} />;

export default function SaveLoader() {
	const [snackOpen, setSnackopen] = useState<boolean>(false);
  const [snackSuccess, setSnacksuccess] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const count = useAppSelector(state => state.counter)
  

  const handleSave = () => {
    console.log(count);
    // handleSnackopen();
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
    <div className="w-full p-2 pt-8 text-center">
      <LoadingButton
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
  );
}
