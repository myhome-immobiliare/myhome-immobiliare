// src/App.js
import React, { useState } from "react";

const appStyles = {
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  color: "#0f172a",
  lineHeight: 1.4,
};

const heroStyles = {
  position: "relative",
  minHeight: "62vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.55) 100%)",
};

const container = {
  width: "min(1100px, 92vw)",
  margin: "0 auto",
};

const headlineWrap = {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  color: "white",
  paddingInline: "16px",
};

const headline = {
  fontSize: "clamp(28px, 4.6vw, 56px)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  marginBottom: 18,
};

const searchBar = {
  display: "grid",
  gridTemplateColumns: "1.1fr 1.1fr 1.1fr auto",
  gap: 10,
  background: "rgba(255,255,255,0.92)",
  padding: 10,
  borderRadius: 12,
  boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
};

const selectStyle = {
  appearance: "none",
  WebkitAppearance: "none",
