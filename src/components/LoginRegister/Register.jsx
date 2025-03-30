import { useState } from "react";
import "./Register.css";
import FormRegister from "../../components/Forms/FormLoginRegister/FormRegister";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-page-left">
        </div>

        <div className="register-page-right">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;