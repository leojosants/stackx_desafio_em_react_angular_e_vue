import { 
    Container,
    ImageBrazil,
    ImageSpain,
    ImageUnitedStates
} from './styles';

import brazil from '../../assets/images/brazil.png';
import spain from '../../assets/images/spain 2.png';
import unitedStates from '../../assets/images/united-states.png';

export function Button(props) {

    return(
        <Container>
            <div className='div1'>
                <ImageBrazil src={brazil} alt='image' />
                <button>Português</button>
            </div>
            <div className='div2'>
            <ImageSpain src={spain} alt='image' />
                <button>Inglês</button>
            </div>
            <div className='div3'>
            <ImageUnitedStates src={unitedStates} alt='image' />
                <button>Espanhol</button>
            </div>
        </Container>
    );
}