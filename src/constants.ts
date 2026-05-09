import { 
  Network, 
  ShieldCheck, 
  Layout, 
  Terminal, 
  Cloud, 
  Database, 
  Cpu, 
  Wifi, 
  Settings, 
  Smartphone, 
  LifeBuoy,
  Code,
  Globe,
  Lock,
  Layers,
  Server,
  Zap,
  CheckCircle2,
  Calendar,
  GraduationCap,
  Award,
  Target,
  Users
} from 'lucide-react';

export const SKILLS = [
  { name: "Networking", icon: Network, category: "Infrastructure" },
  { name: "Cybersecurity", icon: ShieldCheck, category: "Security" },
  { name: "Web Development", icon: Layout, category: "Development" },
  { name: "System Admin", icon: Terminal, category: "Infrastructure" },
  { name: "Cloud Computing", icon: Cloud, category: "Cloud" },
  { name: "Databases", icon: Database, category: "Data" },
  { name: "AI & ML", icon: Cpu, category: "Advanced" },
  { name: "IoT", icon: Wifi, category: "Advanced" },
  { name: "DevOps", icon: Settings, category: "DevOps" },
  { name: "Mobile Development", icon: Smartphone, category: "Development" },
  { name: "IT Support", icon: LifeBuoy, category: "Support" },
];

export const EDUCATION = [
  {
    degree: "Bachelor’s Degree in Information Technology",
    institution: "University of Kigali (UoK)",
    period: "2023 - 2026",
    description: "Focused on core IT disciplines including systems analysis, network security, and database management."
  }
];

export const PROJECTS = [
  {
    id: "1",
    title: "Smart Healthcare Appointment System",
    description: "A comprehensive platform connecting patients with healthcare providers, featuring real-time scheduling and secure medical records.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "2",
    title: "IoT Water Distribution Monitoring System",
    description: "Real-time monitoring of water flow and quality using IoT sensors, designed to prevent leakage and ensure optimal distribution.",
    technologies: ["Arduino", "Python", "MQTT", "React Dashboard"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "3",
    title: "Taxi Booking System",
    description: "Mobile-responsive web application for taxi dispatch, featuring driver tracking, fare estimation, and secure payment integration.",
    technologies: ["Next.js", "Firebase", "Google Maps API", "Stripe"],
    image: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "4",
    title: "Student Attendance Management System",
    description: "Automated attendance tracking using QR codes and biometrics to streamline classroom management and reporting.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "5",
    title: "E-commerce Platform",
    description: "A modern storefront for digital and physical products with advanced search, cart functionality, and user reviews.",
    technologies: ["React", "Redux", "PostgreSQL", "Express"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "6",
    title: "Networking Infrastructure Simulation",
    description: "Virtual simulation of a complex corporate network using Cisco Packet Tracer, demonstrating VLANs, OSPF, and firewall rules.",
    technologies: ["Cisco Packet Tracer", "GNS3", "Network Security"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const SERVICES = [
  {
    title: "Network Design & Security",
    description: "Designing robust, secure network infrastructures optimized for performance and scalability.",
    icon: Globe
  },
  {
    title: "Full-Stack Development",
    description: "Building responsive and dynamic web applications using modern frameworks and performance best practices.",
    icon: Code
  },
  {
    title: "Cybersecurity Audits",
    description: "Identifying vulnerabilities and implementing defense-in-depth strategies to protect sensitive data.",
    icon: Lock
  }
];

export const CERTIFICATIONS = [
  { name: "Ingazi", issuer: "Ingazi" },
  { name: "CompTIA Security+", issuer: "CompTIA" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" }
];

export const FAQS = [
  {
    question: "What is your primary area of expertise?",
    answer: "My primary expertise lies in bridging the gap between Networking/Cybersecurity and Web Development, ensuring applications are not only functional but also secure and highly available."
  },
  {
    question: "Do you offer IT consulting for small businesses?",
    answer: "Yes, I provide consulting on network setup, cybersecurity best practices, and digital transformation for small to medium-sized enterprises."
  },
  {
    question: "Are you available for freelance projects?",
    answer: "I am currently open to collaborations on interesting projects in the IoT, Web, and Networking space."
  }
];
