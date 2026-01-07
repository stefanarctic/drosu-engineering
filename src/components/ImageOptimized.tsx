import { useState } from 'react';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
}

const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate srcset for responsive images if sizes provided
  const generateSrcSet = (originalSrc: string) => {
    if (!sizes) return undefined;
    
    // For now, return original src
    // In production, you'd want to generate multiple sizes
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-carbon-gray flex items-center justify-center ${className}`}
        style={{ width, height }}
        aria-label={alt}
      >
        <span className="text-steel-gray text-sm">Imagine indisponibilă</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-carbon-gray animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
};

export default ImageOptimized;
