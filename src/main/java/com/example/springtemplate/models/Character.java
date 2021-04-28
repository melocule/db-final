package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="characters")
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int char_id;
    
    private String name;

    @Enumerated(EnumType.STRING)
    private Element element;

    // private Integer level;
    // private Integer hp;
    // private Integer attack;
    // private Integer def;
    
    private Integer level = 1;
    private Integer hp = 1;
    private Integer attack = 1;
    private Integer def = 1;

    @ManyToOne
    // @JsonIgnore
    private User user;

    // @ManyToOne
    // @MapsId("user_id")
    // private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "weapon_id", referencedColumnName = "weapon_id")
    private Weapon weapon;


    public Character(String name, Element element, Integer level, Integer hp, Integer attack, Integer def, User user, Weapon weapon) {
        this.name = name;
        this.element = element;
        this.level = level;
        this.hp = hp;
        this.attack = attack;
        this.def = def;
        this.user = user;
        this.weapon = weapon;
    }

    public Character() {}

    public Integer getId() { return char_id; }
    public void setId(Integer id) { this.char_id = id; }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public Element getElement() {
        return element;
    }
    public void setElement(Element element) {
        this.element = element;
    }

    public Integer getLevel() {
        return level;
    }
    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getHp() {
        return hp;
    }
    public void setHp(Integer hp) {
        this.hp = hp;
    }

    public Integer getAttack() {
        return attack;
    }
    public void setAttack(Integer attack) {
        this.attack = attack;
    }

    public Integer getDef() {
        return def;
    }
    public void setDef(Integer def) {
        this.def = def;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Weapon getWeapon() {
        return weapon;
    }
    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }



}
