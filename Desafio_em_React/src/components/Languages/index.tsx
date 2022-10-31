// 

import { 
    Container,
    // Content,
    // ImageLogo
 } from './styles';

 import imageLogo from '../../assets/icons/imagelogo.svg'
import { useState } from 'react';

export function Languages() {

    const [teste] = useState([]);

    return (
        <Container>
            <p>
                Olá, meu nome é Leonardo Santos, sou Desenvolvedor Full Stack Jr,
                Tecnologias que tenho experiência:
            </p>

            {/* <Content>
                <ImageLogo src={imageLogo} alt='stackx' />
            </Content> */}
        </Container>
    )
}