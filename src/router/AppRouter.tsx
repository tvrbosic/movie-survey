import { Routes, Route } from 'react-router-dom';

import routes from 'router/routes';
import Layout from 'components/layout/Layout';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={routes.root.path} element={<div>Hello from React application!</div>} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
