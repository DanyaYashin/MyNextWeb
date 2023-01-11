import styles from './CVtext.module.css';

export default function CVtext2(props) {
  return(
    <div className={styles.tags}>
      <h1>Тематический блог:</h1>
      <p>Над этим проектом работало несколько людей, поэтому была необходимость в освоении <a>GitHub</a>. Блог был написан с использованием фреймворка <a>Django</a>. Также это был первый опыт в использование хостинг сервиса, а точнее <a>PythonAnywhere</a>.</p>
    </div>
  );
}
