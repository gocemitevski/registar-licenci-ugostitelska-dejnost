import TabsNav from "./TabsNav";
import { Fragment, useEffect, useState } from "react";

export default function Table({ tableData, headersRow = 3 }) {
  const placeholder = "Пребарајте...";
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
        row[column]
          .toString()
          .trim()
          .toLowerCase()
          .includes(filters[column].trim().toLowerCase())
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
                        <th className="col-xl-2" scope="col" key={key}>
                          <label
                            htmlFor={Object.keys(filters)[key]}
                            className="form-label"
                          >
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
                              title={
                                filters[Object.keys(filters)[key]].length
                                  ? `Отстрани филтер`
                                  : `Внесете вредност за да можете да ја избришете`
                              }
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
                          <td key={key}>
                            <div className="hstack justify-content-between align-items-start gap-2">
                              <span>{row[filter]}</span>
                              {!filters[Object.keys(filters)[key]]
                                .toString()
                                .trim()
                                .toLowerCase()
                                .includes(
                                  row[filter] &&
                                    row[filter].toString().trim().toLowerCase()
                                ) ? (
                                <button
                                  title={`Пребарај за ${row[filter]}`}
                                  onClick={() =>
                                    setFilters({
                                      ...filters,
                                      [Object.keys(filters)[key]]:
                                        row[filter].toString(),
                                    })
                                  }
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="bi bi-search"></i>
                                </button>
                              ) : (
                                ``
                              )}
                            </div>
                          </td>
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
                        Не постојат лиценци за внесените параметри или сте
                        направиле некоја грешка при пребарувањето.
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
