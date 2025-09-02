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
  isLocalBusiness?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "DROSU Engineering - Atelier Performanță Auto | Modificări & Optimizări",
  description = "Specialiști în modificări de performanță și optimizări auto. Peste 10 ani experiență, 500+ vehicule optimizate. Consultanță gratuită în București.",
  keywords = "modificări performanță, tuning auto, optimizare motor, suspensie sport, atelier auto bucurești, drosu engineering",
  image = "https://www.drosuengineering.com/og-image.jpg",
  url = "https://www.drosuengineering.com",
  type = "website",
  author = "DROSU Engineering",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  isLocalBusiness = true
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
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Romanian" />
      <meta name="revisit-after" content="7 days" />
      
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
      
      {/* Local Business Schema */}
      {isLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "DROSU Engineering",
            "description": "Specialiști în modificări performanță și optimizări auto",
            "url": "https://www.drosuengineering.com",
            "telephone": "+40-726-960-376",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Strada Bujorului 5",
              "addressLocality": "Râmnicu Vâlcea",
              "addressRegion": "Vâlcea",
              "postalCode": "240000",
              "addressCountry": "RO"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.1101785,
              "longitude": 24.3673623
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "priceRange": "$$",
            "currenciesAccepted": "RON, EUR",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "areaServed": {
              "@type": "Country",
              "name": "Romania"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 45.1101785,
                "longitude": 24.3673623
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicii Auto",
              "itemListElement": [
                
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Modificări Performanță",
                    "description": "Upgrade-uri pentru performanță superioară"
                  }
                },
                
              ]
            },
            "sameAs": [
              "https://www.facebook.com/drosuengineering",
              "https://www.instagram.com/drosuengineering"
            ],
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.drosuengineering.com/src/assets/drosu-logo.png"
            },
            "image": "https://www.drosuengineering.com/src/assets/workshop-interior.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })}
        </script>
      )}
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DROSU Engineering",
          "url": "https://www.drosuengineering.com",
          "logo": "https://www.drosuengineering.com/src/assets/drosu-logo.png",
          "description": "Specialiști în modificări performanță și optimizări auto",
          "foundingDate": "2014",
          "numberOfEmployees": "5-10",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+40-726-960-376",
            "contactType": "customer service",
            "availableLanguage": ["Romanian", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Bujorului 5",
            "addressLocality": "Râmnicu Vâlcea",
            "addressRegion": "Vâlcea",
            "postalCode": "240000",
            "addressCountry": "RO"
          }
        })}
      </script>
      
      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
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
              "url": "https://www.drosuengineering.com/src/assets/drosu-logo.png"
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
