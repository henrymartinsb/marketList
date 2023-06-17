import homersimpson512 from '../../assets/homersimpson512.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './header.module.css'
import { useState } from 'react'

export function Header({ handleAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        handleAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={homersimpson512} alt="logoMarketList" width={150} />
            <h1>Homer Market List</h1>

            <form onSubmit={handleSubmit} className={styles.newListForm}>
                <input placeholder="Add item to list" type="text" onChange={onChangeTitle} value={title} />
                <button>
                    Add
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}