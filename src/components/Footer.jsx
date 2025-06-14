export default function Footer() {
  return (
    <div className="text-bg-primary py-5">
      <footer className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            Изработено од{" "}
            <a
              className="link-light"
              rel="noopener"
              href="https://www.gocemitevski.com/"
            >
              Гоце Митевски
            </a>
            .{" "}
            <a
              className="link-light"
              rel="noopener"
              href="https://github.com/gocemitevski/registar-licenci-ugostitelska-dejnost"
            >
              Изворниот код
            </a>{" "}
            е достапен на GitHub под лиценцата „
            <a
              className="link-light"
              rel="noopener"
              href="https://github.com/gocemitevski/registar-licenci-ugostitelska-dejnost?tab=GPL-3.0-1-ov-file"
            >
              GPL-3.0
            </a>
            “.
          </div>
        </div>
      </footer>
    </div>
  );
}
