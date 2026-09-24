import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Layers, Cpu, ShieldCheck } from 'lucide-react';
import ContentContainer from '@/components/ContentContainer';

const services = [
  {
    id: 'web-dev',
    title: 'Web & Enterprise Portal',
    desc: 'Pengembangan portal interaktif, dashboard analitik, dan sistem backend terintegrasi.',
    icon: Globe,
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    desc: 'Aplikasi mobile iOS & Android dengan UI/UX mulus dan integrasi cloud real-time.',
    icon: Smartphone,
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    desc: 'Modernisasi infrastruktur cloud, pipeline CI/CD otomatis, dan arsitektur microservices.',
    icon: Cloud,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    desc: 'Desain produk berpusat pada pengguna, prototype interaktif, dan scalable design system.',
    icon: Layers,
  },
  {
    id: 'ai-automation',
    title: 'AI & Data Intelligence',
    desc: 'Integrasi automasi cerdas, machine learning, dan chatbot untuk efisiensi bisnis.',
    icon: Cpu,
  },
  {
    id: 'security-audit',
    title: 'Cyber Security & Audit',
    desc: 'Penetration testing, audit keamanan aplikasi, dan implementasi enkripsi standar industri.',
    icon: ShieldCheck,
  },
];

// Easing kustom bertema mewah
const luxuryEase = [0.22, 1, 0.36, 1];

// 1. Variants untuk Header Section
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

// 2. Variants Parent Grid (Mengatur efek muncul berurutan/Stagger)
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Jeda 0.1 detik antar kartu
      delayChildren: 0.1,
    },
  },
};

// 3. Variants Kartu Individu
const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: luxuryEase },
  },
};

function ServicesSection() {
  return (
    <section id='layanan' className='py-16 bg-slate-50'>
      <ContentContainer isRelative={false}>
        
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className='text-center max-w-xl mx-auto mb-10'
        >
          <span className='text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-main'>
            Layanan
          </span>
          <h2 className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Solusi Rekayasa Digital
          </h2>
          <p className='text-slate-600 text-sm mt-2'>
            Layanan teknologi untuk skalabilitas dan keandalan sistem Anda.
          </p>
        </motion.div>

        {/* Grid Layanan */}
        <motion.div
          variants={gridContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3, ease: 'easeOut' } 
                }}
                className='group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300'
              >
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='w-10 h-10 rounded-lg bg-orange-50 text-main flex items-center justify-center mb-4 group-hover:bg-main group-hover:text-white transition-colors duration-300'
                >
                  <Icon size={20} />
                </motion.div>
                <h3 className='text-base font-bold text-[#112352] mb-1.5 group-hover:text-main transition-colors duration-300'>
                  {item.title}
                </h3>
                <p className='text-slate-600 text-xs sm:text-sm leading-relaxed'>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </ContentContainer>
    </section>
  );
}

export default ServicesSection;