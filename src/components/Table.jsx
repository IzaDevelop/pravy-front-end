import moment from "moment"
import { useAppContext } from "../context/AppContext"

export function Table() {
    const { user } = useAppContext()

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm bg-custom-gray">
                <dl className="-my-3 divide-y divide-gray-200 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">E-mail</dt>
                        <dd className="sm:col-span-2">{user.email}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Telefone</dt>
                        <dd className="sm:col-span-2">{user.phone}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Profissão</dt>
                        <dd className="sm:col-span-2">{user.occupation}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Aniversário</dt>
                        <dd className="sm:col-span-2">{moment(user.birthdate).format('DD/MM/YYYY')}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Gênero</dt>
                        <dd className="sm:col-span-2">{user.gender}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Hobbies</dt>
                        <dd className="sm:col-span-2">{user.hobbies}</dd>
                    </div>
                </dl>
            </div>

            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm bg-custom-gray">
                <dl className="-my-3 divide-y divide-gray-200 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">CEP</dt>
                        <dd className="sm:col-span-2">{user.address.zipcode}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Rua</dt>
                        <dd className="sm:col-span-2">{user.address.street}, N° {user.address.number}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Bairro</dt>
                        <dd className="sm:col-span-2">{user.address.neighborhood}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Cidade</dt>
                        <dd className="sm:col-span-2">{user.address.city}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">Estado</dt>
                        <dd className="sm:col-span-2">{user.address.state}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium">País</dt>
                        <dd className="sm:col-span-2">{user.address.country}</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}