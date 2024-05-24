import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1716557789273 implements MigrationInterface {
    name = 'InitDatabase1716557789273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`climbing_gym\` (\`idx\` int NOT NULL, \`name\` varchar(50) NOT NULL, \`location\` varchar(300) NOT NULL, \`status\` enum ('OPEN', 'CLOSED', 'DELETED') NOT NULL DEFAULT 'OPEN', \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`climbing_schedule\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`startDate\` datetime NOT NULL, \`endDate\` datetime NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`climbingGymIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`climbing_schedule_participant\` (\`climbingScheduleIdx\` int NOT NULL, \`memberIdx\` int NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`climbingScheduleIdx\`, \`memberIdx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`crew_fee\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL, \`memo\` text NULL, \`status\` enum ('COLLECTING', 'DONE', 'STOPPED', 'DELETED') NOT NULL DEFAULT 'COLLECTING', \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`crew_fee_payer\` (\`crewFeeIdx\` int NOT NULL, \`payerIdx\` int NOT NULL, \`memo\` text NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`crewFeeIdx\`, \`payerIdx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`member\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(10) NOT NULL, \`gender\` enum ('MALE', 'FEMALE') NOT NULL, \`status\` enum ('ACTIVATED', 'INJURED', 'DEACTIVATED', 'DELETED') NOT NULL DEFAULT 'ACTIVATED', \`birth\` date NOT NULL, \`joinDate\` datetime NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`crew_fee_usage_member\` (\`memberIdx\` int NOT NULL, \`crewFeeUsageIdx\` int NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`memberIdx\`, \`crewFeeUsageIdx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`crew_fee_usage\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`usageDate\` datetime NOT NULL, \`price\` int NOT NULL, \`memo\` text NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`climbing_schedule\` ADD CONSTRAINT \`FK_e1d5610fded136ab3d8d58d547e\` FOREIGN KEY (\`climbingGymIdx\`) REFERENCES \`climbing_gym\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`climbing_schedule_participant\` ADD CONSTRAINT \`FK_322632cd5beaec58fb3c5aefcd6\` FOREIGN KEY (\`climbingScheduleIdx\`) REFERENCES \`climbing_schedule\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`climbing_schedule_participant\` ADD CONSTRAINT \`FK_9944f6ed69339617d4e771ff849\` FOREIGN KEY (\`memberIdx\`) REFERENCES \`member\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`crew_fee_payer\` ADD CONSTRAINT \`FK_345e3f5951a9a2433c45bd97e72\` FOREIGN KEY (\`crewFeeIdx\`) REFERENCES \`crew_fee\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`crew_fee_payer\` ADD CONSTRAINT \`FK_e0e44212a69564a843f4c6982b2\` FOREIGN KEY (\`payerIdx\`) REFERENCES \`member\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`crew_fee_usage_member\` ADD CONSTRAINT \`FK_d046ef9140c3fa44f7c15699700\` FOREIGN KEY (\`memberIdx\`) REFERENCES \`member\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`crew_fee_usage_member\` ADD CONSTRAINT \`FK_06f74dad960d12638e31a4c416c\` FOREIGN KEY (\`crewFeeUsageIdx\`) REFERENCES \`crew_fee_usage\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`crew_fee_usage_member\` DROP FOREIGN KEY \`FK_06f74dad960d12638e31a4c416c\``);
        await queryRunner.query(`ALTER TABLE \`crew_fee_usage_member\` DROP FOREIGN KEY \`FK_d046ef9140c3fa44f7c15699700\``);
        await queryRunner.query(`ALTER TABLE \`crew_fee_payer\` DROP FOREIGN KEY \`FK_e0e44212a69564a843f4c6982b2\``);
        await queryRunner.query(`ALTER TABLE \`crew_fee_payer\` DROP FOREIGN KEY \`FK_345e3f5951a9a2433c45bd97e72\``);
        await queryRunner.query(`ALTER TABLE \`climbing_schedule_participant\` DROP FOREIGN KEY \`FK_9944f6ed69339617d4e771ff849\``);
        await queryRunner.query(`ALTER TABLE \`climbing_schedule_participant\` DROP FOREIGN KEY \`FK_322632cd5beaec58fb3c5aefcd6\``);
        await queryRunner.query(`ALTER TABLE \`climbing_schedule\` DROP FOREIGN KEY \`FK_e1d5610fded136ab3d8d58d547e\``);
        await queryRunner.query(`DROP TABLE \`crew_fee_usage\``);
        await queryRunner.query(`DROP TABLE \`crew_fee_usage_member\``);
        await queryRunner.query(`DROP TABLE \`member\``);
        await queryRunner.query(`DROP TABLE \`crew_fee_payer\``);
        await queryRunner.query(`DROP TABLE \`crew_fee\``);
        await queryRunner.query(`DROP TABLE \`climbing_schedule_participant\``);
        await queryRunner.query(`DROP TABLE \`climbing_schedule\``);
        await queryRunner.query(`DROP TABLE \`climbing_gym\``);
    }

}
