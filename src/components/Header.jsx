import InfoIcon from "./InfoIcon";

export default function Header({ createdDate, modifiedDate, application }) {
  return (
    <div className="text-bg-primary py-5">
      <header className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-xxl-6">
                <h1 className="mt-xl-5 mb-4">
                  <a
                    href="/"
                    className="hstack link-light link-underline link-underline-opacity-50 gap-3 link-offset-1"
                  >
                    <i className="bi bi-fork-knife display-1"></i>
                    <span>{import.meta.env.VITE_APP_META_TITLE}</span>
                  </a>
                </h1>
                <p className="lead">
                  Интерактивна верзија на{" "}
                  <a
                    title="Отворете ја изворната верзија на Регистарот"
                    className="link-light"
                    href="https://www.economy.gov.mk/mk-MK/news/registar-na-izdadeni-odzemeni-i-odbieni-barana-zalicenci-za-noken-bar-kabare-diskoklub-i-diskoklub-na-otvoren-prostor.nspx"
                    rel="nofollow"
                  >
                    Регистарот на издадени лиценци за вршење на угостителска
                    дејност КАБАРЕ, НОЌЕН БАР, ДИСКОКЛУБ И ДИСКОКЛУБ НА ОТВОРЕН
                    ПРОСТОР
                  </a>{" "}
                  на Министерство за економија и труд на Република Северна
                  Македонија.
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              {/* <div className="col-xxl-4">
                <div className="form-floating">
                  <select id="version" className="form-select">
                    <option
                      value={"Copy of Регистар Лиценци (2025 год)_ok.xlsx"}
                    >
                      2025
                    </option>
                  </select>
                  <label htmlFor="version">Верзија</label>
                </div>
              </div> */}
              <div className="col-xxl-6">
                <div className="row">
                  <div className="col-lg-4">
                    <dl>
                      <dt className="hstack gap-2">
                        <span>Датум на создавање</span>
                        <InfoIcon title="Се однесува на датумот на создавањето на изворната датотека" />
                      </dt>
                      <dd>
                        <time dateTime={createdDate} title={createdDate}>
                          {new Date(createdDate).toLocaleDateString("mk-MK")}
                        </time>
                      </dd>
                    </dl>
                  </div>
                  <div className="col-lg-4">
                    <dl>
                      <dt className="hstack gap-2">
                        <span>Датум на ажурирање</span>
                        <InfoIcon title="Се однесува на датумот на ажурирањето на изворната датотека" />
                      </dt>
                      <dd>
                        <time dateTime={modifiedDate} title={modifiedDate}>
                          {new Date(modifiedDate).toLocaleDateString("mk-MK")}
                        </time>
                      </dd>
                    </dl>
                  </div>
                  <div className="col-lg-4">
                    <dl>
                      <dt>Изворен формат</dt>
                      <dd>{application}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 offset-xxl-2">
                <p className="alert alert-secondary align-items-start hstack gap-3 shadow">
                  <i className="bi bi-exclamation-square"></i>
                  <span className="lh-sm">
                    Сите <strong>печатни грешки</strong> и недоследности
                    потекнуваат од изворната датотека и не се предмет на
                    дополнителна машинска обработка. Соодветно на тоа, може да
                    забележите <strong>дупли и/или слични вредности</strong>.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
