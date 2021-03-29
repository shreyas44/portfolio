import Head from "next/head"
import NavBar from "../components/NavBar"
import ScrollSection from "../components/ScrollSection"
import Type from "../components/Type"

const message = `Hi There!
I'm Shreyas, a High School Student from Bangalore, India
Also a TypeScript, React, GraphQL, and Basketball Lover.
Have a Wonderful Day :)`

export default function Home() {
  return (
    <>
      <Head>
        <title>Shreyas - Portfolio</title>
      </Head>
      <NavBar />
      <ScrollSection>
        <div className="flex items-center justify-center w-full h-full">
          <Type text={message} />
        </div>
      </ScrollSection>
    </>
  )
}
