import React from "react"
import _ from "lodash";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const TagIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.distinct
  
  return (
    <Layout title={siteTitle}>
      <SEO
        title="Cardápio"
      />
      <header className="tag-page-head">
          <h1 className="page-head-title">Cardápio({tags.length})</h1>
      </header>
      
      <h3 id="dynamic-styles">Bebidas:</h3>
      <blockquote>
        <ul>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/cervejas`}
                >
                #Cervejas
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/chopp`}
                >
                #Chopp
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/doses`}
                >
                #Doses
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/drinks`}
                >
                #Drinks
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/mega-drinks`}
                >
                #Mega-drinks
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/outros`}
                >
                #Outros
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/sucos`}
                >
                #Sucos
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/refrigerantes-2-l`}
                >
                #Refrigerantes-2L
              </Link>
          </li>
          <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/refrigerantes-lata`}
                >
                #Refrigerantes-Lata
              </Link>
          </li>
        </ul>
              
                            
      </blockquote>
      <br />
      <br />
      <h3 id="dynamic-styles">Lanches:</h3>
      <blockquote>
        <ul>
        <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/lanches`}
                >
                #Lanches
              </Link>
          </li>
        </ul>
      </blockquote>
      <br />
      <br />
      <h3 id="dynamic-styles">Porções:</h3>
      <blockquote>
        <ul>
        <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/porcoes`}
                >
                #Porções
              </Link>
          </li>
        </ul>
      </blockquote>
      <br />
      <br />
      <h3 id="dynamic-styles">Combos:</h3>
      <blockquote>
        <ul>
        <li>
          <Link              
                style={{ textDecoration: "none" }}
                to={`/tags/combos`}
                >
                #Combos
              </Link>
          </li>
        </ul>
      </blockquote>            
        
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
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <TagIndex props data={data} />
    )}
  />
)
