const banco = {
    clientes: {
      "12345678": { pin: "1234", intentos: 0, cuentas: { "ahorros": 500000, "corriente": 200000 } },
      "87654321": { pin: "4321", intentos: 0, cuentas: { "ahorros": 1000000, "corriente": 300000 } }
    },
    validarCliente(id, pin) {
      const cliente = this.clientes[id];
      if (!cliente) {
        return false;
      }
      if (cliente.pin === pin) {
        cliente.intentos = 0; // Reiniciar intentos después de una validación exitosa
        return true;
      } else {
        cliente.intentos++;
        return false;
      }
    },
    obtenerCuentas(id) {
      return this.clientes[id].cuentas;
    },
    realizarRetiro(id, cuenta, monto) {
      if (this.clientes[id].cuentas[cuenta] >= monto) {
        this.clientes[id].cuentas[cuenta] -= monto;
        return `Retiro exitoso, puede tomar $${monto} de la bandeja principal.`;
      } else {
        return `Fondos insuficientes en la cuenta ${cuenta}.`;
      }
    },
    realizarDeposito(id, cuenta, monto) {
      this.clientes[id].cuentas[cuenta] += monto;
      return `Depósito de $${monto} exitoso en la cuenta ${cuenta}.`;
    },
    realizarTransferencia(id, cuentaOrigen, cuentaDestino, monto) {
      if (this.clientes[id].cuentas[cuentaOrigen] >= monto) {
        this.clientes[id].cuentas[cuentaOrigen] -= monto;
        this.clientes[id].cuentas[cuentaDestino] += monto;
        return `Transferencia de $${monto} desde ${cuentaOrigen} a ${cuentaDestino} exitosa.`;
      } else {
        return `Fondos insuficientes en la cuenta ${cuentaOrigen}.`;
      }
    },
    consultarSaldo(id, cuenta) {
      return `El saldo de la cuenta ${cuenta} es $${this.clientes[id].cuentas[cuenta]}.`;
    }
  };
  
  class CajeroAutomatico {
    constructor(banco) {
      this.banco = banco;
      this.encendido = false;
    }
  
    encender() {
      this.encendido = true;
      console.log("Cajero automático encendido.");
      this.iniciarSesion();
    }
  
    apagar() {
      this.encendido = false;
      console.log("Cajero automático apagado.");
    }
  
    iniciarSesion() {
      if (!this.encendido) return;
      const id = prompt("Inserte su documento de identidad:");
      let pinValido = false;
      while (!pinValido && this.banco.clientes[id]?.intentos < 3) {
        const pin = prompt("Inserte su PIN:");
        pinValido = this.banco.validarCliente(id, pin);
        if (!pinValido) {
          console.log("PIN incorrecto. Inténtelo de nuevo.");
        }
      }
  
      if (pinValido) {
        this.mostrarMenu(id);
      } else {
        console.log("Número de intentos excedidos. Tarjeta bloqueada.");
      }
    }
  
    mostrarMenu(id) {
      let continuar = true;
      while (continuar) {
        const opcion = prompt(`Menú:
  1. Retirar efectivo
  2. Depositar
  3. Transferir
  4. Consultar saldo
  5. Salir
  Seleccione una opción:`);
        
        switch (opcion) {
          case "1":
            this.retirar(id);
            break;
          case "2":
            this.depositar(id);
            break;
          case "3":
            this.transferir(id);
            break;
          case "4":
            this.consultarSaldo(id);
            break;
          case "5":
            continuar = false;
            console.log("Gracias por usar el cajero automático. Hasta luego.");
            break;
          default:
            console.log("Opción no válida. Inténtelo de nuevo.");
        }
      }
    }
  
    retirar(id) {
      const cuenta = prompt("Seleccione la cuenta (ahorros/corriente):");
      const monto = parseInt(prompt("Ingrese el monto a retirar (múltiplos de $50000):"), 10);
      if (monto % 50000 === 0) {
        const resultado = this.banco.realizarRetiro(id, cuenta, monto);
        console.log(resultado);
      } else {
        console.log("Monto inválido. Debe ser en múltiplos de $50000.");
      }
    }
  
    depositar(id) {
      const cuenta = prompt("Seleccione la cuenta (ahorros/corriente):");
      const monto = parseInt(prompt("Ingrese el monto a depositar:"), 10);
      const tipo = prompt("¿El depósito es en efectivo o cheque? (efectivo/cheque):");
      const resultado = this.banco.realizarDeposito(id, cuenta, monto);
      console.log(resultado);
    }
  
    transferir(id) {
      const cuentaOrigen = prompt("Seleccione la cuenta de origen (ahorros/corriente):");
      const cuentaDestino = prompt("Seleccione la cuenta de destino (ahorros/corriente):");
      const monto = parseInt(prompt("Ingrese el monto a transferir:"), 10);
      const resultado = this.banco.realizarTransferencia(id, cuentaOrigen, cuentaDestino, monto);
      console.log(resultado);
    }
  
    consultarSaldo(id) {
      const cuenta = prompt("Seleccione la cuenta (ahorros/corriente):");
      const resultado = this.banco.consultarSaldo(id, cuenta);
      console.log(resultado);
    }
  }
  
  // Simulación del uso del cajero automático
  const cajero = new CajeroAutomatico(banco);
  
  // Simulación del panel de operador para encender o apagar el cajero
  const operador = prompt("Panel de operador: ¿Desea encender el cajero automático? (sí/no):");
  if (operador.toLowerCase() === "sí") {
    cajero.encender();
  } else {
    console.log("Cajero automático permanece apagado.");
  }