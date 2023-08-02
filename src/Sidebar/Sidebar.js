import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className=''>
        <div className='w-[30%] fixed flex flex-col  h-screen items-center  overflow-y-auto bg-white  pt-12 absolute'>
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} className='ml-' />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
