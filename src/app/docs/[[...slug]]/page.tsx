import { notFound } from 'next/navigation';
import React from 'react';

// This file will match to every url that containes docs segement.

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  const slug = params.slug;

  console.log({ slug });

  if (slug?.length === 2) {
    return (
      <h1>
        Docs home page for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    if (slug[0] > '25') {
      notFound();
    }
    
    return <h1>Docs home page for feature {slug[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
};

export default Docs;
