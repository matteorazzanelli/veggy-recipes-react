import React from "react";

import loadingGif from "../../images/loader.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Recipes data loading....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}
