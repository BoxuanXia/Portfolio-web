"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Maps", path: "/maps" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "72px",
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        paddingLeft: "clamp(16px, 4vw, 60px)",
        paddingRight: "clamp(16px, 4vw, 60px)",
        justifyContent: "space-between",
        gap: "16px",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "var(--text-primary)",
          textDecoration: "none",
          letterSpacing: "0.5px",
        }}
      >
        BOXUAN XIA
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px, 3vw, 48px)", flexShrink: 0 }}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: isActive(item.path)
                ? "var(--primary)"
                : "var(--text-secondary)",
              textDecoration: "none",
              borderBottom: isActive(item.path)
                ? "3px solid var(--primary)"
                : "none",
              paddingBottom: "4px",
              transition: "all 0.3s ease",
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>

    </nav>
  );
}
