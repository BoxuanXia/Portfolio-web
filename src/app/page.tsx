"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredProjects, archiveProjects } from "@/lib/projects";
import { getAssetPath } from "@/lib/utils";

export default function Home() {
  return (
    <main style={{ background: "var(--background)" }}>

      {/* Hero Section */}
      <section style={{
        background: "var(--background)",
        padding: "100px 120px",
        display: "flex",
        flexDirection: "column",
        gap: "32px"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div style={{
            color: "var(--accent)",
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            fontWeight: "600",
            letterSpacing: "2px"
          }}>
            GIS SPECIALIST & SPATIAL ANALYST
          </div>
          <div style={{
            width: "60px",
            height: "2px",
            background: "var(--accent)"
          }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: "72px",
            fontWeight: "500",
            letterSpacing: "-2px",
            color: "var(--text-primary)",
            fontFamily: "var(--font-serif)",
            margin: 0,
            lineHeight: 1.05,
            maxWidth: "900px"
          }}
        >
          Precision Mapping. Spatial Intelligence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            margin: 0,
            lineHeight: 1.7,
            maxWidth: "600px",
            letterSpacing: "0.2px"
          }}
        >
          Transforming complex geospatial data into actionable insights. Specialized in Web GIS, ArcGIS Experience Builder, and advanced spatial analysis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: "flex",
            gap: "16px"
          }}
        >
          <Link href="/work" style={{ textDecoration: "none" }}>
            <button style={{
              background: "var(--primary)",
              color: "#FFFFFF",
              border: "none",
              padding: "16px 36px",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: "var(--font-sans)",
              cursor: "pointer",
              letterSpacing: "0.5px"
            }}>
              View Work
            </button>
          </Link>
          <Link href="#contact" style={{ textDecoration: "none" }}>
            <button style={{
              background: "#FFFFFF",
              color: "var(--text-primary)",
              border: `1px solid var(--border)`,
              padding: "16px 36px",
              fontSize: "13px",
              fontWeight: "500",
              fontFamily: "var(--font-sans)",
              cursor: "pointer",
              letterSpacing: "0.5px"
            }}>
              Get in Touch
            </button>
          </Link>
        </motion.div>

        {/* Skills Strip */}
        <div style={{
          display: "flex",
          gap: "48px",
          paddingTop: "32px",
          borderTop: `1px solid var(--border)`,
          marginTop: "24px"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "1.5px"
            }}>EXPERTISE</div>
            <div style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: "500"
            }}>Web GIS · ArcGIS · Spatial Analysis</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "1.5px"
            }}>BASED IN</div>
            <div style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: "500"
            }}>New York City, NY</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "1.5px"
            }}>AVAILABLE FOR</div>
            <div style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: "500"
            }}>Freelance & Full-time</div>
          </div>
        </div>
      </section>

      {/* About Section with Headshot */}
      <section style={{
        background: "var(--surface-alt)",
        padding: "100px 120px",
        display: "flex",
        gap: "80px",
        alignItems: "center"
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1 }}
        >
          <h2 style={{
            fontSize: "42px",
            fontWeight: "500",
            color: "var(--text-primary)",
            fontFamily: "var(--font-sans)",
            margin: 0,
            marginBottom: "24px",
            letterSpacing: "-0.5px"
          }}>
            About
          </h2>
          <p style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            lineHeight: 1.7,
            margin: 0,
            marginBottom: "20px",
            letterSpacing: "0.2px"
          }}>
            I'm a GIS professional with expertise in spatial analysis, Web GIS development, and urban planning. My work focuses on transforming complex geographic data into meaningful insights that drive decision-making.
          </p>
          <p style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            lineHeight: 1.7,
            margin: 0,
            marginBottom: "32px",
            letterSpacing: "0.2px"
          }}>
            Specialized in ArcGIS Experience Builder and spatial analytics, I create interactive mapping solutions and conduct advanced geospatial analysis for real estate, urban development, and environmental applications.
          </p>
          <Link href="/about" style={{
            color: "var(--primary)",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "14px",
            fontFamily: "var(--font-sans)",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.3s ease"
          }}>
            Learn more about my background →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, maxWidth: "400px" }}
        >
          <img
            src={getAssetPath("/images/headshot.jpg")}
            alt="Boxuan Xia"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              display: "block"
            }}
          />
        </motion.div>
      </section>

      {/* Featured Work Section */}
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
          borderBottom: `1px solid var(--border)`
        }}>
          <h2 style={{
            fontSize: "11px",
            fontWeight: "600",
            letterSpacing: "2px",
            color: "var(--text-primary)",
            fontFamily: "var(--font-sans)",
            margin: 0
          }}>
            FEATURED WORK
          </h2>
          <Link href="/work" style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "var(--accent)",
            fontFamily: "var(--font-sans)",
            textDecoration: "none"
          }}>
            Browse all →
          </Link>
        </div>

        {/* Featured Projects */}
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <Link href={`/work/${project.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                display: "flex",
                gap: "40px",
                height: "380px",
                cursor: "pointer",
                border: `1px solid var(--border)`,
                background: "var(--surface)",
                flexDirection: idx % 2 === 0 ? "row" : "row-reverse"
              }}>
                <div style={{
                  width: "480px",
                  height: "380px",
                  background: "var(--surface-subtle)",
                  flexShrink: 0,
                  overflow: "hidden"
                }}>
                  {project.image && (
                    <img
                      src={getAssetPath(project.image)}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  )}
                </div>
                <div style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "20px",
                  padding: "48px"
                }}>
                  <div style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: "600",
                    letterSpacing: "1px"
                  }}>
                    {project.category}
                  </div>
                  <h3 style={{
                    fontSize: "32px",
                    fontWeight: "500",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-serif)",
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px"
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                    margin: 0,
                    lineHeight: 1.6
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Archive Section */}
      <section style={{
        background: "var(--surface)",
        padding: "80px 120px",
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }}>
        <h2 style={{
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: "2px",
          color: "var(--text-primary)",
          fontFamily: "var(--font-sans)",
          margin: 0
        }}>
          ARCHIVE
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {archiveProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "24px 0",
                borderTop: `1px solid var(--border)`,
                cursor: "pointer"
              }}
            >
              <Link href={`/work/${project.slug}`} style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flex: 1
              }}>
                <span style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                  minWidth: "30px"
                }}>
                  {project.num}
                </span>
                <span style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  flex: 1
                }}>
                  {project.title}
                </span>
                <span style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "1px"
                }}>
                  {project.category}
                </span>
              </Link>
              <span style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                fontFamily: "var(--font-sans)"
              }}>
                →
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        background: "var(--primary)",
        padding: "100px 120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        textAlign: "center"
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "48px",
            fontWeight: "500",
            color: "#FFFFFF",
            fontFamily: "var(--font-serif)",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "-1px"
          }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans)",
            margin: 0,
            lineHeight: 1.7,
            maxWidth: "600px",
            letterSpacing: "0px"
          }}
        >
          Have a project or opportunity? I'm available for consultations, partnerships, and new projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px"
          }}
        >
          <Link href="/contact" style={{
            background: "var(--accent)",
            color: "#FFFFFF",
            border: "none",
            padding: "18px 40px",
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "var(--font-sans)",
            cursor: "pointer",
            letterSpacing: "0.5px",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "4px"
          }}>
            Send Message
          </Link>
          <a href="mailto:boxuan.xia@email.com" style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: "500",
            textDecoration: "none",
            letterSpacing: "0.3px"
          }}>
            boxuan.xia@email.com
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#1A1A1A",
        padding: "48px 120px 40px 120px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        borderTop: "1px solid #282828"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}>
          <div style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#FFFFFF",
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.5px"
          }}>
            BOXUAN XIA
          </div>
          <div style={{
            display: "flex",
            gap: "24px"
          }}>
            <a href="https://www.linkedin.com/in/boxuan-xia-4422a5127/" style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              textDecoration: "none"
            }}>
              LinkedIn
            </a>
            <a href="https://github.com/BoxuanXia" style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              textDecoration: "none"
            }}>
              GitHub
            </a>
            <a href="mailto:boxuan.xia@email.com" style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              textDecoration: "none"
            }}>
              Email
            </a>
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "24px",
          borderTop: "1px solid #282828",
          width: "100%"
        }}>
          <p style={{
            fontSize: "11px",
            fontWeight: "400",
            color: "#555555",
            fontFamily: "var(--font-sans)",
            margin: 0
          }}>
            © 2026 Boxuan Xia. All rights reserved.
          </p>
          <p style={{
            fontSize: "11px",
            fontWeight: "400",
            color: "#555555",
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
            margin: 0
          }}>
            Designed with precision
          </p>
        </div>
      </footer>
    </main>
  );
}
