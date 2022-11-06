import { Button } from '../../components/Button';
import { Header} from '../../components/Header'
import { List} from '../../components/List'
import { 
    Container,
    Content,
 } from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <div>
                    <h1>
                        Olá, meu nome é <strong>Leonardo Santos</strong>  e eu sou Desenvolvedor Full Stack Jr,<br/><strong>Tecnologias que tenho conhecimento:</strong>
                    </h1>
                </div>
                
                <List />
                <Button  />
            </Content>
        </Container>
    )
}