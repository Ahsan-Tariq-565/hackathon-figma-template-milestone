import Link from "next/link";
import Image from "next/image";
export default function checkout(){
    return (
      <div>
        {/* header image */}
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
            <h1 className="text-4xl font-bold text-black">Check Out</h1>
            <div className="mt-4 flex items-center space-x-2 text-sm text-black">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>›</span>
              <Link href="/checkout" className="hover:underline">
                Check Out
              </Link>
            </div>
          </div>
        </div>

        {/* main code section */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold ">Billing Details</h1>
                <form className="space-y-4">
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="companyName"
                  >
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter your company name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="country"
                  >
                    Country/Region
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Enter your country"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="streetAddress"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    placeholder="Enter your street address"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="townCity"
                  >
                    Town/City
                  </label>
                  <input
                    type="text"
                    id="townCity"
                    placeholder="Enter your town or city"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="province"
                  >
                    Province
                  </label>
                  <input
                    type="text"
                    id="province"
                    placeholder="Enter your province"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="zipCode"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter your ZIP code"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="additionalInfo"
                  >
                    Additional InhtmlFormation
                  </label>
                  <textarea
                    id="additionalInfo"
                    placeholder="Any additional inhtmlFormation"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  ></textarea>
                
                </div>
                </form>
                {/* </htmlForm> */}
              </div>

              <div className="space-y-6">
                <h1 className="text-3xl font-bold font-Poppins">
                  Product <span className="flex justify-end items-center text-end font-Poppins">SubTotal</span>{" "}
                </h1>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Asgaard Sofa *1</span>
                    <span>Rs 250,000.00</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>Rs 250,000.00</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>Rs 250,000.00</span>
                  </div>
                </div>
                <hr className="my-4" />
                <h3 className="font-bold text-xl flex items-center space-x-2">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span> Bank Transfer</span>
                </h3>
                <p className="text-sm mt-2">
                  Make our payment directly into our bank account. Please use
                  your order ID as the payment reference. Your order will not be
                  shipped until your funds shift onto our account.
                </p>
                <h3 className="font-bold text-xl flex items-center space-x-2 mt-4">
                  <span className="w-3 h-3 border-2 border-black rounded-full"></span>
                  <span className="text-[#9F9F9F]">Direct Bank Transfer</span>
                </h3>
                <h3 className="font-bold text-xl flex items-center space-x-2 mt-4">
                  <span className="w-3 h-3 border-2 border-black rounded-full"></span>
                  <span className="text-[#9F9F9F]">Cash on Delivery</span>
                </h3>
                <p className="text-sm mt-2">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
                <button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}