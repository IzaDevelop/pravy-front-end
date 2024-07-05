import { useAppContext } from "../context/AppContext";
import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

export function Header() {
    const { user, handleLogout } = useAppContext()

    const [openMenu, setOpenMenu] = useState(false);

    const refMenu = useRef(null);

    const handleClickOutside = (e) => {
        if (!refMenu.current?.contains(e.target)) {
            setOpenMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

    useEffect(() => {
        const rootElement = window.document.documentElement
        const currentTheme = openMenu

        const prevTheme = currentTheme ? "overflow-auto" : "overflow-hidden"
        rootElement.classList.remove(prevTheme)

        const nextTheme = currentTheme ? "overflow-hidden" : "overflow-auto"
        rootElement.classList.add(nextTheme)
    }, [openMenu])

    return (
        <header className="bg-dark text-white">
            <nav className="mx-auto max-w-screen-xl h-auto w-full relative p-5">
                <div className="flex flex-1 items-center justify-between">
                    <Link to={'/'} className="text-3xl font-black uppercase">
                        <img src={Logo} alt="" />
                    </Link>

                    <div className="hidden lg:flex gap-5 relative">
                        <Link to={'/'}>
                            Home
                        </Link>

                        <Link to={'/about'}>
                            Sobre
                        </Link>

                        <Link to={'/contact'}>
                            Contato
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-5 max-w-[200px]">
                        <img className="w-10 h-10 rounded-full" src={user.avatar} alt="user" />

                        <button onClick={() => handleLogout()} className="bg-custom-blue text-black font-medium rounded-lg px-5 py-2">
                            Sair
                        </button>
                    </div>

                    <div className="flex items-center gap-5 h-full lg:hidden">
                        <div className="block lg:hidden">
                            <button
                                onClick={() => setOpenMenu(!openMenu)}
                                className="bg-client-secondary flex items-center justify-center rounded">
                                {openMenu ? (
                                    <X size={30} className="text-white" />
                                ) : (
                                    <List size={30} className="text-white" />
                                )}
                            </button>
                        </div>

                        <div className={`bg-dark absolute top-full left-0 w-full h-auto z-10 lg:hidden ${openMenu ? "block" : "hidden"}`} ref={refMenu}>
                            <div className="flex flex-col px-5 pb-5 space-y-3">
                                <Link to={'/'}>
                                    Home
                                </Link>

                                <Link to={'/about'}>
                                    Sobre
                                </Link>

                                <Link to={'/contact'}>
                                    Contato
                                </Link>

                                <button onClick={() => handleLogout()} className="font-medium text-center text-black bg-custom-blue rounded-lg py-2">
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}