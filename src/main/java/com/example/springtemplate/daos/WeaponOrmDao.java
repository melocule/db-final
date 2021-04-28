package com.example.springtemplate.daos;

import com.example.springtemplate.models.*;
import com.example.springtemplate.models.Character;
import com.example.springtemplate.repositories.UserRepository;
import com.example.springtemplate.repositories.WeaponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WeaponOrmDao {
    @Autowired
    WeaponRepository weaponRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/weapons")
    public Weapon createWeapon(@RequestBody Weapon weapon) {
        return weaponRepository.save(weapon);
    }
    
    @GetMapping("/api/weapons")
    public List<Weapon> findAllWeapons() {
        return (List<Weapon>) weaponRepository.findAll();
    }
    
    @GetMapping("/api/weapons/{weaponId}")
    public Weapon findWeaponById(@PathVariable("weaponId") Integer id) {
        return weaponRepository.findById(id).get();
    }

    @PutMapping("/api/weapon/{weaponId}")
    public Weapon updateWeapon(
            @PathVariable("weaponId") Integer id,
            @RequestBody Weapon updatedWeapon) {
                
        Weapon weapon = this.findWeaponById(id);
        
        // not updating weapon name
        weapon.setLevel(updatedWeapon.getLevel());
        weapon.setAttack(updatedWeapon.getAttack());
        weapon.setUser(updatedWeapon.getUser());
        weapon.setCharacter(updatedWeapon.getCharacter());

        return weaponRepository.save(weapon);
    }

    @DeleteMapping("/api/weapons/{weaponId}")
    public void deleteWeapon(
            @PathVariable("weaponId") Integer id) {
        weaponRepository.deleteById(id);
    }

    @PostMapping("/api/users/{userId}/weapons")
    public Weapon createWeaponForUser(
        @PathVariable("userId") Integer uid,
        @RequestBody Weapon weapon) {

        weapon = weaponRepository.save(weapon);
        User user = userRepository.findUserById(uid);
        weapon.setUser(user);
        return weaponRepository.save(weapon);
    }

    @GetMapping("/api/weapons/{weaponId}/characterId")
    public Character findCharacterIdForWeapon(@PathVariable("weaponId") Integer weaponId) {
        return weaponRepository.findWeaponById(weaponId).getCharacter();
    }

    @GetMapping("/api/users/{userId}/weapons")
    public List<Weapon> findWeaponForUser(
        @PathVariable("userId") Integer uid) {
        User user = userRepository.findUserById(uid);
        return user.getWeapons();
    }
}