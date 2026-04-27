import { getSession } from "@/lib/session";
import { logout } from "@/app/actions/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/");

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-800">
        <span className="font-bold text-indigo-400 text-lg">Life OS</span>
        <form action={logout}>
          <button
            type="submit"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Sign out
          </button>
        </form>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-16 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            Good to have you back, {session.email.split("@")[0]} 👋
          </h1>
          <p className="text-zinc-500 mt-1">What are we working on today?</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            { title: "Goals", desc: "Set and track long-term objectives" },
            { title: "Habits", desc: "Build routines that stick" },
            { title: "Reflect", desc: "Review your progress over time" },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-indigo-500 transition-colors cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm text-zinc-500 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
