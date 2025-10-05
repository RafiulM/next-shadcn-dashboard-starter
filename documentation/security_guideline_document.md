# Security Guidelines for next-shadcn-dashboard-starter

This document outlines recommended security practices for the `next-shadcn-dashboard-starter` repository. It is organized around core security principles—ensuring that your dashboard is built with defense in depth, secure defaults, and least privilege in mind.

---

## 1. Secure Authentication & Authorization

- **Strong Password Storage**  
  • Use a modern hashing algorithm (bcrypt or Argon2) with per-user salts.  
  • Enforce minimum length (e.g., 12 characters), complexity, and optional rotation policies.

- **Session & Token Management**  
  • If using NextAuth.js or custom sessions, configure cookies with `HttpOnly`, `Secure`, `SameSite=Strict` attributes.  
  • Set reasonable idle and absolute timeouts.  
  • Protect against session fixation by regenerating session identifiers after login.

- **JSON Web Tokens (JWT)**  
  • Avoid the `none` algorithm.  
  • Use `HS256` or `RS256` and verify signatures and expiration (`exp`) on each request.  
  • Store secrets in a vault (e.g., AWS Secrets Manager) rather than in code or `.env` files.

- **Role-Based Access Control (RBAC)**  
  • Define roles (e.g., `admin`, `editor`, `viewer`) and enforce server-side checks in every API or server component.  
  • Never rely solely on UI controls for authorization.

- **Multi-Factor Authentication (MFA)**  
  • Consider integrating TOTP or SMS-based second factors for sensitive administrative accounts.

---

## 2. Input Validation & Output Encoding

- **Schema-Based Validation**  
  • Use libraries like Zod or Joi to define and validate all request payloads on the server.  
  • Ensure query parameters, dynamic route segments, and form inputs are sanitized.

- **Prevent Injection**  
  • Use parameterized queries via ORM (e.g., Prisma) or prepared statements—never string-concatenate SQL.  
  • Escape shell commands if using any child-process APIs (avoid if possible).

- **Cross-Site Scripting (XSS)**  
  • Employ context-aware escaping for all user-supplied data in React components (e.g., `dangerouslySetInnerHTML` only with sanitized input).  
  • Implement a strict Content Security Policy (CSP) via HTTP headers.

- **Unvalidated Redirects**  
  • Maintain an allow-list of trusted URLs for any redirects.  
  • Reject or sanitize any external URLs passed as redirect targets.

- **File Uploads** (if applicable)  
  • Validate file type, size, and use server-side virus scanning.  
  • Store uploads outside the public webroot or behind an authenticated proxy.  
  • Normalize and sanitize filenames to prevent path traversal.

---

## 3. Data Protection & Privacy

- **Encryption in Transit & at Rest**  
  • Enforce HTTPS (TLS 1.2+) for all client-to-server communication—redirect HTTP to HTTPS.  
  • Use database-level encryption or disk encryption for sensitive data at rest.

- **Sensitive Data Handling**  
  • Never log PII or credentials.  
  • Mask or redact sensitive fields in logs and error messages.

- **Secure Secrets Management**  
  • Use a secrets manager (Vault, AWS SM) instead of committing `.env` files.  
  • Rotate API keys and secrets regularly.

- **Privacy Compliance**  
  • If handling user PII, document data retention and deletion policies in line with GDPR/CCPA.

---

## 4. API & Service Security

- **Rate Limiting & Throttling**  
  • Implement middleware (e.g., `express-rate-limit` or Vercel edge functions) to guard against brute-force and DoS attacks.

- **CORS Configuration**  
  • Restrict allowed origins to your dashboard’s domain.  
  • Disallow wildcard (`*`) origins for state-changing endpoints.

- **Least-Privileged API Endpoints**  
  • Only expose necessary data fields—never return entire database objects if not required.  
  • Enforce HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) correctly and check permissions server-side.

- **API Versioning**  
  • Prefix API routes with `/api/v1/` (or similar) to allow safe, incremental changes.

---

## 5. Web Application Security Hygiene

- **CSRF Protection**  
  • Use anti-CSRF tokens (built into Next.js or via a library like `csrf`) for all state-changing requests.

- **Security Headers**  
  • **Strict-Transport-Security**: `max-age=63072000; includeSubDomains; preload`  
  • **Content-Security-Policy**: Restrict script and style sources, disallow `unsafe-eval` and inline scripts.  
  • **X-Frame-Options**: `DENY` or `SAMEORIGIN`  
  • **X-Content-Type-Options**: `nosniff`  
  • **Referrer-Policy**: `no-referrer-when-downgrade`

- **Secure Cookies**  
  • Mark all auth/session cookies as `Secure` and `HttpOnly`.  
  • Use `SameSite=Strict` or `Lax` based on application flows.

- **Subresource Integrity (SRI)**  
  • Apply SRI hashes to any third-party scripts or styles loaded from CDNs.

---

## 6. Infrastructure & Deployment Security

- **Server Hardening**  
  • Disable unused ports and services.  
  • Regularly apply OS and package updates (use Dependabot or Renovate for dependency updates).

- **Environment Separation**  
  • Maintain separate environments (dev, staging, prod).  
  • Apply the principle of least privilege to each—avoid using production credentials in lower environments.

- **TLS Configuration**  
  • Disable SSLv3/TLS 1.0/1.1.  
  • Use strong cipher suites and enable forward secrecy.

- **CI/CD Security**  
  • Store pipeline secrets in a vault, not in source.  
  • Require code reviews and automated security scans before merging.  
  • Disable debug endpoints in production builds.

---

## 7. Dependency Management

- **Choose Trusted Libraries**  
  • Vet third-party packages for active maintenance and a clean security record.

- **Lockfiles & Audit**  
  • Commit `package-lock.json` or `yarn.lock`.  
  • Integrate `npm audit` or SCA tools in CI to detect vulnerabilities.

- **Minimize Attack Surface**  
  • Only install necessary dependencies—avoid large, monolithic packages.

- **Regular Updates**  
  • Schedule periodic updates of dependencies and review changelogs for breaking or security-critical changes.

---

## 8. Ongoing Monitoring & Testing

- **Security Testing**  
  • Implement automated static analysis (ESLint security plugins) and dynamic scans (OWASP ZAP, Snyk).  
  • Include unit, integration, and E2E tests covering authentication, authorization, and data flows.

- **Logging & Alerting**  
  • Log failed logins, rate limit hits, and server errors.  
  • Forward logs to a SIEM or log aggregator with alerting on anomalous patterns.

- **Incident Response Plan**  
  • Define procedures for data breaches, vulnerability disclosures, and recovery steps.

---

By integrating these security controls from design through deployment, `next-shadcn-dashboard-starter` will offer a robust foundation for any production-grade dashboard application. Continuously revisit and refine these practices as the codebase evolves and new threats emerge.
