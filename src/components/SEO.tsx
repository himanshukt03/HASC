import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEO({ title, description, keywords, ogImage }: SEOProps) {
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
    const url = `https://healthalliancesocal.com${location.pathname === '/' ? '' : location.pathname}`;
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, location.pathname]);

  return null;
}
