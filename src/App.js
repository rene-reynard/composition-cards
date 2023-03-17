import React from 'react';
import ListCards from './components/ListCards.js';
import Card from './components/Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (<>
    <ListCards>
      <Card img="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg" title="Card title" text="Some quick example text to build on the card title and make up the bulk
        of the card's content."/>
      <Card title="Special title treatment" text="With supporting text below as a natural lead-in to additional content."/>
    </ListCards>
    </>
  );
}
