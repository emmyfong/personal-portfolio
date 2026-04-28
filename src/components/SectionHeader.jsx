import { motion } from "framer-motion";

export default function SectionHeader({ label, title, mobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ display: "flex", alignItems: "baseline", gap: 18 }}
    >
      <div style={{
        fontSize: 11, color: "rgba(150, 180, 240, 0.6)",
        fontFamily: '"JetBrains Mono", ui-monospace, monospace', letterSpacing: 2,
        flex: "0 0 auto",
      }}>
        {label}
      </div>
      <h2 style={{
        fontSize: mobile ? 28 : 36, fontWeight: 300, margin: 0, letterSpacing: -0.5,
        color: "#e3e9f7",
      }}>
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          flex: 1, height: 1,
          background: "linear-gradient(to right, rgba(140, 170, 240, 0.2), transparent)",
        }}
      />
    </motion.div>
  );
}
