import React, { useState } from "react"
import Layout from "../components/Layout"
import ToolsList from "../components/ToolsList"
import SEO from "../components/seo"
import toolsData from "../data/tools"
import listView from "../images/list-view.svg"
import gridView from "../images/grid-view.svg"
import "./tools.css"

const reformatData = data => {
  let tools = []
  data.forEach(d => {
    tools = tools.concat(d.tools)
  })
  return [{ categoryName: "", tools }]
}

interface ToolsPageProps {
  uri: string
}

const ToolsPage = ({ uri }: ToolsPageProps) => {
  const [displayType, setDisplayType] = useState({ withoutCategory: false })
  const toggleDisplayType = () =>
    setDisplayType({ withoutCategory: !displayType.withoutCategory })
  return (
    <Layout uri={uri}>
      <SEO title="Tools" />
      <div className="content-wrap tools-page">
        <div className="page-title">
          <span>Technologies I Use</span>
          <button
            type="button"
            onClick={toggleDisplayType}
            className="display-type"
          >
            {displayType.withoutCategory && (
              <img src={listView} className="list-view" alt="list" />
            )}
            {!displayType.withoutCategory && (
              <img src={gridView} className="grid-view" alt="grid" />
            )}
          </button>
        </div>
        <ToolsList
          data={
            displayType.withoutCategory ? reformatData(toolsData) : toolsData
          }
        />
      </div>
    </Layout>
  )
}

export default ToolsPage
