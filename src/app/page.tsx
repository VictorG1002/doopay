'use client';

// import { ThemeContext } from '@/contexts/theme';
import Header from '@/core/components/Header';
import ListaCard from '@/core/components/ListaCard';
import { Tarefa } from '@/utils/types';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [input, setInput] = useState('');

	// const { theme, setTheme } = useContext<any>(ThemeContext);

	const [lista, setLista] = useState<Tarefa[]>([]);

	const addItem = (tarefa: Tarefa) => {
		if (tarefa.nome === '') {
			alert('não envie o campo vazio');
			return;
		}

		setLista([tarefa, ...lista]);

		localStorage.setItem('lista', JSON.stringify([tarefa, ...lista]));
	};

	const concluir = (id: string) => {
		const findTarefa = lista.find(tarefa => tarefa.id === id);

		const tarefaFiltrada = lista.filter(tarefa => tarefa.id !== findTarefa?.id);

		if (findTarefa?.concluida === false) {
			findTarefa.concluida = true;

			setLista([...tarefaFiltrada, findTarefa]);

			localStorage.setItem(
				'lista',
				JSON.stringify([...tarefaFiltrada, findTarefa]),
			);
		}
	};

	useEffect(() => {
		const arrayArmazenado =
			JSON.parse(String(localStorage.getItem('lista'))) || [];
		setLista(arrayArmazenado);
	}, []);

	return (
		<main className="min-h-screen	bg-white dark:bg-slate-500">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="">
					{/* <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						Dark Mode
					</div> */}
					<h1>Lista de Tarefas</h1>
					<Header tarefas={lista} />

					<div>
						<input
							type="text"
							onChange={e => setInput(e.target.value)}
							value={input}
						/>
						<button
							onClick={() =>
								addItem({
									nome: input,
									concluida: false,
									id: String(Math.random()),
								})
							}>
							Criar
						</button>
					</div>

					<div className="flex flex-col gap-4">
						{lista?.map(tarefa => (
							<ListaCard
								tarefaName={tarefa.nome}
								concluirTarefa={() => concluir(tarefa.id)}
								key={tarefa.id}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
