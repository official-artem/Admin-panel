import { Header } from './components/Header/Header';

// #region styles import
import './styles/reset.scss';
import './styles/app.scss';
import { UserList } from './components/UserList/UserList';
import { useState } from 'react';
// #endregion

function App() {
  const [ isCreateNewUser, setCreateNewUser ] = useState(false);

  return (
    <>
      <Header setCreateNewUser={setCreateNewUser} />
      <main>
        <UserList isCreateNewUser={isCreateNewUser} setCreateNewUser={setCreateNewUser}/>
      </main>
    </>
  )
}

export default App
