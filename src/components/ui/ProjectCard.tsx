import type { Project } from '../../types/project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} ekran goruntusu`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-4xl opacity-50" aria-hidden="true">
            ?
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2 gap-3">
          <h3 className="font-bold text-gray-900 dark:text-white">{project.title}</h3>
          {project.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
              One Cikan
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-400">
          {project.year} &middot; {project.category}
        </p>
      </div>
    </article>
  )
}

