import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from "./Teaser/Teaser";
import Grid from "./Grid/Grid";
import Feature from "./Feature/Feature";
 
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  }
});
 
const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 
export default Layout