// /src/pages/blog/index.tsx
import Link from 'next/link';
import blogs from '../../data/blogs.json';
import { Blog } from '../../types/blogData';

const BlogIndex: React.FC = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link href={`/blog/${blog.title.toLowerCase().replace(/[\W_]+/g, '-')}`}>
            {blog.title}
          </Link>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogIndex;
