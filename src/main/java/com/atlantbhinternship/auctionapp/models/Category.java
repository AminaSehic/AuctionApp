package com.atlantbhinternship.auctionapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "`category`")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;
    @ManyToOne
    @JoinColumn(
            nullable = true,
            name = "parent_id"
    )
    private Category parent;

    public Category(String name, Category parent) {
        this.name = name;
        this.parent = parent;
    }

    public Category(String name) {
        this.name = name;
    }
}