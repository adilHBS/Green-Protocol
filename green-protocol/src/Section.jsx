import sectionImage1 from "./assets/Section/img-1.png";
import sectionImage2 from "./assets/Section/img-2.png";
import sectionImage3 from "./assets/Section/img-3.png";
import daseh from "./assets/Section/daseh.png";

const Section = () => {
    return (
         <div className="bg-[#00ae47]">
        <section className="lg:h-[88vh] lg:gap-6 flex justify-center items-center hero-container">
            <div>
                <h2 className="text-center text-[50px] font-bold text-white mb-[70px] mt-[10px] hero-heading">Green Protocol</h2>
                <div className="flex items-center md:gap-3">
                    <img className="lg:h-[160px] border border-[#00ae47]" src={sectionImage1} alt="Hero Image 1" id="hero-images"/>
                    <img className="w-20 daseh" src={daseh} alt="dashes" />
                    <img className="lg:h-[160px] border border-[#00ae47]" src={sectionImage2} alt="Hero Image 2" id="hero-images"/>
                    <img className="w-20 daseh" src={daseh} alt="dashes" />
                    <img className="lg:h-[160px] border border-[#00ae47]" src={sectionImage3} alt="Hero Image 3" id="hero-images"/>
                </div>
            </div>
        </section>
    </div>
    );


}
export default Section;