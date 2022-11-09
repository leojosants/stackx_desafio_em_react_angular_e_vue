import { 
    Container,
    ImageLogo
} from './styles';
import logoStack from '../../assets/icons/logoStackx.svg'

function Header() {
    return(
        <Container>
            <a href={'https://academia.stackx.com.br/'} target='_blank' title='Logo StackX'>
                    <ImageLogo  src={logoStack} alt="Logo StackX" />
                </a>
        </Container>
    );
}

export default Header;