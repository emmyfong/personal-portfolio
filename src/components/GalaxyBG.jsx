import { useEffect, useRef } from "react";

export default function GalaxyBG({ starCount = 500, constellationCount = 12, hueBase = 220, density = 0.7 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = Math.round(starCount * density);
    const stars = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.1 + 0.2,
      tw: Math.random() * Math.PI * 2,
      twSpeed: 0.4 + Math.random() * 1.1,
      bright: 0.4 + Math.random() * 0.6,
    }));

    const anchors = Array.from({ length: constellationCount * 5 }, () => ({
      x: Math.random(), y: Math.random(),
      r: 1.4 + Math.random() * 1.2,
      tw: Math.random() * Math.PI * 2,
      twSpeed: 0.3 + Math.random() * 0.6,
    }));

    const constellations = [];
    const used = new Set();
    for (let c = 0; c < constellationCount; c++) {
      const chain = [];
      let seed = -1;
      for (let i = 0; i < anchors.length; i++) if (!used.has(i)) { seed = i; break; }
      if (seed < 0) break;
      chain.push(seed); used.add(seed);
      for (let step = 0; step < 4; step++) {
        const last = anchors[chain[chain.length - 1]];
        let bestI = -1, bestD = Infinity;
        for (let i = 0; i < anchors.length; i++) {
          if (used.has(i)) continue;
          const dx = anchors[i].x - last.x, dy = anchors[i].y - last.y;
          const d = dx * dx + dy * dy;
          if (d < bestD) { bestD = d; bestI = i; }
        }
        if (bestI >= 0 && bestD < 0.08) { chain.push(bestI); used.add(bestI); }
      }
      if (chain.length >= 2) constellations.push(chain);
    }

    const meteorList = [];
    let lastMeteor = performance.now();
    const t0 = performance.now();

    const tick = (now) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);

      for (const chain of constellations) {
        ctx.strokeStyle = `hsla(${hueBase}, 60%, 70%, 0.08)`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        for (let i = 0; i < chain.length; i++) {
          const s = anchors[chain[i]];
          if (i === 0) ctx.moveTo(s.x * w, s.y * h);
          else ctx.lineTo(s.x * w, s.y * h);
        }
        ctx.stroke();
      }

      for (const s of stars) {
        const tw = 0.55 + 0.45 * Math.sin(t * s.twSpeed + s.tw);
        ctx.fillStyle = `hsla(${hueBase - 10 + ((s.x * 40) | 0)}, 40%, 90%, ${s.bright * tw})`;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const s of anchors) {
        const tw = 0.6 + 0.4 * Math.sin(t * s.twSpeed + s.tw);
        ctx.fillStyle = `hsla(${hueBase}, 50%, 95%, ${0.85 * tw})`;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
        const g = ctx.createRadialGradient(s.x * w, s.y * h, 0, s.x * w, s.y * h, s.r * 6);
        g.addColorStop(0, `hsla(${hueBase}, 70%, 80%, ${0.25 * tw})`);
        g.addColorStop(1, "hsla(0,0%,0%,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (now - lastMeteor > 4500 + Math.random() * 5000) {
        lastMeteor = now;
        meteorList.push({
          x: Math.random() * w * 0.6, y: Math.random() * h * 0.4,
          vx: 260 + Math.random() * 180, vy: 120 + Math.random() * 80,
          life: 0, max: 1.0 + Math.random() * 0.4,
        });
      }
      for (let i = meteorList.length - 1; i >= 0; i--) {
        const m = meteorList[i];
        m.life += 1 / 60;
        const p = m.life / m.max;
        if (p >= 1) { meteorList.splice(i, 1); continue; }
        const cx = m.x + m.vx * m.life, cy = m.y + m.vy * m.life;
        const a = Math.sin(p * Math.PI);
        const grad = ctx.createLinearGradient(cx, cy, cx - m.vx * 0.12, cy - m.vy * 0.12);
        grad.addColorStop(0, `hsla(${hueBase + 20}, 80%, 90%, ${0.9 * a})`);
        grad.addColorStop(1, "hsla(0,0%,0%,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx - m.vx * 0.12, cy - m.vy * 0.12);
        ctx.stroke();
        ctx.fillStyle = `hsla(${hueBase + 20}, 90%, 95%, ${a})`;
        ctx.beginPath();
        ctx.arc(cx, cy, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 30%, rgba(30,50,110,0.18), transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(80,40,140,0.10), transparent 55%)",
      }} />
    </div>
  );
}
