import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  mt-4">
      <div className="row ">
        <div className="col-6">
          <img src={imageURL}></img>
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "30px" }}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/assets/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img
                src="media/assets/appstoreBadge.svg"
                style={{ marginLeft: "30px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
