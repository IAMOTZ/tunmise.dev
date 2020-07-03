import React from "react"
import Tool from "./Tool"
import type { ToolCategory } from "../../data/tools"
import "./styles.css"

interface ToolListProps {
  data: ToolCategory[]
}

const ToolsList = ({ data }: ToolListProps) => {
  return data.map(({ tools, categoryName }) => {
    return (
      <div className="tools-list">
        <span className="tools-category-name">{categoryName}</span>
        <div className="tools">
          {tools.map(tool => (
            <Tool tool={tool} />
          ))}
        </div>
      </div>
    )
  })
}

export default ToolsList
