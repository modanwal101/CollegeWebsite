import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useRef } from 'react'
const Testimonials = () => {
  
   const slider = useRef();
   let tx = 0;

  const sliderForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const sliderBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sliderForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={sliderBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Shreya</h3>
                                <span>TCS</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolore sint sit delectus provident id accusantium iure molestiae aliquam est vitae quidem ea voluptatibus recusandae quas, veritatis culpa consequatur perspiciatis reiciendis? Sapiente repellendus voluptas sint.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Abhishek</h3>
                                <span>TCS</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolore sint sit delectus provident id accusantium iure molestiae aliquam est vitae quidem ea voluptatibus recusandae quas, veritatis culpa consequatur perspiciatis reiciendis? Sapiente repellendus voluptas sint.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Aditi</h3>
                                <span>TCS</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolore sint sit delectus provident id accusantium iure molestiae aliquam est vitae quidem ea voluptatibus recusandae quas, veritatis culpa consequatur perspiciatis reiciendis? Sapiente repellendus voluptas sint.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Alok</h3>
                                <span>TCS</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolore sint sit delectus provident id accusantium iure molestiae aliquam est vitae quidem ea voluptatibus recusandae quas, veritatis culpa consequatur perspiciatis reiciendis? Sapiente repellendus voluptas sint.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials;