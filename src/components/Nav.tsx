import React from "react";

const Nav = () => {
  return (
    <nav className="bg-[#FBEBB5] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-black">M.Huzaifa</div>
        <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
          <a className="text-sm font-medium text-center" href="/">
            Home
          </a>
          <a className="text-sm font-medium text-center" href="/shop">
            Shop
          </a>
          <a className="text-sm font-medium text-center" href="/about">
            About
          </a>
          <a className="text-sm font-medium text-center" href="/contact">
            Contact
          </a>
        </div>
        <div className="flex mr-3 items-center space-x-5">
          <a href="/account">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-user h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sr-only">Account</span>
            </button>
          </a>
          <a href="/cart">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-search h-5 w-5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </a>
          <a href="/heart">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-heart h-5 w-5"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span className="sr-only">Wishlist</span>
            </button>
          </a>
          <a href="/checkout">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shopping-cart h-5 w-5"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="sr-only">Cart</span>
            </button>
          </a>
          <button className="md:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0">
        <div className="pt-4 pb-2 space-y-2 text-center">
          <a className="block py-2 text-sm font-medium" href="/">
            Home
          </a>
          <a className="block py-2 text-sm font-medium" href="/shop">
            Shop
          </a>
          <a className="block py-2 text-sm font-medium" href="/about">
            About
          </a>
          <a className="block py-2 text-sm font-medium" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
