import { GetStaticProps } from "next"
import Head from "next/head"
import styled from "styled-components"
import Blogs from "../components/Blogs"
import ContactSection from "../components/contact/ContactSection"
import Footer from "../components/Footer"
import NavBar from "../components/navbar/NavBar"
import Projects from "../components/Projects"
import ScrollSection from "../components/ScrollSection"
import Type from "../components/Type"
import { BlogData, getBlogs } from "../lib/blogs"
import { getProjects, ProjectData } from "../lib/projects"

interface Props {
  projects: ProjectData[]
  blogs: BlogData[]
}

const message = `Hi There!
I'm Shreyas, a High School Student from Bangalore, India
Also a TypeScript, React, GraphQL, and Basketball Lover.
Have a Wonderful Day :)`

const SectionsContainer = styled.div`
  scroll-snap-type: y mandatory;
  scrollbar-width: thin;
  scrollbar-color: black white;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    width: 100%;
    border-radius: 3px;
    background-color: black;
  }
`

const Home: React.FC<Props> = ({ projects, blogs }) => {
  return (
    <>
      <Head>
        <title>Shreyas - Portfolio</title>
      </Head>
      <NavBar />
      <SectionsContainer className="h-screen overflow-y-scroll">
        <ScrollSection id="intro">
          <div className="flex items-center justify-center w-full h-full">
            <Type text={message} />
          </div>
        </ScrollSection>
        <ScrollSection id="projects">
          <Projects projects={projects} />
        </ScrollSection>
        <ScrollSection id="blog">
          <Blogs blogs={blogs} />
        </ScrollSection>
        <ScrollSection id="contact">
          <ContactSection />
          <Footer />
        </ScrollSection>
      </SectionsContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects()
  const blogs = getBlogs()

  return {
    props: {
      projects,
      blogs,
    },
  }
}

export default Home
