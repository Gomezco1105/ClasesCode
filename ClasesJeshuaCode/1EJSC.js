class SistemaDeAtencion {
    constructor() {
      this.usuariosAtendidos = 0;
      this.atendidosPorDia = {};
      this.atendidosTelefonicaEstudiante = 0;
      this.atendidosTelefonicaDocente = 0;
      this.atendidosOficinaEstudiante = 0;
      this.atendidosOficinaDocente = 0;
      this.traslados = 0;
      this.trasladosTelefonicaAOficina = 0;
    }
  
    atenderUsuario(modulo, tipoUsuario) {
      this.usuariosAtendidos++;
      if (modulo === "telefonica") {
        if (tipoUsuario === "Estudiante") {
          this.atendidosTelefonicaEstudiante++;
        } else if (tipoUsuario === "Docente") {
          this.atendidosTelefonicaDocente++;
        }
      } else if (modulo === "oficina") {
        if (tipoUsuario === "Estudiante") {
          this.atendidosOficinaEstudiante++;
        } else if (tipoUsuario === "Docente") {
          this.atendidosOficinaDocente++;
        }
      }
    }
  
    trasladarUsuario(origen, destino) {
      this.traslados++;
      if (origen === "telefonica" && destino === "oficina") {
        this.trasladosTelefonicaAOficina++;
      }
    }
  
    registrarAtencionPorDia(dia, modulo, tipoUsuario) {
      if (!this.atendidosPorDia[dia]) {
        this.atendidosPorDia[dia] = {};
      }
      if (!this.atendidosPorDia[dia][modulo]) {
        this.atendidosPorDia[dia][modulo] = {};
      }
      if (!this.atendidosPorDia[dia][modulo][tipoUsuario]) {
        this.atendidosPorDia[dia][modulo][tipoUsuario] = 0;
      }
      this.atendidosPorDia[dia][modulo][tipoUsuario]++;
    }
  
    obtenerEstadisticasGenerales() {
      console.log("Usuarios atendidos:", this.usuariosAtendidos);
      console.log("Traslados realizados:", this.traslados);
    }
  
    obtenerEstadisticasPorDia() {
      console.log("Estadísticas por día:");
      for (let dia in this.atendidosPorDia) {
        console.log("Día:", dia);
        console.log("Telefónica:", this.atendidosPorDia[dia].telefonica || { Estudiante: 0, Docente: 0 });
        console.log("Oficina:", this.atendidosPorDia[dia].oficina || { Estudiante: 0, Docente: 0 });
      }
    }
  
    obtenerEstadisticasPorModulo() {
      console.log("Estadísticas por módulo:");
      console.log("Telefónica - Estudiante:", this.atendidosTelefonicaEstudiante);
      console.log("Telefónica - Docente:", this.atendidosTelefonicaDocente);
      console.log("Oficina - Estudiante:", this.atendidosOficinaEstudiante);
      console.log("Oficina - Docente:", this.atendidosOficinaDocente);
    }
  }
  
  // Ejemplo de uso
  const sistemaAtencion = new SistemaDeAtencion();
  
  // Simulación de atención de usuarios
  sistemaAtencion.atenderUsuario("telefonica", "Estudiante");
  sistemaAtencion.atenderUsuario("oficina", "Estudiante");
  sistemaAtencion.atenderUsuario("oficina", "Estudiante");
  
  // Simulación de traslado de usuario
  sistemaAtencion.trasladarUsuario("telefonica", "oficina");
  
  // Simulación de registro por día
  sistemaAtencion.registrarAtencionPorDia("2024-05-15", "telefonica", "Estudiante");
  sistemaAtencion.registrarAtencionPorDia("2024-05-15", "oficina", "Estudiante");
  
  // Obtener estadísticas
  sistemaAtencion.obtenerEstadisticasGenerales();
  sistemaAtencion.obtenerEstadisticasPorDia();
  sistemaAtencion.obtenerEstadisticasPorModulo();