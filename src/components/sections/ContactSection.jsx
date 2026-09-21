import { zodResolver } from '@hookform/resolvers/zod'
import { BriefcaseBusiness, Camera, Clock, Code2, Loader2, Mail, MapPin, MessagesSquare, Phone, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHeader from '../common/SectionHeader.jsx'
import { profile, sectionCopy } from '../../data/portfolio.js'
import { contactSchema, prepareContactPayload } from '../../services/contactSchema.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

const budgetOptions = ['Placeholder Budget', 'Below ₹10,000', '₹10,000 - ₹25,000', '₹25,000 - ₹50,000', 'Custom Scope']
const projectTypeOptions = ['Portfolio Website', 'Business Website', 'UI/UX Design', 'Full Stack Setup', 'Maintenance']

function ContactSection() {
  const { language, t } = useLanguage()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      budget: '',
      projectType: '',
      message: '',
    },
  })

  const onSubmit = async (values) => {
    const payload = prepareContactPayload(values)
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    try {
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send inquiry.')
      }

      toast.success(t('successTitle'))
      reset()
    } catch (error) {
      console.error('Contact submission failed:', error)
      toast.error(language === 'hi' ? 'संदेश भेजा नहीं जा सका। बाद में फिर प्रयास करें।' : 'Message could not be sent. Please try again.')
    }
  }

  return (
    <section id="contact" className="section-band contact-section">
      <div className="container">
        <SectionHeader {...sectionCopy.contact} align="center" />
        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="contact-card lead-card">
              <p className="eyebrow">{profile.name}</p>
              <h3>{text(profile.role, language)}</h3>
              <p>{text(sectionCopy.contact.subtitle, language)}</p>
            </div>
            <div className="contact-card-list">
              <InfoRow icon={MapPin} label={language === 'hi' ? 'स्थान' : 'Location'} value={text(profile.location, language)} />
              <InfoRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <InfoRow icon={Phone} label={language === 'hi' ? 'फोन' : 'Phone'} value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
              <InfoRow icon={Clock} label={language === 'hi' ? 'उपलब्धता' : 'Availability'} value={language === 'hi' ? 'Open for Freelance · Working hours placeholder' : 'Open for Freelance · Working hours placeholder'} />
            </div>
            <div className="contact-buttons">
              <a className="icon-button tooltip" href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-tooltip="WhatsApp"><MessagesSquare size={18} /></a>
              <a className="icon-button tooltip" href={`mailto:${profile.email}`} aria-label="Email" data-tooltip="Email"><Mail size={18} /></a>
              <a className="icon-button tooltip" href={profile.socials[0].href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-tooltip="GitHub"><Code2 size={18} /></a>
              <a className="icon-button tooltip" href={profile.socials[1].href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><BriefcaseBusiness size={18} /></a>
              <a className="icon-button tooltip" href={profile.socials[2].href} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-tooltip="Instagram"><Camera size={18} /></a>
            </div>
            <div className="map-placeholder" role="img" aria-label={t('mapLabel')}>
              <span>Mahesana</span>
              <strong>Gujarat, India</strong>
            </div>
          </Reveal>

          <Reveal className="contact-form-card" delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-grid">
                <Field label={language === 'hi' ? 'पूरा नाम' : 'Full Name'} error={errors.fullName?.message}>
                  <input {...register('fullName')} autoComplete="name" placeholder="Anshu Kumar Sah" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input {...register('email')} type="email" autoComplete="email" placeholder="you@example.com" />
                </Field>
                <Field label={language === 'hi' ? 'फोन' : 'Phone'} error={errors.phone?.message}>
                  <input {...register('phone')} autoComplete="tel" placeholder="+91 90000 00000" />
                </Field>
                <Field label={language === 'hi' ? 'विषय' : 'Subject'} error={errors.subject?.message}>
                  <input {...register('subject')} placeholder={language === 'hi' ? 'Website project' : 'Website project'} />
                </Field>
                <Field label={language === 'hi' ? 'बजट' : 'Project Budget'} error={errors.budget?.message}>
                  <select {...register('budget')}>
                    <option value="">{language === 'hi' ? 'बजट चुनें' : 'Select budget'}</option>
                    {budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </Field>
                <Field label={language === 'hi' ? 'प्रोजेक्ट प्रकार' : 'Project Type'} error={errors.projectType?.message}>
                  <select {...register('projectType')}>
                    <option value="">{language === 'hi' ? 'प्रकार चुनें' : 'Select type'}</option>
                    {projectTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </Field>
              </div>
              <Field label={language === 'hi' ? 'संदेश' : 'Message'} error={errors.message?.message}>
                <textarea {...register('message')} rows="6" placeholder={language === 'hi' ? 'अपने idea, timeline और goal बताएं...' : 'Tell me about your idea, timeline, and goal...'} />
              </Field>
              <p className="form-note">
                {language === 'hi'
                  ? 'यह backend-ready form है। EmailJS, Formspree या Node API जोड़कर live sending enable किया जा सकता है।'
                  : 'This backend-ready form validates input now and can connect to EmailJS, Formspree, or a Node API later.'}
              </p>
              <Button className="submit-button" type="submit" disabled={isSubmitting} icon={isSubmitting ? Loader2 : Send}>
                {isSubmitting ? t('sending') : t('sendMessage')}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
      {error ? <small role="alert">{error}</small> : null}
    </label>
  )
}

function InfoRow({ icon: IconComponent, label, value, href }) {
  const content = (
    <>
      <IconComponent size={18} aria-hidden="true" />
      <span>{label}</span>
      <strong>{value}</strong>
    </>
  )

  return href ? (
    <a className="info-row" href={href}>{content}</a>
  ) : (
    <div className="info-row">{content}</div>
  )
}

export default ContactSection
