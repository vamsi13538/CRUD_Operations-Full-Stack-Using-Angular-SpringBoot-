package com.backendcrud.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backendcrud.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity,Long>{

	//Optional<UserEntity> findByPhone(Long phone);
	
	Optional<UserEntity> findById(Long id);
	
}
