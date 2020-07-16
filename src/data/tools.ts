const getLogo = name => require(`../images/logo/${name}.svg`)

export interface Tool {
  id?: string | number
  name: string
  logo: string
  link: string
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
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        logo: getLogo("redux"),
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    categoryName: "Frameworks",
    tools: [
      {
        name: "React",
        logo: getLogo("react"),
        link: "https://reactjs.org/",
      },
      {
        name: "Redux",
        logo: getLogo("redux"),
        link: "http://redux.js.org/",
      },
      {
        name: "NodeJS",
        logo: getLogo("nodejs"),
        link: "https://nodejs.org/",
      },
      {
        name: "Express",
        logo: getLogo("express"),
        link: "https://expressjs.com/",
      },
      {
        name: "MeteorJS",
        logo: getLogo("meteor"),
        link: "https://www.meteor.com/",
      },
    ],
  },
  {
    categoryName: "DataStores",
    tools: [
      {
        name: "MongoDB",
        logo: getLogo("mongodb"),
        link: "https://www.mongodb.com/",
      },
      {
        name: "Firebase",
        logo: getLogo("firebase"),
        link: "https://firebase.google.com/",
      },
      {
        name: "PostgresQL",
        logo: getLogo("postgresql"),
        link: "https://www.postgresql.org/",
      },
    ],
  },
  {
    categoryName: "Testing",
    tools: [
      {
        name: "Jest",
        logo: getLogo("jest"),
        link: "https://jestjs.io/",
      },
      {
        name: "Mocha",
        logo: getLogo("mocha"),
        link: "https://mochajs.org/",
      },
    ],
  },
  {
    categoryName: "Bundling",
    tools: [
      {
        name: "Webpack",
        logo: getLogo("webpack"),
        link: "https://webpack.js.org/",
      },
      {
        name: "Babel",
        logo: getLogo("babel"),
        link: "https://babeljs.io/",
      },
    ],
  },
  {
    categoryName: "API Design",
    tools: [
      {
        name: "Swagger",
        logo: getLogo("swagger"),
        link: "https://swagger.io/",
      },
    ],
  },
  {
    categoryName: "Source Control",
    tools: [
      {
        name: "GitHub",
        logo: getLogo("github"),
        link: "https://github.com/",
      },
    ],
  },
  {
    categoryName: "CI/CD",
    tools: [
      {
        name: "TravisCI",
        logo: getLogo("travis-ci"),
        link: "https://travis-ci.org/",
      },
    ],
  },
  {
    categoryName: "Code Editing",
    tools: [
      {
        name: "VSCode",
        logo: getLogo("vs-code"),
        link: "https://code.visualstudio.com/",
      },
    ],
  },
]

export default data
