export default function contact (){
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
          <img src="/shop/logo.png" alt="logo" />
          </div>
          <h1 className="text-4xl font-bold text-black font-Poppins">
            Contact
          </h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <a className="hover:underline" href="/">
              Home
            </a>
            <span>›</span>
            <a className="hover:underline" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>






      <div className="container w-full mx-auto">
        
        <div>
          <h2 className="text-2xl md:text-6xl pt-16 text-black text-center font-Poppins font-semibold ">
            Get In Touch With Us
          </h2>
          <p className="text-center px-24 text-gray-600">
            For more information about our products and services, please feel
            free to drop us an email. Our staff will always be there to help you
            out.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-32 px-4 py-12">
         
         
          <div className="space-y-4 w-3/4">
            <div className="flex items-center space-x-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                className="text-black text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <div>
                <h3 className="text-lg text-black font-Poppins font-medium">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-black text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
              </svg>
              <div>
                <h3 className="text-lg text-black font-Poppins font-medium">Phone</h3>
                <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                <p className="text-gray-600">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-black text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
              </svg>
              <div>
                <h3 className="text-lg text-black font-Poppins font-medium">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
         
           
            
            <div className="w-full space-y-6 relative">
              <h2 className="text-2xl text-black font-semibold">Contact Us</h2>
              <form
                className="space-y-4"
                action="https://formspree.io/f/xovqoyyv"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Abc"
                    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
                    name="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="abc@email.com"
                    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
                    name="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-black"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Optional"
                    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
                    name="subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi! I'd like to ask about!"
                    rows={4}
                    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-12 font-Poppins border-2 border-black bg-white text-black font-medium rounded-xl"
                >
                  Submit
                </button>
              </form>
            </div> 
          


        
        </div>
      </div>
    </div>
    )
}