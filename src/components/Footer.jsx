import footerImg from '../assets/Footer.webp'

const services = [
  { name: 'Laser Skin Resurfacing', link: '#laser' },
  { name: 'Microneedling', link: '#micro' },
  { name: 'Chemical Peels', link: '#peels' },
  { name: 'PRP Skin Rejuvenation', link: '#prp-skin' },
]

const ADDRESS = '1st Floor, 3049, 80 Feet Rd, next to Madurai Idly Hotel, 8th Cross, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008'
const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5039905580797!2d77.6421753798436!3d12.97159885471062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bc9f820e97%3A0x4b0bee8799e233bf!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20IndiraNagar!5e1!3m2!1sen!2sin!4v1795261881926!5m2!1sen!2sin'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1A1A1A] text-white/70">

      {/* ── Logo + tagline ── */}
      <div className="flex items-center gap-4 px-5 pt-7 pb-5 border-b border-white/10">
        <img src={footerImg} alt="Grohair" loading="lazy" className="h-14 w-auto object-contain shrink-0 bg-white rounded-lg p-1.5" />
        <p className="text-[13px] leading-relaxed text-white/60">
          Restore your confidence today with our expert skin care solutions.<br />
          Book your consultation now!
        </p>
      </div>

      {/* ── Services + Contact ── */}
      <div className="flex flex-col gap-6 px-5 py-6 border-b border-white/10">
        <div>
          <h4 className="text-[14px] font-semibold text-white mb-3">Our Services</h4>
          <ul className="grid grid-cols-2 gap-2.5">
            {services.map((s) => (
              <li key={s.name}>
                <a href={s.link} className="text-[13px] text-white/55 hover:text-red-400 active:text-red-400 transition-colors">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[14px] font-semibold text-white mb-1">Contact Us</h4>
          <a href="mailto:indiranagar@adgrohair.com" className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-red-400 active:text-red-400 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>indiranagar@adgrohair.com</span>
          </a>
          <a href="tel:+918497856789" className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-red-400 active:text-red-400 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+91 84978 56789</span>
          </a>
          <div className="flex items-start gap-2.5 text-[13px] text-white/55">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0 mt-0.5">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{ADDRESS}</span>
          </div>
        </div>
      </div>

      {/* ── Our Clinics ── */}
      <div id="locations" className="px-5 py-6 border-b border-white/10">
        <h4 className="text-[14px] font-semibold text-white mb-4">Our Clinics</h4>
        <h5 className="text-[15px] font-extrabold text-white mb-2.5">Indiranagar</h5>
        <div className="aspect-[16/10] relative rounded-xl overflow-hidden">
          <iframe
            src={MAP_EMBED_URL}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Grohair Indiranagar Location"
          />
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="px-5 py-4 text-center">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-2 text-[12px] text-white/50">
          <a href="https://www.facebook.com/profile.php?id=61554126093238" target="_blank" rel="noreferrer" className="hover:text-red-400">Hair Facebook</a>
          <a href="https://www.instagram.com/adgrohairclinictirupur" target="_blank" rel="noreferrer" className="hover:text-red-400">Hair Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61554045335997" target="_blank" rel="noreferrer" className="hover:text-red-400">Skin Facebook</a>
          <a href="https://www.instagram.com/adgloskinclinictirupur" target="_blank" rel="noreferrer" className="hover:text-red-400">Skin Instagram</a>
        </div>
        <p className="text-[11px] text-white/20">© 2026 GroHair &amp; GloSkin. All rights reserved.</p>
      </div>
    </footer>
  )
}
