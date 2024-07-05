import { ChatCircle, Globe, Suitcase, User } from "@phosphor-icons/react";

export function Card(props) {
    return (
        <div className={`bg-client-gray rounded-xl duration-300 transform hover:-translate-y-2 shadow-md px-5 py-8 group ${props.title === 'Cultura e Criatividade' ? 'hover:bg-custom-red' : props.title === 'Inovação Constante' ? 'hover:bg-custom-green' : props.title === 'Aprendizado Contínuo' ? 'hover:bg-custom-blue' : props.title === 'Bem-Estar Holístico' ? 'hover:bg-custom-yellow' : props.title === 'Exportar' ? 'hover:bg-purple-500' : ''}`}>
            {props.title === 'Cultura e Criatividade' && <div className="text-white bg-custom-red group-hover:bg-white group-hover:text-custom-red rounded-lg w-10 h-10 flex items-center justify-center mb-5"><Globe size={32} /></div>}

            {props.title === 'Inovação Constante' && <div className="text-white bg-custom-green group-hover:bg-white group-hover:text-custom-green rounded-lg w-10 h-10 flex items-center justify-center mb-5"><Suitcase size={32} /></div>}

            {props.title === 'Aprendizado Contínuo' && <div className="text-white bg-custom-blue group-hover:bg-white group-hover:text-custom-blue rounded-lg w-10 h-10 flex items-center justify-center mb-5"><ChatCircle size={32}/></div>}
            
            {props.title === 'Bem-Estar Holístico' && <div className="text-white bg-custom-yellow group-hover:bg-white group-hover:text-custom-yellow rounded-lg w-10 h-10 flex items-center justify-center mb-5"><User size={32} /></div>}
            
            <h6 className="text-xl mb-2 font-semibold leading-5 group-hover:text-white" dangerouslySetInnerHTML={{ __html: props.title }}/>
            <p className="text-body group-hover:text-white" dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
    )
}