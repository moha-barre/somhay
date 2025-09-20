import Head from "next/head";

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = "/hero.jpg", 
  url = "https://somhay.vercel.app" 
}) {
  return (
    <Head>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="google-site-verification" content="WdnT6pwogkSSvv8-uE3E8YpEUcuiwg1I3CH-I9dC3qQ" />
    </Head>
  );
}