import { useContext } from 'react';
import { IrpfContext } from '../contexts/IrpfContextProvider';

export const useIrpf = () => {
  const { tax, setData } = useContext(IrpfContext);
  return [tax, setData];
};
