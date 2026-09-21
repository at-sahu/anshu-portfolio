import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, Bookmark, Check, Download, ExternalLink, Maximize2, Share2, Star } from 'lucide-react'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import Button from '../common/Button.jsx'
import Icon from '../common/Icon.jsx'
import Modal from '../common/Modal.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHeader from '../common/SectionHeader.jsx'
import { blogPosts, certificates, faqs, gallery, pricing, sectionCopy, testimonials } from '../../data/portfolio.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function ProofContentSection() {
  const { language, t } = useLanguage()
  const [galleryItem, setGalleryItem] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <>
      <section id="certificates" className="section-band">
        <div className="container">
          <SectionHeader {...sectionCopy.certificates} />
          <div className="cert-grid">
            {certificates.map((certificate, index) => (
              <Reveal key={certificate.title} className="certificate-card" delay={index * 0.04}>
                <span className="icon-shell"><Icon name={certificate.icon} /></span>
                <h3>{certificate.title}</h3>
                <p>{text(certificate.badge, language)}</p>
                <Button href={certificate.file} external icon={ExternalLink} variant="secondary">
                  {language === 'hi' ? 'सर्टिफिकेट देखें' : 'View Certificate'}
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            label={{ en: 'Testimonials', hi: 'Testimonials' }}
            title={{ en: 'What People Say', hi: 'लोग क्या कहते हैं' }}
            subtitle={{
              en: 'This section will showcase feedback from clients, mentors and collaborators.',
              hi: 'यह section clients, mentors और collaborators के feedback के लिए तैयार है।',
            }}
            align="center"
          />
          <Reveal className="testimonial-shell">
            <div className="embla" ref={emblaRef}>
              <div className="embla-container">
                {testimonials.map((testimonial) => (
                  <article key={text(testimonial.name, 'en')} className="testimonial-card embla-slide">
                    <div className="testimonial-avatar" aria-hidden="true">{text(testimonial.name, language).slice(0, 1)}</div>
                    <div className="stars" aria-label="Five star placeholder rating">
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
                    </div>
                    <p>"{text(testimonial.quote, language)}"</p>
                    <h3>{text(testimonial.name, language)}</h3>
                    <span>{text(testimonial.role, language)}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="slider-controls">
              <button className="icon-button" type="button" onClick={scrollPrev} aria-label={t('previous')}><ArrowLeft size={18} /></button>
              <button className="icon-button" type="button" onClick={scrollNext} aria-label={t('next')}><ArrowRight size={18} /></button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            label={{ en: 'Blog', hi: 'ब्लॉग' }}
            title={{ en: 'Future Articles and Learning Notes', hi: 'भविष्य के articles और learning notes' }}
            subtitle={{ en: 'A scalable article area for web development, AI, Linux, programming, and career posts.', hi: 'Web development, AI, Linux, programming और career posts के लिए scalable article area.' }}
          />
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <Reveal key={text(post.title, 'en')} className="blog-card" delay={index * 0.06}>
                <div className="blog-image" aria-hidden="true"><span>{post.category}</span></div>
                <div className="blog-meta">{post.date} · {post.time}</div>
                <h3>{text(post.title, language)}</h3>
                <p>{text(post.summary, language)}</p>
                <div className="card-actions">
                  <Button variant="secondary" onClick={() => toast('Blog placeholder is ready for a future article.')}>{t('readMore')}</Button>
                  <button className="icon-button" type="button" aria-label={t('bookmark')} onClick={() => toast('Bookmark placeholder saved locally later.')}><Bookmark size={17} /></button>
                  <button className="icon-button" type="button" aria-label={t('share')} onClick={() => toast('Social sharing metadata is ready.')}><Share2 size={17} /></button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            label={{ en: 'Gallery', hi: 'गैलरी' }}
            title={{ en: 'Screenshots, Certificates, Events', hi: 'Screenshots, certificates और events' }}
            subtitle={{ en: 'A lightbox-ready gallery for event photos, certificates, and achievements. Two slots are ready for your next uploads.', hi: 'Event photos, certificates and achievements. Two slots are ready for your next uploads.' }}
          />
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <Reveal key={text(item.title, 'en')} className={`gallery-card gallery-card-${index % 3}`} delay={index * 0.04}>
                <button type="button" onClick={() => setGalleryItem(item)} aria-label={`${text(item.title, language)} fullscreen`}>
                  <img src={item.image} alt={`${text(item.title, language)} placeholder`} loading="lazy" />
                  <span><Maximize2 size={17} /> {text(item.title, language)}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            label={{ en: 'Pricing', hi: 'Pricing' }}
            title={{ en: 'Freelance Packages', hi: 'Freelance packages' }}
            subtitle={{ en: 'Flexible freelance packages. The final quote is tailored after we discuss your project scope.', hi: 'Flexible freelance packages. Final quote is discussed after project scope.' }}
            align="center"
          />
          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <Reveal key={text(plan.title, 'en')} className={`pricing-card ${plan.popular ? 'popular' : ''}`} delay={index * 0.06}>
                {plan.popular ? <span className="popular-badge">{language === 'hi' ? 'लोकप्रिय' : 'Most Popular'}</span> : null}
                <h3>{text(plan.title, language)}</h3>
                <p>{text(plan.plan, language)}</p>
                <strong>{text(plan.price, language)}</strong>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><Check size={17} /> {feature}</li>
                  ))}
                </ul>
                <Button href="#contact" variant={plan.popular ? 'primary' : 'secondary'}>{t('contactMe')}</Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container faq-layout">
          <SectionHeader
            label={{ en: 'FAQ', hi: 'FAQ' }}
            title={{ en: 'Common Client Questions', hi: 'सामान्य सवाल' }}
            subtitle={{ en: 'An accessible accordion for quick answers before a project conversation.', hi: 'Project conversation से पहले quick answers के लिए accessible accordion.' }}
          />
          <Reveal className="faq-list">
            {faqs.map((faq, index) => {
              const open = openFaq === index
              return (
                <div className={`faq-item ${open ? 'open' : ''}`} key={text(faq.question, 'en')}>
                  <button type="button" onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open}>
                    <span>{text(faq.question, language)}</span>
                    <ArrowRight size={18} />
                  </button>
                  <div className="faq-answer">
                    <p>{text(faq.answer, language)}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      <Modal open={Boolean(galleryItem)} title={galleryItem ? text(galleryItem.title, language) : ''} onClose={() => setGalleryItem(null)}>
        {galleryItem ? (
          <div className="gallery-modal">
            <img src={galleryItem.image} alt={`${text(galleryItem.title, language)} large placeholder`} />
            <Button variant="secondary" onClick={() => toast('Download disabled for placeholder gallery assets.')} icon={Download}>
              {language === 'hi' ? 'Download disabled' : 'Download Disabled'}
            </Button>
          </div>
        ) : null}
      </Modal>
    </>
  )
}

export default ProofContentSection
