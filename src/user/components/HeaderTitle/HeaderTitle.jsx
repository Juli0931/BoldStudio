import './HeaderTitleStyle.css'
import Logo from '../../assets/LogoBold.png'
import { HomePage } from '../../pages'

export function HeaderTitle({ title }) {
  return (
    <div className='logo' path='/' element={<HomePage />}>
      <img src={Logo}/>
    </div>
  )
}
