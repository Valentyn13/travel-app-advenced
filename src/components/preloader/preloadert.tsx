import "./style.css";

const Preloader = () => {
  return (
    <div className="loader" data-test-id="loader">
      <div className="spinner-block">
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
