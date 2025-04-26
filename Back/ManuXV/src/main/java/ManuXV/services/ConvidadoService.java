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
        return this.convidadoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado! Id: " + id));
    }
    
    @Transactional
    public Convidado CreateConvidado(Convidado obj){
        obj.setId(null);
        obj = this.convidadoRepository.save(obj);
        return obj;
    }
    
    @Transactional
    public Convidado UpdateConvidado(Convidado obj){
        Convidado newObj = findByID(obj.getId());
        newObj.setPresenca(obj.getPresenca());
        newObj.setConvidados(obj.getConvidados());
        return this.convidadoRepository.save(newObj);
    }

    @Transactional
    public Convidado UpdatePresencaConvidado(Integer id, Boolean presenca,Integer convidados){
        Convidado newObj = findByID(id); // Buscar o convidado pelo id
        newObj.setPresenca(presenca); // Atualizar a presença
        newObj.setConvidados(convidados);
        return this.convidadoRepository.save(newObj); // Salvar e retornar o convidado atualizado
    }


    public Integer GetAcompanhantes(String name){
        Optional<Convidado> convidado = convidadoRepository.findByNameIgnoreCase(name);
    
        return convidado
            .map(c -> c.getConvidados() != null ? c.getConvidados() : 0)
            .orElse(null);
    }
    
    public Integer GetAcompanhantesID(String name){
        Optional<Convidado> convidado = convidadoRepository.findByNameIgnoreCase(name);
    
        return convidado
            .map(c -> c.getId() != null ? c.getId() : 0)
            .orElse(null);
    }
}
