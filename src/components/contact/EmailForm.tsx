import { ChangeEventHandler, DOMAttributes, useState } from "react"

const EmailForm: React.FC = (props) => {
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
    <form className="flex flex-col w-full gap-y-3" onSubmit={handleSubmit}>
      <FormInput
        placeholder="Full Name"
        value={name}
        onChage={(e) => setName(e.target.value)}
      />
      <FormInput
        placeholder="Email Address"
        value={email}
        onChage={(e) => setEmail(e.target.value)}
      />
      <FormInput
        placeholder="What do you want to ask?"
        value={body}
        onChage={(e) => setBody(e.target.value)}
        textarea={true}
      />

      <button
        className={`py-2 text-center w-full rounded-md cursor-pointer px-7 md:w-content transition duration-200 focus:outline-none ${
          isSubmitable
            ? "bg-green-700 hover:bg-green-800 text-white cursor-pointer"
            : "text-green-400 bg-green-100 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  )
}

interface FormInputProps {
  value: string
  placeholder: string
  onChage:
    | ChangeEventHandler<HTMLInputElement>
    | ChangeEventHandler<HTMLTextAreaElement>
  errorMessage?: string
  error?: boolean
  type?: string
  textarea?: boolean
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const commonCss =
    "w-full p-2 text-sm transition-all border border-gray-300 border-solid rounded-md outline-none focus:border-gray-900"

  if (props.textarea)
    return (
      <textarea
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChage as ChangeEventHandler<HTMLTextAreaElement>}
        className={`h-48 resize-none ${commonCss}`}
      />
    )

  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChage as ChangeEventHandler<HTMLInputElement>}
      className={commonCss}
    />
  )
}

export default EmailForm
