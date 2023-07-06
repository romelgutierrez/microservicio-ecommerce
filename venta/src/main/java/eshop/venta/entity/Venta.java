package eshop.venta.entity;

import eshop.venta.dto.Cliente;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.util.Date;
import lombok.Data;

import java.util.List;

@Entity
@Data

public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String serie;
    private String numero;
    private String descripcion;
    private Integer clienteId;
    @Temporal(TemporalType.DATE)
    @Column(name = "fecha")
    private Date fecha;

    //private String fecha;
    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "venta_id")
    private List<VentaDetalle> detalle;
    @Transient
    private Cliente cliente;
}
