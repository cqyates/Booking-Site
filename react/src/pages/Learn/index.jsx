import './style.css';
const AboutPage = () => {
  return (
    <div className="main" id="about-section">
      <div id="sidecar-content">
        <div>
          <h3>Rates</h3>
          <p>$40/hour</p>
          <p>$70 for 2 hours</p>
        </div>
        <div>
          <h3>Payments</h3>
          <ul>
            <li>Venmo: @Corey-Yates-2</li>
            <li>Cashapp: $cqyates</li>
            <li>Paypal: cqyates@gmail.com</li>
          </ul>
        </div>
        <div>
          <a href="/book">
            {' '}
            <button>
              <h4>Book Now</h4>
            </button>
          </a>
        </div>
      </div>
      <div id="about-main">
        <h3>Javascript Tutorials</h3>
        <p>
          I'm offering private tutoring to current and former students of
          javascript based coding bootcamps. Over the past 4 years, I've
          tutoring hundreds of budding coders from HTML to React. My students
          have always appreciated my ability to breakdown complex topics into
          understandable language. I can help debuug your personal projects,
          complete challenges or get you back in the coding game after a gap.
        </p>
        <div id="process">
          <h3> Here's How it Works</h3>
          <h4>
            Step One: Book a Session through Calendly
          </h4>
          <p>Be sure to check your email for a confirmation email.</p>
          <h4>
            Step Two: Choose Your Payment Method
          </h4>
          <p>I will send you a request on cash app/venmo or an invoice on paypal.</p>
          <h4>
            Step Three: Get Your Zoom Link from Me and Join at Start Time
          </h4>
          <p>If you have any questions or want to chat with me before you book; you can email me:
          </p> <a href="mailto:cqyates@gmail.com">cqyates@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
