import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full space-y-20">
        <div className="flex justify-center gap-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm h-8 w-8 bg-[#FBEBB5] p-0 text-black hover:bg-[#fdebb3]/90">
            1
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 p-0 bg-[#fcf6e8] text-black hover:bg-[#FFF8E7]/90">
            2
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 p-0 bg-[#fcf6e8] text-black hover:bg-[#FFF8E7]/90">
            3
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-9 py-2 px-4 bg-[#fcf6e8] text-black hover:bg-[#FFF8E7]/90">
            Next
          </button>
        </div>
        <div className="bg-[#FDF7FC] px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">
                For all orders over $50, consectetur adipim scing elit.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">90 Days Return</h3>
              <p className="text-sm text-muted-foreground">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                100% secure payment, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full bg-white py-16">
        <footer className="w-full py-2 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-sm text-[#9F9F9F] mt-12">
                <p>400 University Drive Suite 200 Coral Gables,</p>
                <p>FL 33134 USA</p>
                </div>
                <div>
                  <h3 className="font-medium mb-4 text-[#9F9F9F]">Links</h3>
                  <nav className="flex flex-col space-y-3 text-sm">
                    <a className="hover:underline" href="#">Home</a>
                    <a className="hover:underline" href="#">Shop</a>
                    <a className="hover:underline" href="#">About</a>
                    <a className="hover:underline" href="#">Contact</a>
                    </nav>
                    </div>
                    <div>
                      <h3 className="font-medium mb-4 text-[#9F9F9F]">Help</h3>
      <nav className="flex flex-col space-y-3 text-sm">
        <a className="hover:underline" href="#">Payment Options</a>
        <a className="hover:underline" href="#">Returns</a>
        <a className="hover:underline" href="#">Privacy Policies</a>
        </nav>
        </div>
        <div>
          <h3 className="font-medium mb-4 text-[#9F9F9F]">Newsletter</h3>
          <form className="flex flex-col sm:flex-row lg:flex-col gap-2">
            <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" required/>
            <button type="submit" className="px-6 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors rounded-sm">SUBSCRIBE</button>
            </form>
            </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm">2022 Meubel House. All rights reserved</p>
              </div>
              </div>
              </footer>
              </main>
    </div>
  );
};

export default Footer;
