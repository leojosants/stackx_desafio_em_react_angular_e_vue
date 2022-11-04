import { useEffect, useState } from 'react';
import { 
    Container
} from './styles';

type TechnologiesProps = {
    nome : string;
    text : string;
}

const [list, SetList] = useState<string[]>(
    [
        "JavaScript",
        "React",
        "Vue Js",
        "Tailwind CSS",
        "Styled Components",
        "Sass",
        "Node",
        "TypeScript",
        "Angular",
        "Java"
    ]
);

function CreateItem() {
    console.log("criando um ítem");
    SetList([...list, "item criado"])
}

useEffect(() => {
    CreateItem();
}, []);

export function Technologies(props : TechnologiesProps) {
   
    return(

        <Container>
             <div>
                {/* <h1>
                   Lista de tecnologias { props.nome } seguindo { props.text }
                </h1> */}

                

             </div>
         </Container>
    );
}