// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-6 py-12 max-w-full bg-[#FBEBB5]">
        <div className="flex items-center justify-between gap-8 ">
          <div className="max-w-lg">
            <h1 className="mb-8 text-5xl font-semibold">
              Rocket single seater
            </h1>
            <a
              className="inline-block border-b-2 border-black pb-1 text-lg font-medium"
              href="/shop"
            >
              Shop Now
            </a>
          </div>
          <div className="relative w-1/2">
            <img
              alt="White upholstered single seater chair"
              width="600"
              height="600"
              decoding="async"
              data-nimg="1"
              className="h-auto w-full "
              src="/home/RocketSingleSeater.png"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </main>
      <div className="container mx-auto px-4 py-16 bg-[#FAF4F4] max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">
          <div className="rounded-xl border text-card-foreground border-none shadow-none bg-[#FAF4F4]">
            <div className="p-0">
              <div className="relative aspect-square w-full -mb-32">
                <img
                  src="/home/GraniteSquareSideTable.png"
                  alt="Side table"
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="p-6 pt-0 flex flex-col items-start gap-2 px-5">
              <h2 className="text-2xl font-medium text-black">Side table</h2>
              <a
                className="text-sm text-black underline underline-offset-8 hover:text-gray-600 transition-colors"
                href="#"
              >
                View More
              </a>
            </div>
          </div>
          <div className="rounded-xl border text-card-foreground border-none shadow-none bg-[#FAF4F4]">
            <div className="p-0">
              <div className="relative aspect-square w-full -mb-32">
                <img
                  src="/home/sofaThreeSeater.png"
                  alt="Side table"
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="p-6 pt-0 flex flex-col items-start gap-2 px-5">
              <h2 className="text-2xl font-medium text-black">Side table</h2>
              <a
                className="text-sm text-black underline underline-offset-8 hover:text-gray-600 transition-colors"
                href="#"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Top Picks For You</h2>
          <p className="text-muted-foreground">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border bg-card text-card-foreground border-none shadow-none">
            <div className="flex flex-col space-y-1.5 p-0">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/home/TrentonModularSofa.png"
                  alt="Trenton modular sofa_3"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform hover:scale-105"
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
                />
              </div>
            </div>

            <div className="p-6 pt-4">
              <div className="tracking-tight text-base font-medium line-clamp-2">
                Trenton modular sofa_3
              </div>
            </div>

            <div className="flex items-center p-6 pt-0">
              <p className="text-lg font-semibold">Rs. 125,000</p>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground border-none shadow-none">
            <div className="flex flex-col space-y-1.5 p-0">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/home/GraniteDiningTablewithDiningChair.png"
                  alt="Granite dining table with dining chair"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform hover:scale-105"
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
                />
              </div>
            </div>

            <div className="p-6 pt-4">
              <div className="tracking-tight text-base font-medium line-clamp-2">
                Granite dining table with dining chair
              </div>
            </div>

            <div className="flex items-center p-6 pt-0">
              <p className="text-lg font-semibold">Rs. 285,000</p>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground border-none shadow-none">
            <div className="flex flex-col space-y-1.5 p-0">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/home/OutdoorBarTableAndStool.png"
                  alt="Outdoor bar table and stool"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform hover:scale-105"
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
                />
              </div>
            </div>

            <div className="p-6 pt-4">
              <div className="tracking-tight text-base font-medium line-clamp-2">
                Outdoor bar table and stool
              </div>
            </div>

            <div className="flex items-center p-6 pt-0">
              <p className="text-lg font-semibold">Rs.125,000</p>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground border-none shadow-none">
            <div className="flex flex-col space-y-1.5 p-0">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/home/PlainConsolewithTeakMirror.png"
                  alt="Plain console with teak mirror"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform hover:scale-105"
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
                />
              </div>
            </div>

            <div className="p-6 pt-4">
              <div className="tracking-tight text-base font-medium line-clamp-2">
                Plain console with teak mirror
              </div>
            </div>

            <div className="flex items-center p-6 pt-0">
              <p className="text-lg font-semibold">Rs. 85,000</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-2">
            <a href="/shop">View More</a>
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
              className="lucide lucide-arrow-right h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </section>

      <div className="min-h-screen bg-[#FFF9E5] flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
          <div className="w-full lg:w-3/5">
            <img
              src="/home/AsgaardSofa.png"
              alt="Asgaard sofa set showing multiple angles"
              width="800"
              height="600"
              decoding="async"
              data-nimg="1"
              className="w-full h-auto object-cover"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-black/80">New Arrivals</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Asgaard sofa
              </h1>
            </div>
            <a href="/heart">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background shadow-sm h-9 rounded-none border-black text-black hover:bg-black hover:text-white transition-colors px-8 py-6 mt-5 text-lg">
                Order Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 1st page 4th block */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Blogs</h2>
            <p className="text-muted-foreground">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/home/Rectangle-13.png"
                  alt="Going all-in with millennial design"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Going all-in with millennial design
              </h3>
              <div className="mb-4">
                <a
                  className="text-primary hover:text-primary/90 font-medium"
                  href="/blog/1"
                >
                  Read More
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
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
                    className="lucide lucide-clock w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>5 min</span>
                </div>
                <div className="flex items-center gap-1.5">
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
                    className="lucide lucide-calendar w-4 h-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </article>

            <article className="group">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/home/Rectangle-14.png"
                  alt="Going all-in with millennial design"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Going all-in with millennial design
              </h3>
              <div className="mb-4">
                <a
                  className="text-primary hover:text-primary/90 font-medium"
                  href="/blog/2"
                >
                  Read More
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
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
                    className="lucide lucide-clock w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>5 min</span>
                </div>
                <div className="flex items-center gap-1.5">
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
                    className="lucide lucide-calendar w-4 h-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </article>
            <article className="group">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/home/Rectangle-15.png"
                  alt="Going all-in with millennial design"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: 0,
                    bottom: "0",
                    color: "transparent",
                  }}
                  sizes="100vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Going all-in with millennial design
              </h3>
              <div className="mb-4">
                <a
                  className="text-primary hover:text-primary/90 font-medium"
                  href="/blog/3"
                >
                  Read More
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
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
                    className="lucide lucide-clock w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>5 min</span>
                </div>
                <div className="flex items-center gap-1.5">
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
                    className="lucide lucide-calendar w-4 h-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <a
              className="inline-block border-b-2 border-primary pb-1 font-medium text-primary hover:text-primary/90 transition-colors"
              href="/about"
            >
              View All Posts
            </a>
          </div>
        </div>
      </section>

     
     <div
  className="text-center mb-10 relative bg-[#FAF4F4]"
  style={{
    backgroundImage: 'url("./home/Rectangle-17.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
  }}
>
     <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold mb-4">Our Instagram</h2>
      <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 rounded-full px-8"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/itx_hezzi/">Follow Us</a></button></div></div>
    </div>
  );
}
