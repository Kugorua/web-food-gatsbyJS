import React from "react"

import Layout from "../components/layout/Layout"
import MainHome from "../components/component-main-home/MainHome"
import SEO from "../components/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHome />
  </Layout>
)

export default IndexPage
