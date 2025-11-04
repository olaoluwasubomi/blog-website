import NavBar from "../components/Navbar";
// import bgImage from "../../public/images/JSON Guide_ Web Dev Essentials.jpeg";
import bgImage from "../../../public/images/JSON Guide_ Web Dev Essentials.jpeg";
import image1 from "../../../public/images/Swift _ Flutter _ iOS dev _ mobile developer.jpeg";
import image2 from "../../../public/images/cruel winter with you _ ali hazelwood.jpeg";
import Image from "next/image";
import Link from "next/link";
import latestNews from "../data/latest-news-sample";

export default function Home() {
  const latest = latestNews.map((items, i) => (
    <div key={i} className="bg-white p-10 rounded-xl shadow-2xl max-w-md">
      <h3 className="text-2xl font-semibold mb-3">{items.title}</h3>
      <p className="text-justify leading-7 text-gray-700 mb-4">{items.text}</p>
      <Link
        href={`/blogs/${items.id}`}
        className="text-black text-center block font-medium hover:underline uppercase"
      >
        {items.action}
      </Link>
    </div>
  ));

  return (
    <div className="relative min-h-screen">
      {/* ===== Fullscreen Header Section ===== */}
      <div className="relative w-full h-screen flex flex-col items-center justify-start text-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Coffee background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* === Navbar (inside hero) === */}
        <NavBar />

        {/* Text Content */}
        <div className="relative z-10 px-4 mt-80">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic tracking-wide">
            Stories & Coffee
          </h3>
          <p className="text-sm md:text-base lg:text-xl mt-5 text-gray-200">
            Every story starts with a sip
          </p>
        </div>
      </div>

      {/* ===== Overlapping Images Section ===== */}
      <section className="flex items-center justify-center gap-x-8 z-20 -mt-90">
        <div className="relative w-100 h-100 rotate-x-15 -rotate-y-40 drop-shadow-2xl transform -translate-y-6">
          <Image src={bgImage} alt="image1" fill className="object-cover rounded-xl" />
        </div>

        <div className="relative w-100 h-100 z-10 drop-shadow-2xl">
          <Image src={image1} alt="image2" fill className="object-cover rounded-xl" />
        </div>

        <div className="relative w-100 h-100 rotate-x-15 rotate-y-40 drop-shadow-2xl transform -translate-y-6">
          <Image src={image2} alt="image3" fill className="object-cover rounded-xl" />
        </div>
      </section>

      {/* ===== Latest News Section ===== */}
      <div className="bg-gray-100 -mt-16 px-10 py-30">
        <h4 className="text-center pt-5 pb-10 text-5xl italic">My Latest Blogs</h4>
        <section className="flex flex-wrap justify-center items-start gap-10">
          {latest}
      </section>
      </div>
    </div>
  );
}
