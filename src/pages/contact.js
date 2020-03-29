import React from "react"

import Layout from  "../components/layout"
import SEO from "../components/seo"
import { Form, FormGroup, Label, Input, Container, Col, Button} from 'reactstrap'


const ContactPage = () => (
    <Layout pageTitle="Contact">
        <SEO title="Contact"></SEO>
        <Container className="contactInfo">
            <h2>Your Message</h2>
            <Form>
                <FormGroup>
                    <Label for="name" sm={{size: 2, offset: 2}}>Name</Label>
                    <Col sm={{size: 7, offset: 2 }}>
                        <Input type="text" name="name" id="name" placeholder="your name"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="email" sm={{size: 2, offset: 2}}>Email</Label>
                    <Col sm={{size: 7, offset: 2}}>
                        <Input type="email" name="email" id="subject" placeholder="your email"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="message" sm={{size: 2, offset: 2}}>Message</Label>
                    <Col sm={{size: 7, offset: 2}}>
                        <Input type="textarea" rows={8} name="message" id="message" placeholder="your message to Dave"/>
                    </Col>
                </FormGroup>
                <Col style={{marginTop: '20px'}} sm={{size: 5, offset: 2}}>
                    <Button  color="info" size="lg">Send</Button>
                </Col>
            </Form>
        </Container>
    </Layout>
)

export default ContactPage