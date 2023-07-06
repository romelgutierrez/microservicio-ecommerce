package eshop.venta.service.impl;

import eshop.venta.dto.Cliente;
import eshop.venta.dto.Producto;
import eshop.venta.entity.Venta;
import eshop.venta.entity.VentaDetalle;
import eshop.venta.feign.ClienteFeign;
import eshop.venta.feign.ProductoFeign;
import eshop.venta.repository.VentaRepository;
import eshop.venta.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VentaServiceImpl implements VentaService {
    @Autowired
    private VentaRepository ventaRepository;

    @Autowired
    private ClienteFeign clienteFeign;
    @Autowired
    private ProductoFeign productoFeign;
    @Override
    public List<Venta> listar() {
        return ventaRepository.findAll();
    }


    @Override
    public Venta guardar(Venta venta) {
        return ventaRepository.save(venta);
    }

    @Override
    public Venta actualizar(Venta venta) {
        return ventaRepository.save(venta);
    }

    @Override
    public Optional<Venta> listarPorId(Integer id) {
        Venta venta= ventaRepository.findById(id).get();

        Cliente cliente=clienteFeign.listById(venta.getClienteId()).getBody();
        List<VentaDetalle> ventaDetalles = venta.getDetalle().stream().map(ventaDetalle -> {
            System.out.println(ventaDetalle.toString());
            System.out.println("Antes de la peticion");
            Producto producto = productoFeign.listById(ventaDetalle.getProductoID()).getBody();
            System.out.println("Despues de la peticion");
            System.out.println(producto.toString());
            System.out.println(producto.getNombre());
            ventaDetalle.setProducto(producto);
            return ventaDetalle;
        }).collect(Collectors.toList());
        venta.setDetalle(ventaDetalles);
        venta.setCliente(cliente);
        return Optional.of(venta);

    }

    @Override
    public void eliminarPorId(Integer id) {
        ventaRepository.deleteById(id);
    }
}
