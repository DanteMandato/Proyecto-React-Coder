import ItemList from './containers/Itemlist';

import BaseLayout from './layouts/BaseLayout';
import './App.scss'

function App() {

  return (
    <>
      <BaseLayout>
        <main>
          <ItemList />
        </main>
      </BaseLayout>
    </>
  )
}

export default App;
