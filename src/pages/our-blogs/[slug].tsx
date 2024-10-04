import images from "@/assets";
import { PageLayout, Spinner } from "@/components";
import { Blog } from "@/types/blogData";
import blogs from "@/utils/validateBlogs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

interface BlogProps {
  blog: Blog;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsWithSlugs = blogs.map((blog) => ({
    ...blog,
    slug: blog.slug || blog.title.toLowerCase().replace(/[\W_]+/g, "-"),
  }));

  // console.log("Loaded blogs for paths:", blogsWithSlugs);

  const paths = blogsWithSlugs
    .filter((blog) => typeof blog.slug === "string")
    .map((blog) => ({
      params: { slug: blog.slug },
    }));

  // console.log("Generated paths:", paths);

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<
  BlogProps,
  { slug: string }
> = async ({ params }) => {
  const blog = blogs.find((b) => b.slug === params!.slug);

  if (!blog) {
    return { notFound: true };
  }

  return { props: { blog } };
};

const BlogPage: NextPage<BlogProps> = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  const renderImage = (image: string | undefined, alt: string) => {
    if (!image) return null;
    try {
      return (
        <Image
          src={images.blog[image] || images.blog.blog}
          alt={alt}
          width={800}
          height={600}
          className="w-full lg:rounded-xl"
        />
      );
    } catch (error) {
      console.error(`Image not found: ${image}`);
      return null;
    }
  };

  return (
    <PageLayout showHeader showFooter>
      <article id={`Blog${blog.id}`} className="pt-[33vw]">
        <section id="Blog_Content" className="">
          <div id="Main_Content" className="w-full flex flex-col gap-3">
            <div className="">
              <h1 className="font-semibold">{blog.title}</h1>
            </div>

            <div className="">{renderImage(blog.image, blog.title)}</div>
          </div>

          <div id="Generated_Content" className=""></div>

          <div id="Related_Posts" className=""></div>
        </section>

        <section id="Blog_SideBar" className=""></section>
      </article>
    </PageLayout>
  );
};

export default BlogPage;
