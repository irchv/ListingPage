const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className='sidebar-label-container'>
      <input
        onChange={handleChange}
        type='radio'
        value={value}
        name={name}
        className='h-3 mr-2'
      />
      <span className='font-primary text-[12px] checkmark mr-2'>{title}</span>
    </label>
  );
};

export default Input;
