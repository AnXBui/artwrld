import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import ArtistList from "../components/artist/ArtistList";
import Layout from "../components/layout/Layout";

const Artists = () => {
  return (
    <Layout>
      <ArtistList />
      {/* <Newsletter /> */}
      <Footer />
    </Layout>
  );
};
export default Artists;
