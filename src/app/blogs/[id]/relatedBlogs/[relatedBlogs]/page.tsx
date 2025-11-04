import detailedblog from "@/app/data/detailed-news";
import NavBar from "@/app/components/Navbar";
import Link from "next/link";
export default function RelatedBlogs({params,} : {params:{id:string; relatedId:string}}) {
    const mainblogId = Number(params.id);
    const relatedBlogId = Number(params.id);

    const mainBlog = detailedblog.find((item) => item.id === mainblogId);
    const relatedBlog = detailedblog.find((item) => item.id === relatedBlogId);
  
    if (!relatedBlog) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black">
          <p className="text-white text-xl font-semibold">No related blog found!</p>
        </div>
      );
    }
  
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black relative overflow-hidden text-gray-100">
      <NavBar />

      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Blog content */}
      <div className="relative z-10 w-[72%] mx-auto mt-30 p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
        <h2 className="text-4xl font-bold mb-4 text-white">
          {relatedBlog.name}
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          By <span className="font-semibold">{relatedBlog.createdBy}</span> •{" "}
          {relatedBlog.dateCreated}
        </p>
        <p className="text-lg leading-8 text-gray-200 whitespace-pre-line text-justify">
          {relatedBlog.content}
        </p>

        <div className="mt-10 text-center">
          <Link
            href={`/blogs/${mainblogId}`}
            className="text-blue-400 hover:underline"
          >
            ← Back to {mainBlog?.name}
          </Link>
        </div>
      </div>
    </div>
    )
}