import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

interface Props {
  uri: string
}

const PageNotFound = ({ uri }: Props) => (
  <Layout uri={uri}>
    <SEO title="404" />
    <div className="content-wrap index-page">
      <h2>Page Not Found</h2>
    </div>
  </Layout>
)

export default PageNotFound
