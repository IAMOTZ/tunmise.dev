import React from "react"
import Layout from "../components/Layout"
import tunmiseImage from "../images/tunmise.png"
import githubLogo from "../images/logo/github.svg"
import linkedinLogo from "../images/logo/linkedin.svg"
import stackoverflowLogo from "../images/logo/stackoverflow.svg"
import twitterLogo from "../images/logo/twitter.svg"

import "./index.css"

interface Props {
  uri: string
}

const IndexPage = ({ uri }: Props) => (
  <Layout uri={uri}>
    <div className="content-wrap index-page">
      <div className="profile-image">
        <img src={tunmiseImage} alt="tunmise"></img>
      </div>
      <div className="greetings">Hi, I am Tunmise</div>
      <div className="profile-summary">
        FullStack Software Engineer @ShipStation @Andela
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
  </Layout>
)

export default IndexPage
