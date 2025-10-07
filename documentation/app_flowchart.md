flowchart TD
  A[Start] --> B{User Authenticated}
  B -->|Yes| C[Dashboard Layout]
  B -->|No| D[Sign-In Page]
  D --> E[Auth Logic]
  E --> B
  C --> F[Sidebar Navigation]
  F -->|Navigate to| G[Employee Management]
  G --> H[Employee Details]
  F -->|Navigate to| I[Product Management]
  I --> J[Product Details]
  F -->|Navigate to| K[Kanban Board]
  F -->|Navigate to| L[Settings]
  F -->|Navigate to| M[Profile Page]