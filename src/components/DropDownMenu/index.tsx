import type { FC } from 'react'
import { useState } from 'react'

export const DropDownMenu: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      <button
        aria-label="Open DropDown Menu"
        onClick={() => setOpen(!isOpen)}
        className="relative rounded-xl bg-blue-400 py-2 px-4 text-white hover:bg-blue-500"
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-md shadow-gray-600">
          <ul>
            <li>
              <button className="h-8 w-full rounded-md hover:bg-gray-300">
                ログイン
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
