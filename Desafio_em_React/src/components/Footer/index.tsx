import {
    Container,
    ImageBrazil,
    ImageSpain,
    ImageUnitedStates
} from './styles';

import brazil from '../../assets/images/brazil.png';
import spain from '../../assets/images/spain.png';
import unitedStates from '../../assets/images/united-states.png';

type FooterProps = {
    changeTitle: (params: string) => void
}

export function Footer({ changeTitle }: FooterProps) {

    function handleChangePortuguese() {
        changeTitle(`
           Olá, meu nome é Leonardo Santos e eu sou um desenvolvedor Front-End, Tecnologias que tenho experiência:
        `);
    };

    function handleChangeEnglish() {
        changeTitle(`
           Hello, my name is Leonardo Santos and I am a Front-End developer, Technologies that I have experience:
        `);
    };

    function handleChangeSpanish() {
        changeTitle(`
            Hola, mi nombre es Leonardo Santos y soy desarrollador Front-End, Tecnologías que tengo experiencia:
        `);
    };

    return (
        <Container>
            <button onClick={handleChangePortuguese}>
                <div>
                    <ImageBrazil src={brazil} alt='Brazilian flag' title='Brazilian flag' />
                    Português
                </div>
            </button>

            <button onClick={handleChangeEnglish}>
                <div>
                    <ImageSpain src={unitedStates} alt='American flag' title='American flag' />
                    Inglês
                </div>
            </button>

            <button onClick={handleChangeSpanish}>
                <div>
                    <ImageUnitedStates src={spain} alt='Spanish fag' title='Spanish flag' />
                    Espanhol
                </div>
            </button>

        </Container>
    );
}