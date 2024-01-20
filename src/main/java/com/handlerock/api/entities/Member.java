package com.handlerock.api.entities;

import com.handlerock.api.entities.base.BaseEntity;
import com.handlerock.api.entities.enums.UserGender;
import com.handlerock.api.entities.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@DynamicInsert
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idx;

    @Column(nullable = false, length = 10)
    private String name;

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'ACTIVATED'")
    private UserStatus status;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserGender gender;

    @Column(nullable = false)
    private LocalDate birth;

    @OneToMany(mappedBy = "member")
    private List<MemberDetail> memberDetails = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<ClubMembershipFeeUsageMember> clubMembershipFeeUsageMembers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<ClimbingScheduleParticipant> climbingScheduleParticipants = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<ClubMembershipFeePayer> clubMembershipFeePayers = new ArrayList<>();
}
