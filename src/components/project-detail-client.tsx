"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectDetailProps {
  title: string;
  category?: string;
  summary?: string;
  image?: string;
  date?: string;
  role?: string;
  tools?: string[];
  link?: string;
  content: React.ReactNode;
}

export function ProjectDetail({
  title,
  category,
  summary,
  image,
  date,
  role,
  tools,
  link,
  content,
}: ProjectDetailProps) {
  const heroImage = image || "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1440&h=600&fit=crop";

  return (
    <>
      {/* Hero Section */}
      <section style={{
        width: "100%",
        height: "600px",
        background: "var(--surface-subtle)",
        overflow: "hidden",
        position: "relative"
      }}>
        <img
          src={heroImage}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </section>

      {/* Content Section */}
      <section style={{
        background: "var(--surface)",
        padding: "80px 120px",
        display: "flex",
        gap: "60px"
      }}>
        {/* Main Content */}
        <div style={{
          flex: 1,
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "48px"
        }}>
          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}
          >
            <div>
              {category && (
                <div style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginBottom: "16px"
                }}>
                  {category}
                </div>
              )}
              <h1 style={{
                fontSize: "48px",
                fontWeight: "500",
                letterSpacing: "-1px",
                color: "var(--text-primary)",
                fontFamily: "var(--font-sans)",
                margin: 0,
                lineHeight: 1.2
              }}>
                {title}
              </h1>
            </div>

            {summary && (
              <p style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                margin: 0,
                lineHeight: 1.6
              }}>
                {summary}
              </p>
            )}
          </motion.div>

          {/* Metadata Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "48px",
              paddingTop: "24px",
              borderTop: "1px solid var(--border)"
            }}
          >
            {date && (
              <div>
                <div style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginBottom: "6px"
                }}>
                  DATE
                </div>
                <div style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: "500"
                }}>
                  {date}
                </div>
              </div>
            )}

            {role && (
              <div>
                <div style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginBottom: "6px"
                }}>
                  ROLE
                </div>
                <div style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: "500"
                }}>
                  {role}
                </div>
              </div>
            )}

            {tools && tools.length > 0 && (
              <div>
                <div style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginBottom: "6px"
                }}>
                  TOOLS
                </div>
                <div style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: "500"
                }}>
                  {tools.join(", ")}
                </div>
              </div>
            )}
          </motion.div>

          {/* MDX Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
              lineHeight: 1.8
            }}
            className="prose prose-sm max-w-none"
          >
            {content}
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            width: "300px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            position: "sticky",
            top: "100px"
          }}
        >
          {/* Quick Links Card */}
          <div style={{
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "24px",
            background: "var(--surface-alt)"
          }}>
            <div style={{
              fontSize: "11px",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              marginBottom: "16px"
            }}>
              PROJECT LINKS
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  View Project →
                </a>
              )}
              <Link href="/work" style={{
                color: "var(--primary)",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                Back to Work →
              </Link>
            </div>
          </div>

          {/* Share Card */}
          <div style={{
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "24px",
            background: "var(--surface-alt)"
          }}>
            <div style={{
              fontSize: "11px",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
              marginBottom: "16px"
            }}>
              SHARE
            </div>
            <div style={{
              display: "flex",
              gap: "12px"
            }}>
              <a href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${title}`} target="_blank" rel="noopener noreferrer" style={{
                padding: "8px 12px",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                fontWeight: "500",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-light)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}>
                Twitter
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`} target="_blank" rel="noopener noreferrer" style={{
                padding: "8px 12px",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                fontWeight: "500",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-light)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.aside>
      </section>

      {/* Back to Work CTA */}
      <section style={{
        background: "var(--surface-alt)",
        padding: "60px 120px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        borderTop: "1px solid var(--border)"
      }}>
        <Link href="/work" style={{
          color: "var(--primary)",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: "600",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.2s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.gap = "12px";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.gap = "8px";
        }}>
          ← Back to Work
        </Link>
        <span style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-sans)",
          fontSize: "12px"
        }}>
          Explore more projects
        </span>
      </section>
    </>
  );
}

// Export with old name for backward compatibility
export const ProjectDetailClient = ProjectDetail;
