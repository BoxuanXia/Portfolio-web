"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  summary: string;
  slug: string;
  tags: string[];
}

export function ProjectCard({ title, summary, slug, tags }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href={`/work/${slug}`}
        className="group block p-8 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-accent transition-all duration-500"
      >
        <div className="flex flex-col h-full space-y-6">
          <motion.div
            className="flex justify-between items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-3">
              {tags && tags.length > 0 ? tags.slice(0, 2).map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-gray-50 text-gray-500 border border-gray-200 rounded"
                >
                  {tag}
                </motion.span>
              )) : (
                <span className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-gray-50 text-gray-500 border border-gray-200 rounded">
                  GIS Project
                </span>
              )}
            </div>
            <motion.div
              animate={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
              className="group-hover:text-accent transition-colors duration-300"
            >
              <ArrowUpRight className="text-gray-300 group-hover:text-accent transition-colors duration-300" size={24} />
            </motion.div>
          </motion.div>

          <div className="space-y-3">
            <h3 className="text-2xl font-light text-gray-900 group-hover:text-accent transition-colors duration-300 tracking-tight">{title}</h3>
            <p className="text-base text-gray-600 font-light line-clamp-2 leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
