import React from 'react';
import  './skills.css';
import uiDesign from '../../assets/uiux.png';
import webDesign from '../../assets/webdesign.png';
import appDesign from '../../assets/appdesign.png';

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <span className='skillTitle'>What I Do</span>
        <span className='skillDescription'>As a versatile and innovative designer, I specialize in transforming ideas into captivating digital experiences. With a passion for both form and function, my expertise spans across web design, UI design, and app design.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={uiDesign} alt='UI Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI Design</h2>
                    <p>Elevating user interfaces to new heights, I believe in the power of intuitive and delightful design. From sleek and modern to playful and vibrant, my UI designs prioritize user engagement and satisfaction.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={webDesign} alt='Web Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>Immerse yourself in a world where aesthetics meet functionality. I create visually stunning and user-friendly websites that not only leave a lasting impression but also ensure seamless navigation.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={appDesign} alt='App Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Unleashing the full potential of mobile experiences, I design apps that strike the perfect balance between aesthetics and usability. Whether it's iOS or Android, my goal is to create apps that users love to interact with.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
