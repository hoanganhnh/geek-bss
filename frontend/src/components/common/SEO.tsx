import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
  description?: string
  image?: string
}

function SEO({
  title,
  description = 'Blog platform | My blog',
  image,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@my_blog" />
      <meta name="twitter:image" content={image} />

      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
