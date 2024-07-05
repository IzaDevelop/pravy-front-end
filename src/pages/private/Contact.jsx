import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Text } from "../../components/form/Text";
import { Email } from "../../components/form/Email";
import { useAppContext } from "../../context/AppContext";
import { TextArea } from "../../components/form/TextArea";

export function Contact() {
    const { user, handleContact } = useAppContext()

    const [fields, setFields] = useState({
        name: "",
        username: "",
        message: "",
    });
    const [messageName, setMessageName] = useState(false);
    const [messageEmail, setMessageEmail] = useState(false);
    const [messageText, setMessageText] = useState(false);

    const dataContact = {
        name: fields.username,
        email: fields.username,
        message: fields.message
    };

    const onFieldsChange = (event) => {
        let value = event.target.value;
        setFields({ ...fields, [event.target.id]: value });
    };

    function handleValidationEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (fields.name !== "") {
            setMessageName(false);
        } else {
            setMessageName(true);
        }

        if (fields.username !== "") {
            if (handleValidationEmail(fields.username)) {
                setMessageEmail(false);
            } else {
                setMessageEmail(true);
            }
        }

        if (fields.message !== "") {
            setMessageText(false);
        } else {
            setMessageText(true);
        }

        if (!messageName && !messageEmail && !messageText) {
            handleContact(dataContact)
        }
    }

    useEffect(() => {
        setFields({
            ...fields,
            name: user?.name || "",
            username: user?.email || "",
        })
    }, [user])

    return (
        <Layout>
            <article className="space-y-5">
                <section className="md:mx-auto sm:text-center">
                    <p className="text-custom-blue text-xs font-semibold tracking-wider">
                        Contato
                    </p>

                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none md:mx-auto py-2 pb-5">
                        Nós envie sua mensagem
                    </h2>

                    <p className="text-alternate md:text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos itaque architecto odio consectetur provident doloremque saepe tempore aliquid praesentium rerum voluptatum tempora nostrum repellat debitis, ut quas ab, quae nam.
                    </p>
                </section>

                <section className="relative flex flex-col items-center bg-white border border-separator rounded shadow-sm xl:flex-row">
                    <form onSubmit={handleSubmit} className="w-full p-6 py-8 sm:p-12 xl:w-1/2 space-y-5">
                        <Text
                            id="name"
                            label="Nome"
                            onChange={onFieldsChange}
                            value={fields.name}
                            placeholder="Digite o seu nome"
                            required
                        />
                         {messageName && (
                            <span className="text-xs text-alert">Por favor, insira o seu nome</span>
                        )}

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

                        <TextArea
                            id="message"
                            label="Mensagem"
                            placeholder="Sua mensagem..."
                            onChange={onFieldsChange}
                            value={fields.message}
                            required
                        />
                        {messageText && (
                            <span className="text-xs text-alert">Por favor, insira a mensagem para realizar o envio</span>
                        )}

                        <div className="flex justify-center items-center pt-5">
                            <button
                                type="submit"
                                className="w-full h-11 rounded bg-custom-blue text-black cursor-pointer font-semibold"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>

                    <div className="flex w-full xl:w-1/2">
                        <div className="relative hidden h-auto xl:block">
                            <svg viewBox="0 0 190 1440" className="w-16 h-full text-gray-300" preserveAspectRatio="none" strokeWidth="0"><path d="M-0.000203125 6.34766e-06H190V1440H-0.000203125C-0.000203125 1440 113.574 1059.66 114.317 699.623C115.06 339.589 -0.000203125 6.34766e-06 -0.000203125 6.34766e-06Z" fill="currentColor"></path></svg>
                        </div>
                        <div className="w-full hidden xl:flex justify-center bg-gray-300 lg:py-0 xl:rounded-r sm:pl-2 xl:pl-0">
                            <img src="https://kitwind.io/static/7277c9785e82b31b79de9c72e716bce1/8309f/human.png" alt="" />
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
    )
}