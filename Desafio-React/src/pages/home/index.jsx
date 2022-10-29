// 

import './style.css'

export function Home() {
    return(
        <div className="container">
            <h1>
                Olá, me chamo Leonardo Santos e eu sou Desenvolvedor Full Stack Jr,
                Tecnologias que possuo conhecimento:
            </h1>

            <div className="container-list">
                <div>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Vue Js</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Styled Componentes</li>
                        <li>Saas</li>
                        <li>Node</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Angular</li>
                        <li>Java</li>
                        <li></li>
                    </ul>
                </div>
            </div>

           <div className='container-languages'>
                <div className='port'>
                    <ul>
                        <li>Português</li>
                    </ul>
                </div>
                <div className='ing'>
                    <ul>
                        <li>Inglês</li>
                    </ul>
                </div>
                <div className='esp'>
                    <ul>
                        <li>Espanhol</li>
                    </ul>
                </div>
           </div>

        </div>
    )
}