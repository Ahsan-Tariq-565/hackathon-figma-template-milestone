import React from "react";
import Link from "next/link";
import Image from "next/image"
import {client} from "../../sanity/lib/client"


export async function FetchData(){
    const data = await client.fetch(`*[_type == "product"]{_id, name, "image_url":image.asset->url, price, description, discountPercentage, isFeaturedProduct, stockLevel, category}`)
return data
}

export interface typing{
  _id:string,
  name:string,
  price:number,
  discription:string,
  image_url:string
}


const shop  = async () => {
  const data : typing[]= await FetchData()
  return (
    <div>

        {/* sec1 may shop triangle filter wegera sub hy */}
      <div className="">
        <div className="relative h-[300px] w-full">
          <Image
            src="/shop/Rectangle-1.png"
            alt="Shop Header"
            width={100}
            height={100}
            decoding="async"
            data-nimg="fill"
            className="object-cover"
            sizes="100vw"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="mb-4">
              <Image src="/shop/logo.png" alt="logo"  width={100}
          height={100}/>
            </div>
            <h1 className="text-4xl font-bold text-black">Shop</h1>
            <div className="mt-4 flex items-center space-x-2 text-sm text-black">
              <a className="hover:underline" href="/">
                Home
              </a>
              <a href="/">
                <span>Shop</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-8 bg-[#FAF4F4]">
          <div className="flex flex-col items-start justify-between space-y-4 border-b pb-6 md:flex-row md:items-center md:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
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
                  className="lucide lucide-filter mr-2 h-4 w-4"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter
              </button>
              <div className="flex items-center space-x-2 border-l pl-4">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs px-2">
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
                    className="lucide lucide-grid3x3 h-4 w-4"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M3 15h18"></path>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs px-2">
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
                    className="lucide lucide-list h-4 w-4"
                  >
                    <path d="M3 12h.01"></path>
                    <path d="M3 18h.01"></path>
                    <path d="M3 6h.01"></path>
                    <path d="M8 12h13"></path>
                    <path d="M8 18h13"></path>
                    <path d="M8 6h13"></path>
                  </svg>
                </button>
              </div>
              <span className="text-sm text-muted-foreground">
                Showing 1-16 of 32 results
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r0:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 w-[100px]"
              >
                <span>Show 16</span>
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
                  className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r1:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 w-[140px]"
              >
                <span>Default</span>
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
                  className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
         
         {/* sec2 images price and name of the products hy */}
         
         <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto px-4">
{data.map((item) => (
  <Link          href={`/product/${item._id}`}          key={item._id}         >

  
  <div className="rounded-xl border bg-card text-card-foreground border-none shadow-none group">
    <div className="flex flex-col space-y-1.5 p-0">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={item.image_url}
          alt={item.name}
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
        {item.name}
      </div>
    </div>
    <div className="flex items-center p-6">
      <p className="text-lg font-semibold">$ {item.price}</p>
    </div>
  </div>

  </Link>
))}

</section>

     </div>
  )}


export default shop