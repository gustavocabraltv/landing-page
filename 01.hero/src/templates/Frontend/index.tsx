import Header from '../../organisms/Header';
import Hero from '../../organisms/Hero';
import * as S from './styles'

type FrontEndProps = { 
    children: React.ReactNode;
}

const Frontend = ({children}: FrontEndProps) => { 
    return (<S.Container><Header /> <Hero/></S.Container>)
}

export default Frontend;