export interface Mods {
  [key: string]: boolean | string;
}

export function classNames(
  cls: string,
  additionalClasses: string[] = [],
  mods: Mods = {}
): string {
  return [
    cls,
    ...additionalClasses,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
