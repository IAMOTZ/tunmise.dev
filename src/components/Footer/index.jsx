import React from "react"
import "./styles.css"
import githubLogo from "../../images/logo/github.svg"
import linkedinLogo from "../../images/logo/linkedin.svg"
import stackoverflowLogo from "../../images/logo/stackoverflow.svg"
import twitterLogo from "../../images/logo/twitter.svg"
import gmailLogo from "../../images/logo/gmail.svg"

export default () => (
  <div className="footer" id="contact-section">
    <div className="content-wrap footer-content">
      <div className="contact-me">
        <span>Want to work together or have a question for me?</span>
        <a
          href="mailto:ogunniyitunmise@gmail.com"
          target="blank"
          className="hello-btn"
        >
          <span>Say Hello</span>
          <img src={gmailLogo} alt="gmail-logo" />
        </a>
      </div>
      <div className="social-links">
        <a
          href="http://github.com/IAMOTZ"
          target="blank"
          className="social-link"
        >
          <img src={githubLogo} alt="gitub-logo " />
        </a>
        <a
          href="https://linkedin.com/in/tunmise-profile"
          target="blank"
          className="social-link linkedin"
        >
          <img src={linkedinLogo} alt="linkedin-logo" />
        </a>
        <a
          href="https://stackoverflow.com/users/7685866/tunmee"
          target="blank"
          className="social-link"
        >
          <img src={stackoverflowLogo} alt="stackoverflow-logo" />
        </a>
        <a
          href="https://twitter.com/dev_tunmise"
          target="blank"
          className="social-link"
        >
          <img src={twitterLogo} alt="twitter-logo" />
        </a>
      </div>
    </div>
  </div>
)
