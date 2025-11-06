"use client";
import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
};

interface BlogCardProps {
  post: BlogPost;
  slug: string;
}

export default function BlogCard({ post , slug }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl shadow-sm border hover:shadow-md transition overflow-hidden"
    >
      <div className="relative w-full h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-4">
        <span className="inline-block text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded mb-2">
          {post.category}
        </span>

        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3 mt-2">
          {post.excerpt}
        </p>

        <p className="text-xs text-gray-400 mt-3">
          {new Date(post.date).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}