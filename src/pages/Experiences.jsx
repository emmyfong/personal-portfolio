import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

const { experiences } = portfolioData;

const slideIn = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Experiences({ isMobile }) {
  return (
    <section style={{ marginTop: isMobile ? 60 : 100 }}>
      <SectionHeader label="03" title="Experience" mobile={isMobile} />

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
        style={{ position: "relative", marginTop: 40, paddingLeft: 32 }}
      >
        {/* Vertical timeline line */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: "absolute", left: 7, top: 6, bottom: 6, width: 1,
            background: "linear-gradient(to bottom, rgba(150, 180, 240, 0.4), rgba(150, 180, 240, 0.05))",
          }}
        />

        {experiences.map((e, i) => (
          <motion.div key={i} variants={slideIn} style={{ position: "relative", paddingBottom: isMobile ? 32 : 44 }}>
            {/* Star bullet */}
            <div style={{
              position: "absolute", left: -32, top: 4,
              width: 15, height: 15, borderRadius: "50%",
              background: "radial-gradient(circle, #fff 0%, #a0b8e8 40%, transparent 70%)",
              boxShadow: "0 0 16px rgba(160, 190, 245, 0.6)",
            }} />

            <div style={{
              fontSize: 12, color: "rgba(150, 180, 240, 0.8)",
              fontFamily: '"JetBrains Mono", ui-monospace, monospace', letterSpacing: 0.5,
            }}>
              {e.date}
            </div>

            <div style={{ fontSize: isMobile ? 18 : 22, marginTop: 6, fontWeight: 500, color: "#e3e9f7" }}>
              {e.role}
            </div>

            <div style={{ fontSize: 14, color: "rgba(200, 215, 240, 0.7)", marginTop: 2 }}>
              {e.organization}
            </div>

            <div style={{
              fontSize: 14, marginTop: 10, color: "rgba(220, 230, 245, 0.82)", lineHeight: 1.6,
            }}>
              {e.description}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {e.tags.map(t => (
                <span
                  key={t}
                  style={{
                    fontSize: 11, padding: "3px 9px", borderRadius: 4,
                    background: "rgba(140, 170, 240, 0.08)",
                    border: "1px solid rgba(140, 170, 240, 0.18)",
                    color: "rgba(200, 220, 255, 0.78)",
                    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
