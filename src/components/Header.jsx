import InfoIcon from "./InfoIcon";
import { socialLinkButtons } from "../utils/socialLinkButtons";

export default function Header({
  file,
  setFile,
  createdDate,
  modifiedDate,
  application,
}) {
  const socialLinks = socialLinkButtons();

  return (
    <div className="text-bg-primary py-5">
      <header className="container-fluid">
        <div className="row">
          <div className="col-xxxl-10 offset-xxxl-1">
            <div className="row my-xxxl-4 g-3">
              <div className="col-xxxl-6">
                <h1 className="mb-4">
                  <a
                    href="./"
                    className="hstack link-light link-underline link-underline-opacity-50 gap-3 link-offset-1"
                  >
                    <i className="bi bi-fork-knife display-1"></i>
                    <span>{import.meta.env.VITE_APP_META_TITLE}</span>
                  </a>
                </h1>
                <p className="lead mb-4">
                  Интерактивна верзија на{" "}
                  <a
                    title="Отворете ја страницата „Регистри прегледи лиценци ценовници“ на Министерство за економија и труд на Република Северна Македонија"
                    className="link-light"
                    target="_blank"
                    href="https://www.economy.gov.mk/mk-MK/regulativa/registri-pregledi-licenci-cenovnici"
                    rel="nofollow"
                  >
                    Регистарот на издадени и одбиени барања за лиценци за ноќен
                    бар, кабаре, дискоклуб и дискоклуб на отворен простор
                  </a>{" "}
                  на Министерство за економија и труд на Република Северна
                  Македонија.
                </p>
                <div className="mb-4">
                  <div className="form-floating">
                    <select
                      id="datoteka"
                      className="form-select"
                      onChange={(e) => setFile(e.target.value)}
                      value={file}
                    >
                      <option
                        value={`registar-n-izdadeni-licenci-za-vrsenje-na-ugostitelska-dejnost-kabare-nokjen-bar-diskoklub-i-diskoklub-na-otvoren-prostor-file-6grd.xlsx`}
                      >
                        26 август 2025
                      </option>
                      <option value={`Регистар Лиценци (2025 год)_290725.xlsx`}>
                        30 јули 2025
                      </option>
                      <option
                        value={`Copy of Регистар Лиценци (2025 год)_ok.xlsx`}
                      >
                        30 април 2025
                      </option>
                    </select>
                    <label for="datoteka">Изворна датотека</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <dl>
                      <dt className="hstack gap-2">
                        <span>Датум на создавање</span>
                        <InfoIcon
                          id="datumSozdavanje"
                          title="Се однесува на датумот на создавање на изворната датотека на регистарот во Министерство за економија и труд на Република Северна
                  Македонија. Овој датум е запишан во мета-податоците на изворната датотека."
                        />
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
                        <InfoIcon
                          id="datumAzuriranje"
                          title="Се однесува на датумот на ажурирање на изворната датотека на регистарот во Министерство за економија и труд на Република Северна
                  Македонија. Овој датум е запишан во мета-податоците на изворната датотека."
                        />
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
              <div className="col-xxxl-4 offset-xxxl-2 vstack">
                {socialLinks.length ? (
                  <ul className="nav justify-content-end flex-fill">
                    {socialLinks.map((icon, key) => (
                      <li key={key} className="nav-item">
                        <a
                          title={`Сподели на ${icon.title}`}
                          href={icon.href}
                          target="_blank"
                          rel="noopener"
                          className="nav-link link-light"
                        >
                          <i className={`bi ${icon.icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ``
                )}
                <div className="alert alert-secondary align-items-start hstack gap-3 shadow">
                  <i className="bi bi-exclamation-square"></i>
                  <div className="vstack gap-2">
                    <p className="mb-0">
                      Сите <strong>печатни грешки</strong> и недоследности
                      потекнуваат од изворната датотека и не се предмет на
                      дополнителна машинска обработка. Соодветно на тоа, може да
                      забележите <strong>дупли и/или слични вредности</strong>.
                    </p>
                    <p className="mb-0">
                      Авторот на оваа компјутерска презентација не сноси никаква
                      одговорност за точноста на податоците.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
