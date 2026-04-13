import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// This will be generated at build time
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

async function getPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), "content/blog");
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content: content,
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/70 px-6 py-6 backdrop-blur-md md:px-12">
        <Link
          href="/"
          className="font-mono text-sm tracking-wide text-primary hover:underline"
        >
          ← Back to home
        </Link>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-12">
        {/* Header */}
        <header className="mb-12 border-b border-border pb-8">
          {frontmatter.series && (
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
              {frontmatter.series} · Part {frontmatter.part}
            </p>
          )}
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-muted-foreground">
            <time>{frontmatter.date}</time>
            <span>·</span>
            <span>{frontmatter.readTime}</span>
            {frontmatter.tags && (
              <>
                <span>·</span>
                <div className="flex gap-2">
                  {frontmatter.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-3xl
            prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl
            prose-p:leading-relaxed prose-p:text-foreground/90
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:font-semibold prose-strong:text-foreground
            prose-code:rounded prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5
            prose-code:font-mono prose-code:text-sm prose-code:text-primary
            prose-pre:bg-secondary prose-pre:border prose-pre:border-border
            prose-blockquote:border-l-primary prose-blockquote:italic
            prose-ul:my-6 prose-li:my-2
            prose-hr:my-12 prose-hr:border-border"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-8">
          <div className="flex items-center justify-between">
            <Link
              href="/#blog"
              className="font-mono text-sm text-primary hover:underline"
            >
              ← Back to all posts
            </Link>
            {frontmatter.series && frontmatter.part && (
              <p className="font-mono text-sm text-muted-foreground">
                Part {frontmatter.part} of {frontmatter.series}
              </p>
            )}
          </div>
        </footer>
      </article>
    </main>
  );
}
