import Head from "next/head";
import WorkExperience from "../component/Education/workExperience";
import Header from "../component/Header/page";
import Skills from "../component/Skills/page"
import Hero from "../component/Hero/Hero"
import Project from "../component/Project/page";
import ContactMe from "../component/ContactMe/page";
import Link from "next/link"; 
import FetchAbout from "../component/About/fetchabout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Afshan Portfolio
        </title>
      </Head>

      {/* Header  */}
      <Header />
      {/* Hero  */}
      <section id="hero" className="snap-start ">
        <Hero />
      </section>
      {/* About  */}
      <section id="about" className="snap-center">
        <FetchAbout/>

      </section>
      {/* Experience  */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills  */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Project  */}
      <section id="project" className="snap-center">
        <Project />
      </section>
      {/* Contact Me  */}
      <section id="ContactMe" className="snap-center">
        <ContactMe />
      </section>
    

      <Link href='#hero'>
        <footer className='stick bottom-2 w-full cursor-pointer'>
          <div className="flex items-center justify-center">
            <img
            src="image.webp"
            alt="hero"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"/>
          </div>
        </footer>
      </Link>

    </div>
  )
}
