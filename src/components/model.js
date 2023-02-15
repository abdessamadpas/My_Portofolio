import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {RxDot} from 'react-icons/rx';


const Model = (props) => {
    const {handleClickPopUp} = props;
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
      };
      const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
      };
      const slides = [
        {
          title: 'Slide 1',
          description: 'Description 1',
          url : 'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Slide 2',
          description: 'Description 2',
          url : 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Slide 3',
          description: 'Description 3',
          url : 'https://plus.unsplash.com/premium_photo-1663013281483-b51dbaf57eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
      ]
    
    return (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-white flex  justify-center items-center overflow-y-scroll" >

                <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                <p className='text-2xl text-center mb-8'>{slides[current].title}</p>

                    <div style={{backgroundImage: `url(${slides[current].url})`}} className=' w-full h-full bg-center rounded-2xl bg-cover duration-500' >
                    </div>
                    <div>
                        <AiOutlineCloseCircle  onClick={handleClickPopUp}  className=' group-hover:block absolute text-4xl rounded-full translate-x-20 bg-black/20 cursor-pointer text-white transaction-y-[10%] right-7 top-[2%] duration-300'/>
                    </div>
                    <div>
                        <BsChevronCompactLeft onClick={previousSlide}  className='hidden group-hover:block absolute text-4xl rounded-full translate-x-0 bg-black/20 cursor-pointer text-white transaction-y-[50%] left-7 top-[50%] duration-300'/>
                    </div>
                    <div>
                        <BsChevronCompactRight onClick={nextSlide} className='hidden group-hover:block absolute text-4xl rounded-full translate-x-0 bg-black/20 cursor-pointer text-white transaction-y-[50%] right-7 top-[50%] duration-300' /> 
                    </div>
                    <div className='top-4 py-7 flex gap-3 justify-center overflow-auto'>
                        {slides.map((slide, index) => (
                        <div key={index} className=''>
                            <div onClick={() => setCurrent(index)} ><RxDot className={`h-4 w-4 rounded-full cursor-pointer text-2xl ${current === index && ' bg-gray-500 '}  text-gray-500`} /></div>
                        </div>
                        ))}
                    </div>
                    <div>
                        
                        <p className='text-2xl text-center'>{slides[current].title}</p>
                        <p>Welcome to my developer portfolio! As a developer with a passion for creating innovative solutions,
                            I have spent countless hours honing my skills and expanding my knowledge to provide the best possible 
                            service to my clients. Whether you are a startup or an established enterprise, I am committed to helping
                            you achieve your goals and elevate your business to the next level.</p>


                    </div>
                </div>
            {/* <div className=''>
              <Image className='mx-auto' src={online_assignment} />
            </div> */}
          </div>  
    );
    }
export default Model;