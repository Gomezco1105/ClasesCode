class Cliente {
    constructor(nombre, tipo, operacion) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.operacion = operacion;
    }
  }
  
  class Caja {
    constructor(numero, tipo) {
      this.numero = numero;
      this.tipo = tipo;
      this.disponible = true;
    }
  
    atender(cliente) {
      console.log(`Caja ${this.numero} atendiendo a ${cliente.nombre}`);
      this.disponible = false;
      setTimeout(() => {
        console.log(`Caja ${this.numero} finalizó atención a ${cliente.nombre}`);
        this.disponible = true;
      }, Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000); // Tiempo aleatorio entre 5 y 10 segundos
    }
  }
  
  class Banco {
    constructor() {
      this.clientes = [];
      this.cajas = [
        new Caja(1, 'retiros'),
        new Caja(2, 'retiros'),
        new Caja(3, 'otros'),
        new Caja(4, 'otros'),
        new Caja(5, 'asesoria')
      ];
    }
  
    agregarCliente(cliente) {
      this.clientes.push(cliente);
      this.asignarCaja();
    }
  
    asignarCaja() {
      const cliente = this.clientes.find(c => c.tipo === 'presencial');
      if (!cliente) return;
  
      const cajaDisponible = this.cajas.find(caja => caja.tipo === cliente.operacion && caja.disponible);
      if (!cajaDisponible) return;
  
      cajaDisponible.atender(cliente);
      this.clientes = this.clientes.filter(c => c !== cliente);
      this.asignarCaja(); // Se continúa asignando cajas hasta que no haya más clientes o cajas disponibles
    }
  }
  
  const banco = new Banco();
  
  // Agregar clientes de prueba
  banco.agregarCliente(new Cliente('Cliente 1', 'presencial', 'retiros'));
  banco.agregarCliente(new Cliente('Cliente 2', 'presencial', 'retiros'));
  banco.agregarCliente(new Cliente('Cliente 3', 'presencial', 'otros'));
  banco.agregarCliente(new Cliente('Cliente 4', 'presencial', 'otros'));
  banco.agregarCliente(new Cliente('Cliente 5', 'presencial', 'otros'));
  banco.agregarCliente(new Cliente('Cliente 6', 'presencial', 'asesoria'));
  banco.agregarCliente(new Cliente('Cliente 7', 'presencial', 'asesoria'));