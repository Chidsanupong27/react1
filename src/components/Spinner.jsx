import { BarLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return;

  <BarLoader
    color="#3b82f6"
    size={20}
    cssOverride={{ margin: "48px", textAlign: "center" }}
    loading={loading}
  />;
};

export default Spinner;
