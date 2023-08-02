import Input from '../../components/Input';

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className=''>
        <h2 className='sidebar-title mb-4 text-center font-primary '>Colors</h2>
        <div className='flex flex-col gap-2 items-start pr-8'>
          <label className='sidebar-label-container'>
            <input
              onChange={handleChange}
              type='radio'
              value=''
              name='test1'
              className=''
            />
            <span className='checkmark all mr-2'></span>
            All
          </label>

          <Input
            handleChange={handleChange}
            value='black'
            title='Black'
            name='test1'
            color='black'
          />

          <Input
            handleChange={handleChange}
            value='blue'
            title='Blue'
            name='test1'
            color='blue'
          />

          <Input
            style={{}}
            handleChange={handleChange}
            value='gray'
            title='Gray'
            name='test1'
            color='gray'
          />

          <label className='mr-2'>
            <input
              onChange={handleChange}
              type='radio'
              value='white'
              name='test1'
            />
            <span className='checkmark mr-2'></span>
            White
          </label>
        </div>
      </div>
    </>
  );
};

export default Colors;
