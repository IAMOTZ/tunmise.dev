const getLogo = name => require(`../images/logo/${name}.svg`)

export interface Tool {
  id?: string | number
  name: string
  logo: string
}

export interface ToolCategory {
  id?: string | number
  categoryName: string
  tools: Tool[]
}

const data: ToolCategory[] = [
  {
    categoryName: "languages",
    tools: [
      {
        name: "JavaScript",
        logo: getLogo("javascript"),
      },
      {
        name: "TypeScript",
        logo: getLogo("redux"),
      },
    ],
  },
  {
    categoryName: "Frameworks",
    tools: [
      {
        name: "React",
        logo: getLogo("react"),
      },
      {
        name: "Redux",
        logo: getLogo("redux"),
      },
      {
        name: "NodeJS",
        logo: getLogo("nodejs"),
      },
      {
        name: "Express",
        logo: getLogo("express"),
      },
      {
        name: "MeteorJS",
        logo: getLogo("meteor"),
      },
    ],
  },
  {
    categoryName: "DataStores",
    tools: [
      {
        name: "MongoDB",
        logo: getLogo("mongodb"),
      },
      {
        name: "Firebase",
        logo: getLogo("firebase"),
      },
      {
        name: "PostgresQL",
        logo: getLogo("postgresql"),
      },
    ],
  },
  {
    categoryName: "Testing",
    tools: [
      {
        name: "Jest",
        logo: getLogo("jest"),
      },
      {
        name: "Mocha",
        logo: getLogo("mocha"),
      },
    ],
  },
  {
    categoryName: "Bundling",
    tools: [
      {
        name: "Webpack",
        logo: getLogo("webpack"),
      },
      {
        name: "Babel",
        logo: getLogo("babel"),
      },
    ],
  },
  {
    categoryName: "API Design",
    tools: [
      {
        name: "Swagger",
        logo: getLogo("swagger"),
      },
    ],
  },
  {
    categoryName: "Source Control",
    tools: [
      {
        name: "GitHub",
        logo: getLogo("github"),
      },
    ],
  },
  {
    categoryName: "CI/CD",
    tools: [
      {
        name: "TravisCI",
        logo: getLogo("travis-ci"),
      },
    ],
  },
  {
    categoryName: "Code Editing",
    tools: [
      {
        name: "VSCode",
        logo: getLogo("vs-code"),
      },
    ],
  },
]

export default data
