import { useEffect, useMemo, useState } from 'react'
import type { Category, Project, SortField, SortOrder } from '../../types/project'
import { fetchProjects } from '../../services/projectService'
import { applyFilters } from '../../utils/projectHelpers'
import ProjectFilter from '../forms/ProjectFilter'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectList() {
  // State
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Veri cekme
  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata olustu')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  // Filtrelenmis ve siralanmis veri (memoized)
  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder],
  )

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Projelerim
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Uzerinde calistigim projeler
        </p>

        {/* Hata */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="text-sm text-red-600 underline mt-2"
            >
              Tekrar dene
            </button>
          </div>
        )}

        {/* Filtreler */}
        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filtered.length}
            totalCount={projects.length}
          />
        )}

        {/* Yukleniyor */}
        {loading && (
          <div className="flex justify-center py-12">
            <div
              className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
              role="status"
              aria-label="Yukleniyor"
            />
          </div>
        )}

        {/* Bos durum */}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">Eslesen proje bulunamadi.</p>
        )}

        {/* Proje grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

