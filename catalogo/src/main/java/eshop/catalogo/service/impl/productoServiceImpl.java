package eshop.catalogo.service.impl;

import eshop.catalogo.entity.Producto;
import eshop.catalogo.repository.ProductoRepository;
import eshop.catalogo.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class productoServiceImpl implements ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public List<Producto> listar() {
        return productoRepository.findAll();
    }

    @Override
    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Producto actualizar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Optional<Producto> listarPorId(Integer id) {
        return productoRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        productoRepository.deleteById(id);
    }
}