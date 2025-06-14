import { useState, useEffect } from "react";
import { read, utils } from "xlsx";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import Footer from "./components/Footer";
import CookieConsent from "react-cookie-consent";

function App() {
  const [izdadeni, setIzdadeni] = useState([]);
  const [odbieni, setOdbieni] = useState([]);
  const [odzemeni, setOdzemeni] = useState([]);
  const [createdDate, setCreatedDate] = useState([]);
  const [modifiedDate, setModifiedDate] = useState([]);
  const [application, setApplication] = useState([]);

  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await fetch("./xlsx/Copy of Регистар Лиценци (2025 год)_ok.xlsx");
      const ab = await f.arrayBuffer();

      /* Parse */
      const wb = read(ab);

      setCreatedDate(wb.Props.CreatedDate.toISOString());
      setModifiedDate(wb.Props.ModifiedDate.toISOString());
      setApplication(wb.Props.Application);

      setIzdadeni(utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
      setOdzemeni(utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]]));
      setOdbieni(utils.sheet_to_json(wb.Sheets[wb.SheetNames[2]]));
    })();
  }, []);

  return (
    <Router>
      <Header
        createdDate={createdDate}
        modifiedDate={modifiedDate}
        application={application}
      />
      <div className="container-fluid flex-fill">
        <div className="row mb-5">
          <div className="col-xxxl-10 offset-xxxl-1">
            <Routes>
              <Route path="/" element={<Table tableData={izdadeni} />} />
              <Route path="/odbieni" element={<Table tableData={odbieni} />} />
              <Route
                path="/odzemeni"
                element={<Table tableData={odzemeni} headersRow={2} />}
              />
              {/* <Route
                path="/ugostitelski-objekt/:uo"
                element={<UgostitelskiObjekt />}
              />
              <Route path="/vid-na-licenca/:l" element={<VidNaLicenca />} /> */}
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Во ред"
        cookieName={import.meta.env.VITE_APP_GA_ID}
        containerClasses="fixed-bottom bg-dark text-light d-flex flex-wrap justify-content-between align-content-center p-3"
        contentClasses="d-inline-flex my-auto py-2"
        buttonClasses="btn btn-light"
        declineButtonClasses="btn btn-outline-light ms-2"
        disableStyles={true}
        flipButtons={true}
      >
        Ова мрежно место користи т.н. колачиња за подобрување на корисничкото
        искуство.
      </CookieConsent>
    </Router>
  );
}

export default App;
