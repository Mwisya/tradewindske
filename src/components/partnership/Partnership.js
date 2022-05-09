import './partnership.css'
import {images} from '../../data'

const Partnership = () => {
  return (
      <section className='container'>
          <div className='partnerships'>
              <h2>Partnerships</h2>
              {
                  images.map((image, index)=>(

                      <div className="partner" key={index}>
                          <img src={image.img} alt={image.img} />
                      </div>
                  ))
              }
              
          </div>
      </section>
  )
}

export default Partnership