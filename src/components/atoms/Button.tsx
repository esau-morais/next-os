import { ButtonHTMLAttributes, ReactNode } from 'react'

import { cx } from '@/utils/classNames'

type Theme = 'light' | 'gray'
type Size = 'default' | 'icon-only'

type ButtonProps = {
  type: 'button' | 'submit'
  label: string
  icon: ReactNode
  theme: Theme
  size: Size
} & ButtonHTMLAttributes<HTMLButtonElement>

type IconProps = Exclude<Partial<ButtonProps>, 'label'>
type LabelProps = Exclude<Partial<ButtonProps>, 'icon'>
type IconAndLabelProps = Extract<Partial<ButtonProps>, 'icon' & 'label'>

const deepThemeMap: Record<Theme, string> = {
  light: 'bg-light text-darker',
  gray: 'bg-darkGray text-lighter',
}

const deepSpacingMap: Record<Size, string> = {
  default: 'p-[10px]',
  'icon-only': 'p-8 w-[72px] h-[72px]',
}

const Button = ({ className, type = 'button', label, icon, theme = 'light', ...props }: IconProps | LabelProps | IconAndLabelProps) => {
  return (
    <button
      className={cx(
        'flex items-center justify-center min-h-[60px] max-w-[256px] rounded-full font-medium disabled:cursor-not-allowed disabled:opacity-95',
        deepThemeMap[theme],
        icon && !label ? deepSpacingMap['icon-only'] : deepSpacingMap.default,
        className
      )}
      type={type}
      {...props}
    >
      <span role='img' aria-label='Icon'>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

export default Button
