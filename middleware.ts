import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'



export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname // relative path

    

    // Manage route protection
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/login')

    const sensitiveRoutes = ['/addis-hub']

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/addis-hub', req.url))
      }

      return null
    }

    if (
      !isAuth &&
      sensitiveRoutes.some((route) => pathname.startsWith(route))
    ) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/', '/login', '/addis-hub/:path*', '/api/:path*'],
}