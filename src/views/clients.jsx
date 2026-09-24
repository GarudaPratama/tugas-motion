import { motion } from 'framer-motion';
import { Star, Quote, Building } from 'lucide-react';
import ContentContainer from '@/components/ContentContainer';

const partners = [
  { name: 'Kementerian Kominfo', category: 'Pemerintah' },
  { name: 'Pemprov Jabar', category: 'Pemda' },
  { name: 'Bank Mandiri', category: 'Finansial' },
  { name: 'Telco Global', category: 'Telekomunikasi' },
  { name: 'Biofarma', category: 'Healthcare' },
  { name: 'Nusantara Logistics', category: 'Supply Chain' },
];

const testimonials = [
  {
    id: 1,
    name: 'Bambang Sudibyo, M.T.',
    role: 'Kabid TIK & SPBE, Dinas Kominfo',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content:
      'Sistem perizinan terpadu Sandbox memangkas birokrasi dari 5 hari kerja menjadi kurang dari 4 jam. Sangat stabil dan andal.',
  },
  {
    id: 2,
    name: 'Amanda Wijaya',
    role: 'CTO, Nusantara Fintek',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content:
      'Arsitektur microservices yang dibangun mampu menangani lonjakan 10.000 transaksi per menit tanpa lag saat event besar.',
  },
  {
    id: 3,
    name: 'Dr. Hendra Gunawan',
    role: 'Direktur IT, Mitra Husada Group',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content:
      'Implementasi Rekam Medis terintegrasi SATUSEHAT berjalan lancar di 4 rumah sakit kami. Sangat intuitif bagi tenaga medis.',
  },
];

// Easing kustom bertema mewah
const luxuryEase = [0.22, 1, 0.36, 1];

// 1. Header Variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

// 2. Partner Badges Container (Staggering efek domino)
const partnerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const partnerBadgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: luxuryEase },
  },
};

// 3. Testimonial Grid Container
const testimonialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const testimonialCardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: luxuryEase },
  },
};

function ClientsSection() {
  return (
    <section
      id='klien-kami'
      className='py-16 bg-white overflow-hidden'>
      <ContentContainer isRelative={false}>
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className='text-center max-w-xl mx-auto mb-10'
        >
          <span className='text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-main'>
            Klien & Mitra
          </span>
          <h2 className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Dipercaya Pemimpin Industri
          </h2>
          <p className='text-slate-600 text-sm mt-2'>
            Kolaborasi teknologi bersama instansi pemerintah dan industri.
          </p>
        </motion.div>

        {/* Partner Badges */}
        <motion.div
          variants={partnerContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-wrap items-center justify-center gap-3 mb-12'
        >
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={partnerBadgeVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 shadow-sm hover:border-orange-200 hover:bg-orange-50/30 transition-colors cursor-pointer'
            >
              <Building
                size={16}
                className='text-main'
              />
              <div>
                <p className='text-xs font-bold text-slate-800'>{p.name}</p>
                <p className='text-[10px] text-slate-500'>{p.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={testimonialContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6'
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={testimonialCardVariants}
              whileHover={{ y: -6 }}
              className='group bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative'
            >
              <Quote
                size={28}
                className='text-orange-200 group-hover:text-main group-hover:scale-110 transition-all duration-300 absolute top-4 right-4'
              />

              <div>
                <div className='flex items-center gap-1 mb-3'>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className='fill-amber-400 text-amber-400'
                    />
                  ))}
                </div>

                <p className='text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic'>
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className='flex items-center gap-3 pt-3 border-t border-slate-200 group-hover:border-slate-100 transition-colors'>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  src={item.avatar}
                  alt={item.name}
                  className='w-9 h-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-main/20 transition-all'
                />
                <div>
                  <h4 className='text-xs font-bold text-[#112352] group-hover:text-main transition-colors'>
                    {item.name}
                  </h4>
                  <p className='text-[11px] text-slate-500'>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  );
}

export default ClientsSection;