import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import heroImg from '@/assets/hero-img.png';
import { handleSmoothScroll } from '@/utils/functions';
import ContentContainer from '@/components/ContentContainer';

const stats = [
  { value: '150+', label: 'Proyek Selesai' },
  { value: '99.8%', label: 'Kepuasan Klien' },
  { value: '50+', label: 'Mitra Aktif' },
  { value: '24/7', label: 'Dukungan' },
];

// 💡 Easing kustom bertema mewah (smooth & silky)
const luxuryEase = [0.22, 1, 0.36, 1];

// Variants untuk sekuens muncul berurutan di kolom kiri
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

// Variants untuk stats
const statsContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: luxuryEase,
      staggerChildren: 0.1,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: luxuryEase },
  },
};

function HeroSection() {
  return (
    <header id='beranda' className='py-12 md:py-20'>
      <ContentContainer isRelative={false} className='flex flex-col gap-12'>
        <div className='flex flex-col lg:flex-row items-center gap-10'>
          
          {/* Kolom Kiri: Teks & Tombol (Animasi Staggered) */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left'
          >
            <motion.span
              variants={itemVariants}
              className='w-fit mx-auto lg:mx-0 px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-main'
            >
              Digital Solution Partner
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className='text-3xl md:text-5xl font-bold text-[#112352] leading-tight'
            >
              Explore IT, <span className='text-main'>Inspire You</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='text-slate-600 text-base max-w-lg mx-auto lg:mx-0'
            >
              Sandbox membantu instansi pemerintah dan swasta dalam mengembangkan produk teknologi informasi dan transformasi digital.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex items-center justify-center lg:justify-start gap-3 pt-2'
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 17 }}
                onClick={(e) => handleSmoothScroll(e, '/#layanan')}
                className='flex items-center gap-2 px-6 py-2.5 rounded-full bg-main hover:bg-[#dc7300] text-white text-sm font-semibold transition cursor-pointer shadow-md hover:shadow-orange-500/20'
              >
                <span>Lihat Layanan</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onClick={(e) => handleSmoothScroll(e, '/#kontak')}
                className='flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition cursor-pointer'
              >
                <MessageSquare size={16} />
                <span>Kontak</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Gambar Hero (Animasi Fade-in + Melayang/Floating terus-menerus) */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <motion.img
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0], // Efek melayang perlahan
              }}
              transition={{
                opacity: { duration: 1, ease: luxuryEase },
                scale: { duration: 1, ease: luxuryEase },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
              src={heroImg}
              alt='Hero'
              className='max-w-105 w-full h-auto object-contain drop-shadow-xl'
            />
          </div>

        </div>

        {/* Stats Strip (Animasi Scroll Viewport + Staggered Cards) */}
        <motion.div
          variants={statsContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-xl text-center border border-slate-100 shadow-sm'
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={statItemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='p-2 rounded-lg transition-colors hover:bg-white hover:shadow-sm'
            >
              <h3 className='text-2xl font-bold text-main'>{item.value}</h3>
              <p className='text-xs text-slate-500 mt-1'>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </header>
  );
}

export default HeroSection;