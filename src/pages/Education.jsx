import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

const { education } = portfolioData;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Education({ isMobile }) {
  return (
    <section style={{ marginTop: isMobile ? 60 : 100 }}>
      <SectionHeader label="04" title="Education" mobile={isMobile} />

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 16,
        }}
      >
        {education.map((e, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            style={{
              padding: 24, borderRadius: 14,
              background: "rgba(15, 22, 42, 0.55)",
              border: "1px solid rgba(140, 170, 240, 0.15)",
            }}
          >
            <div style={{
              fontSize: 11, letterSpacing: 2,
              color: "rgba(150, 180, 240, 0.75)",
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            }}>
              {e.date}
            </div>
            <div style={{ fontSize: 18, marginTop: 8, fontWeight: 500, color: "#e3e9f7" }}>
              {e.school}
            </div>
            <div style={{ fontSize: 13, color: "rgba(200, 215, 240, 0.7)", marginTop: 2 }}>
              {e.degree}
            </div>
            <div style={{
              fontSize: 13, marginTop: 12, color: "rgba(210, 220, 240, 0.7)", lineHeight: 1.5,
            }}>
              {e.description}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
