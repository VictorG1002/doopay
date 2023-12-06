// 'use cliente';

// import React, { ReactNode, createContext, useEffect, useState } from 'react';

// const getInitialTheme = () => {
// 	if (typeof window !== 'undefined' && window.localStorage) {
// 		const storedPrefs = window.localStorage.getItem('color-theme');
// 		if (typeof storedPrefs === 'string') {
// 			return storedPrefs;
// 		}

// 		const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
// 		if (userMedia.matches) {
// 			return 'dark';
// 		}
// 	}

// 	return 'light';
// };

// interface ThemeContextType {
// 	theme: string;
// 	setTheme: (theme: string) => void;
// }

// export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// interface ThemeProviderProps {
// 	initialTheme?: string;
// 	children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({
// 	initialTheme,
// 	children,
// }) => {
// 	const [theme, setTheme] = useState(getInitialTheme);

// 	const rawSetTheme = (rawTheme: string) => {
// 		const root = window.document.documentElement;
// 		const isDark = rawTheme === 'dark';

// 		root.classList.remove(isDark ? 'light' : 'dark');
// 		root.classList.add(rawTheme);

// 		localStorage.setItem('color-theme', rawTheme);
// 	};

// 	if (initialTheme) {
// 		rawSetTheme(initialTheme);
// 	}

// 	useEffect(() => {
// 		rawSetTheme(theme);
// 	}, [theme]);

// 	return (
// 		<ThemeContext.Provider value={{ theme, setTheme }}>
// 			{children}
// 		</ThemeContext.Provider>
// 	);
// };
