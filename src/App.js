import { useState } from 'react';
import { MdFilterListAlt } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

import Navigation from './Navigation/Navbar';
import Products from './Products/Products';
import products from './db/dataBase';

import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';
import './index.css';
import data from './db/dataBase';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  ///Side bar bttn
  const [showComponent, setShowComponent] = useState(true);

  const handleShow = () => {
    setShowComponent(true);
  };

  const handleHide = () => {
    setShowComponent(false);
  };

  //Load more
  const [visible, setVisible] = useState(1);
  const LoadMore = () => {
    setVisible((prevValue) => prevValue + 1);
  };
  const slicedData = data.slice(0, visible);

  //Load more end

  //selected category

  const [selectedCategory, setSelectedCategory] = useState(null);
  //selected category end

  //  Radio button Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected) {
    let filteredProducts = products;
    //radio button filtering end

    // Applying the filter that we've selected
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, desc }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          desc={desc}
        />
      )
    );
  }
  //Applying the filter that we've selected end

  ///CATGORY FILTERING

  const result = filteredData(products, selectedCategory);

  return (
    <>
      <Navigation />
      <Banner />
      <div className='w-[500px] '>
        <button onClick={handleShow} className='mr-2'>
          {' '}
          <MdFilterListAlt className='ml-96 mt-4 } ' size={28} />
        </button>
        <button onClick={handleHide}>
          {' '}
          <IoClose size={28} />
        </button>
        {showComponent && <Sidebar handleChange={handleChange} />}
      </div>
      {slicedData.map((data, index) => {
        return <Products result={result} />;
      })}
      <button
        onClick={() => LoadMore()}
        className='z-999  bg-[#bce1ff]  text-black  font-primary py-2 px-4 rounded flex justify-center items-center mx-auto  '
      >
        {' '}
        LOAD MORE
      </button>
      <Footer />
    </>
  );
}

export default App;
