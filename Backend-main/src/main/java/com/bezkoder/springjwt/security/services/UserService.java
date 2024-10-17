package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.exception.UserNotFoundException;
import com.bezkoder.springjwt.models.ERole;
import com.bezkoder.springjwt.models.Role;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.repository.RoleRepository;
import com.bezkoder.springjwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class UserService {
    private final UserRepository UserRepo;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    public UserService(UserRepository UserRepo) {
        this.UserRepo = UserRepo;
    }

    public User addUser(User user) {
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_USER);
        roles.add(userRole);
        user.setRoles(roles);
        user.setPassword(encoder.encode(user.getPassword()));
        return UserRepo.save(user);
    }

    public List<User> findAllUsers() {
        return UserRepo.findAll();
    }

    public User updateUser(User user) {


//        Set<Role> roles = new HashSet<>();
//        ERole role= roleRepository.findByusername(user.getUsername());
//        Role userRole = roleRepository.findByName(role);
//        roles.add(userRole);
//        user.setRoles(roles);
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_USER);
        roles.add(userRole);
        user.setRoles(roles);
        user.setPassword(encoder.encode(user.getPassword()));
        return UserRepo.save(user);
    }
    public User updateAdmin(User user) {
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_ADMIN);
        roles.add(userRole);
        user.setRoles(roles);
        user.setPassword(encoder.encode(user.getPassword()));
        return UserRepo.save(user);
    }

    public User updateManager(User user) {
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_MODERATOR);
        roles.add(userRole);
        user.setRoles(roles);
        user.setPassword(encoder.encode(user.getPassword()));
        return UserRepo.save(user);
    }

    public User findUserById(Long id) {
        return UserRepo.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteUser(Long id){
        UserRepo.deleteUserById(id);
    }
}
