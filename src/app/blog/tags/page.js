import Link from 'next/link';
import { getAllTags } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomMenu from '@/components/bottom_menu';
import Breadcrumbs from '@/components/Breadcrumbs';

/**
 * A page that displays a list of all unique tags from blog posts.
 * This page is statically generated at build time.
 */
export default function Tags() {
  // Fetch all unique tags
  const allTags = getAllTags();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BottomMenu />
      <main className="flex-grow max-w-3xl mx-auto px-6 md:px-12 pt-20 w-full">
        {/* Breadcrumbs for navigation */}
        <Breadcrumbs />
        <h1 className="text-5xl font-bold font-montserrat mb-10">Tags</h1>
        {/* A list of tag links */}
        <div className="flex flex-wrap gap-4">
          {allTags.map(tag => (
            <Link 
              href={`/blog/tags/${tag}`} 
              key={tag} 
              className="bg-[var(--select-menu-background)] text-lg rounded-full px-5 py-2 hover:bg-[var(--border-color)] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
