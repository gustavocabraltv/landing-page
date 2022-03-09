import * as S from './styles'

type FrontEndProps = { 
    children: React.ReactNode;
}

const Frontend = ({children}: FrontEndProps) => { 
    return (<S.Container>Teste Front end {children}</S.Container>)
}

export default Frontend;