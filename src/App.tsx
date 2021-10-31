import { Switch, Route, Redirect } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { PersonalDataForm } from './pages/PersonalDataForm/PersonalDataForm';
import { PersonalDataPreview } from './pages/PersonalDataPreview/PersonalDataPreview';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route path="/form">
            <PersonalDataForm />
          </Route>
          <Route path="/preview">
            <PersonalDataPreview />
          </Route>
          <Redirect from="/" to="/form" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
