package com.handlerock.api.entities;

import com.handlerock.api.entities.base.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ClubMembershipFeeUsage extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idx;

    @Column(nullable = false, columnDefinition = "DATETIME(6)")
    private LocalDateTime usageDate;

    @Column(columnDefinition = "TEXT")
    private String memo;

    @Column(nullable = false)
    private int price;

    @OneToMany(mappedBy = "clubMembershipFeeUsage")
    private List<ClubMembershipFeeUsageMember> clubMembershipFeeUsageMembers = new ArrayList<>();
}
