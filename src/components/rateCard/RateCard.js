import './rateCard.css'

const RateCard = () => {
  return (
    <section id='rate-card' className="bg">
      <h2>Rate Card</h2>

      <div className="container">
      <div className="rate-cards">

        <div className="rate-card1">
          <h3>Startup</h3>
          <h4>Ksh 12,000</h4>
          <h5>One time fee</h5>
          <ul>
            <li>5 Page Simple Website</li>
            <li>4 Days Delivery Time</li>
            <li>Mobile Friendly website</li>
            <li>Basic Contact Form</li>
            <li>Suitable for Small Business and Personal Website</li>
          </ul>

         <button><a href="#contacts">Contact Us</a> </button>
        </div>
        <div className="rate-card2">
          <h3>Standard</h3>
          <h4>Ksh 20,000</h4>
          <h5>One time fee</h5>
          <ul>
            <li>1 week delivery</li>
            <li>Classic features  transition effects</li>
            <li>Mobile friendly Website</li>
            <li>Media responsive</li>
            <li>Greate UI/UX design</li>
            <li>Improved Website Functionality</li>
            <li>Up to 12 Website pages</li>
            <li>Elegant Appearance</li>
            <li>Social media integration</li>
            <li>Google maps integration</li>
            <li>M-pesa integration</li>
          </ul>

          <button><a href="#contacts">Contact Us</a></button>
        </div>
        <div className="rate-card3">
          <h3>Advanced</h3>
          <h4>Ksh 30,000</h4>
          <h5>One time fee</h5>
          <ul>
            <li>Unlimited pages</li>
            <li>Improved data form</li>
            <li>All media responsive</li>
            <li>Elegant UI/UX design</li>
            <li>Improved Functionality and features</li>
            <li>Advanced features and transition effects</li>
            <li>Smooth and Iconic navigation</li>
            <li>Social media integration</li>
            <li>Google maps integration</li>
            <li>M-pesa integration</li>
            <li>All browsers compatibility</li>
          </ul>

          <button><a href="#contacts">Contact Us</a></button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default RateCard