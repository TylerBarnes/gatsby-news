import React from "react"
import { graphql  } from "gatsby"

import Page from '../components/page'

const TodayPage = props => <Page {...props} />

export const pageQuery = graphql`
  query TodayQuery($date: String!) {
    posts: allWpPost(limit:25, filter: {date: { eq: $date }, categories: {nodes: {elemMatch: {name: {eq: "Latest News"}}}}}) {
      nodes {
        ...WpPostPreviewFragment
      }
    }
  }
`

export default TodayPage
