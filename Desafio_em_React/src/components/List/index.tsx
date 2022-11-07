import { Container } from "./style";
import { ListButton } from '../ListButton/index';

type ListProps = {
    changeTitle: (params: string) => void;
}

export function List({ changeTitle }: ListProps) {

    const lista = [
        "JavaScript", "React",
        "Vue Js", "Tailwind CSS",
        "Styled Components", "Saas",
        "Node", "TypeScript",
        "Angular", "Java"
    ];

    return (
        <Container>
            <ul>
                {
                    lista.map((value, index) => {
                        return <li key={index}>
                            {<ListButton title={value} changeTitle= {changeTitle} />}
                        </li>
                    })
                }
            </ul>
        </Container>
    );
};