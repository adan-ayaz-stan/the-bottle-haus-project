import styles from "./TextField.module.css";

const TextFieldCustom = (props) => {
  return (
    <div>
      <input
        type="input"
        className={styles.form__field}
        placeholder="Name"
        name="name"
        id="name"
        required
      />
      <label for="name" className={styles.form__label}>
        Label
      </label>
    </div>
  );
};

export default TextFieldCustom;
