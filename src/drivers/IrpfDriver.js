import HttpUtil from '../http/HttpUtil.js';

export default class IrpfDriver {
  constructor() {
    this.xhr = new HttpUtil();
    this.get = new Proxy(this.xhr.get, {
      apply: function(target, thisArg, args) {
        console.log('IRPF');
        console.log('target');
        console.log(target);
        console.log('thisArg');
        console.log(thisArg);
        console.log('args');
        console.log(args);
        console.log('chamando...');
        return target(...args);
      }
    });
  }

  /**
   * 
   * @param {Irpf} irpf 
   */
  async calculateIrpf(irpf) {
    const response = await this.xhr
      .post('http://localhost:8090', '/irpf/calculate', irpf);
    return await response.json();
  }
}
