package ManuXV.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Convidado")
public class Convidado {
    
    public interface CreateConvidado {}
    public interface UpdateConvidado {}

    public static final String TABLE_NAME = "Convidado";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer id;

    @Column(name = "name", length = 100, nullable = false, unique = true)
    @NotNull(groups = CreateConvidado.class)
    @NotEmpty(groups = CreateConvidado.class)
    @Size(min = 1, max = 100)
    private String name;

    @Column(name = "n_convidados", nullable = false)
    @NotNull(groups = CreateConvidado.class)
    private Integer n_convidados;

    @Column(name = "presenca", nullable = false)
    @NotNull(groups = {CreateConvidado.class, UpdateConvidado.class})
    private Boolean presenca;




    public Convidado() {
    }

    public Convidado(Integer id, String name, Integer convidados, boolean presenca) {
        this.id = id;
        this.name = name;
        this.n_convidados = convidados;
        this.presenca = presenca;
    }


    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getConvidados() {
        return this.n_convidados;
    }

    public void setConvidados(Integer convidados) {
        this.n_convidados = convidados;
    }

    public boolean isPresenca() {
        return this.presenca;
    }

    public boolean getPresenca() {
        return this.presenca;
    }

    public void setPresenca(boolean presenca) {
        this.presenca = presenca;
    }

    
}
