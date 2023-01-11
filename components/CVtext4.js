import styles from './CVtext.module.css';

export default function CVtext4(props) {
  return(
    <div className={styles.tags}>
      <h1>Первый сайт для портфолио:</h1>
      <p>Сайт для несуществующего бара Vstelku и был написан с использованием фреймворка <a>Gatsby</a>. Для создания меню были использованы классы. Код проекта можно найти на моем <a>GitHub</a>.</p>
    </div>
  );
}
