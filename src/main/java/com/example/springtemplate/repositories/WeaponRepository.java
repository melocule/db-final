package com.example.springtemplate.repositories;

import java.util.List;

import com.example.springtemplate.models.Weapon;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface WeaponRepository
        extends CrudRepository<Weapon, Integer> {

        @Query(value = "SELECT * FROM weapons", nativeQuery = true)
        public List<Weapon> findAllWeapons();
    
        @Query(value = "SELECT * FROM weapons WHERE weapon_id=:id", nativeQuery = true)
        public Weapon findWeaponById(@Param("id") Integer id);
}
