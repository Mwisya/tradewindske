import './footer.css'

const Footer = () => {
  return (
    <footer id='contacts'>
      <div className='container flex'>
      <div className="web-design">
        <h3>Our services</h3>
          <p>Custom Web Design</p>
          <p>Car hire services</p>
          <p>Hotel websites</p>
          <p>Photography Websites</p>
          <p>Institution websites</p>
          <p>Organisation websites</p>
          <p>E-commerce Websites</p>
          <p>Personal websites</p>
        </div>

        <div className='other-services'>
          <h3>Ad Ons</h3>
          <p>website Updates</p>
          <p>e-Marketing</p>
          <p>Bulk SMS</p>
          <p>M-pesa integrations</p>
          <p>Domains and web hosting</p>
        </div>

        <div className="contacts">
          <h3>Contact Us</h3>
          <p>Call Us:<a href="tel:+254723341899">+25423341899</a></p>
          <p>Chat:<a href="http://api.WhatsApp.com/send?phone=+254723341899">Whatsapp</a></p>
          <p>Email:<a href="mailto:tradewindske001@gmail.com<">tradewindske001@gmail.com</a></p>
          <p>website <a href="http://">github.io/tradewindske</a></p>
        </div>
      </div>
      {/* <div className="copyright">Copyrigh 2022</div> */}
    </footer>
  )
}

export default Footer