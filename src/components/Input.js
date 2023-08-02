const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className='sidebar-label-container'>
      <input onChange={handleChange} type='radio' value={value} name={name} />
      <span
        className='checkmark mr-2'
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
