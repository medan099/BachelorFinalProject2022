package com.bezkoder.springjwt.models;

import javax.persistence.*;


@Entity
@Table(	name = "emails",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "value")
        })
public class Email {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String value;

    public Email() {
    }

    public Email(Long id, String value) {
        this.id = id;
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
