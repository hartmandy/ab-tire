import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Auto scroll logic
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isHovered && scrollRef.current) {
        (scrollRef.current as HTMLElement).scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      (scrollRef.current as HTMLElement).scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const images = Array.from(
    { length: 20 },
    (_, i) => `/gallery-images/${i + 1}.png`
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-sm text-gray-800 mb-4">PROJECT GALLERY</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Work</h3>

        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full mr-12 z-10 text-gray-800 hover:text-gray-600"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex space-x-4 overflow-x-auto scrollbar-hide"
              ref={scrollRef}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-64 h-64 object-cover shadow-lg"
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-12 z-10 text-gray-800 hover:text-gray-600"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
