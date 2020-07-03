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
      <span className="tool-name">{tool.name}</span>
    </div>
  )
}

export default Tool
