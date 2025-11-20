export default function BadAccessibility() {
  return (
    <div style={{ padding: "20px" }}>

      {/* WCAG VIOLATION: empty alt attribute */}
      <img src="https://via.placeholder.com/150" alt="" />

      {/* WCAG VIOLATION: button without accessible label */}
      <button aria-label="">Click</button>

      {/* WCAG VIOLATION: input without label */}
      <input type="text" aria-label="" />

      {/* WCAG VIOLATION: low contrast text */}
      <p style={{ color: "#ddd", backgroundColor: "#ffffff" }}>
        This is low contrast text
      </p>

      {/* WCAG VIOLATION: non-interactive element acting as button */}
      <div
        onClick={() => alert("clicked")}
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          cursor: "pointer"
        }}
        role="button"
      >
        Click me
      </div>

    </div>
  );
}