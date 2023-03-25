import UseStateTest from './Component/test/useStateTest';
import InputSample from './Component/test/inputSample';
import InputSample2 from './Component/test/inputSample2';
import UserList from './Component/test/UserList';
function App() {
  return (
    <div className="App">
      <UseStateTest name='이재철' />
      <InputSample />
      <InputSample2 />
      <UserList />
    </div>
  );
}

export default App;
