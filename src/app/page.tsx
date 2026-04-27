"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // auth logic goes here
  }

  return (
    <main className="min-h-screen bg-zinc-950 flex">
      {/* Left — branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-indigo-600 p-12">
        <span className="text-white font-bold text-xl tracking-tight">Life OS</span>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Gazdag&apos;s<br />Life OS
          </h1>
          <p className="text-indigo-200 text-lg max-w-sm">
            Your personal system for goals, habits, and the things that matter most.
          </p>
        </div>
        <p className="text-indigo-300 text-sm">© {new Date().getFullYear()} Life OS</p>
      </div>

      {/* Right — login */}
      <div className="flex flex-1 flex-col items-center justify-center px-8">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-1">
            <span className="lg:hidden text-indigo-400 font-bold text-lg">Life OS</span>
            <h2 className="text-2xl font-bold text-zinc-100">Welcome back, Gazdag</h2>
            <p className="text-sm text-zinc-500">Sign in to your personal OS.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2.5 text-sm font-semibold text-white mt-2"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <button className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
