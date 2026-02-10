"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        height: "48px",
        paddingLeft: "clamp(16px, 4vw, 60px)",
        paddingRight: "clamp(16px, 4vw, 60px)",
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        fontSize: "14px",
        color: "var(--text-secondary)",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {items.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {item.href ? (
            <Link
              href={item.href}
              style={{
                color: "var(--primary)",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
}
