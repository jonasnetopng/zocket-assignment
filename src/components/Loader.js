import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="53" y="97" rx="0" ry="0" width="379" height="40" />
    <rect x="3" y="9" rx="0" ry="0" width="396" height="40" />
    <rect x="4" y="58" rx="0" ry="0" width="312" height="19" />
  </ContentLoader>
);

export default Loader;
