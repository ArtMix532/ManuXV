package ManuXV.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import ManuXV.models.Convidado;
import ManuXV.models.Convidado.CreateConvidado;
import ManuXV.models.Convidado.UpdateConvidado;
import ManuXV.services.ConvidadoService;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;





@RestController
@Validated
public class ConvidadoController {
    
    @Autowired
    private ConvidadoService convidadoService;

    @GetMapping("/convidado/{id}")
    public ResponseEntity<Convidado> findByID(@PathVariable Integer id){
        Convidado obj = this.convidadoService.findByID(id);
        
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/convidado/nome/{name}")
    public ResponseEntity<Integer[]> getAcompanhantes(@PathVariable String name) {
        Integer num = this.convidadoService.GetAcompanhantes(name);
        Integer id = this.convidadoService.GetAcompanhantesID(name);
        Integer[] array = { num, id };
        return ResponseEntity.ok().body(array);
    }
    

    
    @GetMapping("/convidado/test") 
    public String test() {
        return new String("Tests");
    }
    
    

    @PostMapping("/convidado")
    @Validated(CreateConvidado.class)
    public ResponseEntity<Convidado> create(@RequestBody Convidado obj){

        this.convidadoService.CreateConvidado(obj);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    } 

@PostMapping("/convidado/all")
public ResponseEntity<List<Convidado>> createAll(@RequestBody List<Convidado> convidados){

    List<Convidado> saved = this.convidadoService.CreateConvidadoAll(convidados);

    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
}



    @PutMapping("/convidado/{id}")
    @Validated(UpdateConvidado.class)
    public ResponseEntity<Convidado> update(@PathVariable Integer id,
                                            @RequestParam Boolean presenca,
                                            @RequestParam Integer convidados) {
        Convidado atualizado = this.convidadoService.UpdatePresencaConvidado(id, presenca, convidados);
        return ResponseEntity.ok(atualizado); // Encapsula a resposta corretamente
    }
    

    
    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> delete(@PathVariable Integer id){
    //     this.convidadoService.(id);

    // }

}
