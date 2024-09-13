export default function Services() {
  const services = [
    {
      title: "New and Used Tires",
      description:
        "We carry a variety of tire brands and sizes to fit any vehicle and budget.",
    },
    {
      title: "Tire Repair",
      description:
        "Whether its a flat tire or damage to the sidewall, we can repair your tires and get you back on the road quickly.",
    },
    {
      title: "Tire Rotation and Balancing",
      description:
        "Ensure even wear on your tires with regular rotations and balancing to extend their lifespan.",
    },
    {
      title: "Alignment Services",
      description:
        "Keep your vehicle driving straight and smooth with our alignment services.",
    },
    {
      title: "Brake Services",
      description:
        "We offer brake inspections, repairs, and replacements to keep your vehicle safe.",
    },
    {
      title: "Oil Changes",
      description:
        "Keep your engine running smoothly with our quick and affordable oil change services.",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-sm text-gray-800 mb-4">OUR SERVICES</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          At A&B Tire Shop, we offer a wide range of services to meet your tire
          and automotive needs, including:
        </p>

        {/* Services Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <li key={index} className="bg-white p-6 rounded-lg border">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
