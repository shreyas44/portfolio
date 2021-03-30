interface EvaluateReturn {
  isValid: boolean
  message?: string
}

export const validateEmail = (email: string): EvaluateReturn => {
  if (typeof email !== "string")
    return { isValid: false, message: "Enter a valid email" }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const match = regex.test(email)

  if (!match) return { isValid: false, message: "Enter a valid email" }

  return { isValid: true }
}

export const validateName = (name: string): EvaluateReturn => {
  if (typeof name !== "string" || name.length < 1)
    return { isValid: false, message: "Enter a valid name" }

  return { isValid: true }
}

export const validateBody = (body: string): EvaluateReturn => {
  if (typeof body !== "string" || body.length < 1)
    return { isValid: false, message: "Enter a valid body" }

  return { isValid: true }
}
