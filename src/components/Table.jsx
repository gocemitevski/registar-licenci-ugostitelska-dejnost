import TabsNav from "./TabsNav";
import { Fragment, useEffect, useState } from "react";

export default function Table({ tableData, headersRow = 3 }) {
  const placeholder = "Пребарајте";
  const [filters, setFilters] = useState({
    __EMPTY: "",
    __EMPTY_1: "",
    __EMPTY_2: "",
    __EMPTY_3: "",
    __EMPTY_4: "",
    __EMPTY_5: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  const searchData = (e, column) => {
    setFilters({ ...filters, [column]: e.target.value });
  };

  const results = filteredData.filter((row) =>
    Object.keys(filters).every((column) => {
      if (!filters[column]) return true; // If filter is empty, include the row
      return (
        row[column] &&
        row[column].toString().toLowerCase().includes(filters[column])
      );
    })
  );

  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  return (
    <Fragment>
      <TabsNav />
      {tableData.length ? (
        <div className="table-responsive-md">
          <table className="table table-striped">
            <thead className="sticky-top">
              {tableData.map(
                (row, key) =>
                  row.__EMPTY &&
                  row.__rowNum__ === headersRow &&
                  row["__EMPTY_1"] && (
                    <tr key={key}>
                      {Object.keys(filters).map((filter, key) => (
                        <th className="col-xl-1" scope="col" key={key}>
                          <label htmlFor="1" className="form-label">
                            {row[Object.keys(filters)[key]]}
                          </label>
                          <div className="input-group">
                            <input
                              id={Object.keys(filters)[key]}
                              className={`form-control ${
                                filters[Object.keys(filters)[key]].length > 0
                                  ? `is-valid`
                                  : ``
                              }`}
                              placeholder={placeholder}
                              value={filters[Object.keys(filters)[key]]}
                              onChange={(e) =>
                                searchData(e, Object.keys(filters)[key])
                              }
                            />
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              title="Отстрани филтер"
                              onClick={() =>
                                setFilters({
                                  ...filters,
                                  [Object.keys(filters)[key]]: "",
                                })
                              }
                              disabled={
                                !filters[Object.keys(filters)[key]].length
                              }
                            >
                              <i className="bi bi-x-lg"></i>
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  )
              )}
            </thead>
            <tbody className="table-group-divider">
              {results.length ? (
                results.map(
                  (row, key) =>
                    row.__EMPTY &&
                    row.__rowNum__ > headersRow && (
                      <tr key={key}>
                        {Object.keys(filters).map((filter, key) => (
                          <td key={key}>{row[filter]}</td>
                        ))}
                      </tr>
                    )
                )
              ) : (
                <tr>
                  <td colSpan={6} className="table-danger">
                    <div className="hstack gap-3">
                      <i className="bi bi-exclamation-square"></i>
                      <p className="mb-0">
                        Не постојат лиценци за внесените параметри.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <Fragment>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-glow mb-2">
            <span className="placeholder col-12"></span>
          </p>
        </Fragment>
      )}
    </Fragment>
  );
}
