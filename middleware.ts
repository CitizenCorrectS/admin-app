import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/route";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const user = req.auth?.user;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }

    // Role-based routing
    if (isDashboardRoute && user?.role !== "ADMIN") {
        return Response.redirect(new URL("/client", nextUrl));
    }

    return null;
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
