import AboutLetter from "./components/AboutLetter";
import AboutUs from "./components/Aboutus";
import Banner from "./components/Banner";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5">
        <AboutLetter />
        <Products/>
        <AboutUs/>
        <Partners/>
      </div>
        <Testimonial/>
    </div>
  );
}
