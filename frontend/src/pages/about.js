import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Saiba +" keywords={[`carcaras`, `história`, `cerveja`, `lanchonete`, `bar`, `chopp`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Conheça nossa história
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>description</figcaption>
          </figure>
          <h3 id="dynamic-styles">Como tudo começou</h3>
          <p>
            um pouco da história
          </p>
          <h3 id="dynamic-styles">Porque "Carcarás"?</h3>
          <p>
            história por detrás do nome
          </p>
          <h3 id="dynamic-styles">Conheça nossa equipe</h3>
          <p>Foto da equipe</p>
          <h3 id="dynamic-styles">Visite-nos</h3>
          <p>mapa incorporations : maps</p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bbbb.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
