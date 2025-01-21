import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container  mt-4">
      <div className="row ">
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "30px" }}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
