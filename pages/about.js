import AboutSplash from "../components/about/AboutSplash";
import Newsletter from "../components/newsletter/Newsletter";
import AboutInfo from "../components/about/AboutInfo";
import AboutWorks from "../components/about/AboutWorks";
import AboutPartners from "../components/about/AboutPartners";
import Footer from "../components/footer/Footer";

export default function About() {
  return (
    <div>
      <AboutSplash />
      <Newsletter type="about" />
      <AboutInfo />
      <AboutWorks />
      <AboutPartners />
      <Newsletter />
      <Footer />
    </div>
  );
}
