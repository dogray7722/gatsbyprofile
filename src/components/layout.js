
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'
import Head from './Head'
import Header from './header'
import Sidebar from '../components/Sidebar'
import Footer from './Footer'
import '../styles/index.scss'

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Head />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
      <h1>{pageTitle}</h1>
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4">
            <Sidebar />
          </Col>
          </Row>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
