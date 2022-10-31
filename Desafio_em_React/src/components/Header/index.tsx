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
                <div>
                    <ImageLogo src={imageLogo} alt='stackx' />
                </div>
            </Content>
        </Container>
    )
}