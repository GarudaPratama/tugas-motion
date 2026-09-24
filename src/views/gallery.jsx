import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContentContainer from '@/components/ContentContainer';

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'rnd', label: 'R&D Sprint' },
  { id: 'launch', label: 'Rilis Produk' },
];

const galleryItems = [
  {
    id: 1,
    category: 'workshop',
    title: 'Cloud Architecture Masterclass',
    location: 'Bandung',
    date: 'Feb 2026',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    category: 'launch',
    title: 'Peluncuran GovSmart Portal',
    location: 'Jakarta',
    date: 'Jan 2026',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'rnd',
    title: 'AI Engineering Hackathon',
    location: 'Yogyakarta',
    date: 'Des 2025',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    category: 'workshop',
    title: 'Cyber Security Drill',
    location: 'Jakarta',
    date: 'Nov 2025',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    category: 'launch',
    title: 'Go-Live Sandbox ERP v3',
    location: 'Surabaya',
    date: 'Okt 2025',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    category: 'rnd',
    title: 'Healthcare UX Sprint',
    location: 'Bandung',
    date: 'Sep 2025',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
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

// 2. Filter Bar Variants
const filterContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: luxuryEase, delay: 0.1 },
  },
};

// 3. Card Variants (Masuk, Keluar, dan Berganti Kategori)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: luxuryEase },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 10,
    transition: { duration: 0.3, ease: luxuryEase },
  },
};

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id='galeri'
      className='py-16 bg-slate-50 overflow-hidden'>
      <ContentContainer isRelative={false}>
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className='text-center max-w-xl mx-auto mb-8'
        >
          <span className='text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-main'>
            Galeri
          </span>
          <h2 className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Aktivitas & Dokumentasi
          </h2>
          <p className='text-slate-600 text-sm mt-2'>
            Dokumentasi workshop inovasi dan rilis teknologi Sandbox.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={filterContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className='flex flex-wrap items-center justify-center gap-2 mb-8'
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-main text-white shadow-md shadow-orange-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                variants={cardVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                whileHover={{ y: -6 }}
                className='group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300'
              >
                <div className='aspect-video w-full overflow-hidden relative'>
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: luxuryEase }}
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-4'>
                  <div className='flex items-center justify-between text-[11px] text-slate-500 mb-1'>
                    <span>{item.date}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className='font-bold text-sm text-[#112352] group-hover:text-main transition-colors duration-200'>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </ContentContainer>
    </section>
  );
}

export default GallerySection;