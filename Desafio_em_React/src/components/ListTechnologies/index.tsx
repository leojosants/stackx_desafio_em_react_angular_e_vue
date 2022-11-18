//
import { Container } from './styles';
import { ListButton } from '../ListButton'

type ListProps = {
    changeTitle: (params: string) => void;
}

export function ListTechnologies({ changeTitle }: ListProps) {

    const technologies = [
        'JavaScript', 'React', 'Vue Js', 'Tailwind CSS', 'Styled Components', 'Saas', 'Node', 'TypeScript', 'Angular', 'Java'
    ];

    return (
        <Container>
            <ul>
                {
                    technologies.map((tech, i) => {
                        return <li key={i}>
                            {<ListButton title={tech} changeTitle= {changeTitle} />}
                            </li>
                    })
                }
            </ul>
        </Container>

    );
};