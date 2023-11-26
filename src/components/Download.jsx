import googlePlay from "../images/download/googleplay.svg";
import appStore from "../images/download/appstore.svg";

function Download() {
  return (
    <section className="download">
      <div className="container">
        <div className="download__title">
          <h2 className="heading-secondary">
            Download our app to get most out of it
          </h2>
          <p className="paragraph">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
        </div>
        <div className="download__links">
          <a href="/">
            <img src={googlePlay} alt="googlePlay" />
          </a>
          <a href="/">
            <img src={appStore} alt="appStore" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Download;
