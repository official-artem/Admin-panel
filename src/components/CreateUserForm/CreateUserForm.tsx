import { FC, useState } from 'react';
import { UserType } from '../../data/types/user';
import { createUser } from '../../service/user';

interface Props {
  user: Omit<UserType, 'id'>
  action: string
  setCreateNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateUserForm: FC<Props> = ({ user, action, setCreateNewUser }) => {
  const [ name, setName ] = useState(user.name);
  const [ surname, setSurname ] = useState(user.surname);
  const [ number, setNumber ] = useState(user.number);
  const [ country, setCountry ] = useState(user.country);
  const [ height, setHeight ] = useState(user.height);
  const [ weight, setWeight ] = useState(user.weight);

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

    createUser({
      name,
      surname,
      number,
      country,
      height,
      weight
    })
      .then(() => setCreateNewUser(false));
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
        type='text' 
        required 
        placeholder='Name' 
        value={name} 
        onChange={handleName} 
      />
      <input 
        type='text' 
        required 
        placeholder='Surname' 
        value={surname} 
        onChange={handleSurname} 
      />
      <input 
        type='text' 
        required 
        placeholder='Number' 
        value={number} 
        onChange={handleNumber} 
      />
      <input 
        type='text' 
        required 
        placeholder='Country' 
        value={country} 
        onChange={handleCountry} 
      />
      <input 
        type='text' 
        required 
        placeholder='Height' 
        value={height} 
        onChange={handleHeight} 
      />
      <input 
        type='text' 
        required 
        placeholder='Weight' 
        value={weight} 
        onChange={handleWeight} 
      />
      <button>{action}</button>
    </form>
  )
    
}