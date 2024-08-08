interface Props extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * 텍스트의 크기를 설정합니다. (기본값: md)
   */
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  /**
   * 텍스트의 색상을 설정합니다. (기본값: black)
   */
  color?: 'black' | 'gray' | 'red' | 'white'
  /**
   * 텍스트의 굵기를 설정합니다. (기본값: normal)
   */
  weight?: 'light' | 'normal' | 'bold'
}

export default function Text({
  size = 'md',
  color = 'black',
  weight = 'normal',
  ...props
}: Props) {
  return (
    <span
      className={`${
        size === '4xl'
          ? 'text-4xl'
          : size === '3xl'
            ? 'text-3xl'
            : size === '2xl'
              ? 'text-2xl'
              : size === 'xl'
                ? 'text-xl'
                : size === 'lg'
                  ? 'text-lg'
                  : size === 'md'
                    ? 'text-base'
                    : size === 'sm'
                      ? 'text-sm'
                      : size === 'xs'
                        ? 'text-xs'
                        : ''
      }
      ${
        color === 'black'
          ? 'text-black'
          : color === 'gray'
            ? 'text-zinc-400'
            : color === 'red'
              ? 'text-red-500'
              : color === 'white'
                ? 'text-white'
                : ''
      }
      ${
        weight === 'light'
          ? 'font-light'
          : weight === 'normal'
            ? 'font-normal'
            : weight === 'bold'
              ? 'font-bold'
              : ''
      }
  `}
      {...props}
    />
  )
}
