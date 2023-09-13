
import './index.css'

import Button from '../../components/button/button'


export default function Error(){

    return(
        <main className='error'>
            <h1><span style={{ color: '#009EE2' }}>Erro 404</span> - Página não encontrada.</h1>
            <h2>Volte para a página inicial</h2>
            <Button href="/">Página Inicial</Button>
        </main>
    )
}