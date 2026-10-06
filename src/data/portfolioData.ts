import type { PortfolioData, GithubRepo } from '../types/portfolio';

export const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    name: "TEDDY SETIAWAN",
    role: "Backend Engineer",
    location: "Jakarta, Indonesia",
    phone: "+6289638947001",
    email: "teddystwn48@gmail.com",
    github: "github.com/teddys48",
    githubUrl: "https://github.com/teddys48",
    linkedinUrl: "https://id.linkedin.com/in/teddy-setiawan-58aa09229",
    summary: "Backend Engineer with 4+ years of experience building backend services and RESTful APIs using Go and Node.js. Experienced in designing scalable systems, SAP integration, CI/CD automation, Docker-based deployment, and production observability using Grafana, Loki, and Prometheus. Focused on building reliable and maintainable software systems."
  },
  experiences: [
    {
      id: "exp-1",
      role: "Backend Engineer",
      company: "PT Nutech Integrasi",
      location: "Jakarta, Indonesia",
      period: "February 2022 – Present",
      highlights: [
        "Developed and maintained RESTful APIs using Go (Fiber) and Node.js for internal enterprise applications.",
        "Designed reusable backend architecture and project boilerplates adopted across multiple projects.",
        "Integrated backend services with SAP to synchronize enterprise business data.",
        "Built and maintained CI/CD pipelines to automate deployment and reduce manual release effort.",
        "Implemented centralized logging using Grafana, Loki, and Promtail for production monitoring.",
        "Configured monitoring alerts through Grafana to improve incident response.",
        "Developed backend modules using Laravel PHP for legacy systems.",
        "Worked with PostgreSQL, MySQL, Redis, RabbitMQ, Docker, and Git in daily development."
      ],
      skills: ["Go", "Fiber", "Node.js", "Laravel", "REST API", "SAP Integration", "PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Docker", "CI/CD", "Grafana", "Loki", "Promtail"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Universitas Pakuan",
      degree: "Diploma 3 in Informatics Management",
      period: "2018 – 2021",
      gpa: "3.69",
      details: ["Specialized in Web Programming, Database Management Systems, and Software Engineering."]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Junior Web Developer",
      issuer: "BNSP (National Agency for Professional Certification)",
      year: "2021"
    },
    {
      id: "cert-2",
      title: "Google Cybersecurity Specialization",
      issuer: "Coursera",
      year: "2024"
    }
  ],
  skillCategories: [
    {
      id: "cat-1",
      category: "Programming Languages",
      skills: ["Go", "JavaScript", "PHP"]
    },
    {
      id: "cat-2",
      category: "Backend Development",
      skills: ["Go (Fiber)", "Node.js", "Laravel", "REST API", "WebSocket", "RabbitMQ"]
    },
    {
      id: "cat-3",
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
      id: "cat-4",
      category: "DevOps & Infrastructure",
      skills: ["Docker", "Git", "CI/CD", "Grafana", "Prometheus", "Loki", "Promtail", "Linux", "Docker Compose", "Caddy", "Tailscale"]
    },
    {
      id: "cat-5",
      category: "Enterprise Systems",
      skills: ["SAP Integration", "Business Data Synchronization"]
    }
  ]
};

// Fallback actual projects from https://github.com/teddys48
export const fallbackGithubRepos: GithubRepo[] = [
  {
    id: 101,
    name: "go-fiber",
    full_name: "teddys48/go-fiber",
    html_url: "https://github.com/teddys48/go-fiber",
    description: "Production-ready Go RESTful API boilerplate utilizing Fiber v2, PostgreSQL, GORM, JWT auth, and Dockerized deployment.",
    language: "Go",
    stargazers_count: 5,
    forks_count: 2,
    topics: ["go", "golang", "fiber", "rest-api", "docker", "postgresql"],
    updated_at: "2024-09-18T10:20:00Z",
    clone_url: "https://github.com/teddys48/go-fiber.git"
  },
  {
    id: 102,
    name: "Go-Microservices",
    full_name: "teddys48/Go-Microservices",
    html_url: "https://github.com/teddys48/Go-Microservices",
    description: "Event-driven distributed microservices architecture in Go utilizing gRPC, RabbitMQ message brokers, and Docker Compose.",
    language: "Go",
    stargazers_count: 4,
    forks_count: 1,
    topics: ["go", "microservices", "rabbitmq", "grpc", "distributed-systems"],
    updated_at: "2024-08-12T14:45:00Z",
    clone_url: "https://github.com/teddys48/Go-Microservices.git"
  },
  {
    id: 103,
    name: "docksight",
    full_name: "teddys48/docksight",
    html_url: "https://github.com/teddys48/docksight",
    description: "Docker container and host monitoring utility with automated health inspections, CPU/memory metric aggregations, and webhook notifications.",
    language: "TypeScript",
    stargazers_count: 7,
    forks_count: 2,
    topics: ["docker", "monitoring", "devops", "observability", "containers"],
    updated_at: "2024-10-01T08:15:00Z",
    clone_url: "https://github.com/teddys48/docksight.git"
  },
  {
    id: 104,
    name: "logly",
    full_name: "teddys48/logly",
    html_url: "https://github.com/teddys48/logly",
    description: "Structured logging and trace exporter designed for Grafana, Loki, and Promtail integration across Go and Node.js microservices.",
    language: "Go",
    stargazers_count: 6,
    forks_count: 1,
    topics: ["logging", "loki", "grafana", "observability", "golang"],
    updated_at: "2024-09-25T11:30:00Z",
    clone_url: "https://github.com/teddys48/logly.git"
  },
  {
    id: 105,
    name: "rabbitmq-consumer",
    full_name: "teddys48/rabbitmq-consumer",
    html_url: "https://github.com/teddys48/rabbitmq-consumer",
    description: "Robust asynchronous message queue consumer handling dead-letter exchange (DLX), exponential backoff retries, and high-throughput workloads.",
    language: "Go",
    stargazers_count: 3,
    forks_count: 1,
    topics: ["rabbitmq", "amqp", "message-queue", "worker", "golang"],
    updated_at: "2024-07-20T16:10:00Z",
    clone_url: "https://github.com/teddys48/rabbitmq-consumer.git"
  },
  {
    id: 106,
    name: "rabbitmq-producer",
    full_name: "teddys48/rabbitmq-producer",
    html_url: "https://github.com/teddys48/rabbitmq-producer",
    description: "High-performance transactional event publisher to RabbitMQ with connection pool management and message persistence guarantees.",
    language: "Go",
    stargazers_count: 3,
    forks_count: 0,
    topics: ["rabbitmq", "golang", "event-driven", "backend"],
    updated_at: "2024-07-19T09:40:00Z",
    clone_url: "https://github.com/teddys48/rabbitmq-producer.git"
  },
  {
    id: 107,
    name: "bun-elysiajs",
    full_name: "teddys48/bun-elysiajs",
    html_url: "https://github.com/teddys48/bun-elysiajs",
    description: "Ultra-fast REST API boilerplate with Bun runtime, Elysia.js, TypeBox schema validation, Swagger documentation, and PostgreSQL.",
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 1,
    topics: ["bun", "elysiajs", "typescript", "swagger", "api"],
    updated_at: "2024-09-10T13:25:00Z",
    clone_url: "https://github.com/teddys48/bun-elysiajs.git"
  },
  {
    id: 108,
    name: "caddio",
    full_name: "teddys48/caddio",
    html_url: "https://github.com/teddys48/caddio",
    description: "Automated reverse-proxy and SSL configuration generator powered by Caddy Server and Docker for containerized services.",
    language: "Go",
    stargazers_count: 4,
    forks_count: 1,
    topics: ["caddy", "reverse-proxy", "docker", "ssl", "devops"],
    updated_at: "2024-06-15T18:05:00Z",
    clone_url: "https://github.com/teddys48/caddio.git"
  },
  {
    id: 109,
    name: "rust-axum-sqlx",
    full_name: "teddys48/rust-axum-sqlx",
    html_url: "https://github.com/teddys48/rust-axum-sqlx",
    description: "Blazing fast asynchronous backend service built with Rust, Axum web framework, SQLx, and PostgreSQL connection pooling.",
    language: "Rust",
    stargazers_count: 6,
    forks_count: 1,
    topics: ["rust", "axum", "sqlx", "postgres", "tokio"],
    updated_at: "2024-08-30T15:00:00Z",
    clone_url: "https://github.com/teddys48/rust-axum-sqlx.git"
  },
  {
    id: 110,
    name: "Object-Storage---MinIO",
    full_name: "teddys48/Object-Storage---MinIO",
    html_url: "https://github.com/teddys48/Object-Storage---MinIO",
    description: "S3-compatible object storage service implementation with MinIO, presigned URLs, chunked multi-part file uploads, and access controls.",
    language: "JavaScript",
    stargazers_count: 2,
    forks_count: 0,
    topics: ["minio", "s3", "storage", "nodejs", "aws-sdk"],
    updated_at: "2024-05-11T12:00:00Z",
    clone_url: "https://github.com/teddys48/Object-Storage---MinIO.git"
  },
  {
    id: 111,
    name: "laravel-crud",
    full_name: "teddys48/laravel-crud",
    html_url: "https://github.com/teddys48/laravel-crud",
    description: "Enterprise backend service module developed in Laravel PHP with repository patterns, database migrations, and MySQL integration.",
    language: "PHP",
    stargazers_count: 2,
    forks_count: 0,
    topics: ["laravel", "php", "mysql", "repository-pattern", "api"],
    updated_at: "2024-04-05T10:10:00Z",
    clone_url: "https://github.com/teddys48/laravel-crud.git"
  },
  {
    id: 112,
    name: "neobrutalism-landing-page",
    full_name: "teddys48/neobrutalism-landing-page",
    html_url: "https://github.com/teddys48/neobrutalism-landing-page",
    description: "Extreme neo-brutalist responsive interface prototype with high contrast, offset hard shadows, and bold typography.",
    language: "TypeScript",
    stargazers_count: 8,
    forks_count: 3,
    topics: ["neobrutalism", "ui-ux", "tailwindcss", "svelte"],
    updated_at: "2024-10-05T17:40:00Z",
    clone_url: "https://github.com/teddys48/neobrutalism-landing-page.git"
  }
];
