
import businessImg1 from "./assets/BusinessModel/img-1.png";
import businessImg2 from "./assets/BusinessModel/img-2.png";
import businessImg3 from "./assets/BusinessModel/img-3.png";
import businessImg4 from "./assets/BusinessModel/img-4.png";
import businessImg5 from "./assets/BusinessModel/img-5.png";


const businessModel = () =>{

    return(
         <div>
        <section className="mt-[60px] lg:mt-[150px] w-[90%] m-auto md:w-[80%] mb-[60px]" id="businessModel">
            <h2 className="text-3xl font-bold text-green-600 md:text-4xl lg:text-5xl">Business Model</h2>
            <p className="border-2 rounded-full border-[#84d1a6] mb-6 mt-2 lg:mb-12 lg:mt-4"></p>
            <p className='text-center text-2xl text-[#00ae47] lg:mt-5'>Crowd-funding ownership of</p>

            <div>
                <div className='flex text-center justify-center my-10 gap-5 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-36'>
                    <figure className='w-fit flex justify-center items-center flex-col gap-3'>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={businessImg1} alt="img1" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Fruits and Vegetable <br /> Sale Out</figcaption>
                    </figure>
                    <figure className='flex justify-center items-center flex-col gap-3'>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={businessImg2} alt="img2" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Electrical Distribution <br />Profit</figcaption>
                    </figure>
                    <figure className='flex items-center flex-col gap-3'>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={businessImg3} alt="img3" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Plastic Recycling</figcaption>
                    </figure>
                </div>

                <div className='flex text-center justify-center my-10 gap-10 md:gap-14 lg:gap-20 xl:gap-36'>
                    <figure className='flex justify-center items-center flex-col gap-3'>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={businessImg4} alt="img4" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Electrical Mobility <br /> Rental</figcaption>
                    </figure>
                    <figure className='flex items-center flex-col gap-3'>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={businessImg5} alt="img5" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Mosquito System</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
    )
}
export default businessModel;