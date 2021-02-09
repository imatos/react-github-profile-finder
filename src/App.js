import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

const App = () => {
  const users = [
    {
      login: 'mojombo',
      id: 1,
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    },
    {
      login: 'jamesgolick',
      id: 37,
      avatar_url: 'https://avatars.githubusercontent.com/u/37?v=4',
      html_url: 'https://github.com/jamesgolick',
    },
    {
      login: 'atmos',
      id: 38,
      avatar_url: 'https://avatars.githubusercontent.com/u/38?v=4',
      html_url: 'https://github.com/atmos',
    },
    {
      login: 'errfree',
      id: 44,
      avatar_url: 'https://avatars.githubusercontent.com/u/44?v=4',
      html_url: 'https://github.com/errfree',
    },
    {
      login: 'mojodna',
      id: 45,
      avatar_url: 'https://avatars.githubusercontent.com/u/45?v=4',
      html_url: 'https://github.com/mojodna',
    },
    {
      login: 'bmizerany',
      id: 46,
      avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4',
      html_url: 'https://github.com/bmizerany',
    },
  ];

  return (
    <>
      <Navbar title="Github Profile Finder" icon="fab fa-github" />
      <div className="container">
        <Users users={users} />
      </div>
    </>
  );
};

export default App;
