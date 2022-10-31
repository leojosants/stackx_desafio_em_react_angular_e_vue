// 

import {
    Container,
    // Content
} from './styles';

import { Header } from '../../components/Header';
import { Languages } from '../../components/Languages';

export function Home() {
    
    return (
        <Container>
            <Header />
            <Languages />
            

            <div>
                idiomas
            </div>

            {/* <Content>    
                <h1>www</h1>
            </Content>  */}

        </Container>
    )
}