;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    w2l6: function(t, e, n) {
      "use strict"
      n.r(e)
      var a = n("dI71"),
        o = n("q1tI"),
        i = n.n(o),
        r = n("Bl7J"),
        l = n("vrFN"),
        p = (function(t) {
          function e() {
            return t.apply(this, arguments) || this
          }
          return (
            Object(a.a)(e, t),
            (e.prototype.render = function() {
              var t = this.props.data.site.siteMetadata.title
              return i.a.createElement(
                r.a,
                { location: this.props.location, title: t },
                i.a.createElement(l.a, { title: "404: Not Found" }),
                i.a.createElement("h1", null, "Error 404: Not Found"),
                i.a.createElement(
                  "p",
                  null,
                  "Infelizmente esta página não existe... sinto muito."
                )
              )
            }),
            e
          )
        })(i.a.Component)
      e.default = p
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-d6337daac0b5465f2f29.js.map
