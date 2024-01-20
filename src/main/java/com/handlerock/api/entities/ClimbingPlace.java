package com.handlerock.api.entities;

import com.handlerock.api.entities.base.BaseEntity;
import com.handlerock.api.entities.enums.ClimbingPlaceStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@DynamicInsert
public class ClimbingPlace extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idx;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 200)
    private String location;

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'ACTIVATED'")
    private ClimbingPlaceStatus status;

    @OneToMany(mappedBy = "climbingPlace")
    private List<ClimbingSchedule> schedules = new ArrayList<>();
}
