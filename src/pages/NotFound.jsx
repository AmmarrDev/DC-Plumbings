import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-px mx-auto flex max-w-7xl flex-col items-center py-32 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-brand-blue">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl uppercase text-navy-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-steel-600">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-blue-gradient px-7 py-3.5 font-display text-sm uppercase tracking-wide text-white shadow-md"
      >
        Back to Home
      </Link>
    </div>
  );
}
