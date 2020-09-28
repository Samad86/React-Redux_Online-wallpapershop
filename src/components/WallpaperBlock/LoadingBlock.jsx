import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="25" y="0" rx="0" ry="0" width="230" height="230" />
      <rect x="1" y="245" rx="6" ry="6" width="280" height="20" />
      <rect x="0" y="285" rx="6" ry="6" width="280" height="100" />
      <rect x="1" y="400" rx="6" ry="6" width="95" height="50" />
      <rect x="130" y="405" rx="20" ry="20" width="150" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
