import Spinner from "react-bootstrap/Spinner";

function LoaderSpineer() {
  return (
    <div>
      <Spinner
        animation="border"
        style={{ color: "#000066", width: "50px", height: "50px" }}
      />
    </div>
  );
}

export default LoaderSpineer;
