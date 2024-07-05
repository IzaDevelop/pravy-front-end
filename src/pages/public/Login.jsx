import { useState } from "react";
import { LogoDark } from "../../assets";
import { Email } from "../../components/form/Email";
import { Password } from "../../components/form/Password";
import { useAppContext } from "../../context/AppContext";
import { Modal } from "../../components/Modal";

export function Login() {
    const { handleLogin, tokenLoggedUser, modal, loadingComponent } = useAppContext()

    const [fields, setFields] = useState({
        username: "",
        current_password: "",
    });
    const [conditionsPassword, setConditionsPassword] = useState({
        minLength: false,
        upperCase: false,
        lowerCase: false,
        digit: false,
        specialChar: false
    });
    const [messageEmail, setMessageEmail] = useState(false);
    const [messagePass, setMessagePass] = useState(false);

    const dataLogin = {
        email: fields.username,
        password: fields.current_password
    };

    const onFieldsChange = (event) => {
        let value = event.target.value;
        setFields({ ...fields, [event.target.id]: value });
    };

    function handleValidationEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function handleValidationPassword(password) {
        const minLength = 6;
        const upperCase = /[A-Z]/.test(password);
        const lowerCase = /[a-z]/.test(password);
        const digit = /[0-9]/.test(password);
        const specialChar = /[!@#$%^&*]/.test(password);

        return password.length >= minLength && upperCase && lowerCase && digit && specialChar;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (fields.username !== "") {
            if (handleValidationEmail(fields.username)) {
                setMessageEmail(false);
            } else {
                setMessageEmail(true);
            }
        }

        if (fields.current_password !== "") {
            setConditionsPassword({
                minLength: fields.current_password.length >= 6,
                upperCase: /[A-Z]/.test(fields.current_password),
                lowerCase: /[a-z]/.test(fields.current_password),
                digit: /[0-9]/.test(fields.current_password),
                specialChar: /[!@#$%^&*]/.test(fields.current_password)
            });

            if (handleValidationPassword(fields.current_password)) {
                setMessagePass(false);
            } else {
                setMessagePass(true);
            }
        }

        if (!messageEmail && !messagePass) {
            handleLogin(dataLogin)
            if (tokenLoggedUser) {
                navigate("/");
            } 
        }
    }

    return (
        <article className="bg-custom-darkBlue text-custom-darkBlue h-screen flex flex-col items-center justify-center gap-10 p-5">
            <section className="bg-white w-full max-w-lg p-10 rounded">
                <div className="flex flex-col gap-5 items-center text-center pb-5">
                    <img src={LogoDark} alt="" className="max-w-xs" />
                    <small className="text-body text-sm">Preencha os dados abaixo para fazer login.</small>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col space-y-3">
                    <Email
                        id="username"
                        label="E-mail"
                        placeholder="email@exemplo.com"
                        onChange={onFieldsChange}
                        value={fields.username}
                        required
                    />
                    {messageEmail && (
                        <span className="text-xs text-alert">Por favor, insira um endereço de e-mail válido</span>
                    )}

                    <Password
                        id="current_password"
                        label="Senha"
                        placeholder="digite sua senha"
                        onChange={onFieldsChange}
                        value={fields.current_password}
                        required
                    />
                    {messagePass && (
                        <ul className="text-xs text-alert">
                            {!conditionsPassword.minLength && <li>A senha deve ter pelo menos 6 caracteres.</li>}
                            {!conditionsPassword.upperCase && <li>A senha deve ter pelo menos uma letra maiúscula.</li>}
                            {!conditionsPassword.lowerCase && <li>A senha deve ter pelo menos uma letra minúscula.</li>}
                            {!conditionsPassword.digit && <li>A senha deve ter pelo menos um número.</li>}
                            {!conditionsPassword.specialChar && <li>A senha deve ter pelo menos um caractere especial (!@#$%^&*).</li>}
                        </ul>
                    )}

                    <div className="flex justify-center items-center pt-5">
                        <button
                            type="submit"
                            className="w-full h-11 rounded bg-custom-blue text-black cursor-pointer font-semibold"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </section>
            {modal.state && <Modal />}
        </article>
    );
}