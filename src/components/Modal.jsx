import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export function Modal() {
    const { modal, setModal } = useAppContext();

    const navigate = useNavigate();

    function handleCloseModal(row) {
        row.reload && window.location.reload();

        row.redirect && navigate(row.redirect);

        setModal({
            state: false,
            title: "",
            message: "",
            children: null,
            buttons: [
                {
                    text: "",
                    function: undefined,
                    reload: false,
                    redirect: ""
                }
            ]
        });
    }

    function extraFunction(row) {
        row.reload && window.location.reload();

        row.redirect && navigate(row.redirect);

        row.function()
    }

    return (
        <div className="w-full h-screen fixed inset-0 bg-dark/50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-sm h-auto rounded-lg flex flex-col p-5">
                <header className="relative flex justify-center text-semibold">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6" dangerouslySetInnerHTML={{ __html: modal.title }} />
                </header>

                <div className="flex-1 flex items-center justify-center text-center text-lg py-5">
                    {modal.message !== "" ? (
                        <div
                            dangerouslySetInnerHTML={{ __html: modal.message }}
                        ></div>
                    ) : (
                        <>{modal.children}</>
                    )}
                </div>
                <footer className="flex gap-5 justify-center text-sm">
                    {modal.buttons.map((row, index) => (
                        <button key={index}
                            onClick={!row.function ? () => handleCloseModal(row) : () => extraFunction(row)}
                            className={`rounded-lg px-5 py-2 transition-colors bg-separator`}
                        >
                            {row.text}
                        </button>
                    ))}
                </footer>
            </div>
        </div>
    )
} 