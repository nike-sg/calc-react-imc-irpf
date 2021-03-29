import { createContext, useState } from 'react';
import Irpf from  '../domain/Irpf';

export const IrpfContext = createContext();

export default function IrpfContextProvider({children}) {
  const [tax, setIrpf] = useState(new Irpf());

  const setData = (data) => {
    setIrpf(data);
  }

  return <IrpfContext.Provider value={{tax, setData}}>
    {children}
  </IrpfContext.Provider>
}