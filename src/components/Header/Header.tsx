import { FC } from 'react';
import './styles/header.scss';

interface Props {
  setCreateNewUser: (param: boolean) => void;
}

export const Header: FC<Props> = ({ setCreateNewUser }) => {

  return (
    <header className='header'>
      <span className='header__title'>Admin panel</span>

      <button className='header__link' onClick={() => setCreateNewUser(true)}>Create new user</button>
    </header>
  )
}
