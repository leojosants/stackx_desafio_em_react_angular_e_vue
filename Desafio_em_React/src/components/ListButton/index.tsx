
import { Container } from './style';

type ListButtonProps = {
    title : string;
    changeTitle : (params : string) => void
}

export function ListButton({title, changeTitle} : ListButtonProps) {

    function handleClick() {
        changeTitle(`Tecnologia selecionada: ` + title)
    }

    return(
        <Container onClick={handleClick}>
            {title}
        </Container>
    );
}