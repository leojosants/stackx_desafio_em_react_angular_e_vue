import { Header} from '../../components/Header'
import { Technologies } from '../../components/Technologies'
import { useEffect, useState } from 'react';
import { 
    Container,
    Content,
 } from './styles'

export function Home() {

    return (
        <Container>
            <Header />
            <Content>

                <p>Título</p>

                <Technologies nome='leo' text='developer'  />

            </Content>
        </Container>
    )
}