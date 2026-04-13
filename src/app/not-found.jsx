import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center">
        
        <h1 className="text-7xl font-extrabold mb-4 text-green-500">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-medium transition duration-300">
            Go Home
          </button>
        </Link>

      </div>
    </div>
  );
}