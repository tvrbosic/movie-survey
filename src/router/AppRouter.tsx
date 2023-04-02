import { Routes, Route } from 'react-router-dom';

import routes from 'router/routes';

function AppRouter() {
  return (
    <Routes>
      <Route index path={routes.root.path} element={<div>Hello from React application!</div>} />
    </Routes>
  );
}

export default AppRouter;
