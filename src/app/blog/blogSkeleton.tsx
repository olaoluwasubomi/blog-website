// app/blog/BlogSkeleton.tsx
export default function BlogSkeleton() {
    return (
      <div className="animate-pulse grid md:grid-cols-3 gap-6 mt-10">
        {new Array(6).fill(null).map((_, i) => (
          <div key={i} className="bg-gray-200 h-[260px] rounded-xl" />
        ))}
      </div>
    );
  }
  