import { ImageResponse } from "next/og";

export const alt =
  "DNA PR — Get Featured in the World's Most Trusted Publications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "#0f1015",
          backgroundImage:
            "radial-gradient(900px 520px at 82% -12%, rgba(143,255,0,0.26), transparent 60%), radial-gradient(760px 520px at -8% 120%, rgba(0,224,160,0.16), transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 6,
              color: "#8FFF00"
            }}
          >
            {"DNA PR"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              letterSpacing: 6,
              color: "#9aa0aa"
            }}
          >
            {"PUBLIC RELATIONS"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1
            }}
          >
            {"Get featured in the world's"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
              color: "#8FFF00"
            }}
          >
            {"most trusted publications."}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 31,
              color: "#c8ccd2",
              marginTop: 28
            }}
          >
            {"Results-driven PR · Guaranteed media coverage · It's in your DNA."}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            color: "#aab0ba",
            letterSpacing: 1,
            borderTop: "1px solid rgba(143,255,0,0.25)",
            paddingTop: 26
          }}
        >
          {"Forbes · Rolling Stone · FOX · Entrepreneur · Business Insider · 100+ outlets"}
        </div>
      </div>
    ),
    { ...size }
  );
}
