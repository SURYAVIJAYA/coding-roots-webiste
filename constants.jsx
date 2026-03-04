
import React from 'react';
import {
  Code2,
  Layout,
  Smartphone,
  Cpu,
  BrainCircuit,
  Palette,
  Terminal,
  Layers,
  Globe,
  Database,
  Cloud,
  Box
} from 'lucide-react';
// type imports removed for plain JS

export const COURSES = [
  {
    id: 'ui-ux',
    title: 'UI/UX Designing',
    description: 'Master the art of user-centric design with modern tools and methodologies.',
    icon: 'Palette',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Figma & Adobe XD'],
    thumbnail: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'graphic',
    title: 'Graphic Designing',
    description: 'Visual communication at its best. From branding to digital marketing assets.',
    icon: 'Layout',
    features: ['Branding', 'Typography', 'Logo Design', 'Photoshop & Illustrator'],
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'web-dev',
    title: 'Web & Web App Development',
    description: 'Build scalable, high-performance web applications using MERN & Next.js.',
    icon: 'Globe',
    features: ['Frontend', 'Backend', 'API Integration', 'Cloud Deployment'],
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Crafting seamless native and cross-platform mobile experiences.',
    icon: 'Smartphone',
    features: ['React Native', 'Flutter', 'iOS & Android', 'Store Submission'],
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    description: 'Intelligent automation systems powered by cutting-edge LLMs and AI.',
    icon: 'BrainCircuit',
    features: ['LLMs', 'Chatbots', 'Automation', 'LangChain'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    description: 'Connecting devices to create smart, data-driven ecosystems.',
    icon: 'Cpu',
    features: ['Sensor Integration', 'Hardware Design', 'Connectivity', 'Real-time Monitoring'],
    thumbnail: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS = [
  {
    id: 'enterprise-ecommerce',
    title: 'Enterprise E-Commerce',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'A high-scale retail platform with real-time inventory.',
    fullDescription: 'This comprehensive enterprise solution handles millions of transactions monthly. It features a custom CMS, real-time inventory tracking across multiple warehouses, and an AI-driven recommendation engine.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    features: ['Multi-vendor support', 'Real-time Analytics', 'Secure Stripe Integration', 'Automated SEO']
  },
  {
    id: 'healthcare-management',
    title: 'HealthCare Management',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800',
    description: 'A cross-platform app for patient records and scheduling.',
    fullDescription: 'Designed for major hospitals, this app facilitates seamless communication between doctors and patients. It includes secure record storage, automated appointment reminders, and teleconsultation features.',
    techStack: ['React Native', 'Firebase', 'Express', 'MongoDB'],
    features: ['HIPAA Compliant', 'Video Consultations', 'Digital Prescriptions', 'Patient Portal']
  },
  {
    id: 'ai-customer-assistant',
    title: 'AI Customer Assistant',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    description: 'LLM-powered automation for customer support.',
    fullDescription: 'An intelligent chatbot capable of handling complex customer inquiries across multiple languages. It uses RAG (Retrieval Augmented Generation) to provide accurate answers based on internal documentation.',
    techStack: ['Python', 'OpenAI API', 'LangChain', 'Vector DB', 'FastAPI'],
    features: ['Multi-lingual support', 'Human Handoff', 'Context Awareness', 'Sentiment Analysis']
  },
  {
    id: 'real-estate-portal',
    title: 'Real Estate Portal',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    description: 'A sleek, performant property listing platform.',
    fullDescription: 'A modern UI/UX focused real estate portal featuring interactive maps, high-resolution 360 virtual tours, and a streamlined lead generation system for agents.',
    techStack: ['React.js', 'Tailwind CSS', 'Mapbox', 'Framer Motion'],
    features: ['Interactive Map Search', '360° Virtual Tours', 'Agent Dashboard', 'Mortgage Calculator']
  },
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced data visualization for financial analytics.',
    fullDescription: 'A complex data visualization dashboard that simplifies high-frequency financial data into actionable insights. Designed with a focus on accessibility and performance.',
    techStack: ['Figma', 'D3.js', 'React.js', 'TypeScript'],
    features: ['Real-time Charting', 'Dynamic Reporting', 'Customizable Layouts', 'Dark Mode Optimized']
  },
  {
    id: 'logistics-tracker',
    title: 'Logistics Tracker',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
    description: 'Real-time fleet and asset monitoring system.',
    fullDescription: 'Integrating IoT hardware with a centralized dashboard, this project provides real-time tracking of assets, fuel monitoring, and predictive maintenance alerts for logistics companies.',
    techStack: ['C++', 'MQTT', 'Node-RED', 'InfluxDB', 'Grafana'],
    features: ['Geofencing Alerts', 'Fuel Consumption Logs', 'Driver Behavior Scoring', 'API for ERP Integration']
  },
];

export const EXPERTISE = [
  {
    category: 'Artificial Intelligence',
    tools: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'SciPy', 'TensorFlow', 'Keras', 'spaCy', 'Gensim', 'OpenAI', 'LangChain', 'YOLO', 'Pandas', 'Matplotlib', 'Seaborn', 'Meta Llama', 'Anthropic', 'Mistral', 'KNIME', 'Orange']
  },
  {
    category: 'Frontend',
    tools: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'TypeScript', 'Redux', 'Framer Motion', 'SASS']
  },
  {
    category: 'Backend',
    tools: ['Node.js', 'Express', 'Python Django', 'FastAPI', 'Java Spring', 'PHP Laravel', 'Go', 'GraphQL']
  },
  {
    category: 'Frameworks',
    tools: ['MERN', 'MEAN', 'JAMstack', 'Spring Boot', 'Ruby on Rails', 'Flutter']
  },
  {
    category: 'CMS / Ecommerce',
    tools: ['WordPress', 'Shopify', 'Strapi', 'Contentful', 'WooCommerce', 'Magento']
  },
  {
    category: 'Cloud / DevOps',
    tools: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx']
  },
  {
    category: 'Mobile',
    tools: ['React Native', 'Swift', 'Kotlin', 'Dart', 'Ionic', 'Capacitor']
  }
];

export const STATS = [
  { value: 500, label: 'Students Trained', suffix: '+' },
  { value: 200, label: 'Placements', suffix: '+' },
  { value: 10, label: 'Expert Mentors', suffix: '+' },
  { value: 5, label: 'Years Experience', suffix: '+' }
];

export const JOBS = [
  { id: '1', title: 'Full Stack Developer', type: 'Full-time', location: 'Visakhapatnam' },
  { id: '2', title: 'Frontend Developer', type: 'Full-time', location: 'Remote / Office' },
  { id: '3', title: 'Graphic Designer', type: 'Contract', location: 'Visakhapatnam' },
  { id: '4', title: 'UI / UX Designer', type: 'Full-time', location: 'Visakhapatnam' }
];

export const CONTACT_INFO = {
  address: "2nd Floor, 9-29-14/2, Balaji Nagar, VIP Road, Beside Canara Bank, Siripuram, Visakhapatnam, Andhra Pradesh 530003, INDIA.",
  phone: "+91 8639176137",
  email: "codingroots.in@gmail.com",
  mapUrl: "https://maps.google.com/maps?q=2nd%20Floor%2C%209-29-14%2F2%2C%20Balaji%20Nagar%2C%20VIP%20Road%2C%20Beside%20Canara%20Bank%2C%20Siripuram%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530003%2C%20INDIA&output=embed"
};
