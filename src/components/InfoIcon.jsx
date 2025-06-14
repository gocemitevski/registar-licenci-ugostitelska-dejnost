import { Fragment } from "react";

export default function InfoIcon({ title, id }) {
  return (
    <Fragment>
      <button
        popoverTarget={`info-icon-${id}`}
        type="button"
        className="btn btn-link link-light"
      >
        <i className="bi bi-question-square"></i>
      </button>
      <div
        popover={"auto"}
        id={`info-icon-${id}`}
        role="alert"
        className="alert alert-light alert-dismissible fade show w-25 fw-normal shadow-lg position-absolute p-5"
      >
        {title}
        <button type="button" className="btn-close" popoverTarget={`info-icon-${id}`}></button>
      </div>
    </Fragment>
  );
}
