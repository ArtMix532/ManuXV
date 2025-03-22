package ManuXV.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.Objects;


@Entity
@Table(name = Convidados.TABLE_NAME )
public class Convidados {
    public static final String TABLE_NAME = "Convidados";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "convidado_id", nullable = false, updatable = false)
    @NotNull
    @NotEmpty
    private Convidado convidado;

    @Column(name = "name", length = 100, nullable = false, unique = true)
    @NotNull
    @NotEmpty
    @Size(min = 1, max = 100)
    private String name;

    public Convidados() {
    }

    public Convidados(Integer id, Convidado convidado, String name) {
        this.id = id;
        this.convidado = convidado;
        this.name = name;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Convidado getConvidado() {
        return this.convidado;
    }

    public void setConvidado(Convidado convidado) {
        this.convidado = convidado;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Convidados id(Integer id) {
        setId(id);
        return this;
    }

    public Convidados convidado(Convidado convidado) {
        setConvidado(convidado);
        return this;
    }

    public Convidados name(String name) {
        setName(name);
        return this;
    }

    // @Override
    // public boolean equals(Object o) {
    //   return EqualsBuilder.reflectionEquals(this, o);
    // }

    @Override
    public int hashCode() {
        return Objects.hash(id, convidado, name);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", convidado='" + getConvidado() + "'" +
            ", name='" + getName() + "'" +
            "}";
    }
    
}
