import expressLogo from "../images/logo/expressjs.svg"
import jestLogo from "../images/logo/linkedin.svg"
import reduxLogo from "../images/logo/redux.svg"
import webpackLogo from "../images/logo/webpack.svg"
import mochaLogo from "../images/logo/mochajs.svg"
import nodejsLogo from "../images/logo/nodejs.svg"

export interface Tool {
  name: string
  logo: string
}

export interface ToolCategory {
  categoryName: string
  tools: Tool[]
}

const data: ToolCategory[] = [
  {
    categoryName: "languages",
    tools: [
      {
        name: "JavaScript",
        logo: "",
      },
      {
        name: "TypeScript",
        logo: reduxLogo,
      },
    ],
  },
  {
    categoryName: "framework",
    tools: [
      {
        name: "Redux",
        logo: "",
      },
      {
        name: "React",
        logo: "",
      },
      {
        name: "NodeJS",
        logo: nodejsLogo,
      },
      {
        name: "Express",
        logo: expressLogo,
      },
      {
        name: "Express",
        logo: expressLogo,
      },
      {
        name: "Express",
        logo: expressLogo,
      },
      {
        name: "Express",
        logo: expressLogo,
      },
    ],
  },
  {
    categoryName: "datastore",
    tools: [
      {
        name: "MongoDB",
        logo: mochaLogo,
      },
      {
        name: "Firebase",
        logo: "",
      },
      {
        name: "PostgresQL",
        logo: "",
      },
    ],
  },
]

export default data
