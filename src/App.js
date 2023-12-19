import React from 'react'
import { Counter } from './components/Counter/Counter.js'
import { Search } from './components/Search/Search.js'
import { List } from './components/List/List.js'
import { Add } from './components/Add/Add.js'
import { Item } from './components/Item/Item.js';
import { Loading } from './components/Loading/Loading.js';
import { Empty } from './components/Empty/Empty.js';
import { Error } from './components/Error/Error.js';
import { Modal } from './components/Modal/Modal.js';
import { AddForm } from './components/AddForm/AddForm.js';
import { GeneralContext } from './contexts/GeneralContext';

function App() {

  const {
    searchedTodos,
    loading,
    error,
    openModal
  } = React.useContext(GeneralContext)

  const empty = !loading && searchedTodos.length === 0

  return (
    <>
      <h1>Todo Machine</h1>
      <Counter></Counter>
      <Search></Search>

      {loading && <Loading></Loading>}
      {empty && <Empty></Empty>}
      {error && <Error></Error>}

      <List>
        {
          searchedTodos.map((_, _index) => <Item key={_index} index={_index}></Item>)
        }
      </List>

      <Add></Add>
      {openModal && <Modal><AddForm></AddForm></Modal>}
    </>
  );
}

export default App;
