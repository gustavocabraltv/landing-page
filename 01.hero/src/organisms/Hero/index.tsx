import * as S from "./styles"
import HeroImage from '../../assets/hero.svg'
import InputCTA from "../InputCTA"




const Hero = () => { 
    return(
        <S.Container>
            <h1>Legal practice management software<br/>built for today's busy Firms</h1><br/>
            <p>Get started today! Track your matters, get invoices out quickly, and gain deep <br/>business intelligence with our easy-to-use legal software</p> <br/><br/><br/>
            
            <InputCTA/>
            <img src={HeroImage}/>
        </S.Container> 
    )
}

export default Hero