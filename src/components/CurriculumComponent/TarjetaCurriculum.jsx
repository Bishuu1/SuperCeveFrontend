import React, { Fragment } from "react";
const TarjetaCurriculum = () => {
  return (
    <Fragment>
      <div className="card border-success mb-3 ml-4" style={{ width: "14rem" }}>
        <span class="border"></span>
        <div className="card-header bg-transparent border-success">Header</div>
        <div className="card-body text-success">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-footer bg-transparent border-success">Footer</div>
      </div>
    </Fragment>
  );
};

export default TarjetaCurriculum;
