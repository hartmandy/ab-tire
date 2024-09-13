import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="hidden md:flex justify-center items-center">
          {/* Footer Menu Links */}
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="#about" className=" hover:text-gray-800">
              About Us
            </Link>
            <Link to="#services" className=" hover:text-gray-800">
              Services
            </Link>
            <Link to="#what-clients-say" className=" hover:text-gray-800">
              What Our Clients Say
            </Link>
            <Link to="#contact" className=" hover:text-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
