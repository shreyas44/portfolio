import { useEffect, useState } from "react"

const Footer: React.FC = (props) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "contact") setShow(true)
        else setShow(false)
      })
    }

    const observer = new IntersectionObserver(callback, { threshold: 0.5 })
    observer.observe(document.getElementById("contact"))
  }, [])

  return (
    <div
      className={`absolute inset-x-0 bottom-0 flex items-center justify-center h-10 bg-gray-100 transition-all duration-200 ${
        !show ? "opacity-0 select-none" : "opacity-100"
      } `}
    >
      <span className="text-sm font-bold text-gray-500">
        &copy; Shreyas 2021
      </span>
    </div>
  )
}

export default Footer
