import HeroImage from "../assets/heroImage.png";
// import { MdKeyboardArrowRight } from "react-icons/md";
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className="flex flex-col justify-center h-full">
                <h3 className="text-4xl sm:text-7xl text-white">
                    I'm <span className=' underline text-pink-600'>Mohammad Faisal Sayed</span>
                </h3>
                <p className=" text-[25px] text-fuchsia-500  py-10 max-w-md">
                <Typewriter
                    options={{
                        strings: ['A Front-end Web Developer.', '3 times GATE CSE Qualfied with AIR 2152, AIR 4330 in 2022, 2023 respectively', 'Winner of Smart India Hackathon 2019.', 'A Curious Learner.'],
                        autoStart: true,
                        loop: true,
                        delay : 50
                      }}
                      />
                </p>

                <div>
                    {/* <button className='group className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
                        GitHub Portfolio
                        <span className=''>
                            <MdKeyboardArrowRight size={30} className='ml-1'/>
                        </span>
                    </button> */}
                </div>
            </div>
                <div>
                    <img src={HeroImage } alt="My Hero profile"  className='rounded-3xl mx-auto w-2/3 md:w-full'/>
                </div>
        </div>
    </div>
  )
}

export default Home;