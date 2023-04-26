import styles from "./index.module.scss";

export default function ColorPicker({ value, onChange, onBlur }) {
  return (
    <input type="color"
      className={styles.colorPicker}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}
