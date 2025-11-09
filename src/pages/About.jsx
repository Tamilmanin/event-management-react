import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section>
      <div className="card p-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">About EventManage</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          EventManage is a lightweight event management application built with React and Tailwind CSS.
          It demonstrates essential features like browsing events, creating new events, and managing them from a personal dashboard.
        </p>
      </div>

      <article className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 card p-6 prose lg:prose-lg">
          <h2>What you can do</h2>
          <p>
            Whether you're organizing meetups, workshops, or conferences, EventManage helps you list events,
            provide details to attendees, and keep track of who is coming. The app is intentionally simple and
            focuses on the most common workflows for small teams and communities.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Browse and search events by title, description or location.</li>
            <li>Create events (sign in to access creation and dashboard features).</li>
            <li>View event details, category, date and attendee count.</li>
          </ul>

          <h3>Design & Tech</h3>
          <p>
            Built with React, React Router and Tailwind CSS for quick iteration and responsive layouts.
            Image placeholders use picsum.photos for demo visuals.
          </p>
        </div>

        <aside className="card p-6">
          <img src={`https://picsum.photos/seed/about/800/400`} alt="About" className="w-full h-36 object-cover rounded-md" />
          <div className="mt-4">
            <div className="text-sm text-gray-600">Version</div>
            <div className="font-semibold">1.0.0</div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-600">Author</div>
            <div className="font-semibold">EventManage Team</div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Link to="/events" className="btn btn-outline">Explore Events</Link>
            <Link to="/create" className="btn btn-primary">Create an Event</Link>
            <a href="mailto:hello@example.com" className="text-sm text-gray-500 mt-2">Contact us</a>
          </div>
        </aside>
      </article>
    </section>
  )
}
