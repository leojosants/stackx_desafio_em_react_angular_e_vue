import { 
    Container,
    ImageBrazil,
    ImageSpain,
    ImageUnitedStates
} from './styles';

import brazil from '../../assets/images/brazil.png';
import spain from '../../assets/images/spain 2.png';
import unitedStates from '../../assets/images/united-states.png';

type FooterProps = {
    changeTitle : (params : string) => void
}

export function Footer({changeTitle} : FooterProps) {

    function handleChangePortuguese() {
        changeTitle(`
            Olá, meu nome é Gabriel Lennon e sou Desenvolvedor Front-end,
            Tecnologias que tenho experiência:
        `);
    };

    function handleChangeEnglish() {
        changeTitle(`
            Hello, my name is Gabriel Lennon and I am Front-end Developer,
            Technologies I have experience:
        `);
    };

    function handleChangeSpanish() {
        changeTitle(`
            Hola, mi nombre es Gabriel Lennon y soy desarrollador front-end,
            Tecnologías en las que tengo experiencia:
        `);
    };

    return(
        <Container>
            <div className='div1'>
                <ImageBrazil src={brazil} alt='image' />
                <button onClick={handleChangePortuguese}>
                    Português
                </button>
            </div>
     
            <div className='div2'>
                <ImageSpain src={spain} alt='image' />
                <button onClick={handleChangeEnglish}>
                    Inglês
                </button>
            </div>
     
            <div className='div3'>
                <ImageUnitedStates src={unitedStates} alt='image' />
                <button onClick={handleChangeSpanish}>
                    Espanhol
                </button>
            </div>
        </Container>
    );
}