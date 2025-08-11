import { useState, useEffect } from "react";
import { read, utils } from "xlsx";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import Footer from "./components/Footer";
import CookieConsent from "react-cookie-consent";
import { transliterate } from "./utils/transliterate";

function App() {
  const [buffer, setBuffer] = useState([]);
  const [sheets, setSheets] = useState([]);
  const [createdDate, setCreatedDate] = useState([]);
  const [modifiedDate, setModifiedDate] = useState([]);
  const [application, setApplication] = useState([]);
  const [file, setFile] = useState(`Регистар Лиценци (2025 год)_290725.xlsx`);

  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await fetch(`./xlsx/${file}`);
      const ab = await f.arrayBuffer();

      /* Parse */
      const wb = read(ab);

      setCreatedDate(wb.Props.CreatedDate.toISOString());
      setModifiedDate(wb.Props.ModifiedDate.toISOString());
      setApplication(wb.Props.Application);

      setBuffer(wb);
      setSheets(
        Object.keys(wb.Sheets).map((item, key) => {
          return utils.sheet_to_json(wb.Sheets[wb.SheetNames[key]]);
        })
      );
    })();
  }, [file]);

  return (
    <Router>
      <Header
        createdDate={createdDate}
        modifiedDate={modifiedDate}
        application={application}
        file={file}
        setFile={setFile}
      />
      <div className="container-fluid flex-fill">
        <div className="row mb-5">
          <div className="col-xxxl-10 offset-xxxl-1">
            <Routes>
              {sheets.map(
                (item, key) => (
                  console.log(buffer.SheetNames[key].toLowerCase()),
                  (
                    <Route
                      path={
                        key > 0
                          ? `/${transliterate(
                              buffer.SheetNames[key].toLowerCase()
                            )}`
                          : `/`
                      }
                      element={
                        <Table
                          headersRow={
                            buffer.SheetNames[key] === "ОДЗЕМЕНИ" ? 2 : 3
                          }
                          sheetNames={buffer.SheetNames}
                          tableData={utils.sheet_to_json(
                            buffer.Sheets[buffer.SheetNames[key]]
                          )}
                        />
                      }
                    />
                  )
                )
              )}
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Во ред"
        cookieName={import.meta.env.VITE_APP_GA_ID}
        containerClasses="fixed-bottom alert alert-success hstack gap-2 justify-content-between m-4 shadow"
        contentClasses="hstack my-auto py-2"
        buttonClasses="btn btn-success text-nowrap"
        disableStyles={true}
      >
        Ова мрежно место користи т.н. колачиња за подобрување на корисничкото
        искуство.
      </CookieConsent>
    </Router>
  );
}

export default App;
