import Link from 'next/link';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomMenu from '@/components/bottom_menu';
import Breadcrumbs from '@/components/Breadcrumbs';

/**
 * This function generates the static paths for each post page at build time.
 * @returns {Array} A list of possible post slug parameters.
 */
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(p => ({ slug: p.params.slug }));
}

/**
 * A page that displays a single blog post.
 * This page is statically generated at build time for each post.
 * @param {object} props - The component's props.
 * @param {object} props.params - The route parameters, containing the post's slug.
 */
export default async function Post({ params }) {
  // Fetch the data for the specific post
  const postData = await getPostData(params.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BottomMenu />
      <main className="flex-grow max-w-3xl mx-auto px-6 md:px-12 pt-20 w-full">
        {/* Breadcrumbs for navigation, replacing slug with post title */}
        <Breadcrumbs replacements={{ [params.slug]: postData.title }} />
        
        {/* Featured image for the post */}
        {postData.image && (
          <div className="mb-8">
            <Image
              src={postData.image}
              alt={postData.title}
              width={1200}
              height={630}
              className="rounded-lg"
              priority // Prioritize loading of the main image
            />
          </div>
        )}
        
        {/* Article content */}
        <article className="prose max-w-none">
          {/* Post Title */}
          <h1 className="text-5xl font-bold font-montserrat mb-2">{postData.title}</h1>
          {/* Post Date */}
          <div className="text-[var(--foreground)]/60 mb-8">{postData.date}</div>
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {postData.tags && postData.tags.map(tag => (
              <Link href={`/blog/tags/${tag}`} key={tag} className="bg-[var(--select-menu-background)] text-sm rounded-full px-3 py-1 hover:bg-[var(--border-color)] transition-colors">
                {tag}
              </Link>
            ))}
          </div>
          {/* Post Body (from markdown) */}
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
