import { Header} from '../../components/Header'
import { Technologies } from '../../components/Technologies'
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

                <Technologies />

                <div>Lista de Tecnologias</div>

                <div>
                    <div>Português</div>
                    <div>Ingles</div>
                    <div>Espanhol</div>
                </div>
            </Content>
        </Container>
    )
}