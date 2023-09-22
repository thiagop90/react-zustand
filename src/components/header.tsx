import { useCurrentLesson, useStore } from '../zustand-store'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()

  const isLoading = useStore((store) => store.isLoading)

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        <h1 className="h-5 w-36 animate-pulse rounded bg-zinc-700" />
        <span className="h-4 w-44 animate-pulse rounded bg-zinc-700" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo: {currentModule?.title}
      </span>
    </div>
  )
}
