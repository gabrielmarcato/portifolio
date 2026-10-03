import { useEffect, useState } from 'react'
import { profile, stats, skills, experience, education, languages } from './data.js'

const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">GM<span>.</span></a>
        <button className="menu-btn" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
        <p className="eyebrow">Olá, eu sou</p>
        <h1>{profile.name}</h1>
        <p className="hero__role">
          {profile.role} <span className="hero__stack">{profile.stack}</span>
        </p>
        <p className="hero__lead">
          Crio e publico aplicativos iOS e Android com foco em performance, arquitetura escalável e experiência do usuário.
        </p>
        <div className="hero__meta">
          <span>📍 {profile.location}</span>
          <span className="dot">●</span>
          <span className="available">{profile.availability}</span>
        </div>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contato">Entrar em contato</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        </div>
        <div className="photo-frame">
          <img src={`${import.meta.env.BASE_URL}foto.jpg`} alt={`Foto de ${profile.name}`} width="400" height="400" />
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section__title reveal">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <p className="about reveal">{profile.summary}</p>
      <div className="stats">
        {stats.map((s) => (
          <div className="stat reveal" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="habilidades" title="Habilidades técnicas">
      <div className="skills">
        {skills.map((g) => (
          <div className="card reveal" key={g.title}>
            <h3>{g.title}</h3>
            <ul className="tags">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experiencia" title="Experiência profissional">
      <div className="timeline">
        {experience.map((e) => (
          <article className="timeline__item reveal" key={e.company + e.period}>
            <span className="timeline__dot" />
            <div className="card">
              <div className="timeline__head">
                <h3>{e.role}</h3>
                <span className="period">{e.period}</span>
              </div>
              <p className="company">{e.company} · {e.place}</p>
              <ul>
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Education() {
  return (
    <Section id="formacao" title="Formação e idiomas">
      <div className="two-col">
        <div className="card reveal">
          <h3>{education.course}</h3>
          <p className="company">{education.school} · {education.place}</p>
          <span className="period">{education.period}</span>
        </div>
        <div className="card reveal">
          <h3>Idiomas</h3>
          <ul className="langs">
            {languages.map((l) => (
              <li key={l.name}><strong>{l.name}</strong> <span>{l.level}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contato" title="Vamos conversar?">
      <p className="about reveal">
        Estou aberto a novas oportunidades e projetos, com disponibilidade para trabalho remoto.
      </p>
      <div className="contacts">
        <a className="card contact reveal" href={`mailto:${profile.email}`}>
          <span>E-mail</span><strong>{profile.email}</strong>
        </a>
        <a className="card contact reveal" href={`https://wa.me/${profile.phoneLink}`} target="_blank" rel="noreferrer">
          <span>WhatsApp</span><strong>{profile.phone}</strong>
        </a>
        <a className="card contact reveal" href={profile.linkedin} target="_blank" rel="noreferrer">
          <span>LinkedIn</span><strong>gabrielomarcato</strong>
        </a>
        <a className="card contact reveal" href={profile.github} target="_blank" rel="noreferrer">
          <span>GitHub</span><strong>gabrielmarcato</strong>
        </a>
      </div>
    </Section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  )
}
