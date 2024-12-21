import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const AccountPage: React.FC = () => {
  return (
    <div>
      

      {/* Header Image */}
      <div className="relative h-[300px] w-full">
        <Image 
          src="/shop/Rectangle-1.png" 
          alt="Shop Header" 
          fill 
          priority 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
          <img src="/shop/logo.png" alt="logo" />
          </div>
          <h1 className="text-4xl font-bold text-black">My Account</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/checkout" className="hover:underline">My account</Link>
          </div>
        </div>
      </div>

      {/* Login and Register Sections */}
      <div className="mt-8 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
        {/* Login Section */}
        <div className="p-4 rounded">
          <h2 className="text-3xl font-bold my-8">Log In</h2>
          <div className="flex flex-col">
            <label 
              htmlFor="username" 
              className="my-2 font-semibold text-gray-800 mb-2"
            >
              Username or email address
            </label>
            <input 
              type="text" 
              id="username" 
              className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4" 
            />
          </div>
          <div className="flex flex-col">
            <label 
              htmlFor="password" 
              className="my-2 font-semibold text-gray-800 mb-2"
            >
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4" 
            />
          </div>
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="remember" 
              className="mr-2" 
            />
            <label htmlFor="remember" className="text-gray-800 my-4">
              Remember me
            </label>
          </div>
          <div className="flex items-center">
            <button 
              className="border border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700"
            >
              Log In
            </button>
            <p className="ml-6 text-gray-500 text-sm hover:underline cursor-pointer">
              Lost Your Password?
            </p>
          </div>
        </div>

        {/* Register Section */}
        <div className="p-4 rounded">
          <h2 className="text-3xl font-bold my-8">Register</h2>
          <label 
            htmlFor="register-email" 
            className="block my-2 font-semibold text-gray-800 mb-2"
          >
            Email address
          </label>
          <input 
            type="text" 
            id="register-email" 
            className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4" 
          />
          <p className="text-gray-500 my-4">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-gray-500 mb-4">
            Your personal data will be used to support your experience throughout this website, 
            to manage access to your account, and for other purposes described in our{' '}
            <span className="font-bold text-gray-700">privacy policy</span>.
          </p>
          <button 
            className="border my-10 border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700"
          >
            Register
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#FDF7FC] px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Free Delivery</h3>
            <p className="text-sm text-muted-foreground">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">90 Days Return</h3>
            <p className="text-sm text-muted-foreground">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Secure Payment</h3>
            <p className="text-sm text-muted-foreground">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-2 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-sm text-[#9F9F9F] mt-12">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">Links</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:underline">Home</Link>
                <Link href="#" className="hover:underline">Shop</Link>
                <Link href="#" className="hover:underline">About</Link>
                <Link href="#" className="hover:underline">Contact</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">Help</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:underline">Payment Options</Link>
                <Link href="#" className="hover:underline">Returns</Link>
                <Link href="#" className="hover:underline">Privacy Policies</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">Newsletter</h3>
              <form className="flex flex-col sm:flex-row lg:flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" 
                  required 
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors rounded-sm"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm">2022 Meubel House. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccountPage;