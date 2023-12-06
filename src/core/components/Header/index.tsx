import { Tarefa } from '@/utils/types';
import React from 'react';

interface IHeader {
	tarefas: Tarefa[];
}

export default function Header({ tarefas }: IHeader) {
	const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida === true);

	const tarefasPendentes = tarefas.filter(tarefa => tarefa.concluida === false);

	return (
		<div className="bg-gray-400 w-full border-r-4 flex  gap-10  ">
			{tarefas.length - tarefasConcluidas.length * 100 >= 50 ? (
				<div className="bg-green-600">
					Tarefas Concluidas: {tarefasConcluidas.length}
				</div>
			) : (
				<div className="bg-red-600">
					Tarefas Concluidas: {tarefasConcluidas.length}
				</div>
			)}

			{tarefas.length - tarefasPendentes.length * 100 >= 50 ? (
				<div className="bg-red-600">
					Tarefas Pendentes: {tarefasPendentes.length}
				</div>
			) : (
				<div className="bg-green-600">
					Tarefas Pendentes: {tarefasPendentes.length}
				</div>
			)}
		</div>
	);
}
