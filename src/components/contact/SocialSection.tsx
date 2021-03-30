import GitHub from "../../icons/github"
import Twitter from "../../icons/twitter"
import { FiMail } from "react-icons/fi"
import LinkedIn from "../../icons/linkedin"

const SocialSection: React.FC = (props) => {
  return (
    <div className="flex items-center justify-center gap-x-5 md:flex-col md:items-end md:gap-y-2 ">
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
      <div className="hidden text-gray-600 md:block">{props.text}</div>
      <div className="w-7 h-7 md:w-5 md:h-5">{props.icon}</div>
    </div>
  </a>
)

export default SocialSection
