import detailedblog from "../../data/detailed-news";
import latestNews from "../../data/latest-news-sample";
import NavBar from "@/app/components/Navbar";
import relatedBlogs from "../../data/related-post-sample";
import Link from "next/link";

export default function BlogPage({ params }: { params: { id: string } }) {
  const blogId = Number(params.id);
  const blog = detailedblog.find((item) => item.id === blogId);


  const relatedNewsData = relatedBlogs.map((item) => {
    return(
        <div key={item.id} className="px-4 py-4 border-2 border-white/20 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-justify leading-7 text-white mb-4">{item.text}</p>
            <Link href={`/relatedBlogs/${item.id}`} className="text-white text-center block font-medium uppercase hover:underline">{item.action}</Link>
        </div>
    )
  })

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <p className="text-white text-xl font-semibold">No blog found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black relative overflow-hidden text-gray-100">
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center opacity-30"></div>
      <NavBar />


        <div className="relative z-10">   
            {/* Glass Content Section */}
            <div className="w-[72%] mx-auto mt-30 p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
                <h2 className="text-4xl font-bold mb-4 text-white">{blog.name}</h2>
                <p className="text-sm text-gray-300 mb-6">
                    By <span className="font-semibold">{blog.createdBy}</span> • {blog.dateCreated}
                </p>
                <p className="text-lg leading-8 text-gray-200 whitespace-pre-line text-justify">
                    {blog.content}
                </p>
            </div>
        </div>

        {/* Related Posts */}
        <div className="w-[72%] mx-auto mt-5 px-0 py-5">
            <h5 className="text-3xl italic font-bold px-10">Related Posts</h5>
            <div className="flex items-center justify-between gap-x-3 mt-5">
                {relatedNewsData}
            </div>
        </div>
    </div>
  );
}