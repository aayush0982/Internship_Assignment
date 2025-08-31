import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./app/lib/session";

const protectedRoutes: string[] = ["/", "/home"];
const publicRoutes: string[] = ["/login", "/signup"];

export async function middleware(req: NextRequest): Promise<NextResponse> {
    const path: string = req.nextUrl.pathname;
    const isProtectedRoutes: boolean = protectedRoutes.includes(path);
    const isPublicRoutes: boolean = publicRoutes.includes(path);
    
    const cookie: string | undefined = req.cookies.get("session")?.value;
    console.log("Raw session cookie:", cookie); 
    
    const session: any = await decrypt(cookie);
    console.log("Decrypted session:", session); 
    
    const nextAuthToken = req.cookies.get("next-auth.session-token")?.value || 
                         req.cookies.get("__Secure-next-auth.session-token")?.value;
    console.log("NextAuth token:", nextAuthToken);

    const isAuthenticated = session?.userId || nextAuthToken;
    
    if (isProtectedRoutes && !isAuthenticated) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
    
    if (isPublicRoutes && isAuthenticated) {
        return NextResponse.redirect(new URL('/home', req.nextUrl));
    }
    
    return NextResponse.next();
}