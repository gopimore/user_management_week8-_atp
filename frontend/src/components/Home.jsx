import React from "react";

function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2rem bg-linear-to-r from-lime-400 via-emerald-300 to-cyan-300 p-10 shadow-2xl text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-4 text-base font-semibold uppercase tracking-[0.4em] text-gray-700">
            User Management Dashboard
          </p>
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            Build and manage your users with speed.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
            Add new users, view the full list, and inspect user details from a clean and modern interface.
            This app is built to keep your users organized and accessible in one place.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <p className="text-sm uppercase tracking-[0.25em] text-lime-600">Users</p>
          <p className="mt-4 text-5xl font-bold text-gray-900">0+</p>
          <p className="mt-3 text-gray-600">Start adding users to see them in the list.</p>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <p className="text-sm uppercase tracking-[0.25em] text-lime-600">Actions</p>
          <p className="mt-4 text-5xl font-bold text-gray-900">Fast</p>
          <p className="mt-3 text-gray-600">Click AddUser to create records instantly and view them right away.</p>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <p className="text-sm uppercase tracking-[0.25em] text-lime-600">Overview</p>
          <p className="mt-4 text-5xl font-bold text-gray-900">Styled</p>
          <p className="mt-3 text-gray-600">A polished homepage with responsive cards and clear navigation.</p>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900">How it works</h2>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>
            Use the headers above to switch between pages. The AddUser screen creates a new user and automatically
            redirects to the user list after a successful save.
          </p>
          <p>
            The UsersList page fetches all users and shows them in a responsive card grid. Click any user to view
            details on the user page.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;