import Head from "next/head";
import Image from "next/image";
import LinkTo from "../components/LinkTo";
import HomeSplash from "../components/home/HomeSplash";
import Newsletter from "../components/newsletter/Newsletter";
import HomeLink from "../components/home/HomeLink";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <div>
      <HomeSplash />
      <Newsletter type="home" />
      <HomeLink />
      <Footer />
    </div>
  );
}
