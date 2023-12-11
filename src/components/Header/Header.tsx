import './styles/header.scss';

export default function Header() {
  return (
    <header className='header'>
      <span className='header__title'>Admin panel</span>

      <a className='header__link' href='/'>Create new user</a>
    </header>
  )
}