import { Routes, Route } from 'react-router-dom';

import routes from 'router/routes';
import Layout from 'components/layout/Layout';
import SurveyForm from 'components/survey/SurveyForm';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={routes.root.path} element={<SurveyForm />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
