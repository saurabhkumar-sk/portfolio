export interface ApiService {
  id: string;
  name: string;
  version: string;
  description: string;
  techStack: string[];
  categories: string[];
  status: "live" | "development";
  authType: string;
  responseFormat: string;
  deploymentStatus: string;
  features: string[];
  apiDocsUrl?: string;
  liveUrl?: string;
}

export const apiServicesData: ApiService[] = [
  {
    id: "vendor_management_api",
    name: "Vendor Management API",
    version: "v1.0.0",
    description: "A production-ready backend built with Python and FastAPI for a multi-vendor marketplace. It provides vendor authentication, product management, order processing, wallet management, analytics, and admin operations.",
    techStack: ["Python", "FastAPI", "MongoDB", "JWT", "Swagger / OpenAPI"],
    categories: ["Backend", "Python", "FastAPI", "REST API", "Authentication", "Database"],
    status: "live",
    authType: "JWT Bearer Token",
    responseFormat: "JSON (RFC 8259)",
    deploymentStatus: "Live on Render",
    features: [
      "Vendor Authentication & JWT Login",
      "CRUD Operations for Products & Categories",
      "Order & Wallet Management Streams",
      "Sales Analytics Dashboard APIs",
      "Multipart File Upload with Validation",
      "Dynamic Pagination, Filtering & Search",
      "Centralized Error Handling Schema",
      "Interactive Swagger/OpenAPI Documentation"
    ],
    apiDocsUrl: "https://vendor-api-python.onrender.com/docs",
    liveUrl: "https://vendor-api-python.onrender.com"
  }
];
