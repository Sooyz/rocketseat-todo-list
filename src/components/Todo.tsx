
import Header from './Header'
import styles from './Todo.module.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default function Todo() {

  return (
    <>
      <Header />
      <div className={styles.container}>
          <div className={styles.todoList}>
            <TodoInput />
            <TodoList />
          </div>  
      </div>
    </>
  )
}
