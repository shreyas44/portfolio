import EmailForm from "./EmailForm"
import SocialSection from "./SocialSection"

const ContactSection: React.FC = (props) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col-reverse justify-between w-11/12 -space-y-12 h-3/6 md:w-10/12 md:flex-row md:h-auto md:space-y-0">
        <div className="flex justify-center border-gray-300 border-solid md:justify-end md:w-5/12 md:pr-5 md:border-r">
          <SocialSection />
        </div>
        <div className="md:w-7/12 md:pl-5">
          <div className="md:w-2/3">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
