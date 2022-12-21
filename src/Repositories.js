import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Session } from "./entity/Session";
import { Group } from "./entity/Group";
import { Subscription } from "./entity/Subscription";
import { Setting } from "./entity/Setting";
import { StudentSubscription } from "./entity/StudentSubscription";
import dotenv from "dotenv";

dotenv.config();

export class Repositories {
    dataSource = null;
    constructor() {
    }

    async initialize() {
        this.dataSource = await new DataSource({
            type: process.env.DB_TYPE,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            synchronize: true,
            entities: [Group, Session, Setting, Subscription, User, StudentSubscription],
            migrations: [],
            subscribers: [],
        }).initialize();
        return this;
    }

    forGroup() {
        return this.dataSource.getRepository(Group);
    }

    forSession() {
        return this.dataSource.getRepository(Session);
    }

    forSetting() {
        return this.dataSource.getRepository(Setting);
    }

    forSubscription() {
        return this.dataSource.getRepository(Subscription);
    }

    forUser() {
        return this.dataSource.getRepository(User);
    }

    forStudentSubscription() {
        return this.dataSource.getRepository(StudentSubscription);
    }

}