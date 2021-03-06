import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="You lost?">
    <SEO title="404: Not found" />
    <Link to={"/"} className="btn btn-primary text-uppercase">
      Go Home
    </Link>
  </Layout>
)

export default NotFoundPage
