import { Container } from "./styles";

import brazil from '../../assets/icons/brazil.svg';
import english from '../../assets/icons/english.svg';
import spanish from '../../assets/icons/spanish.svg';

type FooterProps = {
    changeTitle: (params: string) => void;
};

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
            <div>
                <button onClick={handleChangePortuguese}>
                    <img src={brazil} alt="Brazilian flag" />
                    <p>Português</p>
                </button>

                <button onClick={handleChangeEnglish}>
                    <img src={english} alt="American flag" />
                    <p>Inglês</p>
                </button>

                <button onClick={handleChangeSpanish}>
                    <img src={spanish} alt="Spanish flag" />
                    <p>Espanhol</p>
                </button>
            </div>
        </Container>

    );
};