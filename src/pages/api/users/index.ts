/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser } from '@/types/user.d';

const users: IUser[] = [
    { id: 1, name: 'João Silva', email: 'joao.silva@example.com' },
    { id: 2, name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { id: 3, name: 'Carlos Souza', email: 'carlos.souza@example.com' },
    { id: 4, name: 'Ana Pereira', email: 'ana.pereira@example.com' },
    { id: 5, name: 'Paulo Lima', email: 'paulo.lima@example.com' },
    { id: 6, name: 'Juliana Santos', email: 'juliana.santos@example.com' },
    { id: 7, name: 'Bruno Costa', email: 'bruno.costa@example.com' },
    { id: 8, name: 'Fernanda Almeida', email: 'fernanda.almeida@example.com' },
    { id: 9, name: 'Rodrigo Martins', email: 'rodrigo.martins@example.com' },
    { id: 10, name: 'Patrícia Ferreira', email: 'patricia.ferreira@example.com' }
  ];

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        return res.status(200).json(users);
      } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
};
