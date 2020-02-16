import React from "react"
import { Link } from "gatsby"
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Badge
} from "reactstrap"
import Img from 'gatsby-image'
import { slugify } from "../util/utilityFunctions"

const post = ( { title, author, slug, date, body, fluid, tags} ) => {
    return (
        <Card>
            <Link to={slug}>
                <Img className="card image top" fluid={fluid} />
            </Link>
            <CardBody>
            <Link to={slug}>
            <CardTitle>
                {title}
            </CardTitle>
            </Link>
            <CardSubtitle>
                <span className="text-info">{date}</span>{" "}
                <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
            <ul className="post-tags">
                {tags.map(tag => (
                    <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                    {/* <Link to={tag}> */}
                    <Badge color="primary" className="text-uppercase">
                        {tag}
                    </Badge>
                    </Link>
                    </li>
                ))}
                </ul>
                <Link to={slug} className = "btn btn-outline-primary float-right">Read more</Link>
            </CardBody>
        </Card>
    )
} 

export default post