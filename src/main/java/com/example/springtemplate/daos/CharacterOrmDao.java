package com.example.springtemplate.daos;

import com.example.springtemplate.models.Character;
import com.example.springtemplate.models.User;
import com.example.springtemplate.models.Weapon;
import com.example.springtemplate.repositories.CharacterRepository;
import com.example.springtemplate.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CharacterOrmDao {
    @Autowired
    CharacterRepository characterRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/characters")
    public Character createCharacter(@RequestBody Character character) {
        return characterRepository.save(character);
    }

    @PostMapping("/api/users/{userId}/characters")
    public Character createCharacterForUser(
            @PathVariable("userId") Integer uid,
            @RequestBody Character character) {
        
        character = characterRepository.save(character);
        User user = userRepository.findUserById(uid);
        character.setUser(user);
        return characterRepository.save(character);
    }

    @GetMapping("/api/users/{userId}/characters")
    public List<Character> findCharacterForUser(
            @PathVariable("userId") Integer uid) {
        User user = userRepository.findUserById(uid);
        return user.getCharacters();
    }

    @GetMapping("/api/characters")
    public List<Character> findAllCharacters() {
        return characterRepository.findAllCharacters();
    }
    
    @GetMapping("/api/characters/{characterId}")
    public Character findCharaById(
            @PathVariable("characterId") Integer char_id) {
        return characterRepository.findCharaById(char_id);
    }

    @PutMapping("/api/characters/{characterId}")
    public Character updateCharacter(
            @PathVariable("characterId") Integer char_id,
            @RequestBody Character updatedCharacter) {

        Character character = characterRepository.findCharaById(char_id);

        character.setName(updatedCharacter.getName());
        character.setElement(updatedCharacter.getElement());
        character.setLevel(updatedCharacter.getLevel());
        character.setHp(updatedCharacter.getHp());
        character.setAttack(updatedCharacter.getAttack());
        character.setDef(updatedCharacter.getDef());
        character.setUser(updatedCharacter.getUser());
        character.setWeapon(updatedCharacter.getWeapon());

        return characterRepository.save(character);
    }

    @GetMapping("/api/characters/{characterId}/weaponId")
    public Integer findWeaponIdForCharacter(@PathVariable("characterId") Integer charId) {
        return characterRepository.findCharaById(charId).getWeapon().getId();
    }

    @DeleteMapping("/api/characters/{characterId}")
    public void deleteCharacter(@PathVariable("characterId") Integer char_id) {
        characterRepository.deleteById(char_id);
    }
}