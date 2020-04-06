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
            <blockquote>
              um pouco da história
            </blockquote>
          <h3 id="dynamic-styles">Porque "Carcarás"?</h3>
            <blockquote>
              história por detrás do nome
            </blockquote>
          <h3 id="dynamic-styles">Conheça nossa equipe</h3>
            <blockquote>
            Foto da equipe
            </blockquote>
          <hr />
          <h3 id="dynamic-styles">Visite-nos</h3>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14759.040193154842!2d-46.9225509!3d-22.3626874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x34c9642a10f6a9e4!2sCarcar%C3%A1&#39;s%20Bar%20e%20Lanchonete!5e0!3m2!1spt-BR!2sbr!4v1585805752452!5m2!1spt-BR!2sbr" />

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
