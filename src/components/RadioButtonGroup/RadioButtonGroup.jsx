const RadioButtonGroup = ({ name, value, onChange }) => {
  return (
    <div role="group" aria-labelledby="is-irregular-group">
      <label>
        <input
          type="radio"
          name={name}
          value="false" // HTML value завжди рядок
          checked={value === false || value === "false"} // Порівнюємо з обома можливими значеннями
          //   onChange={() => onChange(false)}

          // Імітуємо об'єкт події, щоб Formik зрозумів
          onChange={() => onChange({ target: { name, value: false } })}
        />
        Regular
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value="true"
          checked={value === true || value === "true"}
          //   onChange={() => onChange(true)}
          onChange={() => onChange({ target: { name, value: true } })}
        />
        Irregular
      </label>
    </div>
  );
};

export default RadioButtonGroup;
