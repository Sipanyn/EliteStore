function Footer() {
  return (
    <div className="flex flex-col border-t-1 border-gray-200 bg-zinc-100 pl-5 pr-5 sm:pl-20  sm:pr-20  md:pl-40 md:pr-40 pt-2.5 sm:pt-10 divide-y divide-gray-200 mt-4">
      {/* footer top */}
      <div className="flex flex-row justify-between flex-wrap gap-6 sm:gap-12 pb-5">
        {/* Elite store */}
        <div className="flex flex-col flex-1">
          {/* logo + title */}
          <div className="flex flex-row items-center gap-1.5 mb-2">
            {/* logo */}
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <p className="font-bold">EliteStore</p>
          </div>
          <p className="text-xs text-gray-400 mb-2">
            Your one-stop destination for quality products at unbeatable prices.
            Shop with confidence and enjoy fast, reliable delivery.
          </p>
          {/* socials */}
          <div className="flex flex-row gap-2.5">
            <svg className="size-8 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
              <use href="../sprite.svg#facebook_icon"></use>
            </svg>
            <svg className="size-8 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
              <use href="../sprite.svg#twitter_icon"></use>
            </svg>
            <svg className="size-8 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
              <use href="../sprite.svg#insta_icon"></use>
            </svg>
            <svg className="size-8 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
              <use href="../sprite.svg#youtube_icon"></use>
            </svg>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col flex-1">
          <h3 className="mb-4.5">Quick Links</h3>
          <p className="text-xs text-gray-400 mb-2 hover:text-black cursor-pointer transition-colors duration-100">
            About Us
          </p>
          <p className="text-xs text-gray-400 mb-2 hover:text-black cursor-pointer transition-colors duration-100">
            Contact
          </p>
          <p className="text-xs text-gray-400 mb-2 hover:text-black cursor-pointer transition-colors duration-100">
            FAQ
          </p>
          <p className="text-xs text-gray-400 mb-2 hover:text-black cursor-pointer transition-colors duration-100">
            Shipping Info
          </p>
          <p className="text-xs text-gray-400 mb-2 hover:text-black cursor-pointer transition-colors duration-100">
            Returns
          </p>
        </div>
        {/* Categories */}
        <div className="flex flex-col flex-1">
          <h3 className="mb-4.5">Categories</h3>
          <p className="text-xs text-gray-400 mb-2  hover:text-black cursor-pointer transition-colors duration-100">
            Electronics
          </p>
          <p className="text-xs text-gray-400 mb-2  hover:text-black cursor-pointer transition-colors duration-100">
            Clothing
          </p>
          <p className="text-xs text-gray-400 mb-2  hover:text-black cursor-pointer transition-colors duration-100">
            Books
          </p>
          <p className="text-xs text-gray-400 mb-2  hover:text-black cursor-pointer transition-colors duration-100">
            Home & Garden
          </p>
          <p className="text-xs text-gray-400 mb-2  hover:text-black cursor-pointer">
            Sports
          </p>
        </div>
        {/* Stay Updated */}
        <div className="flex flex-col flex-1">
          <h3 className="mb-4.5">Stay Updated</h3>
          <p className="text-xs text-gray-400 mb-2">
            Subscribe to our newsletter for the latest deals and updates.
          </p>
          {/* email input */}
          <div className="flex flex-row  h-8">
            <input
              className="h-full pl-1 rounded-tl-md rounded-bl-md outline-0 bg-slate-200/40 "
              type="text"
              placeholder="Enter your email"
            />
            <svg className="size-10 text-white bg-black h-full pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer">
              <use href="../sprite.svg#mail_icon"></use>
            </svg>
          </div>
          <p className="text-xs text-gray-400 mb-2 mt-3">
            By subscribing, you agree to our Privacy Policy and Terms.
          </p>
        </div>
      </div>
      {/* footer bottom */}
      <div className="flex flex-col-reverse sm:flex-row justify-between mt-5 mb-5 gap-2">
        <p className="text-xs text-gray-400">
          © 2025 EliteStore. All rights reserved.
        </p>
        {/* links */}
        <div className="flex flex-row gap-3.5">
          <p className="text-xs text-gray-400 cursor-pointer hover:text-black">
            Privacy Policy
          </p>
          <p className="text-xs text-gray-400 cursor-pointer hover:text-black">
            Terms of Service
          </p>
          <p className="text-xs text-gray-400 cursor-pointer hover:text-black">
            Cookie Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
