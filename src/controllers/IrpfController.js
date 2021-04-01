export default class IrpfController {
  constructor() {
    this.irpfDriver = null;
  }

  async prepare() {
    if (!this.irpfDriver) {
      const { default: IrpfDriver } = await import('../drivers/IrpfDriver');
      this.irpfDriver = new IrpfDriver();
    }

    return this;
  }

  async calculateIrpf(irpf) {
    const instance = await this.prepare();
    return instance
      .irpfDriver
      .calculateIrpf(irpf);
  }
}
