import { Routes, Route } from 'react-router-dom';

import routes from 'router/routes';
import Layout from 'components/layout/Layout';
import SurveyForm from 'screens/SurveyForm';
import SurveyResponse from 'screens/SurveyResponse';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={routes.root.path} element={<SurveyForm />} />
        <Route path={routes.success.path} element={<SurveyResponse />} />
        <Route path={routes.error.path} element={<SurveyResponse />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
