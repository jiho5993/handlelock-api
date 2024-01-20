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
public class ClimbingSchedule extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idx;

    @Column(nullable = false, columnDefinition = "DATETIME(6)")
    private LocalDateTime startDateTime;

    @Column(nullable = false, columnDefinition = "DATETIME(6)")
    private LocalDateTime endDateTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private ClimbingPlace climbingPlace;

    @OneToMany(mappedBy = "climbingSchedule")
    private List<ClimbingScheduleParticipant> climbingScheduleParticipants = new ArrayList<>();
}
