type mode = Record<string, boolean | string>;
export function className(
	cls: string,
	mod: mode,
	additional: string[]
): string {
	return [
		cls,
		...Object.entries(mod)
			.filter(([key, value]) => Boolean(value))
			.map(([key]) => key),
		...additional,
	].join(' ');
}
