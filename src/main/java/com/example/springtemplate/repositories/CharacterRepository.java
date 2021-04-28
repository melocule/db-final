package com.example.springtemplate.repositories;

import java.util.List;

import com.example.springtemplate.models.Character;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CharacterRepository
        extends CrudRepository<Character, Integer> {
        
        @Query(value = "SELECT * FROM characters", nativeQuery = true)
        public List<Character> findAllCharacters();
    
        @Query(value = "SELECT * FROM characters WHERE char_id=:id", nativeQuery = true)
        public Character findCharaById(@Param("id") Integer id);
}
