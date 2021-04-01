import { useState } from "react";

import { useIrpf } from '../hooks/useIrpf.hook';

import IrpfView from "../views/IrpfView";
import IrpfForm from "../views/forms/IrpfForm";
import IrpfController from "../controllers/IrpfController";
import Irpf from "../domain/Irpf";



function OtherApp() {
  const [,setIrpf] = useIrpf();
  const [controller,] = useState(new IrpfController());
 
  const calculateIrpf = async (dependents, totalSalary) => {
    var newIrpf = new Irpf(parseInt(dependents),parseFloat(totalSalary));

    const calculatedIrpf = await controller.calculateIrpf(newIrpf.toObject());
    setIrpf({ tax: calculatedIrpf});
  };

  return (
    <div className="container">
      <div className="data">
        <div className="form">
          <IrpfForm onSubmit={calculateIrpf}/>
        </div>
      </div>
      <IrpfView className="data" />
    </div>
  );
}

export default OtherApp;