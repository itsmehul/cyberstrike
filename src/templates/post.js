import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const {
    title,
    short,
    fee,
    teamSize,
    Type,
    Date,
    widescreen,
  } = post.frontmatter
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div style={{height:'200px', width:'100%', overflow:'hidden'}}>
        <img src={widescreen} style={{height:'auto',width:'100%'}}/>
      </div>
      <h1>{title}</h1>
      <h3>{short}</h3>
      <p>{fee}</p>
      <p>{teamSize}</p>
      <p>{Type}</p>
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
        short
        fee
        teamSize
        Type
        Date
        widescreen
      }
    }
  }
`
