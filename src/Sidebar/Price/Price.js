import Input from '../../components/Input';

const Price = ({ handleChange }) => {
  return (
    <>
      <div className='ml-10 w-32'>
        <h2 className='sidebar-title price-title text-center font-primary'>
          Price
        </h2>
        <div className='flex flex-col gap-2 items-start  mb-4 '>
          <label className='sidebar-label-container font-primary'>
            <input onChange={handleChange} type='radio' value='' name='test2' />
            <span className='checkmark mr-2'></span>All
          </label>

          <Input
            className='font-primary'
            handleChange={handleChange}
            value={50}
            title='$0 - 50'
            name='test2'
          />

          <Input
            handleChange={handleChange}
            value={100}
            title='$50 - $100'
            name='test2'
          />

          <Input
            handleChange={handleChange}
            value={150}
            title='$100 - $150'
            name='test2'
          />

          <Input
            handleChange={handleChange}
            value={200}
            title='Over $150'
            name='test2'
          />
        </div>
      </div>
    </>
  );
};

export default Price;
