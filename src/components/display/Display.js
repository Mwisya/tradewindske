import './display.css'
import computer from '../../assets/computer.jpg'

const Display = () => {
  return (
    <div id='home' className='display-container'>
      <div className='display'>
        <img src={computer} alt="" />
        <h3>Your day today website solution, light up your business with endless posibilities</h3>
      </div>
    </div>
  )
}

export default Display