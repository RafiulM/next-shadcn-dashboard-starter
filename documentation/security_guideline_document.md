# Security Guidelines for `next-shadcn-dashboard-starter`

This document outlines best practices and recommendations to secure a Next.js dashboard application built with the `shadcn/ui` component library and Tailwind CSS. It follows industry-recognized security principles—Security by Design, Least Privilege, Defense in Depth, and Fail Securely—to help you embed robust protections throughout your development lifecycle.

---

## 1. Secure Defaults & Environment

- **Use Environment Variables Securely**
  - Store secrets (e.g., JWT signing keys, OAuth credentials) in a secure vault or environment variables—not in source code or checked-in files.
  - Provide clear `.env.example` with only variable names, no values.
- **Node.js and Next.js Config**
  - Disable Next.js dev features (`reactStrictMode`, `debug`) in production.
  - Set `NEXTAUTH_URL` (or your auth library’s callback URL) to your production domain.
- **Harden TLS**
  - Terminate HTTPS at a reverse proxy or CDN. Enforce TLS 1.2+ with strong cipher suites.
  - Redirect all HTTP traffic to HTTPS.

## 2. Authentication & Access Control

### 2.1 Authentication Flow

- **Strong Credentials**
  - Enforce minimum password length (≥ 8 characters) with complexity (uppercase, lowercase, digit, special character).
  - Hash passwords with Argon2 or bcrypt using a unique salt per password.
- **Secure Session Management**
  - If using cookies, set `Secure`, `HttpOnly`, and `SameSite=Strict`.
  - Generate unpredictable session identifiers; rotate them on privilege changes.
  - Implement idle-time and absolute session timeouts.
- **JWT Best Practices**
  - Use `HS256` or `RS256` with private keys; never use `alg: none`.
  - Always verify the signature and expiration (`exp` claim).  
  - Store tokens in secure, HttpOnly cookies or in-memory storage—avoid `localStorage`.
- **Protecting Routes**
  - Use Next.js middleware (`middleware.ts`) to guard `/dashboard`, `/api/*` routes.
  - Return `401 Unauthorized` or redirect to sign-in when authentication fails.

### 2.2 Authorization & RBAC

- Define roles (e.g., `admin`, `editor`, `viewer`) centrally, for example in a `roles.ts` file.
- Perform server-side checks in API routes and page-level `getServerSideProps` or server components:
  - Don’t rely on client-side flags alone.
  - Validate the user’s role/permissions before reading or mutating data.

## 3. Input Validation & Output Encoding

- **Schema Validation**
  - Use Zod (or Joi) in `lib/validations.ts` to validate all incoming request bodies, query parameters, and form data.
  - Reject requests with unrecognized fields or invalid types.
- **Prevent Injection**
  - Use parameterized queries or a vetted ORM (e.g., Prisma) for database access.
  - Sanitize user-supplied values before interpolating into templates or SQL/NoSQL queries.
- **Cross-Site Scripting (XSS)**
  - Encode all dynamic content in React (by default React escapes, but beware `dangerouslySetInnerHTML`).
  - Implement a Content Security Policy (CSP) via HTTP header:  
    ```
    Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';
    ```
- **Cross-Site Request Forgery (CSRF)**
  - For state-changing API routes, require anti-CSRF tokens (e.g., using the `next-csrf` library or built-in NextAuth.js CSRF protection).

## 4. Data Protection & Privacy

- **Encryption at Rest & in Transit**
  - Ensure all connections to databases and external services use TLS.
  - If storing sensitive fields (PII), consider field-level encryption or database encryption features.
- **Logging & Error Handling**
  - Never log sensitive data (passwords, tokens, PII).
  - Catch errors in API routes and return generic messages (e.g., "Internal Server Error"). Log the full stack trace only to a secure, access-controlled log provider.
- **Privacy Compliance**
  - Implement data retention policies: purge or anonymize PII per GDPR/CCPA requirements.

## 5. API & Service Security

- **HTTPS Only**
  - All API endpoints should reject non-HTTPS requests.
- **Rate Limiting & Throttling**
  - Implement per-IP or per-user rate limiting on critical endpoints (sign-in, sign-up, password reset).
  - Consider services like Cloudflare, AWS API Gateway throttling, or middleware (e.g., `express-rate-limit`).
- **CORS Configuration**
  - Allow only trusted origins in `next.config.js`:
    ```js
    module.exports = {
      async headers() {
        return [ {
          source: '/api/:path*',
          headers: [ { key: 'Access-Control-Allow-Origin', value: 'https://your-domain.com' } ]
        }]
      }
    }
    ```
- **Minimum Data Exposure**
  - In API responses, return only the fields necessary for the client. Avoid returning internal identifiers or hashed tokens.

## 6. Web Application Security Hygiene

- **HTTP Security Headers** (set via Next.js custom server or headers config):
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
  - `X-Frame-Options: DENY` or use CSP `frame-ancestors 'none'`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: no-referrer-when-downgrade`
- **Secure Cookies**
  - For any auth or session cookies, always set `Secure; HttpOnly; SameSite=Strict`.
- **Subresource Integrity (SRI)**
  - If pulling scripts/styles from CDNs, include `integrity` and `crossorigin` attributes.
- **Disable Client-Side Debug**
  - Remove `__DEBUG__` flags, verbose logging, and source maps in production builds.

## 7. Dependency & Infrastructure Management

- **Lockfile & Auditing**
  - Commit `package-lock.json` or `yarn.lock`. Run `npm audit` or `yarn audit` regularly.
- **Minimal Footprint**
  - Remove unused packages. Vet new dependencies for security health (use tools like `Snyk` or `Dependabot`).
- **CI/CD Security**
  - In CI pipelines, fail builds on high-severity vulnerabilities.
  - Secure your pipeline’s secrets store (e.g., GitHub Actions Secrets, GitLab CI Variables).
- **Server Hardening**
  - Only open necessary ports (e.g., 80/443).
  - Keep the host OS, Node.js, and dependencies up to date with security patches.

## 8. Monitoring & Incident Response

- **Logging & Alerts**
  - Centralize logs (e.g., Datadog, ELK) and monitor for repeated authentication failures, unusual API usage patterns, and rate limit breaches.
- **Error Reporting**
  - Use an error-tracking tool (e.g., Sentry) to catch exceptions in production, with PII redaction enabled.
- **Incident Plan**
  - Document steps for triage, containment, and recovery. Include contact points for security response.

---

By following these guidelines, your `next-shadcn-dashboard-starter` application will be fortified against common web threats and aligned with best practices for secure, maintainable code. Regularly revisit and update this document as the threat landscape and your application evolve.

*Last reviewed: YYYY-MM-DD*