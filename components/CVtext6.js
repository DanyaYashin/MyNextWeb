import styles from './CVtext.module.css';

export default function CVtext6(props) {
  return(
    <div className={styles.tags}>
      <h1>И неожидано третий:</h1>
      <p>Проект под названием BuildingAnatomy позволяет взаимодействовать с небольшим и простым строением больше напоминающем каробку. Единственный интерактив это возможность поочередно отодвигать стены этажей чтобы увидеть их содержимое, хоть там ничего и нет. Код на <a>GitHub</a>.</p>
    </div>
  );
}
