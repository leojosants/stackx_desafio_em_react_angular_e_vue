import { 
    Container,
    Content,
    ImageLogo,
} from './styles';

import logoSvg from '../../assets/icons/logo.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <a href={'https://academia.stackx.com.br/'} target='_blank' title='stackx'>
                    <ImageLogo  src={logoSvg} alt='logo' />
                </a>
            </Content>
        </Container>
    );
};