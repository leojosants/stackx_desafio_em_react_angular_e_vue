// 
import { Container } from './styles';
import { ListButton } from '../ListButton'

type ListProps = {
    changeTitle: (params: string) => void;
}

export function List({ changeTitle }: ListProps) {

    const techs = [
        'C', 'C++', 'C#', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'SaaS', 'Node.Js', 'Spring Boot', 'React', 'Styled-Components', 'VueJs','Tailwind', 'Angular', 'Axios' 
    ];

    return (
        <Container>
            <ul>
                {
                    techs.map((tech, i) => {
                        return <li key={i}>
                            {<ListButton title={tech} changeTitle= {changeTitle} />}
                            </li>
                    })
                }
            </ul>
        </Container>

    );
};