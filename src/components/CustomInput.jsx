const CustomInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, name, placeholder, classname } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  );
};

export default CustomInput;
