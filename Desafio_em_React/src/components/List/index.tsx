import { Container } from "./style";

export function List() {

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
                        return <li>
                            {value}
                        </li>
                    })
                }
            </ul>
        </Container>
    );
};