import { FC, useEffect, useState } from 'react';
import { User } from '../User/User';
import './styles/UsersList.scss';
import { UserType } from '../../data/types/user';
import { getUsers } from '../../service/user';
import { UserForm } from '../UserForm/UserForm';
import { CreateUserForm } from '../CreateUserForm/CreateUserForm';

interface Props {
  isCreateNewUser: boolean,
  setCreateNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserList: FC<Props> = ({ isCreateNewUser, setCreateNewUser }) => {
  const [ users, setUsers ] = useState<UserType[]>([])
  const [ selectedUserId, setSelectedUserId ] = useState<string | null>('');
  const newUser = {
    id: '',
    name: '',
    surname: '',
    number: '',
    country: '',
    height: '',
    weight: '',
  }

  useEffect(() => {
    getUsers()
      .then(setUsers)
  }, [selectedUserId, isCreateNewUser])

  return (
    <main className='main'>
      <h1 className='main__title'>Users</h1>

        {!isCreateNewUser
          ?
            (
            users.map(user => {
              if (user.id === selectedUserId) {
                return <UserForm user={user} action='Update' handleSelectUser={setSelectedUserId} />;
              } else {
                return <User user={user} key={user.id} handleSelectUser={setSelectedUserId} />;
              }
            }
            ))
          :
            (
          <CreateUserForm user={newUser} setCreateNewUser={setCreateNewUser} action='Create'/>
            )
          }
    </main>
  )
}