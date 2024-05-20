class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinima = cantidadMinima;
      this.cantidadMaxima = cantidadMaxima;
      this.porcentajeDescuento = porcentajeDescuento;
    }
  
    solicitarPedido() {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalAPagar(cantidad) {
      return cantidad * this.precioCompra;
    }
  }
  
  class Ropa extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla, permitePlanchado) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  class Zapato extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
    }
  }
  
  let productosRopa = [
    new Ropa('1', 'Camisa', 20, 35, 10, 5, 20, 10, 'M', true),
    new Ropa('2', 'Pantalón', 30, 50, 15, 8, 25, 10, 'L', false)
  ];
  
  let productosZapatos = [
    new Zapato('3', 'Zapatillas', 40, 60, 8, 4, 15, 15, 42),
    new Zapato('4', 'Botas', 50, 80, 12, 6, 18, 15, 39)
  ];
  
  function mostrarProductosRopa() {
    console.log('Productos de Ropa:');
    productosRopa.forEach(producto => {
      console.log(`Código: ${producto.codigo}, Descripción: ${producto.descripcion}, Precio Venta: ${producto.precioVenta}, Talla: ${producto.talla}, Permite Planchado: ${producto.permitePlanchado ? 'Sí' : 'No'}`);
    });
  }
  
  function mostrarProductosZapatos() {
    console.log('Productos de Zapatos:');
    productosZapatos.forEach(producto => {
      console.log(`Código: ${producto.codigo}, Descripción: ${producto.descripcion}, Precio Venta: ${producto.precioVenta}, Talla: ${producto.talla}`);
    });
  }
  
  console.log('--- Productos de Ropa ---');
  mostrarProductosRopa();
  
  console.log('\n--- Productos de Zapatos ---');
  mostrarProductosZapatos();