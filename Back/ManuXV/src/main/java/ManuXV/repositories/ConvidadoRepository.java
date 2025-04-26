package ManuXV.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ManuXV.models.Convidado;


@Repository
public interface ConvidadoRepository extends JpaRepository<Convidado, Integer> {

    Optional<Convidado> findByName(String nome);

    Optional<Convidado> findByNameIgnoreCase(String name);

}
