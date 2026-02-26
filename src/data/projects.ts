import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "ParlorPal",
    href: "/projects",
    tags: ["Django", "Vertex AI", "Gemini API", "Cloudinary", "Gmail SMTP"],
    image: {
      LIGHT: "/images/projects/images/parlorpalHome.png",
      DARK: "/images/projects/images/parlorpalHome.png",
    },
  },
  {
    index: 1,
    title: "CivicScan",
    href: "/projects",
    tags: ["Django", "Leaflet.js", "DBSCAN", "Cloudinary", "Geospatial", "ML"],
    image: {
      LIGHT: "/images/projects/images/civicscanHome.png",
      DARK: "/images/projects/images/civicscanHome.png",
    },
  },
  {
    index: 2,
    title: "DDoS Detection",
    href: "/projects",
    tags: ["Django", "Machine Learning", "Gemini AI", "AbuseIPDB", "K-Means"],
    image: {
      LIGHT: "/images/projects/images/ddos1.png",
      DARK: "/images/projects/images/ddos1.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "ParlorPal - AI-Powered Growth Engine",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/projects/images/parlorpalHome.png"],
    description: [
      "Top 10 finalist at TeXpedition 2025 showcased at Epsilon India, Bengaluru.",
      "Full-stack Django app using Vertex AI, Cohere & Gemini APIs for AI content and chatbot features.",
      "Integrated auth system with email verification, festival email alerts via Gmail SMTP.",
      "Business profiles with Cloudinary image storage, and multilingual AI content generation.",
    ],
    sourceCodeHref: "https://github.com/GirishInTech/ParlorPal",
  },
  {
    name: "CivicScan - Geospatial Cleanliness System",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/images/civicscanHome.png"],
    description: [
      "Django web app to report cleanliness issues with location, image upload, and status classification.",
      "Uses Leaflet.js for interactive city map, Cloudinary for storage, and reverse geocoding for addresses.",
      "Applied DBSCAN clustering to identify and visualize real-time cleanliness hotspots in Bengaluru.",
    ],
    sourceCodeHref: "https://github.com/GirishInTech/CivicScan",
    liveWebsiteHref: "https://civicscan.onrender.com/",
  },
  {
    name: "Real-Time DDoS Detection using AI",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/images/ddos1.png"],
    description: [
      "Django full-stack app for real-time DDoS detection using ML (K-Means clustering, Polynomial regression).",
      "Integrated Google Gemini AI for threat pattern detection and NLP-based cybersecurity chatbot.",
      "Used AbuseIPDB API for IP scoring, geolocation, auto blocking with live dashboard and AI insights.",
    ],
    sourceCodeHref: "https://github.com/GirishInTech/DDoS-Detection",
  },
  {
    name: "PizzaSalesML - Sales Prediction & Clustering",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: ["/images/projects/stockPredictor.webp"],
    description: [
      "Streamlit dashboard for pizza sales using EDA, K-Means clustering, and Decision Tree classification.",
      "Segmented customers, predicted categories, and visualized insights with WordClouds and summaries.",
      "Delivered business-focused ML solutions with clean, interactive UI.",
    ],
    sourceCodeHref: "https://github.com/GirishInTech/PizzaSalesML",
    liveWebsiteHref:
      "https://pizza-sales-analysis-bpdcfnwcsmgqg8vbnfhuq7.streamlit.app/",
  },
];
