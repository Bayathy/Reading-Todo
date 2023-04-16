import type { ComponentProps, FC } from 'react'

export type ButtonProps = {
  label: string
  color?: 'primary' | 'secondary' | 'disabled'
} & ComponentProps<'button'>

const baseStyle = 'rounded-md py-2 px-4 outline-2 outline shadow-lg'
export const Button: FC<ButtonProps> = ({ label, color, ...rest }) => {
  switch (color) {
    case 'primary': {
      return (
        <button
          className={`bg-blue-500 text-white shadow-2xl outline-blue-500 hover:bg-blue-400 ${baseStyle}`}
          {...rest}
        >
          {label}
        </button>
      )
    }
    case 'secondary': {
      return (
        <button
          className={`text-blue-500 outline-blue-300 hover:text-blue-400 hover:outline-blue-200 ${baseStyle}`}
          {...rest}
        >
          {label}
        </button>
      )
    }
    case 'disabled': {
      return (
        <button className={`bg-gray-300 text-white ${baseStyle}`} {...rest}>
          {label}
        </button>
      )
    }
    default: {
      return (
        <button
          className={`text-white outline-blue-500 hover:bg-blue-400 ${baseStyle}`}
          {...rest}
        >
          {label}
        </button>
      )
    }
  }
}
