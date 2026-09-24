import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContentContainer from '@/components/ContentContainer';

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

// 2. Info Card Variants (Slide in dari kiri)
const infoCardVariants = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

// 3. Staggered list untuk item info kontak
const infoListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: luxuryEase },
  },
};

// 4. Form Card Variants (Slide in dari kanan)
const formCardVariants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
  };

  return (
    <section
      id='kontak'
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
            Kontak
          </span>
          <h2 className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Hubungi Kami
          </h2>
          <p className='text-slate-600 text-sm mt-2'>
            Diskusikan kebutuhan proyek Anda bersama tim engineer Sandbox.
          </p>
        </motion.div>

        {/* 2 Kolom Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {/* Info Kontak */}
          <motion.div
            variants={infoCardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
            className='bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300'
          >
            <div>
              <h3 className='text-lg font-bold text-[#112352] mb-4'>
                Informasi Kontak
              </h3>

              <motion.div
                variants={infoListVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='space-y-4 text-sm text-slate-600'
              >
                <motion.div variants={infoItemVariants} className='flex items-start gap-3 group'>
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <MapPin
                      size={18}
                      className='text-main shrink-0 mt-0.5'
                    />
                  </motion.div>
                  <span>TB Simatupang No. 45, Cilandak, Jakarta Selatan</span>
                </motion.div>

                <motion.div variants={infoItemVariants} className='flex items-center gap-3 group'>
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Mail
                      size={18}
                      className='text-main shrink-0'
                    />
                  </motion.div>
                  <span>halo@sandbox.id</span>
                </motion.div>

                <motion.div variants={infoItemVariants} className='flex items-center gap-3 group'>
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Phone
                      size={18}
                      className='text-main shrink-0'
                    />
                  </motion.div>
                  <span>+62 812-8899-7700</span>
                </motion.div>
              </motion.div>
            </div>

            <div className='mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500'>
              Senin - Jumat : 08.30 - 17.30 WIB
            </div>
          </motion.div>

          {/* Form Sederhana */}
          <motion.form
            variants={formCardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
            onSubmit={handleSubmit}
            className='bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300'
          >
            <div>
              <label className='block text-xs font-semibold text-slate-700 mb-1'>
                Nama Lengkap
              </label>
              <input
                type='text'
                required
                placeholder='Nama Anda'
                className='w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-main transition-colors'
              />
            </div>

            <div>
              <label className='block text-xs font-semibold text-slate-700 mb-1'>
                Email
              </label>
              <input
                type='email'
                required
                placeholder='email@domain.com'
                className='w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-main transition-colors'
              />
            </div>

            <div>
              <label className='block text-xs font-semibold text-slate-700 mb-1'>
                Pesan
              </label>
              <textarea
                required
                rows={3}
                placeholder='Tuliskan pesan Anda...'
                className='w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-main resize-none transition-colors'
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              type='submit'
              className='w-full py-2.5 px-4 rounded-lg bg-main hover:bg-[#dc7300] text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition shadow-md hover:shadow-orange-500/20'
            >
              <span>Kirim Pesan</span>
              <Send size={14} />
            </motion.button>
          </motion.form>
        </div>
      </ContentContainer>
    </section>
  );
}

export default ContactSection;