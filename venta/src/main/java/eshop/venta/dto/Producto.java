package eshop.venta.dto;

import lombok.Data;

@Data
public class Producto {
    private Integer id;
    private String nombre;
    private String descripcion;
    private String precio;
    private String marca;
    private String modelo;
    private Categoria categoria;
}
