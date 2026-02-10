"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/breadcrumb";
import { featuredProjects, archiveProjects } from "@/lib/projects";

export default function WorkPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
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
          Project Portfolio
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
          A collection of GIS projects and spatial analysis work, showcasing Web GIS applications and ArcGIS Experience Builder implementations.
        </motion.p>
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
            FEATURED WORK
          </h2>
          <span style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans)"
          }}>
            {featuredProjects.length} projects
          </span>
        </div>

        {/* Featured Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "32px"
        }}>
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
                  flexDirection: "column",
                  height: "480px",
                  cursor: "pointer",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  {/* Image */}
                  <div style={{
                    width: "100%",
                    height: "240px",
                    background: "var(--surface-subtle)",
                    overflow: "hidden"
                  }}>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "16px",
                    padding: "24px"
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
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                      margin: 0,
                      lineHeight: 1.3,
                      letterSpacing: "-0.3px"
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-sans)",
                      margin: 0,
                      lineHeight: 1.5,
                      flex: 1
                    }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Archive Section */}
      <section style={{
        background: "var(--surface)",
        padding: "80px 120px",
        display: "flex",
        flexDirection: "column",
        gap: "40px"
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
            ARCHIVE
          </h2>
          <span style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans)"
          }}>
            {archiveProjects.length} projects
          </span>
        </div>

        {/* Archive Projects List */}
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
                borderTop: "1px solid var(--border)",
                cursor: "pointer"
              }}
            >
              <Link href={`/work/${project.slug}`} style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flex: 1,
                width: "100%"
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
                  &rarr;
                </span>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        background: "var(--surface-alt)",
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
          Interested in working together?
        </h2>
        <p style={{
          fontSize: "16px",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-sans)",
          margin: 0,
          lineHeight: 1.6,
          maxWidth: "500px"
        }}>
          Let's discuss your GIS, spatial analysis, or Web GIS project needs.
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
            Get in Touch
          </button>
        </Link>
      </section>
    </main>
  );
}

