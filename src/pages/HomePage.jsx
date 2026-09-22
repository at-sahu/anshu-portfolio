import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import toast from 'react-hot-toast'
import {
  ArrowUpRight, BriefcaseBusiness, Braces, Check, CloudSun, Code2, Cpu, Database,
  Download, ExternalLink, FileCode2, Globe2, GraduationCap, Laptop,
  Layout, Mail, MapPin, Menu, MessageCircle, MonitorCog, Network,
  Palette, Phone, Server, Sparkles, Terminal, WandSparkles,
} from 'lucide-react'
import { certificates, education, gallery, pricing, profile, services } from '../data/portfolio.js'
import { text } from '../utils/text.js'
import { contactSchema, prepareContactPayload } from '../services/contactSchema.js'
import '../styles/scroll-portfolio.css'

const skills = [
  { name: 'HTML5', icon: FileCode2, tint: '#f97316' }, { name: 'CSS3', icon: Palette, tint: '#38bdf8' },
  { name: 'JavaScript', icon: Braces, tint: '#facc15' }, { name: 'React', icon: Cpu, tint: '#67e8f9' },
  { name: 'Tailwind CSS', icon: WandSparkles, tint: '#38bdf8' }, { name: 'Node.js', icon: Server, tint: '#75df78' },
  { name: 'Express.js', icon: Network, tint: '#e2e8f0' }, { name: 'PHP', icon: FileCode2, tint: '#a78bfa' },
  { name: 'Python', icon: Code2, tint: '#f6c84c' }, { name: 'Java', icon: Braces, tint: '#ef6b4a' },
  { name: 'C', icon: FileCode2, tint: '#69b9ff' }, { name: 'C++', icon: FileCode2, tint: '#638cff' },
  { name: 'MongoDB', icon: Database, tint: '#4ade80' }, { name: 'MySQL', icon: Database, tint: '#4ea8de' },
  { name: 'Linux', icon: Terminal, tint: '#f4c26b' }, { name: 'GitHub', icon: Code2, tint: '#e8edf8' },
  { name: 'Palette', icon: Palette, tint: '#f472b6' }, { name: 'VS Code', icon: MonitorCog, tint: '#38bdf8' },
]

const projects = [
  { title: 'ChatX', type: 'Real-time Chat App', icon: MessageCircle, palette: 'chat', summary: 'A modern real-time chat application designed for seamless conversations, user-friendly rooms and responsive use across devices.', tags: ['React', 'Node.js', 'MongoDB'] },
  { title: 'WeatherGPT', type: 'AI Weather Assistant', icon: CloudSun, palette: 'weather', summary: 'An intelligent weather experience that presents live weather insights with a clean, modern dashboard interface.', tags: ['React', 'Weather API', 'AI UI'] },
  { title: 'Portfolio Website', type: 'Personal Brand', icon: Layout, palette: 'portfolio', summary: 'This responsive portfolio with polished UI, project sections, certificates and contact channels.', tags: ['React', 'CSS', 'Vite'] },
  { title: 'Student Resource Portal', type: 'Full Stack Concept', icon: GraduationCap, palette: 'portal', summary: 'A student-focused platform concept for academic resources, schedules, certificates and notes.', tags: ['Node.js', 'Express', 'MongoDB'] },
]

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInquirySubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    const parsed = contactSchema.safeParse(values)

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || 'Please check the form fields.')
      return
    }

    const apiUrl = import.meta.env.VITE_API_URL || 'https://anshu-portfolio-uch2.onrender.com'

    try {
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prepareContactPayload(parsed.data)),
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to send inquiry.')

      toast.success('Inquiry submitted successfully.')
      form.reset()
    } catch (error) {
      console.error('Contact submission failed:', error)
      toast.error('Message could not be sent. Please try again.')
    }
  }

  return <main className="scroll-page">
    <Helmet><title>Anshu Kumar Sah | Developer Portfolio</title></Helmet>
    <header className="scroll-nav"><a className="ak" href="#home" onClick={() => setMobileMenuOpen(false)}>AK</a><nav className={mobileMenuOpen ? 'mobile-open' : ''}>{['Home','About','Ideas','Skills','Projects','Education','Services','Certificates','Gallery','Pricing','Contact'].map((item) => <a href={'#' + item.toLowerCase()} key={item} onClick={() => setMobileMenuOpen(false)}>{item}</a>)}</nav><a className="talk" href="#contact">Let's Talk <ArrowUpRight size={14} /></a><button type="button" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((value) => !value)}><Menu size={19} /></button></header>

    <section id="home" className="home-section section">
      <div className="home-copy"><span className="online"><i /> Open to Freelance Work</span><p>Hi, I'm</p><h1>Anshu <em>Kumar Sah</em></h1><h2>Full Stack Developer <b>|</b> AI Enthusiast <b>|</b> UI/UX Designer</h2><span className="home-intro">B.Tech CSE (AI & ML) student at U. V. Patel College of Engineering, Ganpat University. I build modern, useful and accessible digital products.</span><div className="actions"><a href="#projects">View My Work <ArrowUpRight size={16} /></a><a className="outline" href={profile.resumeUrl} target="_blank" rel="noreferrer">View Resume <ExternalLink size={15} /></a></div><Socials /><div className="metrics"><Metric n="11+" t="Certificates" /><Metric n="Freelance" t="Available" /><Metric n="2029" t="Graduation" /><Metric n="∞" t="Learning" /></div></div>
      <div className="portrait"><div className="portrait-glow" /><img src={profile.profileImage} alt={profile.name} /><i className="ring r1" /><i className="ring r2" /><b className="label one">⌁ Developer</b><b className="label two">AI Enthusiast</b><b className="label three">UI/UX Designer ↗</b><em>Build<br />Learn<br />Improve<br />Repeat</em></div>
    </section>

    <section id="about" className="about-section section"><div className="about-words"><p className="eyebrow">ABOUT ME</p><h1>A developer who turns <em>curiosity</em> into experiences.</h1><p>I’m Anshu Kumar Sah, a B.Tech CSE (AI & ML) student at U. V. Patel College of Engineering, Ganpat University. I enjoy turning ideas into clear, useful interfaces while learning full-stack development and AI foundations.</p><p>My goal is to grow into an AI Engineer and Full Stack Developer who designs polished, accessible products that solve real problems.</p><div className="fact-grid"><Fact Icon={MapPin} k="Location" v="Mahesana, Gujarat, India" /><Fact Icon={Mail} k="Email" v={profile.email} /><Fact Icon={Phone} k="Phone" v={profile.phone} /><Fact Icon={BriefcaseBusiness} k="Availability" v="Open for freelance work" /></div></div><div className="about-art"><div className="laptop"><div><span>const future =</span><b>"built with intent"</b><i>Good ideas become great products.</i></div></div><div className="about-orb" /><span className="about-quote">Design with empathy.<br />Build with purpose.</span></div></section>

    <section id="ideas" className="ideas-section section"><div className="code-rain">{Array.from({length:22},(_,i)=><i key={i}>{['&lt;/&gt;','{}','01','AI','const','()'][i%6]}</i>)}</div><div className="ideas-copy"><p className="eyebrow">FROM CURIOSITY TO CREATION</p><h1>Ideas<br />to <em>Impact.</em></h1><span>Exploring AI, building modern web experiences, and shaping a better future - one thoughtful project at a time.</span><a href="#contact">Start a Project <ArrowUpRight size={16} /></a><div className="idea-steps"><b>01 <small>Explore</small></b><b>02 <small>Design</small></b><b>03 <small>Build</small></b><b>04 <small>Improve</small></b></div></div><div className="coding-scene"><div className="floating-code">function buildFuture() {'{'}<br />&nbsp;return <i>ideas</i>;<br />{'}'}</div><div className="laptop-3d"><div className="screen"><span>&lt;Anshu /&gt;</span><i /><i /><i /><b>AI + WEB + DESIGN</b></div><div className="keyboard" /></div></div></section>

    <section id="skills" className="skills-section section"><header><p className="eyebrow">SKILLS</p><h1>Tools I use to bring ideas to life.</h1><span>Every skill has a purpose: creating interfaces, building systems, and learning what comes next.</span></header><div className="skills-wall">{skills.map(({name,icon:Icon,tint})=><article key={name} style={{'--tone':tint}}><Icon /><b>{name}</b><small>{name === 'React' ? 'Frontend library' : name === 'Palette' ? 'Design tool' : 'Development tool'}</small></article>)}</div><div className="skill-side-visual"><span>&lt;/&gt;</span><i>Design</i><i>Develop</i><i>Deploy</i><b>18+<small>technologies and growing</small></b></div></section>

    <section id="projects" className="projects-section section"><header><p className="eyebrow">FEATURED PROJECTS</p><h1>Building useful things, one project at a time.</h1><span>ChatX and WeatherGPT are featured here, with space for every new project you build.</span></header><div className="project-grid">{projects.map(({title,type,icon:Icon,palette,summary,tags})=><article className={palette} key={title}><div className="project-art"><Icon /><span>{title === 'ChatX' ? 'Connect · Chat · Share' : title === 'WeatherGPT' ? '24° · Clear · Smart insights' : 'Build · Learn · Improve'}</span></div><div><p>{type}</p><h2>{title}</h2><span>{summary}</span><footer>{tags.map(t=><b key={t}>{t}</b>)}<a href="https://github.com/at-sahu" target="_blank" rel="noreferrer"><ExternalLink size={16} /></a></footer></div></article>)}</div></section>

    <section id="education" className="education-section section"><header><p className="eyebrow">EDUCATION</p><h1>The foundation behind the work.</h1><span>Learning continuously - from academic fundamentals to hands-on web and AI development.</span></header><div className="edu-line">{education.map((item,i)=><article key={text(item.title)}><i /><p>{i===0?'2025 - 2029':i===1?'2023 - 2025':'2021 - 2023'}</p><h2>{text(item.title)}</h2><h3>{text(item.meta)}</h3><span>{text(item.place)}</span><b>{i===1?'75.8%':i===2?'79.9%':'Expected graduation: 2029'}</b></article>)}</div><aside><GraduationCap /><p>“Learn the fundamentals. Build the future.”</p></aside></section>

    <section id="services" className="services-section section"><header><p className="eyebrow">MY SERVICES</p><h1>What I can do for you.</h1><span>Focused freelance support for portfolios, small businesses and product ideas.</span></header><div>{services.map((s,i)=><article key={text(s.title)}><i>{[<Layout/>,<Globe2/>,<Palette/>,<Server/>][i]}</i><h2>{text(s.title)}</h2><p>{text(s.description)}</p><a href="#contact">Let's discuss <ArrowUpRight size={15}/></a></article>)}</div></section>

    <section id="certificates" className="certificates-section section"><header><p className="eyebrow">CERTIFICATES</p><h1>Verified learning & achievements.</h1><span>Open any card to preview the original certificate.</span></header><div>{certificates.map(c=><article key={c.title}><Sparkles/><h2>{c.title}</h2><p>{text(c.badge)}</p><a href={c.file} target="_blank" rel="noreferrer">View Certificate <ExternalLink size={15}/></a></article>)}</div></section>

    <section id="gallery" className="gallery-section section"><header><p className="eyebrow">GALLERY</p><h1>Events, moments & milestones.</h1><span>Your Smart India Hackathon photo is live; two slots are ready for future updates.</span></header><div>{gallery.map(g=><article key={text(g.title)}><img src={g.image} alt={text(g.title)}/><span>{text(g.title)}</span></article>)}</div></section>

    <section id="pricing" className="pricing-section section"><header><p className="eyebrow">FREELANCE PACKAGES</p><h1>Simple packages. Custom outcomes.</h1><span>We discuss the final price after understanding your exact project requirement.</span></header><div>{pricing.map(p=><article className={p.popular?'popular':''} key={text(p.title)}>{p.popular&&<b className="popular-tag">Most Popular</b>}<h2>{text(p.title)}</h2><p>{text(p.plan)}</p><strong>{text(p.price)}</strong><ul>{p.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><a href="#contact">Contact Me</a></article>)}</div></section>

    <section id="contact" className="contact-section section"><div className="contact-layout"><div className="contact-intro"><p className="eyebrow">LET'S CONNECT</p><h1>Let’s work together.</h1><span>Tell me about your project, idea, or collaboration opportunity.</span><div className="channels"><a href={'mailto:'+profile.email}><Mail/><b>Email</b><small>{profile.email}</small></a><a href="https://www.linkedin.com/in/anshu-kumar-sah" target="_blank" rel="noreferrer"><BriefcaseBusiness/><b>LinkedIn</b><small>Connect with me</small></a><a href="https://github.com/at-sahu" target="_blank" rel="noreferrer"><Code2/><b>GitHub</b><small>View my work</small></a><a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/><b>WhatsApp</b><small>Chat with me</small></a></div></div><form className="inquiry-form" onSubmit={handleInquirySubmit}><div className="form-grid"><label>Full Name<input name="fullName" placeholder="Your full name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Phone<input name="phone" type="tel" placeholder="+91 00000 00000" required /></label><label>Subject<input name="subject" placeholder="Website project" required /></label><label>Project Budget<select name="budget" defaultValue="" required><option value="" disabled>Select budget</option><option>Under ₹5,000</option><option>₹5,000 - ₹15,000</option><option>₹15,000+</option><option>Let’s discuss</option></select></label><label>Project Type<select name="projectType" defaultValue="" required><option value="" disabled>Select type</option><option>Portfolio website</option><option>Business website</option><option>UI/UX design</option><option>Backend-ready frontend</option></select></label></div><label>Message<textarea name="message" placeholder="Tell me about your idea, timeline and goals..." required /></label><button type="submit">Send Inquiry <ArrowUpRight size={16} /></button><small>Form UI is ready. Backend connection will send inquiries to your email/database.</small></form></div></section>
  </main>
}

function Socials(){return <div className="socials"><a href="https://github.com/at-sahu" target="_blank" rel="noreferrer"><Code2/></a><a href="https://www.linkedin.com/in/anshu-kumar-sah" target="_blank" rel="noreferrer"><BriefcaseBusiness/></a><a href={'mailto:'+profile.email}><Mail/></a><a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/></a></div>}
function Metric({n,t}){return <span><b>{n}</b><small>{t}</small></span>}
function Fact({Icon,k,v}){return <article><Icon/><span><b>{k}</b><small>{v}</small></span></article>}
export default HomePage
