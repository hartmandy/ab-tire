import { FaPhone } from "react-icons/fa";
import map from "../../public/map.png";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-8">
        <h2 className="max-w-md text-3xl md:text-4xl lg:text-5xl font-medium">
          Come on By
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="">10 London Rd</p>
              <p className="">Asheville, NC 28803</p>
              <p className="mt-4 ">
                <strong>Hours:</strong>
              </p>
              <p>Monday - Friday: 8:00am - 5:00pm</p>
              <p>Saturday: 8:30am - 1:00pm</p>
              <div className="mt-4">
                <p className="flex items-center ">
                  <FaPhone className="mr-2" />
                  <span>828.412.3180</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="md:w-1/2">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={map}
                alt="Map to A&B Tire"
                className="object-cover w-full h-full rounded-lg border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
