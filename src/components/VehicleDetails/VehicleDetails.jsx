import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ camper }) => {
  return (
    <div>
      <h2 className={css.page}>Vehicle details</h2>
      <table className={css.containerTable}>
        <thead>
          <tr>
            <th className={css.leftAlign}>Form</th>
            <th className={css.rightAlign}>Panel truck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={css.leftAlign}>Length</td>
            <td className={css.rightAlign}>{camper.length}</td>
          </tr>
          <tr>
            <td className={css.leftAlign}>Width</td>
            <td className={css.rightAlign}>{camper.width}</td>
          </tr>
          <tr>
            <td className={css.leftAlign}>Height</td>
            <td className={css.rightAlign}>{camper.height}</td>
          </tr>
          <tr>
            <td className={css.leftAlign}>Tank</td>
            <td className={css.rightAlign}>{camper.tank}</td>
          </tr>
          <tr>
            <td className={css.leftAlign}>Consumption</td>
            <td className={css.rightAlign}>{camper.consumption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VehicleDetails;
