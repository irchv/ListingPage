const Products = ({ result }) => {
  return (
    <>
      <section className='flex flex-wrap mx-auto mt-8 z-[-2] flex-row w-[300px] ml-[30%] xl:w-[900px] sm:ml-[20%]w-[600px]   md:ml-[30%] w-[700px] '>
        {result}
      </section>
    </>
  );
};

export default Products;
