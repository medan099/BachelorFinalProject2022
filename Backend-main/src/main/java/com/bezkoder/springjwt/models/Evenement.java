package com.bezkoder.springjwt.models;



import javax.persistence.*;


@Entity
@Table(	name = "evenements",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "titre")
        })
public class










































Evenement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String date;
    private String details;
    private String imageUrl;
    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }



    public Evenement(String titre, String date, String details, String imageUrl) {
        this.titre = titre;
        this.date = date;
        this.details = details;
        this.imageUrl = imageUrl;
    }



    public Evenement() {
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }


    public Evenement(Long id, String titre ) {
        this.id = id;
        this.titre = titre;

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

}