import Head from "next/head";
import Image from "next/image";
import LinkTo from "../components/LinkTo";
import HomeSplash from "../components/home/HomeSplash";
import Newsletter from "../components/newsletter/Newsletter";
import HomeLink from "../components/home/HomeLink";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
export default function Home() {
  return (
    <Layout>
      <HomeSplash />
      <Newsletter type="home" />
      <HomeLink />
      <Footer />
    </Layout>
  );
}
