// Stap 1: Importeer React
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Hamed Agency">
      <p>Lorem ipsum</p>
      <StaticImage
        width="800"
        height="600"
        alt="randomized unplash image!"
        src="../images/girl-foto.jpg"
      />
    </Layout>
  )
}
// Stap 3: Exporteer je component
export default IndexPage
