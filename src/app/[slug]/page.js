import data from '../../../public/data.json';
import Head from 'next/head';

const slugToTitle = slug => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

const BlogPost = ({params: {slug}}) => {
    const title = slugToTitle(slug);
    const article = data.find(article => article.title.toLowerCase() === title.toLowerCase());

  if (!article) {
    // Handle case where article is not found
    return <p>Article not found</p>;
  }

  return (
    <>
    <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
    </Head>
    <main className="flex-1 bg-gray-100">
    <article className="prose prose-gray max-w-none mx-auto lg:max-w-6xl dark:prose-invert px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="space-y-2 not-prose">
        <h2 className="text-xl font-extrabold tracking-tight lg:text-xl lg:leading-[3.5rem]">
        {article.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Posted on {article.date} by {article.author}</p>
      </div>
      <p>
        {article.description}
      </p>
    </article>
  </main>
  </>
  )
  }
  
  export default BlogPost;