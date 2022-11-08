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
    changeTitle: (params: string) => void
}

export function Footer({ changeTitle }: FooterProps) {

    function handleChangePortuguese() {
        changeTitle(`
            Olá, meu nome é Leonardo Santos e eu sou Desenvolvedor Full Stack Jr. Tecnologias que tenho conhecimento:
        `);
    };

    function handleChangeEnglish() {
        changeTitle(`
            Hello, my name is Leonardo Santos and I am a Full Stack Jr Developer. Technologies I am familiar with:
        `);
    };

    function handleChangeSpanish() {
        changeTitle(`
            Hola, mi nombre es Leonardo Santos y soy Desarrollador Full Stack Jr. Tecnologías con las que estoy familiarizado:
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