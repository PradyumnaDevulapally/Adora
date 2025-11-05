import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.webp'
import logo from '../assets/adora_logo.png'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row bg-stone-300 items-center justify-center md:justify-between px-6 md:px-16 py-10 md:py-20">
      
      {/* Left side - Images */}
      <div className="flex relative md:w-1/2 justify-center mb-10 md:mb-0">
        <div className="flex gap-4 md:gap-6">
          <img
            className="h-56 sm:h-64 md:h-96 lg:h-[28rem] object-cover rounded-2xl shadow-2xl"
            src={hero1}
            alt="Jewelry display 1"
          />
          <img
            className="h-72 sm:h-80 md:h-[30rem] lg:h-[32rem] object-cover rounded-2xl shadow-2xl -ml-5 md:-ml-8 mt-6 md:mt-10"
            src={hero2}
            alt="Jewelry display 2"
          />
        </div>
      </div>

      {/* Right side - Text + Logo */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-6">
        <img
          src={logo}
          alt="Adora logo"
          className="h-20 sm:h-24 md:h-28 w-auto mx-auto md:mx-0"
        />
        <p className="font-serif font-light text-neutral-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
          Crafting timeless elegance through modern minimalism.  
          Discover handcrafted jewelry that celebrates simplicity and shine.
        </p>
      </div>

    </section>
  );
}
