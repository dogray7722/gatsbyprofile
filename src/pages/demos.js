import React from 'react'

import Layout from  '../components/layout'
import Playlist from '../components/Playlist'
import SEO from '../components/seo'
import { Container } from 'reactstrap'

const DemosPage = () => (
    <Layout pageTitle="Demos">
        <SEO title="Demos"></SEO>
        <Container className="contactInfo">
            <Playlist />

        </Container>
    </Layout>
)

export default DemosPage