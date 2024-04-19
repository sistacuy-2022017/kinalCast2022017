import { useState } from "react";
import { useLogin } from "../shared/hooks";
import {
    emailValidateMessage,
    validateEmail,
    validatePassword,
    validatePasswordmessage,
} from "../shared/validators";
import { Input } from "./Input";
import { Logo } from "./Logo";

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
          case "email":
            isValid = validateEmail(value);
            break;
          case "password":
            isValid = validatePassword(value);
            break;
          default:
            break;
        }
     
        setFormState((prevState) => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            isValid: isValid,
            showError: !isValid,
          },
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();

        login(formState.email.value, formState.password.value);
    };

    const isSubmitButtonDisabled =
        isLoading || !formState.email.isValid || !formState.password.isValid;

    return (
        <div className="login-container">
            <Logo text={"Login Kinal Cast"} />
            <form className="auth-form">
                <Input
                    field="email"
                    label="Email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMesagge={formState.email.showError}
                    validationMessage={emailValidateMessage}
                />
                <Input
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMesagge={formState.password.showError}
                    validationMessage={validatePasswordmessage}
                />

                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    LOGIN
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Este es el componente de login
            </span>
        </div>
    );
};