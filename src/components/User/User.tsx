import { FC } from 'react';
import { UserType } from '../../data/types/user';
import './styles/User.scss';

interface Props {
  user: UserType,
  handleSelectUser: (id: string) => void
}
export const User: FC<Props> = ({ user, handleSelectUser }) => {
  const handleClick = () => {
    handleSelectUser(user.id)
  }
  return (
    <div onClick={handleClick} className='user'>
      <h2 className='user__column user__name'>{user.name}</h2>
      <p className='user__column user__surname'> {user.surname}</p>
      <p className='user__column user__phone'>{user.number}</p>
      <p className='user__column user__country'>{user.country}</p>
      <p className='user__column user__height'>{user.height}</p>
      <p className='user__column user__width'>{user.weight}</p>
    </div>
  )
}