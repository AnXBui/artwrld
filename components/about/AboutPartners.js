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
    name: "Nato Thompson",
    title: "CEO & Artistic Director, Partner",
    bio: "Author, curator, and self-described “cultural infrastructure builder,” Nato Thompson has over 20 years of experience in the art world. He served as Artistic Director at Philadelphia Contemporary, Chief Curator at Creative Time, and Curator at MASS MoCA.",
  },
  {
    name: "Nato Thompson",
    title: "CEO & Artistic Director, Partner",
    bio: "Author, curator, and self-described “cultural infrastructure builder,” Nato Thompson has over 20 years of experience in the art world. He served as Artistic Director at Philadelphia Contemporary, Chief Curator at Creative Time, and Curator at MASS MoCA.",
  },
  {
    name: "Nato Thompson",
    title: "CEO & Artistic Director, Partner",
    bio: "Author, curator, and self-described “cultural infrastructure builder,” Nato Thompson has over 20 years of experience in the art world. He served as Artistic Director at Philadelphia Contemporary, Chief Curator at Creative Time, and Curator at MASS MoCA.",
  },
  {
    name: "Nato Thompson",
    title: "CEO & Artistic Director, Partner",
    bio: "Author, curator, and self-described “cultural infrastructure builder,” Nato Thompson has over 20 years of experience in the art world. He served as Artistic Director at Philadelphia Contemporary, Chief Curator at Creative Time, and Curator at MASS MoCA.",
  },
  {
    name: "Nato Thompson",
    title: "CEO & Artistic Director, Partner",
    bio: "Author, curator, and self-described “cultural infrastructure builder,” Nato Thompson has over 20 years of experience in the art world. He served as Artistic Director at Philadelphia Contemporary, Chief Curator at Creative Time, and Curator at MASS MoCA.",
  },
  {
    name: "Nato Thompson",
    title: "CEO & Artistic Director, Partner",
    bio: "Author, curator, and self-described “cultural infrastructure builder,” Nato Thompson has over 20 years of experience in the art world. He served as Artistic Director at Philadelphia Contemporary, Chief Curator at Creative Time, and Curator at MASS MoCA.",
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
