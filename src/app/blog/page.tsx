export default function blog() {
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
          <h1 className="text-4xl font-bold text-black font-Poppins">Blog</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <a className="hover:underline" href="/">
              Home
            </a>
            <span>›</span>
            <a className="hover:underline" href="/contact">
              Blog
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <main className="lg:col-span-8">
            <div className="space-y-8">
              <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <img
                    alt="Going all-in with millennial design"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    sizes="100vw"
                    src="/contact/right1.png"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap font-Poppins text-[#9F9F9F] items-center gap-x-4 text-sm text-muted-foreground">
                    <img src="/blog/admin.png" alt="admin" />
                    <span>Admin</span>
                    <img src="/blog/date.png" alt="admin" />
                    <time>03 Aug 2022</time>
                    <img src="/blog/tag.png" alt="admin" />
                    <span>Design</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-Poppins text-black font-semibold tracking-tight">
                    Going all-in with millennial design
                  </h2>
                  <p className="mb-4 font-Poppins text-[#9F9F9F] text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    className="inline-flex items-center text-sm border-b-2 pb-1 text-black border-black font-medium text-primary hover:underline"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <img
                    alt="Exploring new ways of decorating"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    sizes="100vw"
                    src="/contact/right2.png"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap font-Poppins text-[#9F9F9F]] items-center gap-x-4 text-sm text-muted-foreground">
                  <img src="/blog/admin.png" alt="admin" />
                    <span>Admin</span>
                    <img src="/blog/date.png" alt="admin" />
                    <time>03 Aug 2022</time>
                    <img src="/blog/tag.png" alt="admin" />
                    <span>Design</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-Poppins text-black font-semibold tracking-tight">
                    Exploring new ways of decorating
                  </h2>
                  <p className="mb-4 font-Poppins text-[#9F9F9F] text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    className="inline-flex items-center border-b-2 pb-1 text-black border-black text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <img
                    alt="Handmade pieces that took time to make"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    sizes="100vw"
                    src="/contact/right3.png"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center font-Poppins text-[#9F9F9F] gap-x-4 text-sm text-muted-foreground">
                  <img src="/blog/admin.png" alt="admin" />
                    <span>Admin</span>
                    <img src="/blog/date.png" alt="admin" />
                    <time>03 Aug 2022</time>
                    <img src="/blog/tag.png" alt="admin" />
                    <span>Design</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-Poppins text-black font-semibold tracking-tight">
                    Handmade pieces that took time to make
                  </h2>
                  <p className="mb-4 font-Poppins text-[#9F9F9F] text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    className="inline-flex items-center border-b-2 pb-1 text-black border-black text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </main>
          <section className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              <div className="relative flex w-full rounded-md border border-[#9F9F9F] pr-3 justify-end md:text-sm"
              >
                <input type="text" placeholder="search" className="w-full text-lg border-[#9F9F9F] pl-3 mr-2 "/>
                  <img src="/blog/magnifine.png" alt="glass" className="h-full my-2" />               
              </div>
              <div>
                <h2 className="mb-4 text-xl font-semibold font-Poppins text-black">Categories</h2>
                <div className="space-y-2 font-Poppins text-[#9F9F9F]">
                  <a
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <span className="text-muted-foreground">Crafts</span>
                    <span className="text-sm text-muted-foreground">2</span>
                  </a>
                  <a
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <span className="text-muted-foreground">Design</span>
                    <span className="text-sm text-muted-foreground">8</span>
                  </a>
                  <a
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <span className="text-muted-foreground">Handmade</span>
                    <span className="text-sm text-muted-foreground">7</span>
                  </a>
                  <a
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <span className="text-muted-foreground">Interior</span>
                    <span className="text-sm text-muted-foreground">1</span>
                  </a>
                  <a
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <span className="text-muted-foreground">Wood</span>
                    <span className="text-sm text-muted-foreground">6</span>
                  </a>
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-semibold text-black">Recent Posts</h2>
                <div className="space-y-4">
                  <a
                    className="group flex gap-4"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <img
                        alt="Going all-in with millennial design"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="100vw"
                        src="/contact/side1.png"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium leading-snug text-black group-hover:underline">
                        Going all-in with millennial design
                      </h3>
                      <time className="text-sm text-[#9F9F9F] text-muted-foreground">
                        03 Aug 2022
                      </time>
                    </div>
                  </a>

                  <a
                    className="group flex gap-4"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <img
                        alt="Exploring new ways of decorating"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="100vw"
                        src="/contact/side2.png"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-black leading-snug group-hover:underline">
                        Exploring new ways of decorating
                      </h3>
                      <time className="text-sm text-[#9F9F9F] text-muted-foreground">
                        03 Aug 2022
                      </time>
                    </div>
                  </a>
                  
                  <a
                    className="group flex gap-4"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <img
                        alt="Handmade pieces that took time to make"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="100vw"
                        src="/contact/side3.png"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-black leading-snug group-hover:underline">
                        Handmade pieces that took time to make
                      </h3>
                      <time className="text-sm text-[#9F9F9F] text-muted-foreground">
                        03 Aug 2022
                      </time>
                    </div>
                  </a>
                  <a
                    className="group flex gap-4"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <div className="relative text-black h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <img
                        alt="Handmade pieces that took time to make"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="100vw"
                        src="/contact/side4.png"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-black leading-snug group-hover:underline">
                        Handmade pieces that took time to make
                      </h3>
                      <time className="text-sm text-[#9F9F9F] text-muted-foreground">
                        03 Aug 2022
                      </time>
                    </div>
                  </a>
                  <a
                    className="group flex gap-4"
                    target="_blank"
                    href="https://wordpress.com/discover?selectedTab=firstposts"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <img
                        alt="Handmade pieces that took time to make"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="100vw"
                        src="/contact/side5.png"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-black leading-snug group-hover:underline">
                        Handmade pieces that took time to make
                      </h3>
                      <time className="text-sm text-[#9F9F9F] text-muted-foreground">
                        03 Aug 2022
                      </time>
                    </div>
                  </a>
               
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
