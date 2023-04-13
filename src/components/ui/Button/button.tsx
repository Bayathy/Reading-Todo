import type { ComponentProps, FC } from 'react'

export type ButtonProps = {
  label: string
  color: 'primary' | 'secondary' | 'disabled'
} & ComponentProps<'button'>

export const Button: FC<ButtonProps> = ({ label, color }, props) => {
  switch (color) {
    case 'primary': {
      return (
        <button
          className={
            'rounded-md bg-blue-500 py-2 px-4 text-white outline-2 outline-blue-500 hover:bg-blue-400'
          }
          {...props}
        >
          {label}
        </button>
      )
    }
    case 'secondary': {
      return (
        <button
          className={
            'rounded-md py-2 px-4 text-blue-500 outline outline-2 outline-blue-300 hover:text-blue-400 hover:outline-blue-200'
          }
          {...props}
        >
          {label}
        </button>
      )
    }
    case 'disabled': {
      return (
        <button
          className={'rounded-md bg-gray-300 py-2 px-4 text-white'}
          {...props}
        >
          {label}
        </button>
      )
    }
    default: {
      return (
        <button
          className={'rounded-md bg-blue-500 py-2 px-4 text-white'}
          {...props}
        >
          {label}
        </button>
      )
    }
  }
}
