type Mods = Record<string, boolean | string>;
export function classNames(
    cls: string,
    mod: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...Object.entries(mod)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key),
        ...additional.filter((el) => Boolean(el)),
    ].join(' ');
}
