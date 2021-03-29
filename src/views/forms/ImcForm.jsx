import { useInput } from "../../hooks/useInput.hook";
import { usePerson } from '../../hooks/usePerson.hook';

function ImcForm({ onSubmit }) {
  const [person] = usePerson();

  const [height, , heightProps] = useInput(0.0);
  const [weight, , weightProps] = useInput(0.0);

  const submit = (evt) => {
    evt.preventDefault();
    onSubmit(height, weight);
  };

  return (
    <form onSubmit={submit}>
      <div className="row">
        <label>Altura</label>
        <input id="altura" placeholder="0.00" {...heightProps} />
      </div>
      <div className="row">
        <label>Peso</label>
        <input id="peso" placeholder="0.00" {...weightProps} />
      </div>
      <button type="submit" className="action">
        Calcular
      </button>
      <hr />
      <label className="stats">
        <strong>Sua altura: </strong>
        <span>{person.height}</span>
      </label>
      <label className="stats">
        <strong>Seu peso: </strong>
        <span>{person.weight}</span>
      </label>
    </form>
  );
}

export default ImcForm;
