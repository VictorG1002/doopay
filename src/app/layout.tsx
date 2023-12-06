import React from 'react';

import type { Metadata } from 'next';

import './globals.css';
// import { ThemeProvider } from '@/contexts/theme';

export const metadata: Metadata = {
	title: 'Lista de Tarefas',
	description: 'Minha lista de tarefas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
