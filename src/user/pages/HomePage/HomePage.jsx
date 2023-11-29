import './HomePageStyle.css'
import { HeaderTitle, SocialMedia } from "../../components";
import Logo from '../../assets/LogoBold.png'
import Flor from '../../assets/ImgHome.png'

export function HomePage() {
  return (
    <div className='BodyHome'>
      {/* <HeaderTitle /> */}
      <img src={Logo} />
      <div className='Container'>
        <h1 className='Comillas'>"</h1>
        <h3 className='slogan'> We're passionate about design, <br></br>code and everything in between.</h3>
      </div>
      <img src={Flor} />
      <SocialMedia />
    </div>
  );
}