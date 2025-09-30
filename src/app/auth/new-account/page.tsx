import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Create Account</h1>

      <div className="flex flex-col">
        <label htmlFor="name">Full Name</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="text"
        />

        <label htmlFor="email">Email Address</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
        />

        <label htmlFor="password">Password</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password"
        />

        <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all">
          Create Account
        </button>

        {/* Divider line */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">OR</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/login"
          className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded transition-all text-center"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
