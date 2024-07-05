import { createContext, useContext, useState, useEffect } from "react";
import users  from "../util/data";

const AppContext = createContext({})

export function AppContextProvider({ children }) {
    // THEME

    const [theme, setTheme] = useState(() => localStorage.theme === "dark");

    function handleToggleTheme() {
        setTheme(!theme)
    }

    useEffect(() => {
        const rootElement = window.document.documentElement
        const currentTheme = theme

        const prevTheme = currentTheme ? "light" : "dark"
        rootElement.classList.remove(prevTheme)

        const nextTheme = currentTheme ? "dark" : "light"
        rootElement.classList.add(nextTheme)

        localStorage.setItem("theme", nextTheme)
    }, [theme])

    // MODAL

    const [modal, setModal] = useState({
        state: false,
        title: "",
        message: "",
        children: null,
        buttons: [
            {
                text: "",
                function: undefined,
                reload: false,
                redirect: "",
                custom: false
            }
        ]
    });

    // INFOS

    const tokenLoggedUser = localStorage.getItem("tokenLoggedUser") || undefined;
    const userString = localStorage.getItem("userData") || undefined;
    const user = userString && JSON.parse(userString);

    // LOADING PAGE

    const [loadingScreen, setLoadingScreen] = useState(false);

    // TOKEN

    function generateToken(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < length; i++) {
            token += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return token;
    }

    // LOGIN

    function handleLogin(data) {
        setLoadingScreen(true);

        const loggedInUser = users.find(
            (user) => user.email === data.email && user.password === data.password
        );

        if (loggedInUser) {
            const token = generateToken(16);
            localStorage.setItem('tokenLoggedUser', token);
            
            const userData = {
                id: loggedInUser.id,
                name: loggedInUser.name,
                email: loggedInUser.email,
                phone: loggedInUser.phone,
                address: loggedInUser.address,
                occupation: loggedInUser.occupation,
                birthdate: loggedInUser.birthdate,
                gender: loggedInUser.gender,
                hobbies: loggedInUser.hobbies,
                avatar: loggedInUser.avatar
            };
            localStorage.setItem('userData', JSON.stringify(userData));

            setTimeout(() => {
                setLoadingScreen(false);
            }, 500);
        } else {
            setModal({
                state: true,
                title: 'Ops!',
                message: 'E-mail ou senha incorretos.',
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "",
                    }
                ]
            });

            setTimeout(() => {
                setLoadingScreen(false);
            }, 500);
        }
    }

    // LOGOUT

    function handleLogout() {
        localStorage.removeItem('tokenLoggedUser');
        localStorage.removeItem('userData');
        window.location.reload();
    }

    // CONTACT

    function handleContact(data) { 
        setLoadingScreen(true);

        if (data.name !== '' && data.email !== '' && data.message !== '') {
            setModal({
                state: true,
                title: 'Sucesso!',
                message: 'Sua mensagem foi enviada.',
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "",
                    }
                ]
            });

            setTimeout(() => {
                setLoadingScreen(false);
            }, 500);
        } else {
            setModal({
                state: true,
                title: 'Ops!',
                message: 'Houve um problema, tente novamente.',
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "",
                    }
                ]
            });

            setTimeout(() => {
                setLoadingScreen(false);
            }, 500);
        }
    }

    return (
        <AppContext.Provider value={{
            theme,
            handleToggleTheme,

            modal,
            setModal,

            loadingScreen,

            tokenLoggedUser,
            user,

            handleLogin,
            handleLogout,
            handleContact
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)