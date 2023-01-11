import styles from './CVtext.module.css';

export default function CVtext1(props) {
  return(
    <div className={styles.tags}>
      <h1>Построение графиков:</h1>
      <p>Приложение парсило предложенное уравнение, проверяя является ли уравнение полиномом и в выбранной области значений строило график. Это приложение было написано ещё в школе как практика в роботе с <a>Python</a>.</p>
    </div>
  );
}
