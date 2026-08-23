export default async function middleware(request) {
    const userAgent = request.headers.get('user-agent') || '';
    const botPattern = /bot|crawl|slifer|whatsapp|facebookexternalhit|twitterbot|linkedinbot|telegrambot|pinterest/i;

    if (!botPattern.test(userAgent)) {
        return;
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    let title, description, image, canonical, isHome = false;

    if (pathname === '/' || pathname === '') {
        isHome = true;
        title = 'CRJ Tierras De Badajoz | Cruz Roja Juventud en Extremadura';
        description = '¡Si formas parte, toma parte! Descubre nuestros proyectos y participa en las actividades de CRJ en Badajoz.';
        image = 'https://crj-ext.vercel.app/og-image.png';
        canonical = 'https://crj-ext.vercel.app/';
    } else {
        const match = pathname.match(/\/(apuntarme|proyecto)\/([a-zA-Z0-9-]+)/);
        const slug = match ? match[2] : null;

        if (!slug) {
            return;
        }

        const formattedTitle = slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const isForm = pathname.includes('/apuntarme/');
        title = isForm 
            ? `Apuntarse a ${formattedTitle} | Cruz Roja Juventud Badajoz`
            : `${formattedTitle} | Cruz Roja Juventud Badajoz`;
            
        description = isForm
            ? `Apúntate al proyecto ${formattedTitle} de Cruz Roja Juventud en Badajoz.`
            : `Consulta toda la información y participa en el proyecto ${formattedTitle} de Cruz Roja Juventud en Badajoz.`;
            
        image = `https://crj-ext.vercel.app/og/${slug}.png`;
        canonical = `https://crj-ext.vercel.app${pathname}`;
    }

    const html = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>${title}</title>
        <meta name="description" content="${description}">
        <link rel="canonical" href="${canonical}" />

        <!-- Open Graph -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${canonical}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${image}">
        <meta property="og:image:secure_url" content="${image}">
        <meta property="og:image:type" content="image/png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:locale" content="es_ES">
        <meta property="og:site_name" content="CRJ Tierras de Badajoz">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="${canonical}">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:image" content="${image}">
    </head>
    <body>
        <h1>${title}</h1>
        <p>Cargando contenido...</p>
    </body>
    </html>`;

    return new Response(html, {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
}

export const config = {
    matcher: ['/', '/apuntarme/:path*', '/proyecto/:path*'],
};