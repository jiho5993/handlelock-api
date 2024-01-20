package com.handlerock.api.entities;

import com.handlerock.api.entities.base.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ClubMembershipFeePayer extends BaseEntity {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Member member;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private ClubMembershipFee clubMembershipFee;

    @Column(nullable = false, columnDefinition = "TINYINT(1)")
    private boolean isPaid;

    @Column(nullable = false, columnDefinition = "DATETIME(6)")
    private LocalDateTime paidDateTime;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String memo;
}
