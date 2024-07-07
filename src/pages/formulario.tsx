/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from '@/styles/formulario.module.css';
import { useForm } from 'react-hook-form';

export default function Form() {
    type Data = {
        name: string;
        email: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Data>();

	async function submitForm(data: Data) {
        try{
            const response = await fetch('/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const result = await response.json();
            console.log('User created:', result);
        } catch (error: any) {
            console.error('Error', error.message)
        }
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit((data) => submitForm(data))}>
					<input type="text" placeholder="Name" {...register('name', {required: true })} />
                    {errors.name && <p>Name is required.</p>}
					<input type="email" placeholder="E-mail" {...register('email', {required: true })} />
                    {errors.email && <p>E-mail is required.</p>}
					<button type="submit" data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
