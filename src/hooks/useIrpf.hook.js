import { useContext } from 'react';
import { IrpfContext } from '../contexts/IrpfContextProvider';

export const useIrpf = () => {
  const { irpf, setData } = useContext(IrpfContext);
  return [irpf, setData];
};
