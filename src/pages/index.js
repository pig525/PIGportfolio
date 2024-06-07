import React from "react";
import { useState } from "react";
// import axios from 'axios';
import '../assets/css/johndoe.css';
import '../assets/vendors/themify-icons/css/themify-icons.css';


export const Toppage = () => {
  const [recipient, setRecipient] = useState('babypig123452024@outlook.com');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [sendEmail, setSendEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = `name: ${name}\nemail :${sendEmail}\nmessage : ${message}`
    const emailUrl = `mailto:${recipient}?content=${encodeURIComponent(content)}`;

    window.location.href = emailUrl;
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item"><a className="social-link text-light" target="_blank" href="https://www.facebook.com/"><i className="ti-facebook" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link text-light" target="_blank" href="https://twitter.com/"><i className="ti-twitter" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link text-light" target="_blank" href="https://www.google.com/intl/en/gmail/about/"><i className="ti-google" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link text-light" target="_blank" href="https://discord.com/"><i className="ti-github" aria-hidden="true"></i></a></li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle" >Hello, I am</h4>
            <h1 className="header-title">Victor Raynor</h1>
            <h6 className="header-mono" >Blockchain & Full Stack Developer</h6>
            <a target="_blank" href="./assets/pdf/CV.pdf" className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i>Print Resume</a>
          </div>
        </div>
      </header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div className="container">
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">Resume</a>
              </li>
            </ul>
            <ul className="navbar-nav brand">
              <img src="./assets/imgs/avatar.jpg" alt="" className="brand-img" />
              <li className="brand-txt">
                <h5 className="brand-title">Victor Raynor</h5>
                <div className="brand-subtitle">Blockchain Developer & Full Stack Developer </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item last-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div id="about" className="row about-section">
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">Who am I ?</h3>
            <span className="line mb-5"></span>
            <h5 className="mb-3">A Web Designer & Blockchain Developer Located In Our Lovely Earth</h5>
            <p className="mt-20">
              Blockchain Developer With over 8 years of experience as a blockchain developer, I have a strong background in designing and
              implementing blockchain protocols, developing secure smart contracts, and building decentralized applications ( DApps).
            </p>
            {/* <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button> */}
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">Personal Info</h3>
            <span className="line mb-5"></span>
            <ul className="mt40 info list-unstyled">
              <li><span>Birthdate</span> : 05/25/1995</li>
              <li><span>Email</span> : babypig0525@outlook.com</li>
              <li><span>Name</span> : Victor Raynor </li>
              <li><span>Address</span> :  Philippines Bacolod.</li>
            </ul>
            <ul className="social-icons pt-3">
              <li className="social-item"><a className="social-link" target="_blank" href="https://www.facebook.com/"><i className="ti-facebook" aria-hidden="true"></i></a></li>
              <li className="social-item"><a className="social-link" target="_blank" href="https://twitter.com/"><i className="ti-twitter" aria-hidden="true"></i></a></li>
              <li className="social-item"><a className="social-link" target="_blank" href="https://www.google.com/intl/en/gmail/about/"><i className="ti-google" aria-hidden="true"></i></a></li>
              <li className="social-item"><a className="social-link" target="_blank" href="https://discord.com/"><i className="ti-github" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">My Expertise</h3>
            <span className="line mb-5"></span>
            <div className="row">
              <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
              <div className="col-10 ml-auto mr-3">
                <h6>Blockchain Developer</h6>
                <p className="subtitle"> Gardline Company (2021.3-2022.6) </p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
              <div className="col-10 ml-auto mr-3">
                <h6>Blockchain Developer</h6>
                <p className="subtitle">Sonic Company (2022.7-2023.7)</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
              <div className="col-10 ml-auto mr-3">
                <h6>Blockchain Engineer</h6>
                <p className="subtitle">Canva Company ()</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section" id="resume">
        <div className="container">
          <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <div className="mt-2">
                    <h4>Experience</h4>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="title text-danger">2023 - Present</h6>
                  <p>Blockchain Engineer</p>
                  <p className="subtitle">
                    Directed a team of 15 developers in the implementation of blockchain solutions, resulting in a 60% reduction in data
                    breaches and security vulnerabilities.
                  </p>
                  <p className="subtitle">
                    Implemented advanced cryptographic techniques to enhance the security of blockchain networks, resulting in a 30%
                    decrease in the incidence of fraudulent activities.
                  </p>
                  <p className="subtitle">
                    Led the development of a blockchain-based voting system, which increased voter participation by 20% and received
                    recognition from industry experts for its innovative approach to secure voting.
                  </p>
                  <hr />
                  <h6 className="title text-danger">2022 - 2023</h6>
                  <p>Blockchain Developer</p>
                  <p className="subtitle">
                    Led the design and deployment of secure smart contracts and decentralized applications, resulting in a 40% increase in
                    transaction throughput.
                  </p>
                  <p className="subtitle">
                    Developed a blockchain-based supply chain solution, reducing inventory discrepancies by 25% and improving transparency
                    across the supply chain network.
                  </p>
                  <p className="subtitle">
                    Played a key role in securing partnerships with blockchain technology providers, resulting in a 50% increase in Sonic
                    company is blockchain integration capabilities.
                  </p>
                  <hr />
                  <h6 className="title text-danger">2021 - 2022</h6>
                  <p>Blockchain Developer</p>
                  <p className="subtitle">
                    Spearheaded the development of foundational blockchain projects, resulting in a 30% improvement in efficiency in data
                    verification processes.
                  </p>
                  <p className="subtitle">
                    Implemented blockchain protocols using Solidity and Ehereum, resulting in a 20% reduction in transaction costs.
                  </p>
                  <p className="subtitle">
                    Collaborated with a team of 10 developers to deliver a proof-of-concept blockchain application, which received positive
                    feedback from stakeholders and led to further investment in blockchain technology within the company.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <div className="mt-2">
                    <h4>Education</h4>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="title text-danger">2012 - 2016</h6>
                  <p>Bachelor of Science Degree in Computer Science</p>
                  <p className="subtitle">
                    During my college days at Aegean University, I focused extensively on program development, diving deep into various programming languages and software engineering principles.
                  </p>
                  <p className="subtitle">I participated in coding boot camps and hackathons, which honed my problem-solving skills and exposed me to cutting-edge technologies.</p>
                  <p className="subtitle">These experiences were instrumental in shaping my understanding of software development and preparing me for a career in the tech industry.</p>
                  <p className="subtitle">During my university days, I majored blockchain engineering and received a master's degree in the process.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="mt-2">
                    <h4>Summary</h4>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="subtitle">Blockchain Developer With over 8 years of experience as a blockchain developer, I have a strong background in designing and
                    implementing blockchain protocols, developing secure smart contracts, and building decentralized applications ( DApps).
                  </p>
                  <p className="subtitle">
                    My expertise spans various platforms including Ethereum and Hyperledger, with a deep understanding of cryptography and
                    data structures.
                  </p>
                  <p className="subtitle">
                    I have successfully led projects across multiple industries, ensuring robust and efficient blockchain solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <div className="pull-left">
                    <h4 className="mt-2">Skills</h4>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="card-body pb-2">
                  <h6>Node.js, jQuery, Socket.IO, React</h6>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h6>Python, Solidity, Go</h6>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h6>Blockchain, Ethereum</h6>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h6>Mongo DB, MySQL, PostgreSQL</h6>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h6> Bitcoin, DApp, Full-stack</h6>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="pull-left">
                    <h4 className="mt-2">Languages</h4>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="card-body pb-2">
                  <h6>English</h6>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark py-5">
        <div className="container text-center">
          <h2 className="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
          <button className="btn bg-primary w-lg" >Hire me</button>
        </div>
      </section>

      {/* portfolio */}
      <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
          <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>
          <div className="portfolio">

            <div className="portfolio-container">
              <div className="col-md-6 col-lg-4 web new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/web-1.png" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" className="content-holder" href="https://ciprianileather.com/en/">
                    <a className="img-popup" href="https://codex-themes.com/"></a>
                    <div className="text-holder">
                      <h6 className="title">Casanova</h6>
                      <p className="subtitle">Website Development</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 web new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/web-2.PNG" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" href="https://www.srgremax.com/" className="content-holder">
                    <a className="img-popup" href="assets/imgs/web-2.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">Web Designer</h6>
                      <p className="subtitle">Welcome SODHI REAL ESTATE GROUP!</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 advertising new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/advertising-2.webp" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" href="https://simulate.dafiprotocol.io/" className="content-holder">
                    <a className="img-popup" href="assets/imgs/advertising-2.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">DAFI Protocol</h6>
                      <p className="subtitle">Technologies that we used were react js and solidity smart contracts.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 web">
                <div className="portfolio-item">
                  <img src="./assets/imgs/web-4.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <div className="content-holder">
                    <a className="img-popup" href="assets/imgs/web-4.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">WEB</h6>
                      <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 advertising">
                <div className="portfolio-item">
                  <img src="./assets/imgs/advertising-1.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <div className="content-holder">
                    <a className="img-popup" href="assets/imgs/advertising-1.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">ADVERSITING</h6>
                      <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 web new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/web-3.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" href="https://www.mxink.com.au/" className="content-holder">
                    <a className="img-popup" href="assets/imgs/web-3.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">MXINK</h6>
                      <p className="subtitle">development of MXINK</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 advertising new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/advertising-3.webp" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" href="https://form.cl/" className="content-holder">
                    <a className="img-popup" href="assets/imgs/advertising-3.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">From Office</h6>
                      <p className="subtitle">About the project</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 advertising new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/advertising-4.webp" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" href="https://www.atujii.com/" className="content-holder">
                    <a className="img-popup" href="assets/imgs/advertising-4.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">NFT marketplace</h6>
                      <p className="subtitle">Welcome to Atujii! Atujii is a platform that allows you to buy, sell, and display Digital Collectibles.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 branding new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/branding-1.webp" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" href="https://heartofanimals.website/" className="content-holder">
                    <a className="img-popup" href="assets/imgs/branding-1.webp"></a>
                    <div className="text-holder">
                      <h6 className="title">Heart of Animals</h6>
                      <p className="subtitle">Welcome to The Heart of Animals!</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 branding">
                <div className="portfolio-item">
                  <img src="./assets/imgs/branding-2.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <div className="content-holder">
                    <a className="img-popup" href="assets/imgs/branding-2.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">BRANDING</h6>
                      <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 branding new">
                <div className="portfolio-item">
                  <img src="./assets/imgs/branding-3.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <a target="_blank" href="https://wufiswap.com/" className="content-holder">
                    <a className="img-popup" href="assets/imgs/branding-3.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">First DEX on DRC-20</h6>
                      <p className="subtitle">Pioneering the First DEX on the DRc20 Network with Doge Integration</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 branding">
                <div className="portfolio-item">
                  <img src="./assets/imgs/branding-4.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <div className="content-holder">
                    <a className="img-popup" href="assets/imgs/branding-4.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">BRANDING</h6>
                      <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 branding">
                <div className="portfolio-item">
                  <img src="./assets/imgs/branding-5.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                  <div className="content-holder">
                    <a className="img-popup" href="assets/imgs/branding-5.jpg"></a>
                    <div className="text-holder">
                      <h6 className="title">BRANDING</h6>
                      <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end portfolio */}

      <div className="section contact" id="contact">
        <div id="map" className="map"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-card">
                <h4 className="contact-title">Send a message</h4>
                <form noValidate="novalidate" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input className="form-control" type="text" id="name" placeholder="Name *" onChange={(e) => { setName(e.target.value) }} required="required" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="email" id="email" placeholder="Email *" onChange={(e) => { setSendEmail(e.target.value) }} required="required" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Messages" rows="7" value={message}
                      onChange={(e) => setMessage(e.target.value)} required="required"></textarea>
                  </div>
                  <div className="form-group ">
                    <button type="submit" className="form-control btn btn-primary" id="sendMessageButton" >Send Message</button>
                  </div>
                </form>
              
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <h4 className="contact-title">Get in touch</h4>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-map-alt icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">Address :<br /> <span className="text-muted">Philippines Bacolod</span></h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-envelope icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">Email :<br /> <span className="text-muted">babypig0525@outlook.com</span></h6>
                  </div>
                </div>
                <ul className="social-icons pt-4">
                  <li className="social-item"><a className="social-link text-dark" target="_blank" href="https://www.facebook.com/"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                  <li className="social-item"><a className="social-link text-dark" target="_blank" href="https://twitter.com/"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                  <li className="social-item"><a className="social-link text-dark" target="_blank" href="https://www.google.com/intl/en/gmail/about/"><i className="ti-google" aria-hidden="true"></i></a></li>
                  <li className="social-item"><a className="social-link text-dark" target="_blank" href="https://discord.com"><i className="ti-github" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div >
      </div >
      <footer className="footer py-3">
        <div className="container">
          <p className="small mb-0 text-light">
            &copy; <script>document.write(new Date().getFullYear())</script> Created With <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com" target="_blank"><span className="text-danger" title="Bootstrap 4 Themes and Dashboards">DevCRUD</span></a>
          </p>
        </div>
      </footer>

    </>
  );
};

export default Toppage;