import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Fetches and sorts all blog posts' metadata.
 * @returns {Array} An array of post objects, sorted by date (newest first).
 * Each object contains the post's id, excerpt, and frontmatter data.
 */
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Generate an excerpt from the post content
    const excerpt = matterResult.content.substring(0, 140) + '...';

    // Combine the data with the id and excerpt
    return {
      id,
      excerpt,
      ...matterResult.data,
    };
  });
  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Fetches all possible post IDs (slugs) for static path generation.
 * @returns {Array} An array of objects, where each object has a `params` key
 * with a `slug` for a post.
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

/**
 * Fetches the data for a single post by its slug.
 * @param {string} slug - The slug of the post to fetch.
 * @returns {object} An object containing the post's slug, HTML content,
 * and frontmatter data.
 */
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

/**
 * Gathers a unique list of all tags from all blog posts.
 * @returns {Array<string>} An array of unique tag strings.
 */
export function getAllTags() {
  const allPosts = getSortedPostsData();
  const allTags = allPosts.reduce((tags, post) => {
    if (post.tags) {
      post.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
    return tags;
  }, []);
  return allTags;
}

/**
 * Filters and returns all posts that include a specific tag.
 * @param {string} tag - The tag to filter posts by.
 * @returns {Array} An array of post objects that contain the specified tag.
 */
export function getPostsByTag(tag) {
    const allPosts = getSortedPostsData();
    return allPosts.filter(post => post.tags && post.tags.includes(tag));
}
