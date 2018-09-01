import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const { title, src, short, fee, teamSize, Type, Date } = post.frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <img src={src} />
      <h3>{short}</h3>
      <p>{fee}</p>
      <p>{teamSize}</p>
      <p>{Date}</p>
    </div>
  )
}

export const postQuery = graphql`
  query GetEventData($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        src
        short
        fee
        teamSize
        Type
        Date
        
      }
    }
  }
`
