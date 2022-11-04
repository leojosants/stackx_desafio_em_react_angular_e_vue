import { 
    Container,
    Content,
    ImageLogo
} from './styles';

import logoSvg from '../../assets/icons/logo.svg';

export function Header() {
    return(
        <Container>
            <Content>
                <ImageLogo src={logoSvg} alt='logo' />
            </Content>
        </Container>
    );
}