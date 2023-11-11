import { styles } from "../styles";
import perfil from "../assets/perfil.jpg";
const Hero = () => {

  const openCV = () => {
    window.open('https://drive.google.com/file/d/1yuKhL8z9eR1cD09Sy9zG4E3UuJLcqa-J/view?usp=sharing', '_blank');
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
            Developer Web FullStack      <br className='sm:block hidden' /> 
            <br />          
            <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105' onClick={openCV}>View CV</button>
            
          </p>
          <img src={perfil} className='Img-Home' />
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
