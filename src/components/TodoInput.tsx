import { PlusCircle } from 'phosphor-react'
import styles from './TodoInput.module.css'

export default function TodoInput() {
  return (
    <>
        <div className={styles.todoInputContainer}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">Criar <PlusCircle size={16} /> </button>
        </div>
    </>
  )
}