import { useAppContext } from "../context/AppContext"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Modal } from "./Modal"

export function Layout(props) {
    const { modal } = useAppContext();

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="h-auto w-full flex flex-col flex-1 p-5 mx-auto max-w-screen-xl">
                {props.children}
            </main>
            <Footer/>

            {modal.state && <Modal />}
        </div>
    )
} 