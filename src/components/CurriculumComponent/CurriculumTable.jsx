import React, { Fragment } from "react";
import TarjetaCurriculum from "../CurriculumComponent/TarjetaCurriculum";
const CurriculumTable = (props) => {
  return (
    <Fragment>
      <div className="row ml-4">
        <div
          className="col-md-9 text-center mx-auto"
          style={{ backgroundColor: "#35527c", minHeight: "500px" }}
        >
          <div className="row">
            <h1 className="mx-auto mt-4 text-white">Curriculums</h1>
          </div>
          <hr className="bg-light" />
          <div
            className="table-wrapper-scroll-y"
            style={{
              position: "relative",
              height: "280px",
              width: "100%",
              overflowX: "auto",
            }}
          >
            <div className="row ml-4 mr-4">
              <TarjetaCurriculum />
              <TarjetaCurriculum />
              <TarjetaCurriculum />
              <TarjetaCurriculum />
              <TarjetaCurriculum />
              <TarjetaCurriculum />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CurriculumTable;
