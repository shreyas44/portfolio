import GitHub from "../icons/github"
import Twitter from "../icons/twitter"
import { FiMail } from "react-icons/fi"
import LinkedIn from "../icons/linkedin"
import { useState } from "react"

const ContactSection: React.FC = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex w-10/12">
        <div className="flex flex-col items-end justify-center w-6/12 pr-5 border-r border-gray-300 border-solid gap-y-2">
          <SocialContact
            icon={<Twitter />}
            href="https://twitter.com/shreyas4_"
            text="@shreyas4_"
          />
          <SocialContact
            icon={<GitHub />}
            href="https://github.com/shreyas44"
            text="@shreyas44"
          />
          <SocialContact
            icon={<FiMail className="w-full h-full" />}
            href="mailto:shreyas.sreenivasa@gmail.com"
            text="shreyas.sreenivasa@gmail.com"
          />
          <SocialContact
            icon={<LinkedIn />}
            href="https://linkedin.com/in/shreyas-sreenivas"
            text="Shreyas Sreenivas"
          />
        </div>
        <div className="w-6/12 pl-5">
          <div className="flex flex-col w-1/2 gap-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 transition-all border border-gray-300 border-solid rounded-md outline-none focus:border-gray-900"
            />
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="What do you want to ask or talk about?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="h-48 px-3 py-2 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface SocialContactProps {
  icon: React.ReactNode
  href: string
  text: string
}

const SocialContact: React.FC<SocialContactProps> = (props) => (
  <a href={props.href}>
    <div className="flex items-center hover:underline gap-x-2">
      <div>{props.text}</div>
      <div className="w-5 h-5">{props.icon}</div>
    </div>
  </a>
)

export default ContactSection
