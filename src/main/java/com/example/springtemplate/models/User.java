package com.example.springtemplate.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    private String email;

    private String first_name;
    private String last_name;
    private String username;
    private String password;

    @Temporal(TemporalType.DATE)
    private Date date_of_birth;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Weapon> weapons;
    
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Character> characters;

    public Integer getId() { return user_id; }
    public void setId(Integer id) { this.user_id = id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getFirstName() { return first_name; }
    public void setFirstName(String first_name) { this.first_name = first_name; }
    public String getLastName() { return last_name; }
    public void setLastName(String last_name) { this.last_name = last_name; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public Date getDateOfBirth() { return this.date_of_birth; }
    public void setDateOfBirth(Date date_of_birth) { this.date_of_birth = date_of_birth; }
    public List<Weapon> getWeapons() { return weapons; }
    public void setWeapons(List<Weapon> weapons) { this.weapons = weapons; }
    public List<Character> getCharacters() { return characters; }
    public void setCharacters(List<Character> characters) { this.characters = characters; }


    public User(String email, String username, String password, String first_name, String last_name, Date date_of_birth, List<Weapon> weapons, List<Character> characters) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.weapons = weapons;
        this.characters = characters;
    }

    public User() {}
}
