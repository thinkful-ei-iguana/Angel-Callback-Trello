import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe( "List Component", ()=>{
  it('renders without crashing', () => {
    const Cards = [];
    const div = document.createElement('div');
    ReactDOM.render(<List cards={Cards} />, div);
    ReactDOM.unmountComponentAtNode(div); 
  });
  
  it('renders the UI as expected', () => { 
    const Cards = [];
    const tree = renderer
    .create(<List cards={Cards} />)
    .toJSON(); 
    expect(tree).toMatchSnapshot();
  });

} )


