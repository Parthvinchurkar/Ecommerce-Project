import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = e => {
    e.preventDefault()
    navigate("/login")
  }

  return (
    <div className="max-w-md mx-auto py-20">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input type="text" required placeholder="Name" className="border p-3 rounded" />
        <input type="email" required placeholder="Email" className="border p-3 rounded" />
        <input type="password" required placeholder="Password" className="border p-3 rounded" />
        <button className="bg-black text-white py-3 rounded">
          Register
        </button>
      </form>
    </div>
  )
}