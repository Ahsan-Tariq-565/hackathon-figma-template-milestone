// import { GetServerSideProps } from "next";
// import { useRouter } from "next/router";
import { FetchData , typing } from "../../shop/page";
import Image from "next/image";
import Link from "next/link";




const Page = async ({ params }: { params: { detail: string } }) => {

  const fetchDataToFunc: typing[] = await FetchData();
const relatedData = fetchDataToFunc
  .sort(() => Math.random() - 0.5) // Shuffle the array
  .slice(0, 4); // First 4 elements
  const selectedData = fetchDataToFunc.find((item) => item._id === params.detail);
  
 console.log(selectedData);
 


  if (!selectedData) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
    {/*Product Review*/}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 order-2 md:order-1">
            <button className="border-2 border-[#B88E2F] hover:border-[#B88E2F] transition-colors duration-200">
              <Image
                src={selectedData.image_url}
                alt={selectedData.name}
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg="1"
                className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                style={{ color: "transparent" }}
              />
            </button>
            <button className="border-2 border-transparent hover:border-[#B88E2F] transition-colors duration-200">
              <Image
                src={selectedData.image_url}
                alt={selectedData.name}
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg="1"
                className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                style={{ color: "transparent" }}
              />
            </button>
            <button className="border-2 border-transparent hover:border-[#B88E2F] transition-colors duration-200">
              <Image
                src={selectedData.image_url}
                alt={selectedData.name}
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg="1"
                className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                style={{ color: "transparent" }}
              />
            </button>

            <button className="border-2 border-transparent hover:border-[#B88E2F] transition-colors duration-200">
              <Image
                src={selectedData.image_url}
                alt={selectedData.name}
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg="1"
                className="object-cover w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                style={{ color: "transparent" }}
              />
            </button>
          </div> 

          <div className="flex-1 bg-[#FFF9E5] mb-28 order-1 md:order-2">
        
            <Image
              src={selectedData.image_url}
                alt={selectedData.name}
                loading="lazy"
                width={100}
                height={100}
              decoding="async"
              data-nimg="1"
              className="w-full h-auto object-cover"
              style={{ color: "transparent" }}
            />
    
          </div>
        </div>

        <div className="space-y-6">
           <h1 className="text-4xl  text-[#3A3A3A]">{selectedData.name}</h1>
           <div className="text-2xl text-[#3A3A3A]">${selectedData.price}</div> 
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
            {/* <CardList /> */}
           
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
                    
                    <Image src="/heart/fb.png" alt="fb"  width={100}
          height={100} className="w-auto" />
                  </button>
                  <button>
                    <Image src="/heart/linkedin.png" alt="fb"  width={100}
          height={100} className="w-auto" />
                    
                  </button>
                  <button >
                    <Image src="/heart/twitter.png" alt="fb"  width={100}
          height={100} className="w-auto"/>
                  
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
            <Image
              src="/heart/Cloud-sofa-three-seater-ottoman-1-1-h.png"
              alt="L-shaped sofa configuration"
              width={100}
              height={100}
              loading="lazy"
              decoding="async"
              data-nImage="1"
              className="w-full h-auto"
              style={{ color: "transparent" }}
            />
          </div>

          <div className="p-8 rounded-lg">
            <Image
              alt="L-shaped sofa configuration"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nImage="1"
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
        
        {relatedData.map((ponka)=>{
          return(
            <Link href={`/product/${ponka._id}`} key={ponka._id} >
              
                <div className="rounded-xl border bg-card text-card-foreground border-none shadow-none group">
                  <div className="flex flex-col space-y-1.5 p-0">
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={ponka.image_url}
                        alt={ponka.name}
                        width={600}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="100vw"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                      Hover
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex flex-col items-center gap-2">
                          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-40">
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
                              className="lucide lucide-shopping-cart mr-2 h-4 w-4"
                            >
                              <circle cx="8" cy="21" r="1"></circle>
                              <circle cx="19" cy="21" r="1"></circle>
                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                            </svg>
                            Add to Cart
                          </button>
              
                          <div className="flex gap-2">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 w-9">
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
                                className="lucide lucide-eye h-4 w-4"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 w-9">
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
                                className="lucide lucide-heart h-4 w-4"
                              >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="p-6 pt-4">
                    <div className="tracking-tight text-base font-medium line-clamp-2">
                      {ponka.name}
                    </div>
                  </div>
                  <div className="flex items-center p-6">
                    <p className="text-lg font-semibold">$ {ponka.price}</p>
                  </div>
                </div>
              
            </Link>
          )
        })}
        
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

export default Page;
