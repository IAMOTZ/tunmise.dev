import React from "react"
import Tool from "./Tool"
import type { ToolCategory } from "../../data/tools"
import "./styles.css"

interface ToolListProps {
  data: ToolCategory[]
}

const ToolsList = ({ data }: ToolListProps) => {
  return data.map(({ tools, categoryName, id }) => {
    return (
      <div className="tools-list" key={id || categoryName}>
        <span className="tools-category-name">{categoryName}</span>
        <div className="tools">
          {tools.map(tool => (
            <Tool key={tool.id || tool.name} tool={tool} />
          ))}
        </div>
      </div>
    )
  })
}

export default ToolsList
