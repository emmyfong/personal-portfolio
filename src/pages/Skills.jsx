import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

const { skills } = portfolioData;
const SKILL_GROUPS = Object.entries(skills).map(([group, items]) => ({ group, items }));

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Skills({ isMobile }) {
  return (
    <section style={{ marginTop: isMobile ? 60 : 100 }}>
      <SectionHeader label="02" title="Skills" mobile={isMobile} />

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 28,
        }}
      >
        {SKILL_GROUPS.map(g => (
          <motion.div key={g.group} variants={fadeUp}>
            <div style={{
              fontSize: 11, letterSpacing: 2, marginBottom: 12,
              color: "rgba(160, 190, 240, 0.8)",
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            }}>
              — {g.group.toUpperCase()}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.items.map(s => (
                <span
                  key={s}
                  style={{
                    padding: "6px 13px", borderRadius: 999,
                    background: "rgba(30, 45, 85, 0.45)",
                    border: "1px solid rgba(140, 170, 240, 0.18)",
                    fontSize: 13, color: "rgba(220, 230, 250, 0.9)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
