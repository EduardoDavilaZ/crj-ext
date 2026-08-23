import { NextResponse } from 'next/server';

export function middleware(request) {
    const userAgent = request.headers.get('user-agent') || '';
    
    const botPattern = /bot|crawl|slifer|whatsapp|facebookexternalhit|twitterbot|linkedinbot|telegrambot|pinterest/i;

    if (!botPattern.test(userAgent)) {
        return NextResponse.next();
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    const match = pathname.match(/\/(apuntarme|proyecto)\/([a-zA-Z0-9-]+)/);
    const slug = match ? match[2] : null;

    if (!slug) {
        return NextResponse.next();
    }

    const formattedTitle = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const title = pathname.includes('/apuntarme/') 
        ? `Apuntarse a ${formattedTitle} | Cruz Roja Juventud Badajoz`
        : `${formattedTitle} | Cruz Roja Juventud Badajoz`;
        
    const description = `Consulta toda la información y participa en el proyecto ${formattedTitle} de Cruz Roja Juventud en Badajoz.`;
    const image = `https://crj-ext.vercel.app/og/${slug}.png`;

    const html = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <meta name="description" content="${description}">
        
        <!-- Open Graph -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://crj-ext.vercel.app${pathname}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${image}">
        
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:image" content="${image}">
    </head>
    <body>
        <p>Cargando...</p>
    </body>
    </html>`;

    return new NextResponse(html, {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
}

export const config = {
    matcher: ['/apuntarme/:path*', '/proyecto/:path*'],
};