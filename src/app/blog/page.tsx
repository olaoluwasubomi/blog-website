// app/blog/page.tsx
"use client";
import { useState } from "react";
import BlogCard, {BlogPost} from "./blogCard";
import BlogFilters from "./blogFilter";
import BlogSkeleton from "./blogSkeleton";

const mockPosts: BlogPost[] = [
  {
    slug: "mindfulness-daily",
    title: "The Amazing Power of Mindfulness in Everyday Life",
    excerpt:
      "Discover how mindfulness can improve well-being and reduce stress...",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80",
    category: "Mental Health",
    date: "2024-05-10",
  },
  {
    slug: "physical-therapy-role",
    title: "The Role of Physical Therapy in Rehabilitation",
    excerpt:
      "Improve mobility, reduce pain, and accelerate your recovery...",
    image:
      "https://images.unsplash.com/photo-1554306274-f23873d9a26a?w=800&q=80",
    category: "Physical Health",
    date: "2024-05-02",
  },
  {
    slug: "resilience-strategies",
    title: "Building Resilience: Overcoming Life's Challenges",
    excerpt:
      "Learn practical ways to build resilience in your daily life...",
    image:
      "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?w=800&q=80",
    category: "Self-Help",
    date: "2024-05-01",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(mockPosts.map((p) => p.category))];

  const filteredPosts = selectedCategory
    ? mockPosts.filter((p) => p.category === selectedCategory)
    : mockPosts;

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Latest Articles</h1>
      <p className="text-gray-600 mb-6">Read our latest trending health blogs</p>

      <BlogFilters
        categories={categories}
        onFilter={(cat) => setSelectedCategory(cat)}
      />

      {filteredPosts.length === 0 ? (
        <BlogSkeleton />
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
