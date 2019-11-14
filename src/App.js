import React, { Component } from 'react';
import List from './List';
import STORE from './Store';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  state = {
    store:STORE,
  };

  handleDeleteIte = (cardId) => {
    //destructuring 
    const {lists, allCards} = this.state.store;

    const newList = lists.map(list=> ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    const newCards = omit(allCards, cardId);

    this.setState({
      store:{
        lists: newList,
        allCards: newCards
      }
    })
    console.log('handle delete item called')
  };



  handleAddCard(){}






  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={ list.header }
              cards={ list.cardIds.map(id => store.allCards[id]) }
              deleteItem={this.handleDeleteItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
