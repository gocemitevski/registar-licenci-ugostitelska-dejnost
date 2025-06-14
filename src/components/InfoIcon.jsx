import { Fragment, useState } from "react";

export default function InfoIcon({ title }) {
  const [tooltip, toggleTooltip] = useState(false);
  return (
    <Fragment>
      <button
        data-bs-toggle="tooltip"
        data-bs-title={title}
        type="button"
        className="btn btn-link link-light"
        onClick={() => toggleTooltip(!tooltip)}
      >
        <i className="bi bi-question-square"></i>
      </button>
      {tooltip ? (
        <div
          className="alert alert-light alert-dismissible fade show position-absolute shadow-lg"
          role="alert"
        >
          {title}
          <button
            type="button"
            className="btn-close"
            onClick={() => toggleTooltip(!tooltip)}
            aria-label="Close"
          ></button>
        </div>
      ) : (
        false
      )}
    </Fragment>
  );
}
