package ManuXV.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ManuXV.models.Convidado;
import ManuXV.repositories.ConvidadoRepository;

@Service
public class ConvidadoService {

    @Autowired
    private ConvidadoRepository convidadoRepository;



    public Convidado findByID(Integer id){

        Optional<Convidado> convidado = this.convidadoRepository.findById(id);


        return convidado.orElseThrow( () -> new RuntimeException(
            "Usuário não encontrado! Id: " + id + " Tipo: " + Convidado.class.getName()
        ));
    }
    
    @Transactional
    public Convidado CreateConvidado(Convidado obj ){
        obj.setId(null);
        obj = this.convidadoRepository.save(obj);

        return obj;
    }
    
    @Transactional
    public Convidado UpdateConvidado(Convidado obj, int acompanhantes){
        Convidado newObj = findByID(obj.getId());
        newObj.setPresenca(obj.getPresenca());
        newObj.setConvidados(obj.getConvidados()); 

        return this.convidadoRepository.save(newObj);
    }
}
