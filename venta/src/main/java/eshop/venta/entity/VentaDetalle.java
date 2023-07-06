package eshop.venta.entity;

import eshop.venta.dto.Cliente;
import eshop.venta.dto.Producto;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class VentaDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double cantidad;
    private Double precio;
    private Integer productoID;
    @Transient
    private Producto producto;

    public VentaDetalle(){
        this.cantidad = (double) 0;
        this.precio = (double) 0;
    }

}
