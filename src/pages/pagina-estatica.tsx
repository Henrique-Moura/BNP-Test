/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

type ListaProps = {
	list: ICity[];
};

export default function Lista({ list }: ListaProps) {
	const [cities, setCities] = useState<Array<ICity>>([
		{
			id: new Date().getTime().toString(),
			name: 'São Paulo',
		},
	]);

	useEffect(() => {
		if (list) {
			setCities(list);
		}
	}, [list]);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{cities.map((city) => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:8080/api/cities/10');
    const data = await response.json();

    if (!response.ok) {
		throw new Error('Erro ao obter os dados');
	}

    return {
        props: {
            list: data,
        },
        revalidate: 60,
    }
}
