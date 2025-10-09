const Teens = () => {
  return (
    <>
    <section>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Flexbox vs Grid Demo</h1>

            {/* Flexbox Section */}
            <section style={{ marginBottom: "40px" }}>
                <h2>Flexbox</h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        border: "2px solid #4caf50",
                        padding: "10px",
                    }}
                >
                    {[1, 2, 3, 4, 5].map((n) => (
                        <div
                            key={n}
                            style={{
                                flex: "1 1 100px",
                                background: "#a5d6a7",
                                padding: "20px",
                                textAlign: "center",
                                transition: "flex 0.3s",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.flex = "2 1 100px")}
                            onMouseLeave={(e) => (e.currentTarget.style.flex = "1 1 100px")}
                        >
                            {n}
                        </div>
                    ))}
                </div>
                <p>Flexbox aligns items in a row or column. Items can grow or shrink when you hover.</p>
            </section>

            {/* Grid Section */}
            <section>
                <h2>Grid</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "10px",
                        border: "2px solid #2196f3",
                        padding: "10px",
                    }}
                >
                    {["A", "B", "C", "D", "E", "F"].map((letter, i) => (
                        <div
                            key={i}
                            style={{
                                background: ["#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2"][i],
                                padding: "20px",
                                textAlign: "center",
                                transition: "all 0.3s",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.gridColumn = "span 2")}
                            onMouseLeave={(e) => (e.currentTarget.style.gridColumn = "span 1")}
                        >
                            {letter}
                        </div>
                    ))}
                </div>
                <p>Grid splits content into rows and columns. Cells can span multiple columns when you hover.</p>
            </section>
        </div>

    </section>
    </>
  );
};

export default Teens;