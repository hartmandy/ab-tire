export default function Testimonials() {
  const testimonials = [
    {
      name: "Britney F on Yelp",
      review:
        "This place is a true hometown family run mechanical shop. Great prices and honest service. I have been around mechanics my entire life. I know the signs to watch for. Was able to walk in and get an oil change and a tire patched for an amazing price. This will be my new place.",
    },
    {
      name: "Joe on Google",
      review:
        "Great customer service, prices and work by the knowledgable and super helpful Butch and Jason who worked on my car. Got me squared away so that I could get the old beemer wagon inspected! Gonna roll back in soon for some more work as I have two car driving kids in the fam...",
    },
    {
      name: "Alyce W on Yelp",
      review:
        "This place is awesome! We were in Asheville on a girls trip and came back from shopping to a flat tire. We looked up tire repair shops and found this place. They immediately got us in and plugged the tire. They charged us next to nothing and Ronnie was the man.",
    },
    {
      name: "Kim W on Yelp",
      review:
        "Great guys at A&B tire. We were on a trip from Canada and had just driven from Florida in Asheville area. Due to all the construction in the area we picked up a nice bolt in our tire. Thanks to ANB tire. We were back on the road quickly and efficiently. Made it back to Canada with no issues. Thanks again guys.",
    },
    {
      name: "Katie E. on Google",
      review:
        "One of my tires had a nail close to the inner side wall. Many shops told me it would not be repairable and that I should replace all four tires since it is an all-wheel-drive vehicle. I brought it in here based on all the good reviews and was very pleased with my experience! The mechanic was able to take me right away (I just showed up...tried calling a few times but no one answered), patched it up, and charged me a very fair $20. It's been 10 days since this, and the patch seems to be holding up just fine. Thank you for the good service and saving me a ton of money!",
    },
    {
      name: "Jeff B on Google",
      review:
        "Was a pleasure working with Ronnie and Steve. Worked me in for a tire patch and had me up and running in no time. Very kind gentlemen who deserve your business. Give them a chance before hitting up the Big Chain places.  Thanks again...",
    },
  ];

  return (
    <section id="what-clients-say" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-sm text-gray-800 mb-4">TESTIMONIALS</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg">
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .587l3.668 7.57 8.332 1.205-6.041 5.867 1.425 8.296L12 18.897l-7.384 3.628 1.425-8.296-6.041-5.867 8.332-1.205L12 .587z" />
                    </svg>
                  ))}
              </div>

              {/* Name and Review */}
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {testimonial.name}
              </p>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
