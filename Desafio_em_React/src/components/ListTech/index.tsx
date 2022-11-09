import { Container } from "./styles";
import { ListButton } from '../ListButton';

type ListProps = {
    changeTitle: (params: string) => void;
}

export function List({ changeTitle }: ListProps) {

    const list = [
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
                    list.map((value, index) => {
                        return <li key={index}>
                            {<ListButton title={value} changeTitle= {changeTitle} />}
                        </li>
                    })
                }
            </ul>
        </Container>
    );
};