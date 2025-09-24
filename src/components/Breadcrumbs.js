'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ replacements = {} }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;
    
    let title = replacements[segment] || (segment.charAt(0).toUpperCase() + segment.slice(1));

    return (
      <div key={href} className="flex items-center">
        <Link href={href} className={`hover:underline ${isLast ? 'font-bold text-[var(--foreground)]' : 'text-[var(--foreground)]/60'}`}>
            {title}
        </Link>
        {!isLast && <ChevronRight size={16} className="mx-2 text-[var(--foreground)]/60" />}
      </div>
    );
  });

  return (
    <nav className="flex items-center text-sm mb-8">
      <div className="flex items-center">
        <Link href="/" className="text-[var(--foreground)]/60 hover:underline">
          Home
        </Link>
        {pathSegments.length > 0 && <ChevronRight size={16} className="mx-2 text-[var(--foreground)]/60" />}
      </div>
      {breadcrumbs}
    </nav>
  );
};

export default Breadcrumbs;