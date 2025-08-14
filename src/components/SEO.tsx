import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = "DROSU Engineering - Atelier Performanță Auto | Remapare ECU & Modificări",
  description = "Specialiști în remapare ECU, modificări performanță și optimizări auto. Peste 10 ani experiență, 500+ vehicule optimizate. Consultanță gratuită în București.",
  keywords = "remapare ecu, modificări performanță, tuning auto, optimizare motor, dyno test, suspensie sport, atelier auto bucurești, drosu engineering",
  image = "https://drosuengineering.com/og-image.jpg",
  url = "https://drosuengineering.com",
  type = "website",
  author = "DROSU Engineering",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteName = "DROSU Engineering";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {author && <meta property="article:author" content={author} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "WebPage",
          "headline": fullTitle,
          "description": description,
          "image": image,
          "url": url,
          "author": {
            "@type": "Organization",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": siteName,
                         "logo": {
               "@type": "ImageObject",
               "url": "https://drosuengineering.com/src/assets/drosu-logo.png"
             }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          },
          "datePublished": publishedTime,
          "dateModified": modifiedTime || publishedTime,
          "keywords": keywords,
          "inLanguage": "ro-RO"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
