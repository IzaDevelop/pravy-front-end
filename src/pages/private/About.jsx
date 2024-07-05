import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";

export function About() {
    return (
        <Layout>
            <article className="space-y-10">
                <section className="md:mx-auto sm:text-center">
                    <p className="text-custom-blue text-xs font-semibold tracking-wider">
                        Sobre
                    </p>

                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none md:mx-auto py-2 pb-5">
                        Descubra um pouco mais
                    </h2>

                    <p className="text-alternate md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum veniam magnam nobis veritatis aperiam sunt, beatae unde atque sequi nisi esse iure incidunt, impedit ipsum odio, iste dicta?
                        Hic repellendus soluta, natus explicabo fuga.
                    </p>
                </section>

                <section className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <Card
                        title={'Cultura e Criatividade'}
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in obcaecati corrupti.'}
                    />

                    <Card
                        title={'Inovação Constante'}
                        description={'Dolor laboriosam fugit maiores. Perferendis fuga, aspernatur magnam.'}
                    />

                    <Card
                        title={'Aprendizado Contínuo'}
                        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, enim sunt.'}
                    />

                    <Card
                        title={'Bem-Estar Holístico'}
                        description={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eum!.'}
                    />
                </section>
            </article>
        </Layout>
    )
}