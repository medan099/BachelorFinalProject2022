package com.bezkoder.springjwt.models;



import javax.persistence.*;


@Entity
@Table(	name = "candidatures",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "email")
        })
public class Candidature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String nom;

    private String prenom;


    private String email;


    private String telephone;

    private String  projetprofessionnel;
    private String fichier;


    public Candidature() {
    }

    public Candidature(String nom, String prenom, String email, String telephone, String projetprofessionnel, String fichier) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.projetprofessionnel = projetprofessionnel;
        this.fichier = fichier;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getFichier() {
        return fichier;
    }

    public void setFichier(String fichier) {
        this.fichier = fichier;
    }
    public String getProjetprofessionnel() {
        return projetprofessionnel;
    }

    public void setProjetprofessionnel(String projetprofessionnel) {
        this.projetprofessionnel = projetprofessionnel;
    }
}
