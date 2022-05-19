import './rateCard.css'

const RateCard = () => {
  return (
    <section id='rate-card' className="bg">
      <h2>Rate Card</h2>

      <div className="container">
      <div className="rate-cards">

        <div className="rate-card1">
          <h3>Startup</h3>
          <h4>Ksh 15,000</h4>
          <h5>One time fee</h5>
          <ul>
            <li>5 Page Simple Website</li>
            <li>4 Days Delivery Time</li>
            <li>Good UI/UX</li>
            <li>Basic Contact Form</li>
            <li>Mobile Friendly website</li>
            <li>Suitable for Small Business and Personal Website</li>
          </ul>

         <button><a href="#contacts">Contact Us</a> </button>
        </div>
        <div className="rate-card2">
          <h3>Standard</h3>
          <h4>Ksh 25,000</h4>
          <h5>One time fee</h5>
          <ul>
            <li>1 week delivery</li>
            <li>Upto 12 Website pages</li>
            <li>Mobile friendly Website</li>
            <li>Media responsive</li>
            <li>Awesome UI/UX design</li>
            <li>Web smooth transition effects</li>
            <li>Awesome Animation effects</li>
            <li>Attention feature</li>
            <li>Improved Website Functionality and features</li>
            <li>Elegant Appearance</li>
            <li>Social media integration</li>
            <li>Google maps integration</li>
            <li>M-pesa integration</li>
          </ul>

          <button><a href="#contacts">Contact Us</a></button>
        </div>
        <div className="rate-card3">
          <h3>Advanced</h3>
          <h4>Ksh 35,000</h4>
          <h5>One time fee</h5>
          <ul>
            <li>Unlimited pages</li>
            <li>Improved data form</li>
            <li>All media responsive</li>
            <li>Elegant UI/UX design</li>
            <li>Custom Email form</li>
            <li>Improved Functionality and features</li>
            <li>Attention object focus faeture</li>
            <li>Smooth transition effects</li>
            <li>Great animations and iterations </li>
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