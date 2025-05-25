
import sectioncImg1 from "./assets/Section-c/img-1.png";
import sectioncImg2 from "./assets/section-c/img-2.png";
import sectioncImg3 from "./assets/section-c/img-3.png";
import sectioncImg4 from "./assets/section-c/img-4.png";
import sectioncImg5 from "./assets/section-c/img-5.png";
import sectioncImg6 from "./assets/section-c/img-6.png";
import sectioncImg7 from "./assets/section-c/img-7.png";
import sectioncImg8 from "./assets/section-c/img-8.png";  
const Sectionc = () => {
  return (
    <div>
      <section className="mt-[60px] lg:mt-[150px] w-[90%] m-auto md:w-[80%] mb-[60px]" id="solution">
        <h2 className="text-3xl font-bold text-green-600 md:text-4xl lg:text-5xl">Solution</h2>
        <p className="border-2 rounded-full border-[#84d1a6] mb-6 mt-2 lg:mb-12 lg:mt-4"></p>

        <div className="grid sm:grid-cols-4 sm:w-[95%] md:-[90%] m-auto">
            <div className="w-full bg-[#009f32] sm:bg-[#00bf54] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg1} alt="image1" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Green <br />Energy</p>
            </div>
            <div className="w-full bg-[#00bf54] sm:bg-[#009f32] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg2} alt="image2" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Automated <br />agricolture</p>
            </div>
            <div className="w-full bg-[#009f32] sm:bg-[#00bf54] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg3} alt="image3" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Depuration <br /> rain water</p>
            </div>
            <div className="w-full bg-[#00bf54] sm:bg-[#009f32] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg4} alt="image4" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Mosquito <br /> Prevention</p>
            </div>
            <div className="w-full bg-[#009f32] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg5} alt="image5" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Electrical <br /> mobility</p>
            </div>
            <div className="w-full bg-[#00bf54] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg6} alt="image6" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Solar charging <br /> station</p>
            </div>
            <div className="w-full bg-[#009f32] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg7} alt="image7" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Recycling <br /> Plastic</p>
            </div>
            <div className="w-full bg-[#00bf54] h-[350px] sm:h-[250px] md:h-[350px] flex justify-center items-center flex-col gap-3">
                <img className="w-[175px] sm:w-[75px] md:w-[140px]" src={sectioncImg8} alt="image8" />
                <p className="text-2xl text-white sm:text-[15px] md:text-[22px] md:font-bold text-center">Cleaning <br /> Ocean</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Sectionc;