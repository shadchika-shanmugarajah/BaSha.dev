const projects = [
  {
    title: "Spotify ETL Pipeline with AWS",
    description:
      "Built a complete pipeline using AWS (S3, Glue, Athena, QuickSight) to clean, transform, and visualize Spotify data from Kaggle.",
    icon: "fas fa-stream",
    tags: ["Python", "AWS", "Spark"],
    gradient: "from-pink-500 to-purple-600",
    github: "https://lnkd.in/eyZNQbHn",
    demo:
      "https://www.linkedin.com/posts/activity-7326851382798413825-2alz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGQLgEBh_mjDAmB5CFq44oi0p382PZBINM",
    keywords: ["spotify", "etl", "aws", "pipeline", "data"],
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce application with React frontend, Node.js backend, and mysql database.",
    icon: "fas fa-shopping-cart",
    tags: ["React", "Node.js", "MySQL", "StripeApi"],
    gradient: "from-purple-500 to-blue-600",
    github: "https://github.com/shadchika-shanmugarajah/The-gym-club",
    demo: "https://ppa-project-five.vercel.app",
    keywords: ["e-commerce", "shopping", "react", "node", "fullstack"],
  },
  {
    title: "Power BI Call Center Dashboard",
    description:
      "Built an interactive dashboard to analyze call center performance using Kaggle data, Power Query, and DAX in Power BI.",
    icon: "fas fa-chart-bar",
    tags: ["PowerQuery", "Data cleaning", "Dashboard design"],
    gradient: "from-blue-500 to-teal-600",
    github: "https://lnkd.in/esfJB4hU",
    demo:
      "https://drive.google.com/file/d/1EWaPVelK3Zu5YE0Y5iM7onLadPCp6jKs/view?usp=drive_link",
    keywords: ["power bi", "dashboard", "call center", "data visualization", "dax"],
  },
  {
    title: "Walmart Sales Data ETL Pipeline",
    description:
      "Designed and implemented an ETL pipeline that pulled sales data from Kaggle via API, cleaned and transformed it using Pandas, and loaded it into PostgreSQL.",
    icon: "fas fa-database",
    tags: ["Python", "PostgreSQL", "ETL Pipeline", "Kaggle API"],
    gradient: "from-teal-500 to-green-600",
    github: "https://github.com/shadchika-shanmugarajah/walmart-sales-ETL",
    demo:
      "https://www.linkedin.com/posts/activity-7321230161062879234-aShq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGQLgEBh_mjDAmB5CFq44oi0p382PZBINM",
    keywords: ["walmart", "sales", "etl", "postgresql", "pandas", "kaggle"],
  },
  {
    title: "Appointment System",
    description:
      "React & Node.js app for booking and viewing appointments using JavaScript-based API and UI.",
    icon: "fas fa-calendar-alt",
    tags: ["React.js", "Node.js", "PostgreSQL", "JavaScript API"],
    gradient: "from-green-500 to-yellow-600",
    github: "https://github.com/shadchika-shanmugarajah/appointment-system.git",
    demo: "https://social-analytics-demo.com",
    keywords: ["appointment", "booking", "react", "node", "schedule"],
  },
  {
    title: "CarCare-Java",
    description:
      "Developed a car repair service platform using Java, PHP, and MySQL to manage bookings, service records, and customer interactions.",
    icon: "fas fa-wifi",
    tags: ["Java", "PHP", "MySQL"],
    gradient: "from-yellow-500 to-orange-600",
    github: "https://github.com/shadchika-shanmugarajah/CarCare-Java.git",
    demo: "https://iot-platform-demo.com",
    keywords: ["carcare", "java", "php", "mysql", "service"],
  },
  {
    title: "Modern Car Sale - Advanced Accounting System",
    subtitle: "NextWave Tech Labs",
    description:
      "A React + Vite + Node + MongoDB platform that manages international car imports, tracks every expense in multiple currencies, and generates clean profit and monthly reports for modern dealerships.",
    icon: "fas fa-car",
    tags: [
      "React (Vite)",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Accounting",
      "Dashboard",
    
    ],
    gradient: "from-gray-900 via-slate-800 to-gray-900",
    github: "https://github.com/shadchika-shanmugarajah/carsale_new",
    demo: "https://github.com/shadchika-shanmugarajah/carsale_new",
    status: "In Progress",
    keywords: [
      "car sale",
      "modern car sale",
      "nextwave",
      "accounting",
      "inventory",
      "react vite",
      "mongodb",
      "node",
      "dashboard",
      "financial reporting",
    ],
    highlights: [
      "Full order lifecycle tracking for global suppliers",
      "Multi-currency expense + profit analytics",
      "Responsive dashboard ready for future API integration",
    ],
  },
  {
    title: "Customer ERP Portal",
    subtitle: "PHP + MySQL CRM",
    description:
      "A PHP-first ERP module hosted on XAMPP that manages customer records, service notes, and billing data with secure CRUD operations and printable views.",
    icon: "fas fa-users",
    tags: ["PHP", "HTML/CSS", "MySQL", "XAMPP", "CRUD"],
    gradient: "from-blue-900 via-slate-800 to-indigo-900",
    github: "https://github.com/shadchika-shanmugarajah/erp_system/tree/main/customer_erp",
    demo: "https://github.com/shadchika-shanmugarajah/erp_system/tree/main/customer_erp",
    keywords: [
      "erp",
      "customer management",
      "php",
      "xampp",
      "mysql",
      "crud",
      "billing",
      "support portal",
    ],
    highlights: [
      "Modular PHP pages for customer intake, updates, and archival",
      "Server-side validation plus printable invoices/receipts",
      "Designed for on-prem deployments on XAMPP + MySQL",
    ],
  },
  {
    title: "Football Database Management System",
    subtitle: "Full-Stack Club Ops Suite",
    description:
      "A React + TypeScript + Tailwind dashboard backed by Node, Express, and PostgreSQL (Drizzle ORM) that centralizes teams, players, matches, referees, and analytics for modern football clubs.",
    icon: "fas fa-futbol",
    tags: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js/Express",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    github: "https://github.com/shadchika-shanmugarajah/football-db-frontend/tree/main",
    demo: "https://github.com/shadchika-shanmugarajah/football-db-frontend/tree/main",
    keywords: [
      "football",
      "soccer",
      "teams",
      "players",
      "matches",
      "referees",
      "dashboard",
      "analytics",
      "postgresql",
      "drizzle",
    ],
    highlights: [
      "Live metrics dashboard with counts, KPIs, and quick actions",
      "CRUD flows for teams, players, matches, and referees plus smart search",
      "Simple HTML demo plus full-stack setup with env-configurable backend",
    ],
  },
];

export default projects;


