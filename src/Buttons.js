import './Buttons.css';
import React, { useState, useEffect } from 'react';
import articles from '../src/data/articles.json'


function Buttons() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count===2) {
            document.title = `Тык ${count}`;

  
        }
        
      });

    return (
      <div className='buttons'>
        <p>Вы кликнули {count} раз</p>
        <button className="btn-2" onClick={() => setCount(count + 1)}>
          For you
        </button>
        <button className="btn-2" onClick={() => setCount(count + 1)}>
          we advise
        </button>
        <button className="btn-2" onClick={() => setCount(count + 1)}>
          More...
        </button>
        <div>
          {articles.map(item => 
          <section key={item.title}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </section>)}
        </div>
      </div>
    );
  }

export default Buttons;
