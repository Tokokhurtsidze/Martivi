import { Hero } from "@/components/sections/hero";
import { ConsultingServices } from "@/components/sections/consulting-services";
import { DigitalServices } from "@/components/sections/digital-services";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Partners } from "@/components/sections/partners";
import { Contact } from "@/components/sections/contact";
import { ScrollSlides } from "@/components/home/scroll-slides";

export default function Home() {
  return (
    <>
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <ConsultingServices />
      </div>
      <div className="snap-start">
        <DigitalServices />
      </div>
      <div className="snap-start">
        <Work />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Partners />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
      <ScrollSlides />
    </>
  );
}
