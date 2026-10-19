import { useState } from 'react'
import { business, results, courses, reasons, faculty, testimonials, batches } from './data'

const waLink = (text) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Courses', '#courses'],
    ['Results', '#results'],
    ['Faculty', '#faculty'],
    ['Batches', '#batches'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="header">
      <div className="wrap header-row">
        <a href="#top" className="logo" aria-label={`${business.name} home`}>
          <span className="logo-mark">A</span>
          <span>{business.name}</span>
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav" className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-gold btn-sm" href="#contact" onClick={() => setOpen(false)}>
            Book a free demo class
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-place">Teaching in KPHB, Kukatpally since 2012</p>
          <h1>Coaching for JEE and NEET, in batches small enough to notice every student.</h1>
          <p className="lead">
            Weekly tests, evening doubt sessions and monthly reports for parents.
            Classes for Class 8 to 12 and droppers.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Book a free demo class</a>
            <a className="btn btn-ghost" href={waLink('Hi, I would like to know about admissions at Akshara Academy.')} target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
          <ul className="hero-facts">
            <li><strong>30</strong> students per batch</li>
            <li><strong>14 yrs</strong> average faculty experience</li>
            <li><strong>Every Sunday</strong> exam-pattern test</li>
          </ul>
        </div>

        <aside className="board" aria-label="Results 2026">
          <div className="board-head">
            <span className="board-title">Results 2026</span>
            <span className="board-pin" aria-hidden="true" />
          </div>
          <ol className="board-list">
            {results.map((r) => (
              <li key={r.name}>
                <span className="board-name">{r.name}</span>
                <span className="board-exam">{r.exam}</span>
                <span className="board-rank">{r.rank}</span>
              </li>
            ))}
          </ol>
          <a className="board-link" href="#results">See all results</a>
        </aside>
      </div>
    </section>
  )
}

function Courses() {
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <h2>Courses</h2>
        <p className="section-lead">Three programmes, each with its own faculty team and test schedule.</p>
        <div className="courses">
          {courses.map((c) => (
            <article className="course" key={c.id}>
              <h3>{c.name}</h3>
              <dl className="course-meta">
                <div><dt>For</dt><dd>{c.who}</dd></div>
                <div><dt>Duration</dt><dd>{c.duration}</dd></div>
              </dl>
              <ul className="ticks">
                {c.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a className="text-link" href={waLink(`Hi, please share fee details for the ${c.name} course.`)} target="_blank" rel="noreferrer">
                Get fee details on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section section-ink">
      <div className="wrap why">
        <h2>How we teach</h2>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-item" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="section" id="results">
      <div className="wrap">
        <h2>Our 2026 results</h2>
        <div className="stats">
          <div><strong>48</strong><span>students cleared JEE Main</span></div>
          <div><strong>11</strong><span>qualified for IITs</span></div>
          <div><strong>37</strong><span>scored 600+ in NEET</span></div>
          <div><strong>92%</strong><span>Class 10 students scored above 9 GPA</span></div>
        </div>
        <div className="quotes">
          {testimonials.map((t) => (
            <figure className="quote" key={t.name}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faculty() {
  return (
    <section className="section section-soft" id="faculty">
      <div className="wrap">
        <h2>Faculty</h2>
        <p className="section-lead">Each subject is led by a senior teacher who also takes the doubt sessions.</p>
        <div className="faculty">
          {faculty.map((f) => {
            const initials = f.name.replace('Dr. ', '').split(' ').map((w) => w[0]).join('').slice(0, 2)
            return (
              <article className="person" key={f.name}>
                <div className="avatar" aria-hidden="true">{initials}</div>
                <div>
                  <h3>{f.name}</h3>
                  <p className="person-subject">{f.subject}, {f.years} years</p>
                  <p className="person-from">{f.from}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Batches() {
  return (
    <section className="section" id="batches">
      <div className="wrap">
        <h2>Upcoming batches</h2>
        <p className="section-lead">Admissions are open. Seats fill in order of registration.</p>
        <div className="table-wrap">
          <table className="batches">
            <thead>
              <tr><th>Course</th><th>Starts</th><th>Timing</th><th>Size</th></tr>
            </thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.course}>
                  <td data-label="Course">{b.course}</td>
                  <td data-label="Starts">{b.starts}</td>
                  <td data-label="Timing">{b.timing}</td>
                  <td data-label="Size">{b.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: courses[0].name, message: '' })
  const [error, setError] = useState('')

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return setError('Enter the student’s name.')
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10))) {
      return setError('Enter a 10-digit mobile number.')
    }
    setError('')
    const text =
      `Demo class request\nName: ${form.name}\nPhone: ${form.phone}\nCourse: ${form.course}` +
      (form.message.trim() ? `\nMessage: ${form.message}` : '')
    window.open(waLink(text), '_blank', 'noopener')
  }

  return (
    <section className="section section-soft" id="contact">
      <div className="wrap contact">
        <div>
          <h2>Book a free demo class</h2>
          <p className="section-lead">
            Attend one class before you decide. Fill this in and your request opens in WhatsApp,
            ready to send. We reply within the same working day.
          </p>
          <form className="form" onSubmit={submit} noValidate>
            <label>
              Student name
              <input value={form.name} onChange={update('name')} autoComplete="name" />
            </label>
            <label>
              Mobile number
              <input value={form.phone} onChange={update('phone')} inputMode="tel" autoComplete="tel" placeholder="98765 43210" />
            </label>
            <label>
              Course
              <select value={form.course} onChange={update('course')}>
                {courses.map((c) => <option key={c.id}>{c.name}</option>)}
              </select>
            </label>
            <label>
              Message (optional)
              <textarea rows="3" value={form.message} onChange={update('message')} placeholder="Current class, preferred timing, any questions" />
            </label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="btn btn-gold" type="submit">Send request on WhatsApp</button>
          </form>
        </div>

        <div className="visit">
          <h3>Visit us</h3>
          <p>{business.address}</p>
          <dl className="hours">
            {business.hours.map((h) => (
              <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>
            ))}
          </dl>
          <p className="contact-lines">
            <a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <iframe
            className="map"
            title="Map to Akshara Academy"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`}
          />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} {business.name}, Kukatpally, Hyderabad</p>
        <p className="demo-note">Demo website designed and built by Hrushikesh C. Names and results are sample content.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#courses">Skip to courses</a>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Why />
        <Results />
        <Faculty />
        <Batches />
        <Contact />
      </main>
      <Footer />
      <a
        className="wa-float"
        href={waLink('Hi, I would like to know about admissions at Akshara Academy.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm5.8 14.03c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.13.07-1.83-.11a16.6 16.6 0 0 1-1.65-.61c-2.9-1.25-4.8-4.17-4.94-4.36-.15-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.3-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.65-.15.27.1 1.7.8 1.99.95.29.15.49.22.56.34.07.12.07.7-.17 1.38Z"/>
        </svg>
      </a>
    </>
  )
}
