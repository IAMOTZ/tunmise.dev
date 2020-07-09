import React from "react"
import Layout from "../components/Layout"

interface Props {
  uri: string
}

const PageNotFound = ({ uri }: Props) => (
  <Layout uri={uri}>
    <div className="content-wrap index-page">
      <h2>Page Not Found</h2>
    </div>
  </Layout>
)

export default PageNotFound
