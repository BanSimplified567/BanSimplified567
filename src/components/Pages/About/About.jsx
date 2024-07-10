import Email from '../Extra/Email/Email';
import { AboutExperience, AboutSkills } from './AboutSkills';

import { NavLink } from 'react-router-dom';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import Footer from '../Extra/Footer/Footer';
import './About.css';

const About = () => {
   return (
      <div className="container about">
         <article className="aboutContainer">
            <section className="aboutInformation">
               <h1 className="aboutTitle">NICE TO MEET YOU! I&#39;M BANBAN 👋👨‍💻</h1>
               <p className="aboutSemiTitle">
                  As an aspiring Front-end Developer , I&#39;m passionate about continuous learning
                  and growth. I eagerly explore new technologies and embrace challenges that expand
                  my skills.
                  <a
                     href="./Blacklion567.pdf"
                     className="aboutResume"
                     download
                     title="Welcome Back"
                  >
                     Download Resume
                  </a>
               </p>

               <p className="aboutParagraph">
                  <span className="navbarTitle">1+ year</span> learning Web development
               </p>
               <NavLink
                  className="aboutButton"
                  to="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/"
               >
                  CONNECT ON LINKEDIN
                  <svg
                     width="25"
                     height="15"
                     fill="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M12 4L10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                  </svg>
               </NavLink>
            </section>
            <section>
               <img className="aboutImages" src="./banban.jpg" alt="banban" />
            </section>
         </article>
         <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         <article className="aboutArticle section">
            <div className="aboutArticleSection">
               <section className="aboutFirstPersonBio">
                  <h1 className="aboutTitleArticle">First Person Bio</h1>
                  <figure className="aboutArticleList">
                     {[
                        "Hello! I'm Jade Ivan V. Brincola, also known as BanBan, from Sibonga, Cebu, Philippines. 👋",
                        "I'm currently pursuing a Bachelor of Science in Information Technology (Programming) in the Philippines. 👨‍💻",
                        'I enjoy mastering the art of creating dynamic and intuitive websites. 🐾',
                        'Driven to make a positive impact through digital experiences in the tech industry. 🌊',
                        'Jade Ivan V. Bringcola, was born on September 10, 2002, in Manila, Quezon City. 🌳',
                     ].map((text, index) => (
                        <p key={index} className="aboutSemiTitle">
                           <img src={flames} width="10px" alt="flames" /> {text}
                        </p>
                     ))}
                  </figure>
               </section>
            </div>
            <div className="aboutArticleSection">
               <section className="aboutThirdPersonBio">
                  <h1 className="aboutTitleArticle">Third Person Bio</h1>
                  <figure className="aboutArticleList">
                     {[
                        'Jade Ivan V. Brincola, also known as BanBan, from Sibonga, Cebu, Philippines. 👋',
                        'His curiosity about how websites work led him to explore and study the web development roadmap. 👨‍💻',
                        'Mastering the art of crafting dynamic and intuitive websites, Jade finds joy in creating seamless digital experiences. 🐾',
                        'Motivated by a passion for technology and driving positive change in the tech industry. 🌊',
                        'Actively explores emerging web technologies and industry trends to stay innovative. 🌳',
                     ].map((text, index) => (
                        <p key={index} className="aboutSemiTitle">
                           <img src={flames} width="10px" alt="flames" /> {text}
                        </p>
                     ))}
                  </figure>
               </section>
            </div>
         </article>

         <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         <article className="section">
            <section>
               <div className="aboutSkillsOfMine">
                  <img src={flames} width="26px" alt="flames" />
                  <h1 className="aboutTitle border">Skills Of Mine 👨‍💻</h1>
                  <img src={flames} width="26px" alt="flames" />
               </div>

               <p className="aboutSemiTitle">
                  Hello!👋 I am an enthusiastic Front-end Developer passionate about creating
                  dynamic and engaging web experiences. With a solid foundation in front-end
                  technologies, I strive to build websites and applications that are not only
                  visually appealing but also highly functional and user-friendly. My expertise lies
                  primarily in the front-end domain, where I employ a variety of tools and
                  technologies to bring designs to life. Here are some of the skills I utilize:
               </p>
            </section>

            <section className="aboutSkills section">
               <AboutSkills />
            </section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <section className="aboutExperience section">
               <AboutExperience />
            </section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         </article>
         <section>
            <Email />
         </section>
         <section className="section">
            <Footer />
         </section>
      </div>
   );
};

export default About;
