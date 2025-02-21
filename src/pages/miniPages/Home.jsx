import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgShape from '../../images/HeroImg/heroBG.png'; //herobg.png
import CoupleBG from '../../images/HeroImg/heroCoupleBG.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isFirstButtonHovered, setIsFirstButtonHovered] = useState(false);
  const [isSecondButtonHovered, setIsSecondButtonHovered] = useState(false);

  const userImages =[
    { id: 1, image: 'https://ogletree.com/app/uploads/people/alexandre-abitbol.jpg' },
    { id: 2, image: 'https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s' },
    { id: 4, image: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg' }


  ]
  

  // Animation variants with responsive adjustments
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Button component for reusability and consistency
  const ActionButton = ({ primary, children, onHoverChange }) => (
    <motion.button 
      onHoverStart={() => onHoverChange(true)}
      onHoverEnd={() => onHoverChange(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full
        flex items-center justify-center gap-3
        text-base md:text-lg transition-all duration-300
        ${primary ? 
          'bg-[#0066FF] text-white shadow-lg hover:shadow-xl' : 
          'bg-white text-[#0066FF] border border-[#0066FF] shadow-sm hover:shadow-md'}
      `}
    >
      {children}
    </motion.button>
  );

  return (
    <section className="relative min-h-screen overflow-hidden z-[-50] font-[Poppins]">
      {/* Background Setup */}
      <div className="fixed inset-0 ">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg2/90 from-[0%] via-bg1/85 via-[50%] to-bg2/90 to-[95%] animate-gradient" />
        
        {/* Background Shape */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={bgShape} 
            alt="Hero Shape" 
            className="w-full h-full object-cover pointer-events-none select-none
                     md:object-center object-[75%_center]"
          />
        </motion.div>

        {/* Couple Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0"
        >
          <img 
            src={CoupleBG} 
            alt="wedding couple" 
            className="w-full h-full object-cover pointer-events-none select-none
                     md:object-center object-[75%_center]"
          />
        </motion.div>
      </div>

      {/* Content Layer */}
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="relative min-h-screen z-10 flex flex-col"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 
                      pt-8 sm:pt-12 md:pt-16 lg:pt-32 
                      flex flex-col flex-grow">
          {/* Main Content */}
          <motion.div 
            variants={fadeInUp} 
            className="max-w-xl lg:max-w-2xl relative z-20
                      mt-4 sm:mt-8 md:mt-0"
          >
            {/* Heading */}
            <motion.h1 
              variants={fadeInUp}
              className="text-[#1B4B79] text-4xl sm:text-5xl lg:text-[72px] 
                       font-bold leading-tight mb-4 sm:mb-6 mt-10 xl:mt-0 lg:mt-0 md:mt-40"
            >
              Find your <br className="hidden sm:block" /> Photographer
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-[#64748B] text-base sm:text-lg max-w-[530px] 
                       mb-8 sm:mb-12 leading-relaxed"
            >
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-16"
            >
              <ActionButton 
                primary 
                onHoverChange={setIsFirstButtonHovered}
              >
                Find a photographer
                <motion.div
                  animate={{ x: isFirstButtonHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </ActionButton>

              <ActionButton 
                onHoverChange={setIsSecondButtonHovered}
              >
                Find Works
                <motion.div
                  animate={{ x: isSecondButtonHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </ActionButton>
            </motion.div>

            {/* Users Section */}
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-4 sm:gap-8 mb-8 sm:mb-0 xl:mt-60 lg:mt-0 md:mt-20"
            >
              <div className="flex -space-x-4">
                {userImages.map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full 
                             border-2 border-white overflow-hidden 
                             shadow-sm hover:scale-110 
                             transition-transform duration-300"
                    style={{ zIndex: 4 - index }}
                  >
                    <img 
                      src={userImages[index].image} 
                      alt={`User ${item}`}
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                ))}
              </div>

              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-[#1B4B79] text-3xl sm:text-5xl font-bold"
                >
                  100+
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-[#64748B] text-sm sm:text-base font-medium"
                >
                  Satisfied users
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonial Card */}
          <AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="lg:absolute bottom-8 sm:bottom-12 right-4 sm:right-8 lg:right-24 
                        max-w-sm bg-white/90 backdrop-blur-sm rounded-3xl 
                        p-4 sm:p-6 mt-4 lg:mt-0
                        shadow-lg border border-white/20
                        hover:shadow-xl hover:-translate-y-1 
                        transition-all duration-300"
            >
              <p className="text-[#64748B] text-sm mb-4">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4" 
                    alt="Maal Gamage"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="text-[#1B4B79] font-semibold">Maal Gamage</div>
                  <div className="text-[#64748B] text-sm">business analyst</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;