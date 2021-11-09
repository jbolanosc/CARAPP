import React, { useState } from "react";
import ReusableForm from "../../Components/Forms/AuthForm";

export default function Login() {
  const [register, setRegister] = useState<boolean>(false);

  const handleClick = () => {
    setRegister(!register);
  };

  return <ReusableForm register={register} setRegister={handleClick} />;
}
