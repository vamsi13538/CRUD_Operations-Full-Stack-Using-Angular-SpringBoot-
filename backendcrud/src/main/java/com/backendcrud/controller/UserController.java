package com.backendcrud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backendcrud.entity.UserEntity;
import com.backendcrud.service.UserService;


@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	/*
	 * @PostMapping(value = "/saveUser") public Object saveUserData(@RequestBody
	 * UserEntity userentity) { return this.userService.saveUserData(userentity); }
	 */
	
	@PostMapping(value = "/saveUser")
	public ResponseEntity<UserEntity> addUser(@RequestBody UserEntity addUser) {
	    // Validate and save the user with the provided ID
		UserEntity savedUser = userService.saveUserData(addUser);
	    return ResponseEntity.ok(savedUser);
	}
	
	//getUserById http://localhost:8081/user/9856666666
	@GetMapping(value = "/user/{id}")
	public ResponseEntity<UserEntity> getPhoneById(@PathVariable Long id) {
		System.out.println("Inside getUserById method");//return userService.getUserByPhone(Phone);
		Optional<UserEntity> userId = userService.getUserById(id);
		return userId.map(ResponseEntity :: ok).orElseGet(()->ResponseEntity.notFound().build());
	}
	
	// Get All Users
	@GetMapping(value = "/users")
	public List<UserEntity> getAllUsers(){
		return this.userService.getAllUsers();
		}
	
	
	// updateUserUser
	@PutMapping("updateUser/{id}") // http://localhost:8081/updateUser/101
	public ResponseEntity<UserEntity> updateUser(@PathVariable Long id,@RequestBody UserEntity userDetails){
		System.out.println("In side updateUser method");
		UserEntity updateUser = userService.updateUserById(id, userDetails);
		return ResponseEntity.ok(updateUser);
	}
	
	
	// deleteByUser 
	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<Void> deleteShipments(@PathVariable Long id){
		System.out.println("In side deleteUser method");
		userService.deleteUser(id);
		return ResponseEntity.noContent().build();
	}
}



