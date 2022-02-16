import AboutSplash from "../components/about/AboutSplash";
import Newsletter from "../components/newsletter/Newsletter";
import AboutInfo from "../components/about/AboutInfo";
import AboutWorks from "../components/about/AboutWorks";
import AboutPartners from "../components/about/AboutPartners";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <AboutSplash />
      <Newsletter type="about" form={false} />
      <AboutInfo />
      <AboutWorks />
      <AboutPartners />
      {/* <Newsletter /> */}
      <Footer />
    </Layout>
  );
}
