import { useEffect, useState } from 'react'
import './App.css'

const teachers = [
  { name: 'Mr. Kailash Nath', role: 'Assistant Teacher', shortRole: 'AT' },
  { name: 'Mr. Anuj Kumar Singh', role: 'Assistant Teacher', shortRole: 'AT' },
  { name: 'Mr. Dinesh Kumar', role: 'Assistant Teacher', shortRole: 'AT' },
  { name: 'Mr. Akhilesh', role: 'Assistant Teacher', shortRole: 'AT' },
  { name: 'Mr. Suraj Kumar Patel', role: 'Assistant Teacher', shortRole: 'AT' },
  { name: 'Mr. Rajesh Kumar', role: 'Siksha Mitra', shortRole: 'SM' },
  { name: 'Mr. Sunil Kumar Mishra', role: 'Siksha Mitra', shortRole: 'SM' },
]

const facilities = [
  {
    icon: '📚',
    title: 'Library',
    description: 'A learning resource for students to develop reading habits and expand their knowledge.',
    status: 'Available',
  },
  {
    icon: '💻',
    title: 'Computer Lab',
    description: 'Computer lab facilities are being developed to support digital learning.',
    status: 'Coming Soon',
  },
  {
    icon: '🖥️',
    title: 'Smart Classes',
    description: 'Two smart classrooms support technology-enabled teaching and learning.',
    status: '02 Available',
  },
  {
    icon: '🔬',
    title: 'Science Lab',
    description: 'Science learning supported through practical activities and experiments.',
    status: 'Available',
  },
  {
    icon: '⚽',
    title: 'Playground',
    description: 'Space for sports, physical activities, teamwork and fitness.',
    status: 'Available',
  },
  {
    icon: '💧',
    title: 'Drinking Water',
    description: 'Drinking water facility is available for students and staff.',
    status: 'Available',
  },
  {
    icon: '🚻',
    title: 'Toilets',
    description: 'Toilet facilities are available within the school premises.',
    status: 'Available',
  },
  {
    icon: '⚡',
    title: 'Electricity',
    description: 'Electricity facility is available for the school.',
    status: 'Available',
  },
  {
    icon: '🌐',
    title: 'Internet',
    description: 'Internet connectivity is available to support digital education.',
    status: 'Available',
  },
  {
    icon: '🍱',
    title: 'Mid-Day Meal',
    description: 'Mid-Day Meal facility is available for eligible students.',
    status: 'Available',
  },
  {
    icon: '🏫',
    title: 'Boundary Wall',
    description: 'The school campus has a boundary wall for safety and security.',
    status: 'Available',
  },
  {
    icon: '🍳',
    title: 'Kitchen',
    description: 'A school kitchen facility is available for meal preparation.',
    status: 'Available',
  },
]

const activities = [
  {
    number: '01',
    title: 'Debate and Public Speaking',
    description:
      'Fostering confidence, critical thinking, and effective communication skills through structured discussions and speech presentations.',
  },
  {
    number: '02',
    title: 'Annual Sports Meet',
    description:
      'Promoting physical fitness, sportsmanship, and teamwork through athletics, track-and-field events and competitive sports.',
  },
  {
    number: '03',
    title: 'Science and Innovation Exhibition',
    description:
      'Encouraging practical application of knowledge by showcasing working scientific models and innovative projects.',
  },
  {
    number: '04',
    title: 'Quiz and Academic Competitions',
    description:
      'Enhancing general knowledge, analytical abilities, and academic proficiency through competitive challenges.',
  },
  {
    number: '05',
    title: 'Cultural Dance and Drama',
    description:
      'Nurturing artistic expression, stage confidence, and cultural appreciation through dance performances and theatrical skits.',
  },
  {
    number: '06',
    title: 'Art and Craft Workshops',
    description:
      'Stimulating creativity and fine motor skills through painting, sketching, and hands-on craft creation.',
  },
  {
    number: '07',
    title: 'Music and Choir Practice',
    description:
      'Developing rhythm, harmony, and musical coordination through vocal training and instrumental practice.',
  },
  {
    number: '08',
    title: 'Community Service and Social Outreach',
    description:
      'Instilling social responsibility and civic duty through environmental drives and charitable activities.',
  },
  {
    number: '09',
    title: "Plantation Drive: 'Ek Ped Maa Ke Naam'",
    description:
      'Promoting environmental sustainability and honoring mothers through dedicated tree plantation initiatives.',
  },
  {
    number: '10',
    title: 'Jeevan Shiksha Prakalp',
    description:
      'Dedicated Saturday sessions focused on moral values, character building, and essential practical life skills.',
  },
]

const sports = [
  {
    icon: '🏏',
    title: 'Cricket',
    description:
      'Strategic batting and bowling skills developed through competitive matches.',
  },
  {
    icon: '🤼',
    title: 'Kabaddi',
    description:
      'Physical strength, endurance and quick reflexes through team-based raids.',
  },
  {
    icon: '⚽',
    title: 'Football',
    description:
      'Teamwork, field coordination and goal-scoring abilities through competitive play.',
  },
  {
    icon: '🏐',
    title: 'Volleyball',
    description:
      'Team rotation, serving and defensive techniques developed through regular practice.',
  },
  {
    icon: '🏃',
    title: 'Kho-Kho',
    description:
      'Speed, agility and tactical movement to outmaneuver opponents.',
  },
  {
    icon: '🏃‍♂️',
    title: 'Running',
    description:
      'Sprint and long-distance track events supported through consistent practice.',
  },
]

const gallery = [
  { src: '/images/school-building.jpeg', title: 'School Building', alt: 'Composite School Fajulha school building' },
  { src: '/images/classroom-activity.jpeg', title: 'Classroom Activity', alt: 'Students participating in a classroom activity' },
  { src: '/images/certificate-1.jpeg', title: 'Student Achievement', alt: 'Student receiving a certificate at school' },
  { src: '/images/certificate-2.jpeg', title: 'Student Recognition', alt: 'Student receiving recognition from school staff' },
  { src: '/images/certificate-3.jpeg', title: 'Academic Recognition', alt: 'Student receiving an academic certificate' },
  { src: '/images/midday-meal-cooking.jpeg', title: 'Mid-Day Meal Preparation', alt: 'School meal being prepared on campus' },
  { src: '/images/midday-meal.jpeg', title: 'Mid-Day Meal', alt: 'School meal preparation activity' },
  { src: '/images/campus-life.jpeg', title: 'Campus Life', alt: 'Students and staff participating in campus activities' },
  { src: '/images/students-campus.jpeg', title: 'Students on Campus', alt: 'Students gathered on the school campus' },
  { src: '/images/school-team-work.jpeg', title: 'School Team', alt: 'School staff working together on school activities' },
  { src: '/images/school-staff.jpeg', title: 'School Community', alt: 'School community activity' },
]


function getPageFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  const allowedPages = ['home', 'about', 'teachers', 'facilities', 'activities', 'sports', 'gallery', 'contact']
  return allowedPages.includes(hash) ? hash : 'home'
}

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleNavigation = () => {
      setPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'auto' })
      setSelectedPhoto(null)
    }

    window.addEventListener('hashchange', handleNavigation)
    window.addEventListener('popstate', handleNavigation)
    return () => {
      window.removeEventListener('hashchange', handleNavigation)
      window.removeEventListener('popstate', handleNavigation)
    }
  }, [])

  const navigate = (event, targetPage) => {
    event.preventDefault()
    const nextHash = `#/${targetPage}`
    if (window.location.hash !== nextHash) {
      window.history.pushState({}, '', nextHash)
    }
    setPage(targetPage)
    setSelectedPhoto(null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const pageLink = (targetPage) => (event) => navigate(event, targetPage)

  return (
    <div className={`app page-${page}`}>

      {/* Header */}
      <header className="header">
        <div className="header-inner">

          <a href="#/home" onClick={pageLink('home')} className="brand">
            <div className="brand-logo image-logo"><img src="/images/school-logo.png" alt="Composite School Fajulha logo" /></div>

            <div className="brand-text">
              <strong>Composite School Fajulha</strong>
              <span>Rampur, Jaunpur, Uttar Pradesh</span>
            </div>
          </a>

          <button
  className={`menu-toggle ${menuOpen ? 'active' : ''}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
>
  <span></span>
  <span></span>
  <span></span>
</button>

<nav className={`navbar ${menuOpen ? 'open' : ''}`}>
  <a href="#/home" onClick={(e) => { pageLink('home')(e); setMenuOpen(false) }}>Home</a>
  <a href="#/about" onClick={(e) => { pageLink('about')(e); setMenuOpen(false) }}>About</a>
  <a href="#/teachers" onClick={(e) => { pageLink('teachers')(e); setMenuOpen(false) }}>Teachers</a>
  <a href="#/facilities" onClick={(e) => { pageLink('facilities')(e); setMenuOpen(false) }}>Facilities</a>
  <a href="#/activities" onClick={(e) => { pageLink('activities')(e); setMenuOpen(false) }}>Activities</a>
  <a href="#/sports" onClick={(e) => { pageLink('sports')(e); setMenuOpen(false) }}>Sports</a>
  <a href="#/gallery" onClick={(e) => { pageLink('gallery')(e); setMenuOpen(false) }}>Gallery</a>
  <a href="#/contact" onClick={(e) => { pageLink('contact')(e); setMenuOpen(false) }}>Contact</a>
</nav>

        </div>
      </header>

      <main className="page-main">

        {/* Hero */}
        <section id="home" className="hero-section page-section page-home">
          <div className="hero-overlay"></div>

          <div className="hero-inner">

            <div className="hero-content">
              <span className="eyebrow">WELCOME TO OUR SCHOOL</span>

              <h1>
                Composite School
                <span> Fajulha</span>
              </h1>

              <p className="hero-location">
                Block Rampur • District Jaunpur • Uttar Pradesh
              </p>

              <p className="hero-description">
                A learning community committed to quality education,
                character building, creativity, physical development,
                and the overall growth of every student.
              </p>

              <div className="hero-actions">
                <a href="#/about" onClick={pageLink('about')} className="btn btn-primary">
                  Explore Our School
                </a>

                <a href="#/contact" onClick={pageLink('contact')} className="btn btn-light">
                  Contact School
                </a>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="school-emblem"><img src="/images/school-logo.png" alt="Composite School Fajulha logo" /></div>

              <h3>Composite School Fajulha</h3>

              <p>Classes 1 to 8</p>

              <div className="hero-mini-stats">
                <div>
                  <strong>134</strong>
                  <span>Students</span>
                </div>

                <div>
                  <strong>07</strong>
                  <span>Teachers</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-section page-section page-home">
          <div className="stats-grid">

            <div className="stat-card">
              <span className="stat-icon">🎓</span>
              <div>
                <strong>134</strong>
                <span>Students</span>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">👨‍🏫</span>
              <div>
                <strong>07</strong>
                <span>Teachers</span>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">📖</span>
              <div>
                <strong>1–8</strong>
                <span>Classes</span>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">🏫</span>
              <div>
                <strong>01</strong>
                <span>School</span>
              </div>
            </div>

          </div>
        </section>

        {/* About */}
        <section id="about" className="section about-section page-section page-about">
          <div className="section-container">

            <div className="section-heading left">
              <span className="eyebrow">ABOUT OUR SCHOOL</span>
              <h2>Learning Today, Building Tomorrow</h2>
            </div>

            <div className="about-grid">

              <div className="about-photo">
                <img
                  src="/images/school-building.jpeg"
                  alt="Composite School Fajulha building"
                />
                <div className="about-photo-caption">
                  <strong>Our School Campus</strong>
                  <span>Composite School Fajulha</span>
                </div>
              </div>

              <div className="about-content">

                <p>
                  Composite School Fajulha is located in Village Fajulha,
                  Post Rampur, District Jaunpur, Uttar Pradesh. The school
                  provides education from Class 1 to Class 8 and focuses on
                  academic learning as well as the overall development of
                  students.
                </p>

                <p>
                  With dedicated teachers, smart classrooms, science
                  learning, sports activities and a range of co-curricular
                  programs, the school aims to create a positive and
                  engaging learning environment.
                </p>

                <div className="school-details">

                  <div>
                    <span>UDISE Code</span>
                    <strong>09641904302</strong>
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>Fajulha, Rampur, Jaunpur</strong>
                  </div>

                  <div>
                    <span>Classes</span>
                    <strong>Class 1 to Class 8</strong>
                  </div>

                  <div>
                    <span>PIN Code</span>
                    <strong>222203</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Headmaster */}
        <section className="headmaster-section page-section page-about">
          <div className="section-container">

            <div className="headmaster-card">

              <div className="headmaster-photo">
                <span>AKD</span>
              </div>

              <div className="headmaster-content">
                <span className="eyebrow">SCHOOL ADMINISTRATION</span>
                <h2>Mr. Arun Kumar Dubey</h2>
                <h3>Headmaster</h3>

                <p>
                  The school administration is committed to creating an
                  effective, disciplined and supportive environment where
                  every student gets opportunities to learn, participate
                  and grow.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Students */}
        <section className="section students-section page-section page-home">
          <div className="section-container">

            <div className="section-heading">
              <span className="eyebrow">OUR STUDENTS</span>
              <h2>Student Strength</h2>
              <p>
                Our school community includes students from Class 1 to Class 8.
              </p>
            </div>

            <div className="student-cards">

              <div className="student-card">
                <span>🎓</span>
                <strong>134</strong>
                <p>Total Students</p>
              </div>

              <div className="student-card">
                <span>👦</span>
                <strong>60</strong>
                <p>Boys</p>
              </div>

              <div className="student-card">
                <span>👧</span>
                <strong>74</strong>
                <p>Girls</p>
              </div>

            </div>

          </div>
        </section>

        {/* Teachers */}
        <section id="teachers" className="section teachers-section page-section page-teachers">
          <div className="section-container">

            <div className="section-heading">
              <span className="eyebrow">OUR TEAM</span>
              <h2>Teachers & Staff</h2>
              <p>
                Dedicated educators working together for student development.
              </p>
            </div>

            <div className="teachers-grid">

              {teachers.map((teacher) => (
                <article className="teacher-card" key={teacher.name}>

                  <div className="teacher-avatar">
                    {teacher.name
                      .split(' ')
                      .slice(1)
                      .map((word) => word[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>

                  <div className="teacher-info">
                    <h3>{teacher.name}</h3>
                    <p>{teacher.role}</p>
                    <span>{teacher.shortRole}</span>
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* Facilities */}
        <section id="facilities" className="section facilities-section page-section page-facilities">
          <div className="section-container">

            <div className="section-heading">
              <span className="eyebrow">SCHOOL FACILITIES</span>
              <h2>Learning & Campus Facilities</h2>
              <p>
                Facilities available to support learning, safety,
                health and student development.
              </p>
            </div>

            <div className="facilities-grid">

              {facilities.map((facility) => (
                <article className="facility-card" key={facility.title}>

                  <div className="facility-icon">
                    {facility.icon}
                  </div>

                  <div className="facility-content">
                    <div className="facility-title-row">
                      <h3>{facility.title}</h3>
                      <span className={
                        facility.status === 'Coming Soon'
                          ? 'status coming'
                          : 'status'
                      }>
                        {facility.status}
                      </span>
                    </div>

                    <p>{facility.description}</p>
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="section activities-section page-section page-activities">
          <div className="section-container">

            <div className="section-heading">
              <span className="eyebrow">CO-CURRICULAR ACTIVITIES</span>
              <h2>Activities & Programs</h2>
              <p>
                Opportunities that encourage confidence, creativity,
                knowledge, teamwork and life skills.
              </p>
            </div>

            <div className="activities-grid">

              {activities.map((activity) => (
                <article className="activity-card" key={activity.number}>

                  <div className="activity-number">
                    {activity.number}
                  </div>

                  <div>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* Sports */}
        <section id="sports" className="section sports-section page-section page-sports">
          <div className="section-container">

            <div className="section-heading">
              <span className="eyebrow">SPORTS & PHYSICAL EDUCATION</span>
              <h2>Sports Activities</h2>
              <p>
                Encouraging fitness, teamwork, discipline and sportsmanship.
              </p>
            </div>

            <div className="sports-grid">

              {sports.map((sport) => (
                <article className="sport-card" key={sport.title}>

                  <div className="sport-icon">{sport.icon}</div>

                  <h3>{sport.title}</h3>

                  <p>{sport.description}</p>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* Achievements */}
        <section className="section achievements-section page-section page-home">
          <div className="section-container">

            <div className="section-heading">
              <span className="eyebrow">ACHIEVEMENTS</span>
              <h2>Student Achievements</h2>
              <p>
                Recognizing academic performance, sportsmanship,
                leadership and co-curricular excellence.
              </p>
            </div>

            <div className="achievement-grid">

              <article className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <h3>Academic Excellence</h3>
                <p>
                  Consistently achieved top rankings in class examinations
                  and received certificates of merit for outstanding
                  academic performance.
                </p>
              </article>

              <article className="achievement-card">
                <div className="achievement-icon">🥇</div>
                <h3>Sports Excellence</h3>
                <p>
                  Awarded trophies and medals for exceptional skill,
                  agility and sportsmanship in inter-school and
                  intra-school competitions.
                </p>
              </article>

              <article className="achievement-card">
                <div className="achievement-icon">🌟</div>
                <h3>Co-curricular Excellence</h3>
                <p>
                  Recognized for active participation and excellence in
                  co-curricular activities, leadership roles and
                  community service initiatives.
                </p>
              </article>

            </div>

          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section gallery-section page-section page-gallery">
          <div className="section-container">

            <div className="section-heading">
              <span className="eyebrow">SCHOOL GALLERY</span>
              <h2>Campus & Activities</h2>
              <p>
                A glimpse of learning, student activities, achievements and
                everyday life at Composite School Fajulha.
              </p>
            </div>

            <div className="gallery-grid real-gallery">
              {gallery.map((photo) => (
                <button
                  className="gallery-photo"
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`Open ${photo.title}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <span>{photo.title}</span>
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section page-section page-contact">
          <div className="section-container">

            <div className="contact-grid">

              <div className="contact-main">
                <span className="eyebrow">CONTACT US</span>

                <h2>Composite School Fajulha</h2>

                <p>
                  Village Fajulha, Post Rampur,
                  District Jaunpur, Uttar Pradesh - 222203
                </p>

                <div className="contact-buttons">

                  <a
                    href="tel:+917266850820"
                    className="contact-button"
                  >
                    📞 Call School
                  </a>

                  <a
                    href="mailto:csfajulha@gmail.com"
                    className="contact-button"
                  >
                    ✉️ Email School
                  </a>

                </div>
              </div>

              <div className="contact-details">

                <div className="contact-detail">
                  <span>📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>
                      Village Fajulha, Post Rampur,
                      District Jaunpur, Uttar Pradesh
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span>📮</span>
                  <div>
                    <strong>PIN Code</strong>
                    <p>222203</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span>📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>csfajulha@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span>📱</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+91 72668 50820</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span>🔢</span>
                  <div>
                    <strong>UDISE Code</strong>
                    <p>09641904302</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      {selectedPhoto && (
        <div
          className="photo-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="photo-modal-close"
            type="button"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
          >
            ×
          </button>
          <div className="photo-modal-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <strong>{selectedPhoto.title}</strong>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">

          <div className="footer-grid">

            <div>
              <div className="footer-brand">
                <div className="brand-logo image-logo"><img src="/images/school-logo.png" alt="Composite School Fajulha logo" /></div>

                <div>
                  <strong>Composite School Fajulha</strong>
                  <span>Rampur, Jaunpur, Uttar Pradesh</span>
                </div>
              </div>

              <p className="footer-description">
                A school community committed to quality education,
                student development and meaningful learning experiences.
              </p>
            </div>

            <div>
              <h3>Quick Links</h3>

              <div className="footer-links">
                <a href="#/home" onClick={pageLink('home')}>Home</a>
                <a href="#/about" onClick={pageLink('about')}>About</a>
                <a href="#/teachers" onClick={pageLink('teachers')}>Teachers</a>
                <a href="#/facilities" onClick={pageLink('facilities')}>Facilities</a>
                <a href="#/activities" onClick={pageLink('activities')}>Activities</a>
                <a href="#/gallery" onClick={pageLink('gallery')}>Gallery</a>
                <a href="#/contact" onClick={pageLink('contact')}>Contact</a>
              </div>
            </div>

            <div>
              <h3>School Information</h3>

              <div className="footer-info">
                <p>UDISE: 09641904302</p>
                <p>Classes: 1 to 8</p>
                <p>Students: 134</p>
                <p>Teachers: 07</p>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © 2026 Composite School Fajulha. All Rights Reserved.
            </p>

            <p>
              Block Rampur, District Jaunpur, Uttar Pradesh
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App