import { getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomMenu from '@/components/bottom_menu';
import Breadcrumbs from '@/components/Breadcrumbs';
import PostCard from '@/components/PostCard';

/**
 * The main blog page, displaying a list of all posts.
 * This page is statically generated at build time.
 */
export default function Blog() {
  // Fetch all post data, sorted by date
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BottomMenu />
      <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 pt-20 w-full">
        {/* Breadcrumbs for navigation */}
        <Breadcrumbs />
        <h1 className="text-5xl font-bold font-montserrat mb-10">Blog</h1>
        {/* Grid layout for post cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allPostsData.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
