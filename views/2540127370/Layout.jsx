import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div className="p-6 font-sans">
      <header className="flex justify-between items-center bg-blue-600 text-white p-4 rounded shadow">
        <h1 className="text-xl font-bold">Retno Shintya Hariyani — 2540127370</h1>

        <nav className="space-x-4">
          <Link to="/2540127370" className="hover:underline">Home</Link>
          <Link to="/2540127370/details" className="hover:underline">Details</Link>
        </nav>
      </header>

      <main className="mt-6">
        <Outlet />
      </main>
    </div>
  )
}
