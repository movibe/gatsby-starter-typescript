import { Link } from 'gatsby'
import React from 'react'
import { Image, Layout, SEO } from '~/components'
import { Button } from '@material-ui/core'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button variant="contained" color="primary">
      Default
    </Button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
