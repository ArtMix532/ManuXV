package ManuXV.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ManuXV.models.Convidados;

@Repository
public interface ConvidadosRepository extends JpaRepository<Convidados, Integer> {
    
}
