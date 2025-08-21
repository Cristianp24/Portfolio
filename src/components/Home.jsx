import { styles } from "../styles";
import perfil from "../assets/perfil.jpeg";
const Hero = () => {

  const openCV = () => {
    window.open('https://drive.google.com/file/d/10aPrhyJbThMNxYpmQ-JDtFD53xVyM_8S/view?usp=drive_link', '_blank');
  }

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        <div className='flex flex-col justify-center items-center mt-5'>
          
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Cristian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Developer Web FullStack      <br className='sm:block hidden' />      <button className='button-cv' onClick={openCV}>View CV</button>       
           
          </p>
           <div className='Img-Home'>
          <img 
            src={perfil} 
            alt="Cristian - Full Stack Developer"
            loading="lazy"
          />
        </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
