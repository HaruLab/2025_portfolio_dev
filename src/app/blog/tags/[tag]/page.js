import { getAllTags, getPostsByTag } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomMenu from '@/components/bottom_menu';
import Breadcrumbs from '@/components/Breadcrumbs';
import PostCard from '@/components/PostCard';

/**
 * This function generates the static paths for each tag page at build time.
 * @returns {Array} A list of possible tag parameters.
 */
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(tag => ({
    tag: tag,
  }));
}

/**
 * A page that displays all blog posts associated with a specific tag.
 * This page is statically generated at build time for each tag.
 * @param {object} props - The component's props.
 * @param {object} props.params - The route parameters, containing the tag.
 */
export default function TagPage({ params }) {
  const { tag } = params;
  // Fetch all posts for the given tag
  const posts = getPostsByTag(tag);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BottomMenu />
      <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 pt-20 w-full">
        {/* Breadcrumbs for navigation */}
        <Breadcrumbs />
        <h1 className="text-5xl font-bold font-montserrat mb-10">Tag: {tag}</h1>
        {/* Grid layout for post cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
