import { Atm, Call, Home } from '@material-ui/icons'
import './navigation.css'

const Navigation = () => {
  return (
    <nav>
      <div className='icons'><a href="#rate-card"> <Atm/> </a></div>
      <div className='icons'><a href="#home"> <Home/> </a></div>
      <div className='icons'><a href="#whyChooseUs">  </a></div>
      <div className='icons'><a href="#services">S</a></div>
      <div className='icons'><a href="#footer"> <Call/> </a></div>
    </nav>
  )
}

export default Navigation