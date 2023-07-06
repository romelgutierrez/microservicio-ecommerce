package eshop.catalogo.controller;

import eshop.catalogo.entity.Producto;
import eshop.catalogo.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping()
    public List<Producto> listar() {
        return productoService.listar();
    }

    @PostMapping()
    public Producto guardar(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(productoService.listarPorId(id).get());
    }
    @PutMapping()
    public Producto actualizar(@RequestBody Producto producto){
        return productoService.actualizar(producto);
    }
    @DeleteMapping("/{id}")
    public void eliminarPorId(@PathVariable(required = true) Integer id ){
        productoService.eliminarPorId(id);
    }
}