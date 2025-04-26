package ManuXV.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import ManuXV.models.Convidados;
import ManuXV.models.Convidado;
import ManuXV.models.Convidado.CreateConvidado;
import ManuXV.services.ConvidadoService;
import ManuXV.services.ConvidadosService;

@RestController // <- ESSENCIAL
@RequestMapping("/convidados") // <- organiza a rota
public class ConvidadosControllers {

    @Autowired
    private ConvidadosService convidadosService;

    @Autowired
    private ConvidadoService convidadoService;

   @PostMapping
@Validated(CreateConvidado.class)
public ResponseEntity<Convidados> create(@RequestBody Convidados obj) {

    // Verifica se o Convidado veio com um ID (objeto parcial)
    if (obj.getConvidado() != null && obj.getConvidado().getId() != null) {
        // Busca o Convidado completo com base no ID
        Convidado convidadoCompleto = convidadoService.findByID(obj.getConvidado().getId());

        // Seta o convidado completo dentro do objeto Convidados
        obj.setConvidado(convidadoCompleto);
    }

    // Cria o Convidados no banco
    Convidados novo = convidadosService.Create(obj);

    URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(novo.getId())
                .toUri();

    return ResponseEntity.created(uri).build();
}

}
