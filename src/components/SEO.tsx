import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  schema?: string;
}

export default function SEO({ title, description, keywords, ogImage, ogImageAlt, schema }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Update title
    const fullTitle = title === 'Home' 
      ? 'Health Alliance SoCal | Specialized Psychiatric Care'
      : `${title} | Health Alliance SoCal`;
      
    document.title = fullTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.setAttribute('content', fullTitle);
      document.head.appendChild(meta);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.setAttribute('content', description);
      document.head.appendChild(meta);
    }
    
    // Open Graph Image
    const imageUrl = ogImage || '/og-image.png';
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) ogImageTag.setAttribute('content', imageUrl);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.setAttribute('content', imageUrl);
      document.head.appendChild(meta);
    }

    // Open Graph Image Alt Text
    if (ogImageAlt) {
      const ogImageAltTag = document.querySelector('meta[property="og:image:alt"]');
      if (ogImageAltTag) ogImageAltTag.setAttribute('content', ogImageAlt);
      else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image:alt');
        meta.setAttribute('content', ogImageAlt);
        document.head.appendChild(meta);
      }
    }

    // Open Graph URL
    const canonicalUrl = `https://www.healthalliancesocal.com${location.pathname === '/' ? '' : location.pathname}`;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      meta.setAttribute('content', canonicalUrl);
      document.head.appendChild(meta);
    }

    // Open Graph Type
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', 'website');
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.setAttribute('content', 'website');
      document.head.appendChild(meta);
    }

    // Open Graph Locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', 'en_US');
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.setAttribute('content', 'en_US');
      document.head.appendChild(meta);
    }
    
    // Twitter Card Tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image');
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:card');
      meta.setAttribute('content', 'summary_large_image');
      document.head.appendChild(meta);
    }
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:title');
      meta.setAttribute('content', fullTitle);
      document.head.appendChild(meta);
    }
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:description');
      meta.setAttribute('content', description);
      document.head.appendChild(meta);
    }
    const twitterImg = document.querySelector('meta[name="twitter:image"]');
    if (twitterImg) twitterImg.setAttribute('content', imageUrl);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:image');
      meta.setAttribute('content', imageUrl);
      document.head.appendChild(meta);
    }
    
    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const url = `https://www.healthalliancesocal.com${location.pathname === '/' ? '' : location.pathname}`;
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }

    // Update JSON-LD Schema if provided
    if (schema) {
      let schemaTag = document.querySelector('script[id="page-schema-ld"]');
      if (schemaTag) {
        schemaTag.textContent = schema;
      } else {
        schemaTag = document.createElement('script');
        schemaTag.setAttribute('id', 'page-schema-ld');
        schemaTag.setAttribute('type', 'application/ld+json');
        schemaTag.textContent = schema;
        document.head.appendChild(schemaTag);
      }
    }
  }, [title, description, keywords, ogImage, ogImageAlt, schema, location.pathname]);

  return null;
}
