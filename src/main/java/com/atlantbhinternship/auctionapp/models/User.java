package com.atlantbhinternship.auctionapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.GeneratedReferenceTypeDelegate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
//@Table(name="users", uniqueConstraints = {
//        @UniqueConstraint(columnNames = {
//                "name"
//        })
//})
@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank
    private String lastName;
    @NotBlank
    private String firstName;
    @NotBlank
    private String email;
    @NotBlank
    private String passwordHash;

}
