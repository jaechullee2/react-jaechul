import React, { useRef, useState } from 'react';
import UseStateTest from './Component/test/useStateTest';
import InputSample from './Component/test/inputSample';
import InputSample2 from './Component/test/inputSample2';
import UserList from './Component/test/UserList';
import CreateUser from './Component/test/CreateUser';
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
});
const {username, email} = inputs; //비구조화 할당을 통해 값 추출
const onChange = e => {
    const { name, value } = e.target;
    setInputs({
        ...inputs, //기존의 input 객체를 복사한 뒤
        [name]: value //name 키를 가진 값을 value로 설정
    });
};
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user={
      id : nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));
    
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    <>
      {/* <UseStateTest name='이재철' />
      <InputSample />
      <InputSample2 />
      <UserList /> */}
      {/* <CreateUser /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
