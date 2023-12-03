import React from 'react';
import './works.css';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';

const Works = () => {
  return (
    <section id="works">
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDescription'>Every project is a canvas for innovation. I combine technical proficiency with a keen eye for design to deliver solutions that not only meet but exceed expectations. Each pixel is meticulously placed, and every line of code is purposeful.</span>
        <div className='worksImgs'>
            <img src={work1} alt='work1' className='worksImg'/>
            <img src={work2} alt='work2' className='worksImg'/>
            <img src={work3} alt='work3' className='worksImg'/>
        </div>
        {/*<button className='workBtn'>See More</button>*/}
    </section>
  )
}

export default Works;
