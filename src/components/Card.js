import { BsFillBagFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const Card = ({ img, title, star, reviews, prevPrice, newPrice, desc }) => {
  return (
    <>
      <section className='m-[20px] border-2 border-[#ededed] p-[20px] cursor-pointer w-[250px] '>
        <div>
          {' '}
          <img src={img} alt={title} className='w-64 mb-4' />
        </div>

        <div className='card-details'>
          <h3 className='mb-4 font-primary font-bold'>{title}</h3>
          <p className='text-[12px]'>{desc}</p>

          <section className='mb-4 flex gap-2 items-center '>
            {star} <AiFillStar className='hover:fill-orange-500 star' />
            <span className='total-reviews'>{reviews}</span>
          </section>
          <section className='flex justify-between items-center '>
            <div className='price'>
              <del className='font-primary'>{prevPrice}</del> $ {newPrice}
            </div>
            <div className='bag cursor-pointer'>
              <BsFillBagFill
                className='cursor-pointer'
                onClick={() => {
                  alert('Added in cart');
                }}
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
