import type { ComponentProps, FC, PropsWithChildren } from 'react'

export type ButtonProps = {
  color?: 'primary' | 'secondary' | 'disabled'
} & ComponentProps<'button'> &
  PropsWithChildren

const baseStyle = 'rounded-md py-2 px-4 outline-2 outline shadow-lg'
export const Button: FC<ButtonProps> = ({
  children,
  color,
  disabled,
  ...rest
}) => {
  if (disabled) {
    return (
      <button className={`bg-gray-300 text-white ${baseStyle}`} {...rest}>
        {children}
      </button>
    )
  }

  switch (color) {
    case 'primary': {
      return (
        <button
          className={`bg-blue-500 text-white shadow-2xl outline-blue-500 hover:bg-blue-400 ${baseStyle}`}
          {...rest}
        >
          {children}
        </button>
      )
    }
    case 'secondary': {
      return (
        <button
          className={`text-blue-700 outline-blue-300 hover:text-blue-400 hover:outline-blue-200 ${baseStyle}`}
          {...rest}
        >
          {children}
        </button>
      )
    }
    case 'disabled': {
      return (
        <button className={`bg-gray-300 text-white ${baseStyle}`} {...rest}>
          {children}
        </button>
      )
    }
    default: {
      return (
        <button
          className={`bg-blue-500 text-white shadow-2xl outline-blue-500 hover:bg-blue-400 ${baseStyle}`}
          {...rest}
        >
          {children}
        </button>
      )
    }
  }
}
