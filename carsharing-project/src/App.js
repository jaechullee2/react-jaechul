import React, { useRef } from 'react';
import UseStateTest from './Component/test/useStateTest';
import InputSample from './Component/test/inputSample';
import InputSample2 from './Component/test/inputSample2';
import UserList from './Component/test/UserList';
function App() {
  const users = [
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
  ];
  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  return (
    <div className="App">
      <UseStateTest name='이재철' />
      <InputSample />
      <InputSample2 />
      <UserList />
      <UserList users={users} />;
    </div>
  );
}

export default App;
