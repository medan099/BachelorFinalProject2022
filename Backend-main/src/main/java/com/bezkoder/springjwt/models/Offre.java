package com.bezkoder.springjwt.models;



import javax.persistence.*;


@Entity
@Table(	name = "offres",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "titre")
        })
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private Integer salaire;

    private String type;


    private String profilRecherche;


    public Offre() {
    }

    public Offre(String titre, Integer salaire, String type, String profilRecherche) {
        this.titre = titre;
        this.salaire = salaire;
        this.type = type;
        this.profilRecherche = profilRecherche;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getProfilRecherche() {
        return profilRecherche;
    }

    public void setProfilRecherche(String profilRecherche) {
        this.profilRecherche = profilRecherche;
    }
    public Integer getSalaire() {
        return salaire;
    }

    public void setSalaire(Integer salaire) {
        this.salaire = salaire;
    }
}