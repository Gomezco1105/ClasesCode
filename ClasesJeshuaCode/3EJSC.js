let productos = [
    {
      id: '1',
      nombre: 'Producto 1',
      fecha: '2024-05-21',
      precioInicial: '100',
      ofertas: [
        { fecha: '2024-05-22', valor: '120' },
        { fecha: '2024-05-23', valor: '150' }
      ]
    },
    {
      id: '2',
      nombre: 'Producto 2',
      fecha: '2024-05-22',
      precioInicial: '200',
      ofertas: [
        { fecha: '2024-05-23', valor: '220' },
        { fecha: '2024-05-24', valor: '250' }
      ]
    }
  ];
  
  function verProductosRegistrados() {
    if (productos.length === 0) {
      console.log('No hay productos registrados.');
    } else {
      console.log('Lista de productos registrados:');
      productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Fecha: ${producto.fecha}, Precio Inicial: ${producto.precioInicial}`);
      });
    }
  }
  
  function verOfertasPorProducto() {
    console.log('Ofertas por producto:');
    productos.forEach(producto => {
      console.log(`Producto: ${producto.nombre}`);
      if (producto.ofertas.length === 0) {
        console.log('No hay ofertas para este producto.');
      } else {
        producto.ofertas.forEach((oferta, index) => {
          console.log(`Oferta ${index + 1}: Fecha: ${oferta.fecha}, Valor: ${oferta.valor}`);
        });
      }
    });
  }
  
  function seleccionarOfertaGanadora() {
    console.log('Oferta ganadora por producto:');
    productos.forEach(producto => {
      console.log(`Producto: ${producto.nombre}`);
      if (producto.ofertas.length === 0) {
        console.log('No hay ofertas para este producto.');
      } else {
        let ofertaGanadora = producto.ofertas[0];
        producto.ofertas.forEach(oferta => {
          if (oferta.valor > ofertaGanadora.valor) {
            ofertaGanadora = oferta;
          }
        });
        console.log(`Oferta ganadora: Fecha: ${ofertaGanadora.fecha}, Valor: ${ofertaGanadora.valor}`);
      }
    });
  }
  
  console.log('--- Ver productos registrados ---');
  verProductosRegistrados();
  
  console.log('\n--- Ver ofertas por producto ---');
  verOfertasPorProducto();
  
  console.log('\n--- Seleccionar oferta ganadora ---');
  seleccionarOfertaGanadora();