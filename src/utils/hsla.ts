export function hsla(hsl: 'string', alpha: number) {
  return hsl.replace('hsl', 'hsla').replace(')', `, ${alpha})`)
}
