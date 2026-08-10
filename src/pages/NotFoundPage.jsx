import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-8 py-24 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-300">
        Error 404
      </p>
      <h1 className="mb-4 text-4xl font-bold text-stone-200">Página no encontrada</h1>
      <p className="mb-8 text-slate-400">
        Parece que este camino se perdió después de la aventura.
      </p>
      <Link
        className="rounded-lg bg-violet-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
        to="/"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage
