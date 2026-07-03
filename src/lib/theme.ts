import { match, P } from 'ts-pattern';

export type Theme = 'light' | 'dark' | 'system';

export type Transition = 'toggle_theme' | 'toggle_system';

export const createThemeSwitcher = (preferedTheme: Theme) => ({
	switch: (current: Theme, transition: Transition): Theme =>
		match([current, transition])
			.returnType<Theme>()
			.with(['light', 'toggle_theme'], () => 'dark')
			.with(['dark', 'toggle_theme'], () => 'light')
			.with([P.union('dark', 'light'), 'toggle_system'], () => 'system')
			.with(['system', P.any], () => preferedTheme)
			.exhaustive()
});
