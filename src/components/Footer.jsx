export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-hero-1)",
        color: "var(--text)",
        textAlign: "center",
        padding: "1.5rem",
        fontSize: "0.85rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      © {new Date().getFullYear()}{" "}
      <span style={{ color: "var(--title)", fontWeight: 600 }}>
        ALM Impulso Digital
      </span>{" "}
      · Desarrollo Web & Apps
    </footer>
  );
}
