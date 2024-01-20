package com.handlerock.api.entities;

import com.handlerock.api.entities.base.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ClubMembershipFeeUsageMember extends BaseEntity {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private ClubMembershipFeeUsage clubMembershipFeeUsage;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Member member;
}
