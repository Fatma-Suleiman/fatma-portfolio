import Navbar from '/src/components/Navbar';
import Hero from '/src/components/Hero';
 import About from '../Pages/AboutPage';
  import Project from '../Pages/ProjectPage';
   import Contact from '../Pages/ContactPage';



export function HomePage() {
    return (
        <>
            <Navbar />
            
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>

            <section id="project">
                <Project/>
            </section>

            <section id="contact">
                <Contact />
            </section> 
           
         
        </>
    );
}