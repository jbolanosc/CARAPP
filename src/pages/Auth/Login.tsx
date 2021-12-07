import React, { useState } from "react";
import ReusableForm from "../../Components/Forms/AuthForm";
import SnackbarNotification from "../../Components/Notifications/SnackBar";

export default function Login() {
  const [register, setRegister] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);

  const handleRegisterClick = () => {
    setRegister(!register);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return <ReusableForm register={register} setRegister={handleRegisterClick} />;
}
