import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-[#701418] mb-4">
            Serving Asheville for over 20 years
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            A&B Tire Shop provides reliable tire services, repairs, and
            maintenance to keep you safe on the road.
          </p>
          <Link
            to="#contact"
            className="inline-block bg-[#701418] text-white py-3 px-6 rounded-lg hover:bg-[#621114] transition"
          >
            Make an Appointment
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img
            src="/hero-image.jpg"
            alt="Photo of business, A&B Tires"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
