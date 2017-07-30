import React from 'react';

import styles from './todos.scss';

const Todo = ({item, deleteItem}) => {
  return (<div className={styles.item}>
    <div className={styles.title}>
      {item.title}
    </div>
    <div className={styles.status}>
      {item.status}
    </div>
    <div onClick={deleteItem}>
      Delete item
    </div>
  </div>);
};

const TodosList = ({ todos, deleteItem }) => {
  return (
    <div className={styles['items-list']}>
      <div>
        {todos.map(item => <Todo key={item.title} item={item} deleteItem={deleteItem(item.id)} />)}
      </div>
    </div>
  );
};

export default TodosList;
