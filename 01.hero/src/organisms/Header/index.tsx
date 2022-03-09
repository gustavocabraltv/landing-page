import * as S from "./styles"
import { BiRightArrowAlt } from 'react-icons/bi';
import ArrowRight from '../../assets/arrow-right-box.svg'
import Logo from '../../assets/logo.svg'




const Header = () => { 
    return(
        <S.Box>
           <img src={Logo} alt="Logo" />
     
           <S.ButtonCTA>Get Started <S.IconContainer src={ArrowRight} alt="React Logo" />
</S.ButtonCTA>
        </S.Box> 
    )
}

export default Header