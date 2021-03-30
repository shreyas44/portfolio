import GitHub from "../icons/github"
import Twitter from "../icons/twitter"
import { FiMail } from "react-icons/fi"
import LinkedIn from "../icons/linkedin"
import { DOMAttributes, useState } from "react"

const ContactSection: React.FC = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const [errors, setErrors] = useState({ name: null, email: null, body: null })
  const [status, setStatus] = useState(null)

  const isSubmitable = !!(name && email && body)

  const handleSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = async (
    event
  ) => {
    event.preventDefault()

    if (!isSubmitable) return

    const sendEmail = await fetch("/api/send-email", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        body,
      }),
    })
    const data = await sendEmail.json()

    if (data.errors) setErrors(errors)
    else setStatus(true)
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex w-10/12">
        <div className="flex flex-col items-end justify-center w-5/12 pr-5 border-r border-gray-300 border-solid gap-y-2">
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
        <div className="w-7/12 pl-5">
          <form className="flex flex-col w-2/3 gap-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-2 py-2 text-sm transition-all border border-gray-300 border-solid rounded-md outline-none focus:border-gray-900"
            />
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-2 text-sm transition-all border border-gray-300 border-solid rounded-md outline-none focus:border-gray-900"
            />
            <textarea
              placeholder="What do you want to ask or talk about?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full h-48 px-2 py-2 text-sm transition-all border border-gray-300 border-solid rounded-md outline-none resize-none focus:border-gray-900"
            />
            <button
              className={`py-2 rounded-md cursor-pointer px-7 w-content transition duration-200 focus:outline-none ${
                isSubmitable
                  ? "bg-green-700 hover:bg-green-800 text-white cursor-pointer"
                  : "text-green-400 bg-green-100 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
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
      <div className="text-gray-600">{props.text}</div>
      <div className="w-5 h-5">{props.icon}</div>
    </div>
  </a>
)

export default ContactSection
