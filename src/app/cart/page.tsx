export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative h-[300px] w-full">
        <img
          alt="Shop Header"
          decoding="async"
          data-nimg="fill"
          className="object-cover"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            color: "transparent",
          }}
          sizes="100vw"
          src="/cart/nav.png"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
          <img src="/shop/logo.png" alt="logo" />
          </div>
          <h1 className="text-4xl font-bold text-black">Cart</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <a className="hover:underline" href="/">
              Home
            </a>
            <span>›</span>
            <a className="hover:underline" href="/contact">
              Cart
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden ">
              <div className="grid grid-cols-12 gap-1 text-[#000] font-Poppins bg-[#FFF9E5] p-4 pr-3">
                <div className="col-span-6 text-base font-medium">Product</div>
                <div className="col-span-2 text-base font-medium">Price</div>
                <div className="col-span-2 text-base font-medium">Quantity</div>
                <div className="col-span-2 text-base font-medium">Subtotal</div>
              </div>
              
              
              
              <div className="grid grid-cols-12 gap-4 pr-3 items-center border-b">
                <div className="col-span-6 flex items-center gap-4">
                  <div className="relative h-20 rounded-lg mt-10">
                    <img
                      alt="Asgaard sofa"
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="object-cover"
                      style={{ color: "transparent" }}
                      src="/cart/asgardSofa.png"
                    />
                  </div>
                  <span className="text-gray-600">Asgaard sofa</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Rs. 250,000.00</span>
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    className="flex text-black h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 md:text-sm w-16 text-center"
                    min="1"
                    value="1"
                  />
                </div>
                <div className="flex">
                  <span className="text-gray-600 pr-2">
                    Rs.250,000.00
                  </span>
                  <button >
                    <img src="/cart/bin.png" alt="bin" className="w-full h-full" />
                    
                  </button>
                </div>
              </div>


            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#FDF9F0] rounded-lg p-6">
              <h2 className="text-2xl text-black font-bold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-base text-black">Subtotal</span>
                  <span className="text-gray-600">
                    Rs.250,000.00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base text-black font-medium">Total</span>
                  <span className="text-[#B88E2F] text-xl">
                    Rs.250,000.00
                  </span>
                </div>
                <button className="inline-flex items-center justify-center border-2 border-black text-sm font-medium disabled:opacity-50 shadow h-9 px-4 w-full  text-black rounded-lg py-4 mt-4">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
