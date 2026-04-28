import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const { bio } = portfolioData;

const INTERESTS = ["Software", "AI / ML", "Full Stack", "Quantum", "Finance"];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
  }),
};

export default function Hero({ isMobile }) {
  return (
    <section style={{ minHeight: isMobile ? "auto" : "55vh" }}>
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          fontSize: 11, letterSpacing: 3, marginBottom: 14,
          color: "rgba(160, 190, 240, 0.7)",
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        }}
      >
        HELLO WORLD
      </motion.div>

      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          fontSize: isMobile ? 32 : 48, fontWeight: 300, margin: 0,
          letterSpacing: -1, lineHeight: 1.1, color: "#e3e9f7",
        }}
      >
        Technology Enthusiast
      </motion.h2>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          fontSize: isMobile ? 14 : 16, lineHeight: 1.7,
          color: "rgba(220, 230, 245, 0.85)", margin: "24px 0 0", maxWidth: 580,
        }}
      >
        {bio[0]}
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}
      >
        {INTERESTS.map(t => (
          <span
            key={t}
            style={{
              fontSize: 11, padding: "5px 11px", borderRadius: 999,
              border: "1px solid rgba(140, 170, 240, 0.25)",
              color: "rgba(210, 225, 245, 0.85)",
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              letterSpacing: 0.6,
            }}
          >
            {t}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
