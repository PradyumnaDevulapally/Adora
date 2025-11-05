// src/components/VideoSection.jsx
export default function Video() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* B-roll video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/broll2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for aesthetic tint */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Optional subtle heading overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-4xl font-serif font-light tracking-wide">
          Crafted With Elegance
        </h2>
        <p className="mt-2 text-lg font-serif font-extralight">
          Timeless designs, pure craftsmanship.
        </p>
      </div>
    </section>
  );
}
