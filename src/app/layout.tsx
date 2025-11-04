import "./globals.css";
import NavBar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
// import SideBar from "./components/Sidebar";

export const metadata = {
  title: "My Blog",
  description: "A simple blog page built with next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        {/* Sidebar + Main Container */}
        <div className="flex  h-[calc(100vh-64px)] w-full">
          {/* Sidebar is fixed so we just leave space for it */}
          {/* <div className="w-1/6">
            <SideBar />
          </div> */}

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto h-screen">
            {children}
            <Toaster position="top-right" />
          </main>
        </div>
      </body>
    </html>
  );
}
