const Products = ({ result }) => {
  return (
    <>
      <div className='max-w-[700px] m-0  grid gap-1 grid-cols-2 md:grid-cols-3 mx-auto'>
        {result}
      </div>
    </>
  );
};

export default Products;
