// 

import { 
    Container,
    Content,
    ImageLogo
 } from './styles';

 import imageLogo from '../../assets/icons/imagelogo.svg'

export function Header() {
    return (
        <Container>
            <Content>
                <ImageLogo src={imageLogo} alt='stackx' />
            </Content>
        </Container>
    )
}