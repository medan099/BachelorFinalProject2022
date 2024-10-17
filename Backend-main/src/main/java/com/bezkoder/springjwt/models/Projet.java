package com.bezkoder.springjwt.models;


import javax.persistence.*;

@Entity
@Table(	name = "projets",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "titre")
        })
public class Projet {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String date;
    private String statut;

    public Projet() {
    }

    public Projet(String titre, String date, String statut) {
        this.titre = titre;
        this.date = date;
        this.statut = statut;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }
}
