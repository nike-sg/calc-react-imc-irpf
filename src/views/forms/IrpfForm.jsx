import { useInput } from "../../hooks/useInput.hook";


function IrpfForm({ onSubmit }) {

  const [dependents, , dependentsProps] = useInput(0.0);
  const [totalSalary, , totalSalaryProps] = useInput(0.0);

  const submit = (evt) => {
    evt.preventDefault();
    onSubmit(dependents, totalSalary);
  };

  return (
    <form onSubmit={submit}>
      <div className="row">
        <label>Dependetes</label>
        <input id="depentents" type="number" step="1" placeholder="0" {...dependentsProps}/>
      </div>
      <div className="row">
        <label>Salário</label>
        <input id="salary" placeholder="0.00" {...totalSalaryProps}/>
      </div>
      <button type="submit" className="action">
        Calcular
      </button>
    </form>
  );
}

export default IrpfForm;
