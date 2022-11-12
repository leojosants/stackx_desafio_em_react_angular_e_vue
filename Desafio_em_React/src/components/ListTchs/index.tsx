//
import { Container } from './styles';
import { ListButton } from '../ListButton'

type ListProps = {
    changeTitle: (params: string) => void;
}

export function List({ changeTitle }: ListProps) {

    const techs = [
        'JavaScript', 'React', 'Vue Js', 'Tailwind CSS', 'Styled Components', 'Saas', 'Node', 'TypeScript', 'Angular', 'Java'
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