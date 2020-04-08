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
          <h4>Horário de funcionamento:</h4>
            <blockquote>
              <ul>
                <li>segunda-feira	> Fechado</li>
                <li>terça-feira	> Fechado</li>
                <li>quarta-feira	18:00–22:00</li>
                <li>quinta-feira	18:00–23:30</li>
                <li>sexta-feira  18:00–23:30</li>
                <li>sábado	18:00–23:30</li>
                <li>domingo  18:00–22:00</li>
              </ul>
            </blockquote>
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Conheça nossa história
          </h2>          
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Carcarás Bar</figcaption>
          </figure>
          <h3 id="dynamic-styles">Como tudo começou</h3>
          <blockquote>
          <em>“A vida não oferece promessas nem garantias. Apenas possibilidades e oportunidades”.</em>
          </blockquote>
          <blockquote>
          O início do carcará´s  pode-se dizer que foi baseado na frase acima, em 2015 depois da inesperada perda de emprego de nosso pai, em uma conversa de família vimos a possibilidade de montar nosso próprio negócio, foi então que veio a ideia de montar algo na área da alimentação, a partir deste dia iniciou-se todo o processo de criação da empresa desde o absoluto ZERO. 
          </blockquote>
          <h3 id="dynamic-styles">Porque "Carcará's"?</h3>
            <blockquote>
            Na verdade carcará é um apelido de infância de nosso pai, e resolvemos usar como homenagem, carcará é parente dos falcões muito conhecido que até já virou música que ficou famosa na voz de Maria Bethânia.
            </blockquote>
          {/*<h3 id="dynamic-styles">Conheça nossa equipe</h3>
            <blockquote>
            Foto da equipe
  </blockquote>*/}
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
      relativePath: { eq: "frente.jpg" }
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
