"use client"

import React from "react";
import CardList from "../../components/AddCard";

const page = () => {
 
 
  return (
    <div>
      {/*Product Review*/}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 order-2 md:order-1">
              <button className="border-2 border-[#B88E2F] hover:border-[#B88E2F] transition-colors duration-200">
                <img
                  alt="Product view 1"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                  src="/heart/Outdoor-sofa-set- 2-h.png"
                  style={{ color: "transparent" }}
                />
              </button>
              <button className="border-2 border-transparent hover:border-[#B88E2F] transition-colors duration-200">
                <img
                  alt="Product view 2"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                  src="/heart/Outdoor-sofa-set-2-1-h.png"
                  style={{ color: "transparent" }}
                />
              </button>
              <button className="border-2 border-transparent hover:border-[#B88E2F] transition-colors duration-200">
                <img
                  alt="Product view 3"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                  src="/heart/Stuart-sofa-1-h.png"
                  style={{ color: "transparent" }}
                />
              </button>

              <button className="border-2 border-transparent hover:border-[#B88E2F] transition-colors duration-200">
                <img
                  alt="Product view 4"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                  src="/heart/Maya-sofa-three-seater-h.png"
                  style={{ color: "transparent" }}
                />
              </button>
            </div>

            <div className="flex-1 bg-[#FFF9E5] mb-28 order-1 md:order-2">
              <img
                alt="Product main view"
                loading="lazy"
                width="600"
                height="600"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto object-cover mt-40"
                src="/heart/Asgaard-sofa-3-h.png"
                style={{ color: "transparent" }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl  text-[#3A3A3A]">Asgaard sofa</h1>
            <div className="text-2xl text-[#3A3A3A]">Rs. 250,000.00</div>
            <div className="flex items-center gap-4">
              <div className="flex">
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
                  className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-5 h-5 text-gray-300"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <span className="text-[#3A3A3A] text-sm">5 Customer Review</span>
            </div>
            <p className="text-[#3A3A3A] text-base">
              Setting the bar as one of the loudest speakers in its className,
              the Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-[#3A3A3A]">Size</div>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border text-sm font-bold border-[#B88E2F] bg-[#B88E2F] text-white hover:border-[#B88E2F] transition-colors duration-200">
                  L
                </button>
                <button className="w-10 h-10 rounded-full border text-sm font-bold border-[#D9D9D9] text-[#3A3A3A] hover:border-[#B88E2F] transition-colors duration-200">
                  XL
                </button>
                <button className="w-10 h-10 rounded-full border text-sm font-bold border-[#D9D9D9] text-[#3A3A3A] hover:border-[#B88E2F] transition-colors duration-200">
                  XS
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-[#3A3A3A]">Color</div>
              <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full bg-purple-500 ring-2 ring-offset-2 ring-[#B88E2F] hover:ring-2 hover:ring-offset-2 hover:ring-[#B88E2F] transition-all duration-200"></button>
                <button className="w-8 h-8 rounded-full bg-black  hover:ring-2 hover:ring-offset-2 hover:ring-[#B88E2F] transition-all duration-200"></button>
                <button className="w-8 h-8 rounded-full bg-yellow-700  hover:ring-2 hover:ring-offset-2 hover:ring-[#B88E2F] transition-all duration-200"></button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center border border-[#D9D9D9] rounded-md">
                <button className="p-2 hover:bg-gray-100 transition-colors duration-200">
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
                    className="lucide lucide-minus w-4 h-4 text-[#3A3A3A]"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <span className="px-4 py-2 text-[#3A3A3A]">1</span>
                <button className="p-2 hover:bg-gray-100 transition-colors duration-200">
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
                    className="lucide lucide-plus w-4 h-4 text-[#3A3A3A]"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </div>
              <CardList />
             
            </div>
            <div className="space-y-4 pt-6 border-t border-[#D9D9D9]">
              <div className="flex gap-2">
                <span className="text-[#3A3A3A]">SKU</span>
                <span className="text-[#9F9F9F]">: SS001</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#3A3A3A]">Category</span>
                <span className="text-[#9F9F9F]">: Sofas</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#3A3A3A]">Tags</span>
                <span className="text-[#9F9F9F]">
                  : Sofa, Chair, Home, Shop
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <span className="text-[#3A3A3A]">Share</span>
                  <div className="flex gap-2">
                    <button>
                      
                      <img src="/heart/fb.png" alt="fb" />
                    </button>
                    <button>
                      <img src="/heart/linkedin.png" alt="fb" />
                      
                    </button>
                    <button >
                      <img src="/heart/twitter.png" alt="fb" />
                    
                    </button>
                  </div>
                </div>
                <button className="hover:text-[#B88E2F] transition-colors duration-200">
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
                    className="lucide lucide-heart w-5 h-5"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Product Description*/}
      <div className="w-full max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex gap-8 border-b justify-center border-gray-200 mb-8">
          <button className="pb-4 text-lg font-medium transition-colors relative text-black">
            Description
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
          </button>
          <button className="pb-4 text-lg font-medium transition-colors relative text-gray-400 hover:text-gray-600">
            Additional Information
          </button>
          <button className="pb-4 text-lg font-medium transition-colors relative text-gray-400 hover:text-gray-600">
            Reviews [5]
          </button>
        </div>
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Embodying the raw, wayward spirit of rock & roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 rounded-lg">
              <img
                alt="Straight sofa configuration"
                loading="lazy"
                width="500"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                src="/heart/Cloud-sofa-three-seater-ottoman-2-1-h.png"
                style={{ color: "transparent" }}
              />
            </div>

            <div className="p-8 rounded-lg">
              <img
                alt="L-shaped sofa configuration"
                loading="lazy"
                width="500"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                src="/heart/Cloud-sofa-three-seater-ottoman-1-1-h.png"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/*Relative Product*/}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group">
            <div className="aspect-square relative mb-4">
              <img
                alt="Trenton modular sofa_3"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
                src="/home/TrentonModularSofa.png"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <h3 className="text-sm font-medium mb-2">Trenton modular sofa_3</h3>
            <p className="text-base font-semibold">Rs. 125,000.00</p>
          </div>
          <div className="group">
            <div className="aspect-square relative mb-4">
              <img
                alt="Granite dining table with dining chair"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
                src="/home/GraniteDiningTablewithDiningChair.png"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <h3 className="text-sm font-medium mb-2">
              Granite dining table with dining chair
            </h3>
            <p className="text-base font-semibold">Rs. 285,000.00</p>
          </div>
          <div className="group">
            <div className="aspect-square relative mb-4">
              <img
                alt="Outdoor bar table and stool"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
                src="/home/OutdoorBarTableAndStool.png"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <h3 className="text-sm font-medium mb-2">
              Outdoor bar table and stool
            </h3>
            <p className="text-base font-semibold">Rs. 125,000.00</p>
          </div>
          <div className="group">
            <div className="aspect-square relative mb-4">
              <img
                alt="Plain console with teak mirror"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-300 -z-10 group-hover:scale-105"
                sizes="100vw"
                src="/home/PlainConsolewithTeakMirror.png"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <h3 className="text-sm font-medium mb-2">
              Plain console with teak mirror
            </h3>
            <p className="text-base font-semibold">Rs. 85,000.00</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            className="inline-block border-b-2 border-black pb-1 text-sm font-medium hover:border-gray-500 transition-colors"
            href="/shop"
          >
            View More
          </a>
        </div>
      </section>

    </div>
  );
};

export default page;
