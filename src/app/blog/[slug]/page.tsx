"use client";
interface MainBlogDetailsPageProps {
    params: {
        slug: string;
    };
}
export default function MainBlogDetailsPage ({ params }: MainBlogDetailsPageProps) {
    const {slug} = params;
    return(
        <div>
            <p>This is the title: {slug}</p>
        </div>
    )
}