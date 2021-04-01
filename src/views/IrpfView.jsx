import { useIrpf } from '../hooks/useIrpf.hook';

function IrpfView({ className }) {

  const [irpf] = useIrpf();
  
  return (
    <div className={className}>
      Sua Taxa &eacute; <span id="irpf">{parseFloat(irpf.tax).toFixed(2)}</span>
    </div>
  );
}

export default IrpfView;
