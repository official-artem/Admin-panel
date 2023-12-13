import axios from 'axios';
import { UserType } from '../data/types/user';

axios.defaults.baseURL = 'admin-panel-server-production.up.railway.app'

export async function getUsers() {
  return await axios.get('/users')
    .then(res => res.data);
}

export async function updateUser(id: string, body: Omit<UserType, 'id'>) {
  return await axios.put(`/users/${id}`, body)
    .then(res => res.data);
}

export async function createUser(body: Omit<UserType, 'id'>) {
  return await axios.post(`/users`, body)
    .then(res => res.data);
}