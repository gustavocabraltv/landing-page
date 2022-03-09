import * as S from "./styles"
import ArrowRight from '../../assets/arrow-right-box.svg'





const ButtonCTA = () => { 
    return (<> 
   
        <S.InputContainer>
        <S.InputText placeholder="Enter your email"/>
            <S.ButtonCTA>Get Started Now  <S.IconContainer src={ArrowRight} alt="React Logo" /> </S.ButtonCTA>
        </S.InputContainer>
      </> )
}

export default ButtonCTA;