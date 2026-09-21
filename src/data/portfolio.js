import {
  Award,
  BadgeCheck,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Brush,
  Camera,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  Globe2,
  Laptop,
  Layers3,
  Mail,
  MapPin,
  MessagesSquare,
  MonitorCog,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Terminal,
  Trophy,
  UserRound,
  WandSparkles,
} from 'lucide-react'
import { asset } from '../utils/text.js'

export const iconMap = {
  Award,
  BadgeCheck,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Brush,
  Camera,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  Globe2,
  Laptop,
  Layers3,
  Mail,
  MapPin,
  MessagesSquare,
  MonitorCog,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Terminal,
  Trophy,
  UserRound,
  WandSparkles,
}

export const profile = {
  name: 'Anshu Kumar Sah',
  role: {
    en: 'B.Tech Computer Science Engineering (AI & ML) Student',
    hi: 'बी.टेक कंप्यूटर साइंस इंजीनियरिंग (AI और ML) विद्यार्थी',
  },
  college: 'U. V. Patel College of Engineering',
  university: 'Ganpat University',
  semester: { en: 'Semester 3', hi: 'सेमेस्टर 3' },
  graduation: '2029',
  location: { en: 'Mahesana, Gujarat, India', hi: 'महिसाणा, गुजरात, भारत' },
  email: 'anshusahu380t@gmail.com',
  phone: '+91 9117911412',
  whatsapp: 'https://wa.me/919117911412',
  resumeUrl: asset('assets/anshu-resume.pdf'),
  profileImage: asset('assets/images/anshu-profile.png'),
  socialPreview: asset('placeholders/social-preview.svg'),
  titles: [
    { en: 'Full Stack Web Developer', hi: 'फुल स्टैक वेब डेवलपर' },
    { en: 'B.Tech CSE (AI & ML) Student', hi: 'बी.टेक CSE (AI और ML) विद्यार्थी' },
    { en: 'Frontend Developer', hi: 'फ्रंटेंड डेवलपर' },
    { en: 'UI/UX Designer', hi: 'UI/UX डिजाइनर' },
    { en: 'Technology Explorer', hi: 'टेक्नोलॉजी एक्सप्लोरर' },
    { en: 'AI Enthusiast', hi: 'AI उत्साही' },
  ],
  socials: [
    { label: 'GitHub', icon: 'Code2', href: 'https://github.com/at-sahu' },
    { label: 'LinkedIn', icon: 'BriefcaseBusiness', href: 'https://www.linkedin.com/in/anshu-kumar-sah' },
    { label: 'Instagram', icon: 'Camera', href: 'https://www.instagram.com/anshu.placeholder' },
    { label: 'Email', icon: 'Mail', href: 'mailto:anshusahu380t@gmail.com' },
    { label: 'WhatsApp', icon: 'MessagesSquare', href: 'https://wa.me/919117911412' },
  ],
}

export const navItems = [
  { id: 'home', label: { en: 'Home', hi: 'होम' } },
  { id: 'about', label: { en: 'About', hi: 'परिचय' } },
  { id: 'skills', label: { en: 'Skills', hi: 'कौशल' } },
  { id: 'projects', label: { en: 'Projects', hi: 'प्रोजेक्ट' } },
  { id: 'services', label: { en: 'Services', hi: 'सेवाएं' } },
  { id: 'certificates', label: { en: 'Certificates', hi: 'सर्टिफिकेट' } },
  { id: 'education', label: { en: 'Education', hi: 'शिक्षा' } },
  { id: 'contact', label: { en: 'Contact', hi: 'संपर्क' } },
]

export const heroCopy = {
  greeting: { en: "Hello, I'm", hi: 'नमस्ते, मैं हूं' },
  intro: {
    en: 'I am a curious AI & ML student who builds modern, responsive websites and keeps learning by turning ideas into clean digital products. I am currently available for freelance projects, UI-focused builds, and collaborative technology work.',
    hi: 'मैं AI और ML का जिज्ञासु विद्यार्थी हूं जो आधुनिक, responsive websites बनाता है और ideas को clean digital products में बदलकर लगातार सीखता है। मैं freelance projects, UI-focused builds और collaborative technology work के लिए उपलब्ध हूं।',
  },
}

export const stats = [
  { value: 15, suffix: '+', label: { en: 'Project Placeholders', hi: 'प्रोजेक्ट प्लेसहोल्डर' } },
  { value: 10, suffix: '+', label: { en: 'Technologies', hi: 'टेक्नोलॉजी' } },
  { value: 11, suffix: '', label: { en: 'Certificates', hi: 'सर्टिफिकेट' } },
  { value: 1, suffix: '', label: { en: 'Freelance Ready', hi: 'फ्रीलांस के लिए तैयार' } },
]

export const techStack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Python',
  'Java',
  'C',
  'C++',
  'Linux',
  'Git',
  'GitHub',
  'VS Code',
  'Figma',
]

export const sectionCopy = {
  about: {
    label: { en: 'About Me', hi: 'मेरे बारे में' },
    title: { en: 'Who is Anshu Kumar Sah?', hi: 'अंशु कुमार साह कौन हैं?' },
    subtitle: {
      en: 'A passionate Computer Science (AI & ML) student who loves building modern digital experiences while continuously learning new technologies and solving real-world problems.',
      hi: 'एक उत्साही Computer Science (AI & ML) विद्यार्थी, जिसे modern digital experiences बनाना, नई technologies सीखना और real-world problems solve करना पसंद है।',
    },
    body: {
      en: 'I am currently pursuing B.Tech in Computer Science Engineering with Artificial Intelligence & Machine Learning at U. V. Patel College of Engineering, Ganpat University. My goal is to become an AI Engineer and Full Stack Developer who can design useful, accessible, and polished products. I enjoy coding, clean UI design, teamwork, and learning through practical projects without pretending to have industry experience I have not earned yet.',
      hi: 'मैं U. V. Patel College of Engineering, Ganpat University से Computer Science Engineering में Artificial Intelligence & Machine Learning के साथ B.Tech कर रहा हूं। मेरा लक्ष्य AI Engineer और Full Stack Developer बनना है, जो उपयोगी, accessible और polished products बना सके। मुझे coding, clean UI design, teamwork और practical projects से सीखना पसंद है, और मैं अपने अनुभव को ईमानदारी से प्रस्तुत करता हूं।',
    },
  },
  skills: {
    label: { en: 'Skills', hi: 'कौशल' },
    title: { en: 'Organized Capability, Not a Random List', hi: 'संगठित क्षमता, सिर्फ सूची नहीं' },
    subtitle: {
      en: 'Skills are grouped by discipline so recruiters and clients can quickly understand where Anshu can contribute.',
      hi: 'कौशलों को category में रखा गया है ताकि recruiters और clients जल्दी समझ सकें कि अंशु कहां योगदान दे सकते हैं।',
    },
  },
  projects: {
    label: { en: 'Projects', hi: 'प्रोजेक्ट' },
    title: { en: 'Placeholder Projects Ready for Real Work', hi: 'वास्तविक काम के लिए तैयार प्रोजेक्ट प्लेसहोल्डर' },
    subtitle: {
      en: 'A scalable project grid with filters, search, modal details, and clean replacement points for future work.',
      hi: 'Filters, search, modal details और future work के लिए clean replacement points वाला scalable project grid.',
    },
  },
  services: {
    label: { en: 'Services', hi: 'सेवाएं' },
    title: { en: 'Freelance-Ready Digital Services', hi: 'Freelance-ready digital services' },
    subtitle: {
      en: 'Clear service cards for business owners, startups, students, and early-stage teams.',
      hi: 'Business owners, startups, students और early-stage teams के लिए स्पष्ट service cards.',
    },
  },
  education: {
    label: { en: 'Education', hi: 'शिक्षा' },
    title: { en: 'Education Timeline', hi: 'शिक्षा टाइमलाइन' },
    subtitle: {
      en: 'A clean academic timeline with current B.Tech progress and earlier milestones.',
      hi: 'Current B.Tech progress और पिछले milestones के साथ clean academic timeline.',
    },
  },
  certificates: {
    label: { en: 'Certificates', hi: 'सर्टिफिकेट' },
    title: { en: 'Verified Learning & Certifications', hi: 'Verified Learning & Certifications' },
    subtitle: {
      en: 'A growing collection of Red Hat, IBM, Cisco, Azure, AI, Python, and machine-learning credentials.',
      hi: 'Growing certifications across Red Hat, IBM, Cisco, Azure, AI, Python and machine learning.',
    },
  },
  contact: {
    label: { en: 'Contact', hi: 'संपर्क' },
    title: { en: "Let's Work Together", hi: 'आइए साथ काम करें' },
    subtitle: {
      en: "I'd love to hear about your ideas, projects or collaboration opportunities.",
      hi: 'मुझे आपके ideas, projects या collaboration opportunities के बारे में सुनना अच्छा लगेगा।',
    },
  },
}

export const quickFacts = [
  { icon: 'MapPin', title: { en: 'Location', hi: 'स्थान' }, value: profile.location },
  { icon: 'GraduationCap', title: { en: 'Education', hi: 'शिक्षा' }, value: { en: 'B.Tech CSE (AI & ML)', hi: 'बी.टेक CSE (AI और ML)' } },
  { icon: 'BookOpen', title: { en: 'Current Semester', hi: 'वर्तमान सेमेस्टर' }, value: profile.semester },
  { icon: 'Globe2', title: { en: 'Languages', hi: 'भाषाएं' }, value: { en: 'English, Hindi', hi: 'अंग्रेजी, हिन्दी' } },
  { icon: 'BriefcaseBusiness', title: { en: 'Availability', hi: 'उपलब्धता' }, value: { en: 'Open for Freelance', hi: 'Freelance के लिए उपलब्ध' } },
  { icon: 'UserRound', title: { en: 'Experience', hi: 'अनुभव' }, value: { en: 'Fresher', hi: 'फ्रेशर' } },
  { icon: 'Award', title: { en: 'Graduation', hi: 'ग्रेजुएशन' }, value: '2029' },
]

export const skills = [
  {
    category: { en: 'Frontend Development', hi: 'फ्रंटेंड डेवलपमेंट' },
    icon: 'MonitorCog',
    items: [
      { name: 'HTML5', level: 90, description: { en: 'Building semantic and accessible website structures.', hi: 'Semantic और accessible website structures बनाना।' } },
      { name: 'CSS3', level: 86, description: { en: 'Creating responsive layouts, motion, and polished interfaces.', hi: 'Responsive layouts, motion और polished interfaces बनाना।' } },
      { name: 'JavaScript', level: 82, description: { en: 'Adding dynamic behavior and interactive web experiences.', hi: 'Dynamic behavior और interactive web experiences जोड़ना।' } },
      { name: 'React', level: 78, description: { en: 'Building reusable components and modern single-page apps.', hi: 'Reusable components और modern single-page apps बनाना।' } },
      { name: 'Tailwind CSS', level: 76, description: { en: 'Composing consistent design systems quickly.', hi: 'Consistent design systems तेजी से बनाना।' } },
    ],
  },
  {
    category: { en: 'Backend Development', hi: 'बैकेंड डेवलपमेंट' },
    icon: 'Server',
    items: [
      { name: 'Node.js', level: 72, description: { en: 'Creating JavaScript server logic and APIs.', hi: 'JavaScript server logic और APIs बनाना।' } },
      { name: 'Express.js', level: 70, description: { en: 'Building REST routes and backend-ready integrations.', hi: 'REST routes और backend-ready integrations बनाना।' } },
      { name: 'PHP', level: 62, description: { en: 'Working with basic server-side web flows.', hi: 'Basic server-side web flows पर काम करना।' } },
      { name: 'REST APIs', level: 68, description: { en: 'Connecting frontend interfaces with structured backend data.', hi: 'Frontend interfaces को structured backend data से जोड़ना।' } },
    ],
  },
  {
    category: { en: 'Programming Languages', hi: 'प्रोग्रामिंग लैंग्वेज' },
    icon: 'FileCode2',
    items: [
      { name: 'C', level: 75, description: { en: 'Understanding programming fundamentals and problem solving.', hi: 'Programming fundamentals और problem solving समझना।' } },
      { name: 'C++', level: 74, description: { en: 'Practicing data structures and object-oriented concepts.', hi: 'Data structures और OOP concepts का अभ्यास।' } },
      { name: 'Java', level: 68, description: { en: 'Writing structured, class-based programs.', hi: 'Structured, class-based programs लिखना।' } },
      { name: 'Python', level: 72, description: { en: 'Exploring scripting, automation, and AI foundations.', hi: 'Scripting, automation और AI foundations सीखना।' } },
    ],
  },
  {
    category: { en: 'Database & Tools', hi: 'डेटाबेस और टूल्स' },
    icon: 'Database',
    items: [
      { name: 'MongoDB', level: 66, description: { en: 'Working with flexible document-based data.', hi: 'Flexible document-based data के साथ काम।' } },
      { name: 'MySQL', level: 67, description: { en: 'Designing relational data tables and queries.', hi: 'Relational data tables और queries बनाना।' } },
      { name: 'Linux', level: 70, description: { en: 'Using terminal workflows and command-line environments.', hi: 'Terminal workflows और command-line environments उपयोग करना।' } },
      { name: 'Git & GitHub', level: 78, description: { en: 'Versioning code and learning open-source collaboration.', hi: 'Code versioning और open-source collaboration सीखना।' } },
      { name: 'Figma', level: 70, description: { en: 'Designing clean interfaces and visual systems.', hi: 'Clean interfaces और visual systems design करना।' } },
    ],
  },
]

export const education = [
  {
    status: { en: 'Current', hi: 'वर्तमान' },
    title: { en: 'B.Tech Computer Science Engineering', hi: 'बी.टेक कंप्यूटर साइंस इंजीनियरिंग' },
    meta: { en: 'Artificial Intelligence & Machine Learning', hi: 'Artificial Intelligence और Machine Learning' },
    place: { en: 'U. V. Patel College of Engineering, Ganpat University', hi: 'U. V. Patel College of Engineering, Ganpat University' },
    detail: { en: 'Expected Graduation 2029', hi: 'Expected Graduation 2029' },
  },
  {
    status: { en: 'Previous', hi: 'पिछला' },
    title: { en: 'Higher Secondary', hi: 'हायर सेकेंडरी' },
    meta: { en: 'Jamuni Lal College, Hajipur, Bihar', hi: 'Jamuni Lal College, Hajipur, Bihar' },
    place: { en: '75.8%', hi: '75.8%' },
    detail: { en: 'Science foundation and early technical curiosity.', hi: 'Science foundation और early technical curiosity.' },
  },
  {
    status: { en: 'Previous', hi: 'पिछला' },
    title: { en: 'Secondary', hi: 'सेकेंडरी' },
    meta: { en: 'G.D. Mission School, Muzaffarpur, Bihar', hi: 'G.D. Mission School, Muzaffarpur, Bihar' },
    place: { en: '79.9%', hi: '79.9%' },
    detail: { en: 'Built discipline, fundamentals, and learning habits.', hi: 'Discipline, fundamentals और learning habits विकसित किए।' },
  },
]

export const projects = [
  {
    title: { en: 'AI Learning Dashboard', hi: 'AI लर्निंग डैशबोर्ड' },
    category: 'AI',
    status: { en: 'Placeholder', hi: 'प्लेसहोल्डर' },
    summary: { en: 'A future dashboard concept for tracking AI topics, notes, tasks, and experiments.', hi: 'AI topics, notes, tasks और experiments track करने के लिए future dashboard concept.' },
    stack: ['React', 'Python', 'Charts'],
    image: asset('placeholders/project-ai.svg'),
    live: 'https://example.com/ai-learning-dashboard',
    source: 'https://github.com/anshu-kumar-sah-placeholder/ai-learning-dashboard',
  },
  {
    title: { en: 'Business Portfolio Website', hi: 'बिजनेस पोर्टफोलियो वेबसाइट' },
    category: 'Web',
    status: { en: 'Placeholder', hi: 'प्लेसहोल्डर' },
    summary: { en: 'A polished responsive business website starter for local brands and freelancers.', hi: 'Local brands और freelancers के लिए polished responsive business website starter.' },
    stack: ['React', 'Tailwind', 'SEO'],
    image: asset('placeholders/project-web.svg'),
    live: 'https://example.com/business-portfolio',
    source: 'https://github.com/anshu-kumar-sah-placeholder/business-portfolio',
  },
  {
    title: { en: 'Student Resource Portal', hi: 'स्टूडेंट रिसोर्स पोर्टल' },
    category: 'Full Stack',
    status: { en: 'Placeholder', hi: 'प्लेसहोल्डर' },
    summary: { en: 'A backend-ready concept for notes, schedules, certificates, and academic resources.', hi: 'Notes, schedules, certificates और academic resources के लिए backend-ready concept.' },
    stack: ['Node.js', 'Express', 'MongoDB'],
    image: asset('placeholders/project-fullstack.svg'),
    live: 'https://example.com/student-resource-portal',
    source: 'https://github.com/anshu-kumar-sah-placeholder/student-resource-portal',
  },
  {
    title: { en: 'UI Component Lab', hi: 'UI कंपोनेंट लैब' },
    category: 'Design',
    status: { en: 'Placeholder', hi: 'प्लेसहोल्डर' },
    summary: { en: 'A small design-system sandbox for buttons, cards, forms, and accessible states.', hi: 'Buttons, cards, forms और accessible states के लिए design-system sandbox.' },
    stack: ['Figma', 'React', 'CSS'],
    image: asset('placeholders/project-design.svg'),
    live: 'https://example.com/ui-component-lab',
    source: 'https://github.com/anshu-kumar-sah-placeholder/ui-component-lab',
  },
]

export const services = [
  { icon: 'Globe2', title: { en: 'Portfolio Website', hi: 'पोर्टफोलियो वेबसाइट' }, description: { en: 'Premium personal sites with responsive design, SEO, and polished animation.', hi: 'Responsive design, SEO और polished animation वाली premium personal sites.' } },
  { icon: 'Laptop', title: { en: 'Business Website', hi: 'बिजनेस वेबसाइट' }, description: { en: 'Clean multi-section websites for local brands, startups, and service providers.', hi: 'Local brands, startups और service providers के लिए clean multi-section websites.' } },
  { icon: 'Brush', title: { en: 'UI/UX Design', hi: 'UI/UX डिजाइन' }, description: { en: 'Modern interface design, layout systems, wireframes, and visual polish.', hi: 'Modern interface design, layout systems, wireframes और visual polish.' } },
  { icon: 'Server', title: { en: 'Backend-Ready Setup', hi: 'Backend-ready setup' }, description: { en: 'Form architecture, API-ready structures, validation, and future integration points.', hi: 'Form architecture, API-ready structures, validation और future integration points.' } },
]

export const achievements = [
  { icon: 'Sparkles', value: 'Fresher', label: { en: 'Honest Experience', hi: 'ईमानदार अनुभव' } },
  { icon: 'Trophy', value: '2029', label: { en: 'Graduation Target', hi: 'ग्रेजुएशन लक्ष्य' } },
  { icon: 'ShieldCheck', value: 'WCAG', label: { en: 'Accessibility Mindset', hi: 'Accessibility mindset' } },
  { icon: 'Rocket', value: 'Open', label: { en: 'Freelance Availability', hi: 'Freelance availability' } },
]

export const certificates = [
  { title: 'Red Hat System Administration I - v8.2', badge: { en: 'Red Hat - March 2026', hi: 'Red Hat - March 2026' }, file: asset('assets/certificates/red-hat-rh124-v8-2.pdf'), icon: 'BadgeCheck' },
  { title: 'Red Hat System Administration I - v9.3', badge: { en: 'Red Hat - April 2026', hi: 'Red Hat - April 2026' }, file: asset('assets/certificates/red-hat-rh124-v9-3.pdf'), icon: 'BadgeCheck' },
  { title: 'Python 101 for Data Science', badge: { en: 'IBM Developer Skills Network - April 2026', hi: 'IBM Developer Skills Network - April 2026' }, file: asset('assets/certificates/ibm-python-data-science.pdf'), icon: 'BadgeCheck' },
  { title: 'Advanced Programming with C++', badge: { en: 'IBM Developer Skills Network - April 2026', hi: 'IBM Developer Skills Network - April 2026' }, file: asset('assets/certificates/ibm-advanced-cpp.pdf'), icon: 'BadgeCheck' },
  { title: 'Software Foundation with C Programming', badge: { en: 'IBM Developer Skills Network - April 2026', hi: 'IBM Developer Skills Network - April 2026' }, file: asset('assets/certificates/ibm-c-programming.pdf'), icon: 'BadgeCheck' },
  { title: 'CCNA: Introduction to Networks', badge: { en: 'Cisco Networking Academy - April 2026', hi: 'Cisco Networking Academy - April 2026' }, file: asset('assets/certificates/cisco-ccna-introduction-to-networks.pdf'), icon: 'BadgeCheck' },
  { title: 'Cisco CCNA Certificate', badge: { en: 'Cisco - April 2026', hi: 'Cisco - April 2026' }, file: asset('assets/certificates/cisco-ccna-certificate.pdf'), icon: 'BadgeCheck' },
  { title: 'Introduction to the Basics of Azure Services', badge: { en: 'June 2026', hi: 'June 2026' }, file: asset('assets/certificates/azure-services.pdf'), icon: 'BadgeCheck' },
  { title: 'Introduction to Artificial Intelligence', badge: { en: 'June 2026', hi: 'June 2026' }, file: asset('assets/certificates/introduction-to-ai.pdf'), icon: 'BadgeCheck' },
  { title: 'Python for Beginners', badge: { en: 'August 2026', hi: 'August 2026' }, file: asset('assets/certificates/python-for-beginners.pdf'), icon: 'BadgeCheck' },
  { title: 'Machine Learning Using Python', badge: { en: 'August 2026', hi: 'August 2026' }, file: asset('assets/certificates/machine-learning-python.pdf'), icon: 'BadgeCheck' },
]

export const testimonials = [
  {
    name: { en: 'Client Name Placeholder', hi: 'क्लाइंट नाम प्लेसहोल्डर' },
    role: { en: 'Founder, Company Placeholder', hi: 'Founder, Company Placeholder' },
    quote: {
      en: 'This section is ready for authentic client, mentor, and collaborator feedback.',
      hi: 'यह section वास्तविक client, mentor और collaborator feedback के लिए तैयार है।',
    },
  },
  {
    name: { en: 'Mentor Placeholder', hi: 'मेंटोर प्लेसहोल्डर' },
    role: { en: 'Technology Mentor', hi: 'Technology Mentor' },
    quote: {
      en: 'Future reviews can highlight communication, problem solving, and delivery quality.',
      hi: 'Future reviews communication, problem solving और delivery quality को दिखा सकते हैं।',
    },
  },
]

export const blogPosts = [
  { category: 'Web Development', date: '2026-07-12', time: '4 min', title: { en: 'How I Approach Responsive Layouts', hi: 'मैं responsive layouts को कैसे approach करता हूं' }, summary: { en: 'A future article placeholder about layout thinking and mobile-first polish.', hi: 'Layout thinking और mobile-first polish पर future article placeholder.' } },
  { category: 'Artificial Intelligence', date: '2026-07-12', time: '5 min', title: { en: 'Learning AI as a CSE Student', hi: 'CSE student के रूप में AI सीखना' }, summary: { en: 'Notes on curiosity, fundamentals, and building practical AI learning habits.', hi: 'Curiosity, fundamentals और practical AI learning habits पर notes.' } },
  { category: 'Linux', date: '2026-07-12', time: '3 min', title: { en: 'Terminal Habits for Developers', hi: 'Developers के लिए terminal habits' }, summary: { en: 'A placeholder post for useful command-line habits and workflow discipline.', hi: 'Useful command-line habits और workflow discipline के लिए placeholder post.' } },
]

export const gallery = [
  { title: { en: 'Smart India Hackathon 2026 - Team Event', hi: 'Smart India Hackathon 2026 - Team Event' }, image: asset('assets/images/smart-india-hackathon-2026.png') },
  { title: { en: 'Future Event Photo', hi: 'Future Event Photo' }, image: asset('placeholders/gallery-2.svg') },
  { title: { en: 'Future Achievement', hi: 'Future Achievement' }, image: asset('placeholders/gallery-3.svg') },
]

export const pricing = [
  { title: { en: 'Basic', hi: 'Basic' }, price: { en: "Let's discuss", hi: "Let's discuss" }, plan: { en: 'Portfolio Website', hi: 'Portfolio Website' }, popular: false, features: ['Responsive pages', 'Basic SEO', 'Contact form ready'] },
  { title: { en: 'Professional', hi: 'Professional' }, price: { en: "Let's discuss", hi: "Let's discuss" }, plan: { en: 'Business Website', hi: 'Business Website' }, popular: true, features: ['Premium UI', 'Advanced sections', 'Deployment support'] },
  { title: { en: 'Premium', hi: 'Premium' }, price: { en: "Let's discuss", hi: "Let's discuss" }, plan: { en: 'Custom Full Stack Solution', hi: 'Custom Full Stack Solution' }, popular: false, features: ['Backend-ready', 'Dashboard-ready', 'Future CMS structure'] },
]

export const faqs = [
  { question: { en: 'Who are you?', hi: 'आप कौन हैं?' }, answer: { en: 'I am Anshu Kumar Sah, a B.Tech CSE (AI & ML) student and fresher learning full stack development, UI/UX, and AI.', hi: 'मैं अंशु कुमार साह हूं, B.Tech CSE (AI & ML) student और fresher, जो full stack development, UI/UX और AI सीख रहा हूं।' } },
  { question: { en: 'What technologies do you use?', hi: 'आप कौन सी technologies use करते हैं?' }, answer: { en: 'I work with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, Python, Java, C++, Linux, Git, and Figma.', hi: 'मैं HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, Python, Java, C++, Linux, Git और Figma के साथ काम करता हूं।' } },
  { question: { en: 'Are you available for freelance work?', hi: 'क्या आप freelance work के लिए available हैं?' }, answer: { en: 'Yes. I am available for portfolio websites, business websites, UI builds, and backend-ready frontend projects.', hi: 'हां। मैं portfolio websites, business websites, UI builds और backend-ready frontend projects के लिए available हूं।' } },
  { question: { en: 'How long does a website take?', hi: 'Website बनाने में कितना समय लगता है?' }, answer: { en: 'It depends on scope. Simple websites can be planned quickly, while custom full stack work needs a clearer timeline after discussion.', hi: 'यह scope पर निर्भर करता है। Simple websites जल्दी plan हो सकती हैं, जबकि custom full stack work के लिए discussion के बाद timeline तय होती है।' } },
  { question: { en: 'Can you maintain websites?', hi: 'क्या आप websites maintain कर सकते हैं?' }, answer: { en: 'Yes. The project structure supports updates, future content replacement, SEO improvements, and deployment changes.', hi: 'हां। Project structure updates, future content replacement, SEO improvements और deployment changes support करता है।' } },
]

