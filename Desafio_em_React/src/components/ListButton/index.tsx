
import { Container } from './style';

type ListButtonProps = {
    title : string;
    changeTitle : (params : string) => void
}

export function ListButton({title, changeTitle} : ListButtonProps) {

    function handleClick() {
        changeTitle(title)
    }

    return(
        <Container onClick={handleClick}>
            {title}
        </Container>
    );
}