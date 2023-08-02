import Input from '../../components/Input';

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className='ml-2'>
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
            <span className='checkmark all pl-2 font-primary text-[12px]'>
              All
            </span>
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

          <label className=''>
            <input
              onChange={handleChange}
              type='radio'
              value='white'
              name='test1'
              className='h-3'
            />
            <span className='checkmark pl-2 font-primary text-[12px]'>
              White{' '}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Colors;
