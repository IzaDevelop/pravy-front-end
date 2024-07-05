import { useAppContext } from "../../context/AppContext";
import { Layout } from "../../components/Layout";
import { Table } from "../../components/Table";

export function Home() {
    const { user } = useAppContext()

    return (
        <Layout>
            <article className="space-y-10">
                <section className="md:mx-auto sm:text-center">
                    <p className="text-custom-blue text-xs font-semibold tracking-wider">
                        Bem-vindo(a)
                    </p>

                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none md:mx-auto py-2 pb-5">
                        {user.name}
                    </h2>

                    <p className="text-alternate md:text-lg">
                        Lorem ipsum dolor sit amet consectetur varius est commodo.
                    </p>
                </section>

                <Table
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    birthdate={user.birthdate}
                    gender={user.gender}
                    occupation={user.occupation}
                    hobbies={user.hobbies}

                    zipcode={user.address.zipcode}
                    number={user.address.number}
                    street={user.address.street}
                    neighborhood={user.address.neighborhood}
                    city={user.address.city}
                    state={user.address.state}
                    country={user.address.country}
                />
            </article>
        </Layout>
    )
}