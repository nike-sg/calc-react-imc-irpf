import { useIrpf } from '../hooks/useIrpf.hook';

function IrpfView({ className }) {

  const [tax] = useIrpf();

  return (
    <div className={className}>
      Sua Taxa &eacute; <span id="irpf">{tax}</span>
    </div>
  );
}

export default IrpfView;
