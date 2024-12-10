import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/defaultLayout';
import { RegisterLayout } from './layouts/registerLayoyt';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/user" element={<RegisterLayout />}>
        <Route path="" element={<h1>Register page</h1>} />
      </Route>
    </Routes>
  );
}
