import { Check } from "phosphor-react";
import styles from "./CheckBox.module.css";

interface Props {
  checked: boolean;
}

function CheckBox({ checked }: Props): JSX.Element {
  return (
    <div>
      {checked ? (
        <button className={styles.checkboxRound} />
      ) : (
        <button className={styles.checkboxRoundCheck}>
          <Check size={14} className={styles.imageSvg} weight="bold" />
        </button>
      )}
    </div>
  );
}

export default CheckBox;
