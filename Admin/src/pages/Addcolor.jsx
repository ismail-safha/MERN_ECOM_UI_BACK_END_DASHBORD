import CustomInput from "../components/CustomInput";

const Addcolor = () => {
  return (
    <div>
      <h3 className="mb-4">Add color</h3>
      <div className="">
        <form action="">
          <CustomInput type="color" label="Enter Color " />
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
