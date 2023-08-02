import weight from '../img/weight.svg';
const Nav = () => {
  return (
    <header class='w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font fixed mb-[500px] z-50 sm:'>
      <div class='container flex flex-col flex-wrap items-center p-5 mx-auto sm:flex-row'>
        <nav class='flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto'>
          <a href='#_' class='mr-5 font-medium hover:text-gray-900'>
            Home
          </a>
          <a href='#_' class='mr-5 font-medium hover:text-gray-900'>
            About
          </a>
          <a href='#_' class='font-medium hover:text-gray-900'>
            Contact
          </a>
        </nav>
        <a
          class='flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0'
          href='#'
        >
          <img src={weight} className='h-10' />
        </a>
        <div class='inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0'></div>
      </div>
    </header>
  );
};

export default Nav;
