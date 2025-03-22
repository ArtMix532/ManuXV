package ManuXV.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ManuXV.models.Convidado;


@Repository
public interface ConvidadoRepository extends JpaRepository<Convidado, Integer> {
}
