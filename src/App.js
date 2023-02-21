import './App.css';
import { AddToCart } from './components/AddToCart';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page} from '@shopify/polaris';


function App() {
  return (
    <AppProvider i18n={enTranslations}>
    <Page title="">

       <AddToCart />
       
    </Page>
  </AppProvider>
  );
}

export default App;
