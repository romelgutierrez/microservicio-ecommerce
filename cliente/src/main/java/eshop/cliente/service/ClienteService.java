package eshop.cliente.service;

import eshop.cliente.entity.Cliente;

import java.util.List;
import java.util.Optional;

public interface ClienteService {
    public List<Cliente> listar();

    public Cliente guardar(Cliente cliente);

    public Cliente actualizar(Cliente cliente);

    public Optional<Cliente> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
