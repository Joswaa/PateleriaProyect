// src/components/atoms/SecondaryText.jsx
export default function SecondaryText({ children, color = "#6c6c6c", size = 16 }) {
  return (
    <span
      style={{
        color,
        fontSize: size,
        fontStyle: "italic",
      }}
      data-testid="secondary-text"
    >
      {children}
    </span>
  );
}
