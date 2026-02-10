import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProjectDetail } from "@/components/project-detail";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx?$/, "") }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const project = getProjectBySlug(slug);

    const breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: project.data.title, href: `/work/${slug}` },
    ];

    const contentNode = <MDXRemote source={project.content} />;

    return (
      <main style={{ background: "var(--background)" }}>
        <Breadcrumb items={breadcrumbItems} />
        <ProjectDetail
          title={project.data.title}
          category={project.data.category}
          summary={project.data.summary}
          image={project.data.image}
          date={project.data.date}
          role={project.data.role}
          tools={project.data.tools}
          link={project.data.link}
          content={contentNode}
        />
      </main>
    );
  } catch (e) {
    console.error("Error loading project:", e);
    notFound();
  }
}
