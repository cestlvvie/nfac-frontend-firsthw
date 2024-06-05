import Link from 'next/link';
import React from 'react';
import data from '../../public/data.json';
import Card from './components/card';

export default function Home() {
  return (
    <div className="bg-gray-100 px-4 py-6 sm:px-6 lg:px-8"> 
      {data.map(article => (
        <Link href={`/[slug]`} as={`/./${encodeURIComponent(article.title.toLowerCase().replace(/\s+/g, '-'))}`} key={article.id}>
            <Card
              id={article.id}
              author={article.author}
              date={article.date}
              title={article.title}
              description={article.description}
            />
        </Link>
      ))}
    </div>
  );
}
