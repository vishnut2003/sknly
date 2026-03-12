import DefaultSection from "@/layouts/default-section"
import { RiMenuFill, RiSearchLine } from "@remixicon/react"
import AdminDashboardActions from "./header-actions"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"

const AdminDashboardHeader = ({ setSidebarOpen }: {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>,
}) => {

  const searchBarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    const handleKeyPress = (event: globalThis.KeyboardEvent) => {
      if (searchBarRef.current) {
        if (event.key === "k" && event.ctrlKey) {
          event.preventDefault()
          searchBarRef.current.focus();
        } else if (event.key === "Escape") {
          event.preventDefault();
          searchBarRef.current.blur();
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => window.removeEventListener("keydown", handleKeyPress)

  }, [])

  return (
    <DefaultSection
      outerClassName="w-full bg-background"
      className="py-3"
    >
      <div
        className="flex items-center justify-between gap-3"
      >
        <div
          className="max-w-75 w-full flex items-center gap-2"
        >
          <div
            className="md:hidden"
          >
            <button
              onClick={() => {
                setSidebarOpen(true)
              }}
            >
              <RiMenuFill
                size={25}
              />
            </button>
          </div>
        </div>

        <div
          className="min-w-max"
        >
          <AdminDashboardActions />
        </div>
      </div>
    </DefaultSection>
  )
}

export default AdminDashboardHeader