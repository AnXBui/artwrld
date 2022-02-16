import Fadein from "../text/Fadein";
import Word from "../text/Word";
import styles from "./AboutPartners.module.scss";
import Section from "../Section";
import { motion } from "framer-motion";

const partnersData = [
  {
    name: "Nato Thompson",
    title: "CEO & Artistic Director, Partner",
    bio: "Author, curator, and self-described “cultural infrastructure builder,” Nato Thompson has over 20 years of experience in the art world. He served as Artistic Director at Philadelphia Contemporary, Chief Curator at Creative Time, and Curator at MASS MoCA.",
  },
  {
    name: "Josh Goldblum",
    title: "CEO, Partner",
    bio: "Josh Goldblum is a digital innovator and the CEO of Bluecadet with over 20 years of experience in the cultural sector. His past clients include MoMA, The Getty, The Smithsonian Institution, Google, Harvard, Princeton, and MIT. He has been awarded an Emmy, a SXSW Award, Fast Company Innovation Award, and Webby Awards.",
  },
  {
    name: "Walid Raad",
    title: "Partner",
    bio: "Walid Raad is an artist and a professor of art at the Cooper Union. His work has been shown around the world, including at the Venice Biennale, the Istanbul Biennial, and Documenta, as well as in solo exhibitions at the Louvre, MoMA, Stedelijk Museum, ICA Boston, and Whitechapel Art Gallery.",
  },
  {
    name: "Scott Brewer",
    title: "Chief Technology Officer",
    bio: "An experienced technologist, founder, strategist, and product leader, Scott Brewer is the co-founder of the creative technology firm Art Processors and blockchain digital art gallery Bright Moments. He has designed and managed software used and loved by millions for over 15 years.",
  },
  {
    name: "Shane Brennan",
    title: "Head of Production",
    bio: "Shane Brennan is an arts strategist and producer with over a decade of experience at organizations including Creative Time, Kickstarter, and The Trust for Governors Island. He holds a Ph.D. in Media, Culture, and Communication from NYU.",
  },
  {
    name: "RJ Rushmore",
    title: "Head of Finance",
    bio: "RJ Rushmore is a finance and marketing strategist who combines the expertise of an MBA from NYU Stern with a decade of experience in arts and culture at organizations including Creative Time, Mural Arts, and Bluecadet",
  },
  {
    name: "Mad Pinney",
    title: "Community Manager",
    bio: "Mad Pinney has worked in community management at POWRPLNT, Eyebeam NYC + LA, SIGNAL, Amos Eno, and TRANSFER Gallery. She facilitates community organizing, artist workshops, and leverages the power of collective networks to build spaces of care and creativity.",
  },
];

export default function AboutPartners() {
  const data = partnersData;

  const itemVariants = {
    hidden: { transition: { delayChildren: 0, staggerChildren: 0 } },
    visible: {
      transition: { delay: 0.1, staggerChildren: 0.15 },
    },
  };
  return (
    <Section viewAmount={0.2} className={styles.section}>
      <Fadein>
        <h3>Team &amp; Partners</h3>
      </Fadein>
      <ul className={styles.list}>
        {data.map(({ name, title, bio }, index) => (
          <motion.li
            animate="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={itemVariants}
            className={styles.item}
            key={index}
          >
            <h4>
              <Word>{name}</Word>
            </h4>
            <h5>
              <Fadein>{title}</Fadein>
            </h5>
            <p>
              <Fadein>{bio}</Fadein>
            </p>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
