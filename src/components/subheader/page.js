"use client";

export default function Subheader({ title }) {
    const headerStyle = {
        marginTop: "150px",
        height:"100%",
        textAlign: "center",
        fontSize: "2rem",
        width: "100%" // Ensures the header spans the full width of the page
    };

    return <h1 style={headerStyle}>{title} Portal</h1>;
}