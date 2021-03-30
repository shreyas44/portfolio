import { ChangeEventHandler, DOMAttributes, useState } from "react"
import { validateBody, validateEmail, validateName } from "../../utils"

const EmailForm: React.FC = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const [initials, setInitials] = useState({
    name: false,
    email: false,
    body: false,
  })
  const [errors, setErrors] = useState({ name: null, email: null, body: null })
  const [status, setStatus] = useState(null)

  const isSubmitable = !!(
    errors.name?.isValid &&
    errors.email?.isValid &&
    errors.body?.isValid
  )

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

    if (data.errors) {
      setErrors(errors)
      return
    }

    setStatus(true)
    setName("")
    setBody("")
    setEmail("")
    setInitials({ name: false, email: false, body: false })
  }

  const getChangeHandler = (field: "name" | "email" | "body") => {
    return (event) => {
      let isValid: boolean, message: string
      switch (field) {
        case "name":
          setName(event.target.value)
          const nameVal = validateName(event.target.value)
          isValid = nameVal.isValid
          message = nameVal.message

          break

        case "email":
          setEmail(event.target.value)
          const emailVal = validateEmail(event.target.value)
          isValid = emailVal.isValid
          message = emailVal.message
          break

        case "body":
          setBody(event.target.value)
          const bodyVal = validateBody(event.target.value)
          isValid = bodyVal.isValid
          message = bodyVal.message
          break
      }

      setErrors({
        ...errors,
        [field]: { isValid, message },
      })
      setInitials({
        ...initials,
        [field]: true,
      })
    }
  }

  return (
    <form className="flex flex-col w-full gap-y-2" onSubmit={handleSubmit}>
      <FormInput
        placeholder="Full Name"
        value={name}
        onChage={getChangeHandler("name")}
        error={initials.name ? !errors?.name?.isValid : false}
        errorMessage={errors?.name?.message}
      />
      <FormInput
        placeholder="Email Address"
        value={email}
        onChage={getChangeHandler("email")}
        error={initials.email ? !errors?.email?.isValid : false}
        errorMessage={errors?.email?.message}
      />
      <FormInput
        placeholder="What do you want to ask?"
        value={body}
        onChage={getChangeHandler("body")}
        textarea={true}
        error={initials.body ? !errors?.body?.isValid : false}
        errorMessage={errors?.body?.message}
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
  const commonCss = `w-full p-2 text-sm transition-all border border-solid rounded-md outline-none ${
    props.error
      ? "border-red-300 focus:border-red-700"
      : "border-gray-300 focus:border-gray-900"
  }`

  return (
    <div className="flex flex-col gap-y-1">
      {props.textarea ? (
        <textarea
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChage as ChangeEventHandler<HTMLTextAreaElement>}
          className={`h-48 resize-none ${commonCss}`}
        />
      ) : (
        <input
          type={props.type || "text"}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChage as ChangeEventHandler<HTMLInputElement>}
          className={commonCss}
        />
      )}
      {props.error && (
        <div className="text-xs text-red-600">{props.errorMessage}</div>
      )}
    </div>
  )
}

export default EmailForm
