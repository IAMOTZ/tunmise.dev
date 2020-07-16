import React from "react"
import type { Tool as ITool } from "../../data/tools"

interface ToolProps {
  tool: ITool
}

const Tool = ({ tool }: ToolProps) => {
  if (!tool.name || !tool.logo) return null
  return (
    <div className="tool">
      <div className="tool-image-container">
        <img src={tool.logo} alt={tool.name} />
      </div>
      <a href={tool.link} className="tool-name">
        {tool.name}
      </a>
    </div>
  )
}

export default Tool
