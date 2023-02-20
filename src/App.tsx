import { Outlet } from 'react-router-dom';

import { NavBar } from './components';

const App = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default App;
