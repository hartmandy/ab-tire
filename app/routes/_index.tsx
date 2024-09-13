import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";
import Contact from "~/components/contact";
import Hero from "~/components/hero";
import Services from "~/components/services";
import Testimonials from "~/components/testimonials";

export const meta: MetaFunction = () => {
  return [
    { title: "A & B Tire & Wheel" },
    { name: "description", content: "Tire shop in Asheville, North Carolina" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
