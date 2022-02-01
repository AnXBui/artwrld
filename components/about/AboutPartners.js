import styles from "./AboutPartners.module.scss";

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
  return (
    <section className={styles.section}>
      <h3>Team &amp; Partners</h3>
      <ul>
        {data.map(({ name, title, bio }) => (
          <li>
            <h4>{name}</h4>
            <h5>{title}</h5>
            <p>{bio}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
