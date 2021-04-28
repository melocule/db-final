package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="weapons")
public class Weapon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer weapon_id;

    private String name;

    @Enumerated(EnumType.STRING)
    private WeaponType type;
    
    private Integer level = 1;
    private Integer attack = 1;

    @ManyToOne
    @JsonIgnore
    private User user;

    // @ManyToOne
    // @MapsId("user_id")
    // private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "char_id", referencedColumnName = "char_id")
    @JsonIgnore
    private Character character;

    public Weapon(Integer weapon_id, String name, WeaponType type, Integer level, Integer attack, User user, Character character) {
        this.weapon_id = weapon_id;
        this.name = name;
        this.type = type;
        this.level = level;
        this.attack = attack;
        this.user = user;
        this.character = character;
    }

    public Weapon() {}
    
    public Integer getId() {
        return weapon_id;
    }
    public void setId(Integer weapon_id) {
        this.weapon_id = weapon_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public WeaponType getType() {
        return type;
    }
    public void setType(WeaponType type) {
        this.type = type;
    }
    public Integer getLevel() {
        return level;
    }
    public void setLevel(Integer level) {
        this.level = level;
    }
    public Integer getAttack() {
        return attack;
    }
    public void setAttack(Integer attack) {
        this.attack = attack;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Character getCharacter() {
        return character;
    }
    public void setCharacter(Character character) {
        this.character = character;
    }


}
