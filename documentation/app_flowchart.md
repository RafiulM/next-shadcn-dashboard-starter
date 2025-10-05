flowchart TD
  Start[Start]
  Start --> AuthCheck{User Authenticated?}
  AuthCheck -->|No| SignIn[Sign In Page]
  AuthCheck -->|Yes| Dashboard[Dashboard Home]
  SignIn -->|New User| SignUp[Sign Up Page]
  SignIn -->|Login Success| AuthCheck
  SignUp -->|Signup Success| AuthCheck
  Dashboard --> ModuleSelect{Choose Module}
  ModuleSelect -->|Employee| EmployeeList[Employee Listing]
  ModuleSelect -->|Kanban| KanbanBoard[Kanban Board]
  ModuleSelect -->|Product| ProductList[Product Listing]
  EmployeeList -->|Select| EmployeeDetail[Employee Details]
  ProductList -->|Select| ProductDetail[Product Details]