package com.atlantbhinternship.auctionapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Table(name = "`product`")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String img_url;
    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "category_id"
    )
    private Category category;

    public Product(String name) {
        this.name = name;
    }
}