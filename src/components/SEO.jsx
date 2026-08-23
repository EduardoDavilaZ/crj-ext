import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://crj-ext.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({
    title,
    description,
    canonical,
    image = DEFAULT_IMAGE,
    noIndex = false,
}) {
    const fullTitle = title.includes('CRJ')
        ? title
        : `${title} | Cruz Roja Juventud Badajoz`;

    return (
        <Helmet>
            <title>{fullTitle}</title>

            <meta name="description" content={description} />
            <meta name="robots" content={noIndex ? 'noindex, follow' : 'index, follow'} />
            <link rel="canonical" href={canonical} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:site_name" content="CRJ Tierras de Badajoz" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}