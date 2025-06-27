import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { adminMiddleware } from './middlewares/admin.middleware';

export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // 🔥 Logique pour les apis Rest
    if (pathname.startsWith('/api/')) {
        // Pas d'i18n pour les APIs
        return NextResponse.next();
    }

    // 🔥 Logique pour les routes admin
    if (pathname.startsWith('/admin')) {
        // Logique spéciale pour admin
        return adminMiddleware(request);
    }

    // i18n pour le reste
    const handleI18nRouting = createMiddleware(routing);
    return handleI18nRouting(request);
}


export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: [
        '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
        '/admin/:path*',
    ]
};