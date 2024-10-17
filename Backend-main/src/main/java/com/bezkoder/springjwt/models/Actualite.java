package com.bezkoder.springjwt.models;




import javax.persistence.*;


@Entity
@Table(    name = "actualites",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "titre")
        })
public class Actualite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String jour;
    private String mois;
    private String details;
    private String imageUrl;


    public Actualite() {
    }

    public Actualite(String titre, String jour, String mois, String details, String imageUrl) {
        this.titre = titre;
        this.jour = jour;
        this.mois = mois;
        this.details = details;
        this.imageUrl = imageUrl;
    }


    public Long getId() {
        return id;
    }


    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getJour() {
        return jour;
    }

    public void setJour(String jour) {
        this.jour = jour;
    }

    public String getMois() {
        return mois;
    }

    public void setMois(String mois) {
        this.mois = mois;
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


}