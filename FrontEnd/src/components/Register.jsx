import { useState } from "react";
import { useRegister } from "../shared/hooks";
import {
    emailValidateMessage,
    validateEmail,
    validatePassword,
    validatePasswordmessage,
    validateUsername,
    usernameValidateMessage,
    validateConfirmPassword,
    validateConfirmPasswordMessage,
} from "../shared/validators"

import { Input } from "./Input"
import { Logo } from "./Logo"

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();

    const [formState, setFormState] = useState({
        username: {
            value: "",
            isValid: false,
            showError: false,
        },
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
        passwordConfirm: {
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
            case "username":
                isValid = validateUsername(value);
                break;
            case "email":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            case "passwordConfirm":
                isValid = validateConfirmPassword(formState.password.value);
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

    const handleRegister = (event) => {
        event.preventDefault();
        register(formState.username.value, formState.email.value, formState.password.value);
    };

    const isSubmitButtonDisabled =
        isLoading || !formState.username.isValid || !formState.email.isValid || !formState.password.isValid;

    return (
        <div className="register-container">
            <Logo text={"Registro Kinal Cast"} />
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
                    field="username"
                    label="Username"
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMesagge={formState.username.showError}
                    validationMessage={usernameValidateMessage}
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
                <Input
                    field="passwordConfirm"
                    label="PasswordConfirm"
                    value={formState.passwordConfirm.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMesagge={formState.passwordConfirm.showError}
                    validationMessage={validateConfirmPasswordMessage}
                />

                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Crear
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                ya tienes cuenta inicia sesion
            </span>
        </div>
    )
}
