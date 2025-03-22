package ManuXV.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import ManuXV.models.Convidado;
import ManuXV.models.Convidado.CreateConvidado;
import ManuXV.services.ConvidadoService;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/convidado")
@Validated
public class ConvidadoController {
    
    @Autowired
    private ConvidadoService convidadoService;

    @GetMapping("/{id}")
    public ResponseEntity<Convidado> findByID(@PathVariable Integer id){
        Convidado obj = this.convidadoService.findByID(id);

        return ResponseEntity.ok().body(obj);
    }
    

    @PostMapping
    @Validated(CreateConvidado.class)
    public ResponseEntity<Void> create(@Valid @RequestBody Convidado obj){
        this.convidadoService.CreateConvidado(obj);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    } 

}
