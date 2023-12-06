import React from 'react';

interface IListaCard {
	concluirTarefa: () => void;
	tarefaName: string;
}

export default function ListaCard({ concluirTarefa, tarefaName }: IListaCard) {
	return (
		<div className="flex bg-slate-600 p-4 gap-3">
			<div>{tarefaName}</div>

			<button className="bg-yellow-900" onClick={() => concluirTarefa()}>
				Marcar
			</button>
		</div>
	);
}
