package com.handlerock.api.entities;

import com.handlerock.api.entities.base.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ClubMembershipFee extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idx;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String memo;

    @OneToMany(mappedBy = "clubMembershipFee")
    private List<ClubMembershipFeePayer> clubMembershipFeePayers = new ArrayList<>();
}
