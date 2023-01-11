import styles from './CVtext.module.css';

export default function CVtext5(props) {
  return(
    <div className={styles.tags}>
      <h1>Второй сайт для портфолио:</h1>
      <p>На этот раз для несуществующего барбершопа Usiki. Сайт представляет из себя одностраничный лендинг написанный также с использованием <a>Gatsby</a>. На сайте преимущественно демонстрируется простая анимация при скроллинге. Код также можно найти на <a>Github</a>.</p>
    </div>
  );
}
