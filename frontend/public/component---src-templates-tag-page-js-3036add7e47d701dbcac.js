;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    Kgxr: function(e, t, a) {
      "use strict"
      a.r(t)
      var r = a("dI71"),
        s = a("q1tI"),
        n = a.n(s),
        o = a("Bl7J"),
        p = a("vrFN"),
        l = a("DNPW"),
        i = (function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = this.props.pageContext.tag,
                a = this.props.data.allMarkdownRemark.edges,
                r = this.props.data.site.siteMetadata.title
              return n.a.createElement(
                o.a,
                { location: this.props.location, title: r },
                n.a.createElement(p.a, {
                  title: "#" + (t.charAt(0).toUpperCase() + t.slice(1)),
                  keywords: ["" + t, "blog", "gatsby", "javascript", "react"],
                }),
                n.a.createElement(
                  "header",
                  { className: "tag-page-head" },
                  n.a.createElement(
                    "h1",
                    { className: "page-head-title" },
                    "#",
                    t,
                    " (",
                    e.data.allMarkdownRemark.totalCount,
                    ")"
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "post-feed" },
                  a.map(function(e) {
                    var t = e.node
                    return n.a.createElement(l.a, {
                      key: t.fields.slug,
                      node: t,
                      postClass: "post",
                    })
                  })
                )
              )
            }),
            t
          )
        })(n.a.Component)
      t.default = i
    },
  },
])
//# sourceMappingURL=component---src-templates-tag-page-js-3036add7e47d701dbcac.js.map
