import React from 'react';
import { withPrefix } from 'gatsby-link'
// import csgo from '../assets/csgo.jpg'

const EventsPage = ({data}) => {
  return (
    <div>
          {data.allMarkdownRemark.edges.map(post=>(
      <img src={withPrefix(post.node.frontmatter.src)}/>
      // console.log(post.node.frontmatter.src)
    ))}
    {/* <img src={csgo}/> */}
    </div>
  );
}


export const pageQuery = graphql`
query EventsQuery {
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          path
          src
        }
      }
    }
  }
}
`

export default EventsPage;