import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMembers1716564775412 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('박지호', 'MALE', 'ACTIVATED', '2000-01-22', '2023-10-08 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('윤정민', 'MALE', 'ACTIVATED', '1994-10-17', '2023-07-31 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('강아란', 'FEMALE', 'ACTIVATED', '1995-02-26', '2023-11-26 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('한송이', 'FEMALE', 'ACTIVATED', '1992-07-09', '2023-07-25 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김규훈', 'MALE', 'ACTIVATED', '1995-12-27', '2023-06-06 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('강창훈', 'MALE', 'ACTIVATED', '1996-11-20', '2023-10-22 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이장표', 'MALE', 'ACTIVATED', '1989-12-21', '2023-09-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정의석', 'MALE', 'ACTIVATED', '1989-11-06', '2023-04-23 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김영보', 'MALE', 'ACTIVATED', '1999-03-11', '2023-05-12 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('양지훈', 'MALE', 'ACTIVATED', '1992-12-28', '2023-05-16 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이상섭', 'MALE', 'ACTIVATED', '1992-08-22', '2023-05-22 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정원정', 'FEMALE', 'ACTIVATED', '1999-01-21', '2023-06-03 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('선우솔', 'FEMALE', 'ACTIVATED', '1991-06-27', '2023-07-13 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('박현주', 'FEMALE', 'ACTIVATED', '1995-03-19', '2023-07-22 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('장현정', 'FEMALE', 'ACTIVATED', '1982-08-27', '2023-08-14 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이다은', 'FEMALE', 'ACTIVATED', '1991-06-07', '2023-08-20 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('최동규', 'MALE', 'ACTIVATED', '1991-03-21', '2023-08-21 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('박현아', 'FEMALE', 'ACTIVATED', '1994-10-17', '2023-08-30 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김선우', 'MALE', 'ACTIVATED', '1996-02-24', '2023-09-08 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('주재홍', 'MALE', 'ACTIVATED', '1992-10-07', '2023-09-17 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김태웅', 'MALE', 'ACTIVATED', '1992-03-19', '2023-10-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김한별', 'MALE', 'ACTIVATED', '1988-12-13', '2023-10-03 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('양준영', 'MALE', 'ACTIVATED', '1988-04-27', '2023-10-03 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김가빈', 'FEMALE', 'ACTIVATED', '1989-11-10', '2023-10-11 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('주경현', 'MALE', 'ACTIVATED', '1995-10-03', '2023-11-03 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('권경범', 'MALE', 'ACTIVATED', '1998-07-02', '2023-11-11 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('남기범', 'MALE', 'ACTIVATED', '1990-12-02', '2023-11-12 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('백효정', 'FEMALE', 'ACTIVATED', '1995-06-05', '2023-12-06 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이상언', 'FEMALE', 'ACTIVATED', '1992-11-17', '2023-12-25 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이승연', 'FEMALE', 'ACTIVATED', '1993-08-15', '2024-01-03 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이경우', 'MALE', 'ACTIVATED', '1995-10-23', '2024-01-13 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('노진민', 'MALE', 'ACTIVATED', '1994-05-02', '2024-01-19 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('박지선', 'FEMALE', 'ACTIVATED', '1989-06-23', '2024-01-28 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정정빈', 'FEMALE', 'ACTIVATED', '1996-09-03', '2024-02-01 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('박건주', 'MALE', 'ACTIVATED', '1994-08-10', '2024-02-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('송정원', 'FEMALE', 'ACTIVATED', '1996-05-27', '2024-02-03 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김명종', 'MALE', 'ACTIVATED', '1994-07-06', '2024-02-06 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('백한나', 'FEMALE', 'ACTIVATED', '1996-05-03', '2024-02-08 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김효정', 'FEMALE', 'ACTIVATED', '1994-01-01', '2024-02-08 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('성다현', 'FEMALE', 'ACTIVATED', '1998-05-28', '2024-02-09 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김이현', 'MALE', 'ACTIVATED', '1989-06-25', '2024-02-09 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('한승원', 'MALE', 'ACTIVATED', '1988-04-11', '2024-02-09 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이민진', 'FEMALE', 'ACTIVATED', '2000-06-27', '2024-02-10 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('최은혜', 'FEMALE', 'ACTIVATED', '1988-03-26', '2024-02-10 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('유채림', 'FEMALE', 'ACTIVATED', '1999-03-18', '2024-02-12 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('채민석', 'MALE', 'ACTIVATED', '1998-11-03', '2024-02-12 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김태형', 'MALE', 'ACTIVATED', '1990-07-28', '2024-02-19 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('노정연', 'FEMALE', 'ACTIVATED', '1992-09-08', '2024-02-20 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김현수', 'MALE', 'ACTIVATED', '2002-09-18', '2024-02-20 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정인교', 'MALE', 'ACTIVATED', '1984-03-09', '2024-02-21 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('문혜민', 'FEMALE', 'ACTIVATED', '1996-06-16', '2024-02-21 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이사미', 'FEMALE', 'ACTIVATED', '1991-09-05', '2024-02-25 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김현중', 'MALE', 'ACTIVATED', '1991-06-18', '2024-02-28 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('박현준', 'MALE', 'ACTIVATED', '1996-10-07', '2024-02-29 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김서윤', 'FEMALE', 'ACTIVATED', '2000-11-28', '2024-03-03 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('황두현', 'MALE', 'ACTIVATED', '1994-07-10', '2024-03-04 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('최은주', 'FEMALE', 'ACTIVATED', '1998-08-25', '2024-03-05 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정다운', 'FEMALE', 'ACTIVATED', '1995-07-03', '2024-03-16 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('진태옥', 'FEMALE', 'ACTIVATED', '1987-11-24', '2024-03-21 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('유성관', 'MALE', 'ACTIVATED', '1994-03-09', '2024-03-22 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('강동훈', 'MALE', 'ACTIVATED', '1993-08-10', '2024-03-24 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김미현', 'FEMALE', 'ACTIVATED', '1995-03-28', '2024-03-27 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정주희', 'FEMALE', 'ACTIVATED', '1998-05-01', '2024-04-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정우영', 'MALE', 'ACTIVATED', '1998-01-21', '2024-04-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('전해빈', 'MALE', 'ACTIVATED', '1990-12-09', '2024-04-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('심성우', 'MALE', 'ACTIVATED', '2000-03-25', '2024-04-05 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정웅기', 'MALE', 'ACTIVATED', '1994-02-17', '2024-04-05 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('손주영', 'MALE', 'ACTIVATED', '1983-02-11', '2024-04-06 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('허해연', 'FEMALE', 'ACTIVATED', '1996-12-27', '2024-04-10 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김의섭', 'MALE', 'ACTIVATED', '1994-02-23', '2024-04-15 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('구한결', 'MALE', 'ACTIVATED', '1999-09-13', '2024-04-24 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김연서', 'FEMALE', 'ACTIVATED', '1996-04-02', '2024-04-26 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('정현종', 'MALE', 'ACTIVATED', '1987-02-08', '2024-04-27 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이강후', 'MALE', 'ACTIVATED', '1998-08-06', '2024-05-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김수진', 'FEMALE', 'ACTIVATED', '1996-03-11', '2024-05-02 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('하동현', 'MALE', 'ACTIVATED', '1999-02-16', '2024-05-05 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('한현', 'MALE', 'ACTIVATED', '1992-06-11', '2024-05-05 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('최득균', 'MALE', 'ACTIVATED', '1990-05-25', '2024-05-06 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이수린', 'FEMALE', 'ACTIVATED', '2001-02-21', '2024-05-08 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김범철', 'MALE', 'ACTIVATED', '1994-11-02', '2024-05-13 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('구경준', 'MALE', 'ACTIVATED', '1998-08-15', '2024-05-16 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('최현준', 'MALE', 'ACTIVATED', '1992-01-01', ' 2024-05-20 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('이정연', 'FEMALE', 'ACTIVATED', '1996-11-23', '2024-05-24 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('박하은', 'FEMALE', 'ACTIVATED', '1995-03-21', '2024-05-24 00:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO handlelock.member (name, gender, status, birth, joinDate) VALUES ('김진영', 'MALE', 'ACTIVATED', '1995-09-19', '2024-05-24 00:00:00')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
