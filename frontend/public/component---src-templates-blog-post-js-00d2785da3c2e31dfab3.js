;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    yZlL: function(t, e, a) {
      "use strict"
      a.r(e)
      var n = a("dI71"),
        r = a("q1tI"),
        o = a.n(r),
        c = a("9eSz"),
        i = a.n(c),
        s = a("Bl7J"),
        l = a("vrFN"),
        m = (function(t) {
          function e() {
            return t.apply(this, arguments) || this
          }
          return (
            Object(n.a)(e, t),
            (e.prototype.render = function() {
              var t = this.props.data.markdownRemark,
                e = this.props.data.site.siteMetadata.title
              return o.a.createElement(
                s.a,
                { location: this.props.location, title: e },
                o.a.createElement(l.a, {
                  title: t.frontmatter.title,
                  description: t.frontmatter.description || t.excerpt,
                }),
                o.a.createElement(
                  "article",
                  {
                    className:
                      "post-content " + (t.frontmatter.thumbnail || "no-image"),
                  },
                  o.a.createElement(
                    "header",
                    { className: "post-content-header" },
                    o.a.createElement(
                      "h1",
                      { className: "post-content-title" },
                      t.frontmatter.title
                    )
                  ),
                  t.frontmatter.description &&
                    o.a.createElement(
                      "p",
                      { class: "post-content-excerpt" },
                      t.frontmatter.description
                    ),
                  t.frontmatter.thumbnail &&
                    o.a.createElement(
                      "div",
                      { className: "post-content-image" },
                      o.a.createElement(i.a, {
                        className: "kg-image",
                        fluid: t.frontmatter.thumbnail.childImageSharp.fluid,
                        alt: t.frontmatter.title,
                      })
                    ),
                  o.a.createElement("div", {
                    className: "post-content-body",
                    dangerouslySetInnerHTML: { __html: t.html },
                  }),
                  o.a.createElement("footer", {
                    className: "post-content-footer",
                  })
                )
              )
            }),
            e
          )
        })(o.a.Component)
      e.default = m
    },
  },
])
//# sourceMappingURL=component---src-templates-blog-post-js-00d2785da3c2e31dfab3.js.map
