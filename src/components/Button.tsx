import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-gray-900 text-gray-50 hover:bg-gray-700 hover:text-gray-100 active:bg-gray-800 active:text-gray-300 focus-visible:outline-gray-900',
    blue: 'bg-blue-400 text-gray-50 hover:bg-blue-300 active:bg-blue-500 active:text-blue-100 focus-visible:outline-blue-300',
    white:
      'bg-gray-50 text-gray-900 hover:bg-blue-50 active:bg-blue-200 active:text-gray-600 focus-visible:outline-gray-50',
  },
  outline: {
    slate:
      'ring-gray-200 text-gray-50 hover:text-gray-100 hover:ring-gray-300 active:bg-gray-100 active:text-gray-100 focus-visible:outline-blue-600 focus-visible:ring-gray-300',
    white:
      'ring-gray-400 text-gray-50 hover:ring-gray-500 active:ring-gray-700 active:text-gray-400 focus-visible:outline-gray-50',
  },
}

type ButtonProps = (
  | {
    variant?: 'solid'
    color?: keyof typeof variantStyles.solid
  }
  | {
    variant: 'outline'
    color?: keyof typeof variantStyles.outline
  }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
