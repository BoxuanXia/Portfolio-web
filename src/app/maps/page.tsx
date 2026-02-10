"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/breadcrumb";
import { mapLibrary } from "@/lib/maps";

export default function MapsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Map Library", href: "/maps" },
  ];

  return (
    <main style={{ background: "var(--background)" }}>
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <section style={{
        background: "var(--background)",
        padding: "60px 120px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        borderBottom: "1px solid var(--border)"
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "48px",
            fontWeight: "500",
            letterSpacing: "-1px",
            color: "var(--text-primary)",
            fontFamily: "var(--font-sans)",
            margin: 0,
            lineHeight: 1.2
          }}
        >
          Map Library
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            margin: 0,
            lineHeight: 1.6,
            maxWidth: "600px"
          }}
        >
          A collection of thematic maps, geospatial visualizations, and spatial analysis work showcasing GIS techniques and methodologies.
        </motion.p>
      </section>

      {/* Map Gallery Grid */}
      <section style={{
        background: "var(--surface-alt)",
        padding: "80px 120px",
        display: "flex",
        flexDirection: "column",
        gap: "48px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "24px",
          borderBottom: "1px solid var(--border)"
        }}>
          <h2 style={{
            fontSize: "11px",
            fontWeight: "600",
            letterSpacing: "2px",
            color: "var(--text-primary)",
            fontFamily: "var(--font-sans)",
            margin: 0
          }}>
            ALL MAPS
          </h2>
          <span style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans)"
          }}>
            {mapLibrary.length} maps
          </span>
        </div>

        {/* Maps Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          gap: "32px"
        }}>
          {mapLibrary.map((map, idx) => (
            <motion.div
              key={map.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "560px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Map Image with Overlay */}
              <div style={{
                width: "100%",
                height: "320px",
                background: "var(--surface-subtle)",
                overflow: "hidden",
                position: "relative"
              }}>
                <img
                  src={map.image}
                  alt={map.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {/* Overlay Gradient */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "80px",
                  background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
                  pointerEvents: "none"
                }} />
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
                padding: "24px"
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <span style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: "1px"
                    }}>
                      {map.category}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    margin: 0,
                    lineHeight: 1.3,
                    letterSpacing: "-0.3px"
                  }}>
                    {map.title}
                  </h3>
                </div>

                <p style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  margin: 0,
                  lineHeight: 1.5
                }}>
                  {map.description}
                </p>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  paddingTop: "8px",
                  borderTop: "1px solid var(--border)"
                }}>
                  <span style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-sans)"
                  }}>
                    Tools:
                  </span>
                  <span style={{
                    fontSize: "12px",
                    color: "var(--accent)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: "500"
                  }}>
                    {map.tools}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        background: "var(--surface)",
        padding: "80px 120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "32px",
          fontWeight: "500",
          color: "var(--text-primary)",
          fontFamily: "var(--font-sans)",
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: "-0.5px"
        }}>
          Need Custom Mapping?
        </h2>
        <p style={{
          fontSize: "16px",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-sans)",
          margin: 0,
          lineHeight: 1.6,
          maxWidth: "500px"
        }}>
          I create custom thematic maps, geospatial analysis, and interactive Web GIS applications.
        </p>
        <Link href="/#contact" style={{ textDecoration: "none" }}>
          <button style={{
            background: "var(--primary)",
            color: "#FFFFFF",
            border: "none",
            padding: "16px 36px",
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "var(--font-sans)",
            cursor: "pointer",
            letterSpacing: "0.5px",
            marginTop: "8px"
          }}>
            Start a Project
          </button>
        </Link>
      </section>
    </main>
  );
}
