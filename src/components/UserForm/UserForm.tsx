import { FC, useState } from 'react';
import { UserType } from '../../data/types/user';
import { updateUser } from '../../service/user';

interface Props {
  user: UserType,
  action: string,
  handleSelectUser: (id: string) => void
}

export const UserForm: FC<Props> = ({ user, action, handleSelectUser }) => {
  const [ name, setName ] = useState(user.name);
  const [ surname, setSurname ] = useState(user.surname);
  const [ number, setNumber ] = useState(user.number);
  const [ country, setCountry ] = useState(user.country);
  const [ height, setHeight ] = useState(user.height);
  const [weight, setWeight ] = useState(user.weight);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }
  const handleSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.currentTarget.value);
  }
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.currentTarget.value);
  }
  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.currentTarget.value);
  }
  const handleHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.currentTarget.value);
  }
  const handleWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.currentTarget.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateUser(user.id, {
      name,
      surname,
      number,
      country,
      height,
      weight
    })
      .then(() => handleSelectUser(''));
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type='text' placeholder={user.name} value={name} onChange={handleName} />
      <input type='text' placeholder={user.surname} value={surname} onChange={handleSurname} />
      <input type='text' placeholder={user.number} value={number} onChange={handleNumber} />
      <input type='text' placeholder={user.country} value={country} onChange={handleCountry} />
      <input type='text' placeholder={user.height} value={height} onChange={handleHeight} />
      <input type='text' placeholder={user.weight} value={weight} onChange={handleWeight} />
      <button>{action}</button>
    </form>
  )
}