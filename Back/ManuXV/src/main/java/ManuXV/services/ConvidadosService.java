package ManuXV.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ManuXV.models.Convidados;
import ManuXV.repositories.ConvidadosRepository;

@Service
public class ConvidadosService {

    @Autowired
    private ConvidadosRepository convidadosRepository;

    private ConvidadoService convidadoService;

    public Convidados findByID(Integer id) {
        return this.convidadosRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Acompanhante não encontrado! Id:" + id));
    }
    @Transactional
    public Convidados Create(Convidados obj){
        obj.setId(null);
        obj = this.convidadosRepository.save(obj);

        return obj;
    }
    
}
