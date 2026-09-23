import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "DTC - Dynamics Transport Commission | Freight Marketplace Ethiopia & Djibouti"

const primary = "#1e3a5f"
const secondary = "#c8a24b"

export default async function opengraphImage(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${primary} 0%, #16293f 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -180,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: secondary,
            opacity: 0.14,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            bottom: -200,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: primary,
            opacity: 0.5,
            border: "64px solid rgba(255,255,255,0.06)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 900,
              color: primary,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: "white", letterSpacing: 1 }}>
              DTC
            </div>
            <div style={{ fontSize: 20, color: secondary, fontWeight: 600 }}>
              Dynamics Transport Commission
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.12,
              maxWidth: 880,
            }}
          >
            Freight marketplace for Ethiopia &amp; Djibouti
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.82)",
              marginTop: 24,
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Verified truck drivers, competitive bidding, live GPS tracking, and FIFO
            queue management for ports, factories, and depots.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[
            { big: "480+", small: "verified trucks" },
            { big: "GPS", small: "live tracking" },
            { big: "24h", small: "dispatch queue" },
          ].map((item) => (
            <div key={item.small} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: secondary }}>{item.big}</div>
              <div style={{ fontSize: 20, color: "rgba(255,255,255,0.75)" }}>{item.small}</div>
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.6)" }}>dynamicsroute.tech</div>
        </div>
      </div>
    ),
    { ...size },
  )
}