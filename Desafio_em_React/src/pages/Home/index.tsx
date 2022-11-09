import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header'
import { List } from '../../components/ListTech'
import { Container, Section } from './styles';

export function Home() {

    const [title, setTitle] = useState(`
        Olá, meu nome é Leonardo Santos e eu sou um desenvolvedor Front-End, Tecnologias que tenho experiência:
    `);

    return (
        
        <Container>
            <Header />
            
            <Section >    
                <div>
                    <h1> {title} </h1>

                </div>
                    <List changeTitle={setTitle} />
            </Section>
            
            <Footer changeTitle={setTitle} />

        </Container>
    )
}