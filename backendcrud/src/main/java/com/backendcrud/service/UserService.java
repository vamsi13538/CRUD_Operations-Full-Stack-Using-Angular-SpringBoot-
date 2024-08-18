package com.backendcrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.backendcrud.entity.UserEntity;
import com.backendcrud.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	// Post User
    public UserEntity saveUserData(UserEntity userdentity) {
        return userRepository.save(userdentity);
    }
    
    // Get UserById
    public Optional<UserEntity> getUserById(Long id){
    	return userRepository.findById(id);
    }
    
    // Get All Users
    public List<UserEntity> getAllUsers(){
    	return this.userRepository.findAll();    }
    
    // Update userById
    @Transactional
    public UserEntity updateUserById(Long id,UserEntity userDetails){ 
    	UserEntity user = userRepository.findById(id).orElseThrow(()->new RuntimeException("User Not Found"));
		user.setId(userDetails.getId());
		user.setFirstname(userDetails.getFirstname());
		user.setLastname(userDetails.getLastname());
		user.setPhone(userDetails.getPhone());
		user.setEmail(userDetails.getEmail());
		return userRepository.save(user);
	}

	
	// Delete userById
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
	
}
