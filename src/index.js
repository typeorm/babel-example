import { User } from "./entity/User";
import { Session } from "./entity/Session";
import { DOW, Group } from "./entity/Group";
import { Subscription } from "./entity/Subscription";
import { Setting } from "./entity/Setting";
import { StudentSubscription } from "./entity/StudentSubscription";
import { Repositories } from "./Repositories";
import dotenv from "dotenv";

dotenv.config();

async function initData() {

    const repos = await new Repositories().initialize();

    const settingRepo = repos.forSetting();

    const studentIsAdmin = new Setting();
    studentIsAdmin.name = "Student can be admin";
    studentIsAdmin.type = "bool";
    studentIsAdmin.value = "true";
    await settingRepo.save(studentIsAdmin);

    const subscriptionActive = new Setting();
    subscriptionActive.name = "Subscriptions are activated";
    subscriptionActive.type = "bool";
    subscriptionActive.value = "false";
    await settingRepo.save(subscriptionActive);

    const notificationActive = new Setting();
    notificationActive.name = "Notifications are activate";
    notificationActive.type = "bool";
    notificationActive.value = "false";
    await settingRepo.save(notificationActive);


    const subscriptionRepo = repos.forSubscription();

    const abonamentLunar = new Subscription();
    abonamentLunar.name = "O luna Un curs";
    abonamentLunar.nrMonths = 1;
    abonamentLunar.nrGroups = 1;
    abonamentLunar.price = 170;
    await subscriptionRepo.save(abonamentLunar);

    const abonament8Sedinte1Curs = new Subscription();
    abonament8Sedinte1Curs.name = "8 sedinte Un curs";
    abonament8Sedinte1Curs.nrSessions = 8;
    abonament8Sedinte1Curs.nrGroups = 1;
    abonament8Sedinte1Curs.price = 170;
    await subscriptionRepo.save(abonament8Sedinte1Curs);

    const abonament8Sedinte = new Subscription();
    abonament8Sedinte.name = "8 sedinte";
    abonament8Sedinte.nrSessions = 8;
    abonament8Sedinte.price = 200;
    await subscriptionRepo.save(abonament8Sedinte);

    const abonamentLunar2Cursuri = new Subscription();
    abonamentLunar2Cursuri.name = "O luna 2 cursuri";
    abonamentLunar2Cursuri.nrMonths = 1;
    abonamentLunar2Cursuri.nrGroups = 2;
    abonamentLunar2Cursuri.price = 250;
    await subscriptionRepo.save(abonamentLunar2Cursuri);

    const abonamentLunarNCursuri = new Subscription();
    abonamentLunarNCursuri.name = "O luna oricate cursuri";
    abonamentLunarNCursuri.nrMonths = 1;
    abonamentLunarNCursuri.price = 350;
    await subscriptionRepo.save(abonamentLunarNCursuri);


    const userRepo = repos.forUser();

    const trainerNik = new User();
    trainerNik.name = "Nik";
    trainerNik.mail = "Nik@mail.com";
    trainerNik.isTrainer = true;
    trainerNik.isAdmin = true;
    await userRepo.save(trainerNik);

    const trainerRenne = new User();
    trainerRenne.name = "Renne";
    trainerRenne.mail = "Renne@mail.com";
    trainerRenne.isTrainer = true;
    await userRepo.save(trainerRenne);

    const studentOvi = new User();
    studentOvi.name = "Ovi";
    studentOvi.mail = "Ovi@mail.com";
    studentOvi.isAdmin = true;
    await userRepo.save(studentOvi);

    const studentGeorgi = new User();
    studentGeorgi.name = "Georgi";
    studentGeorgi.mail = "Georgi@mail.com";
    await userRepo.save(studentGeorgi);

    const studentAlex = new User();
    studentAlex.name = "Alex";
    studentAlex.mail = "Alex@mail.com";
    await userRepo.save(studentAlex);

    const studentCristi = new User();
    studentCristi.name = "Cristi";
    studentCristi.mail = "Cristi@mail.com";
    await userRepo.save(studentCristi);

    const studentAlexandra = new User();
    studentAlexandra.name = "Alexandra";
    studentAlexandra.mail = "Alexandra@mail.com";
    await userRepo.save(studentAlexandra);

    const studentIoana = new User();
    studentIoana.name = "Ioana";
    studentIoana.mail = "Ioana@mail.com";
    await userRepo.save(studentIoana);


    const studentSubscriptionRepo = repos.forStudentSubscription();

    const georgiSubscription = new StudentSubscription();
    georgiSubscription.subscription = abonamentLunar;
    const today = new Date();
    georgiSubscription.startDate = today.toJSON().slice(0, 10);
    georgiSubscription.endDate = new Date(today.setMonth(today.getMonth() + 1)).toJSON().slice(0, 10);
    georgiSubscription.nrGroups = 1;
    await studentSubscriptionRepo.save(georgiSubscription)

    const oviSubscription = new StudentSubscription();
    oviSubscription.subscription = abonamentLunar;
    oviSubscription.nrSessions = 8;
    oviSubscription.nrGroups = 1;
    await studentSubscriptionRepo.save(oviSubscription);


    const groupRepo = repos.forGroup();

    const bachataBeginers = new Group();
    bachataBeginers.class = "Bachata incepatori";
    bachataBeginers.days = [DOW.Monday, DOW.Wednesday];
    bachataBeginers.startHours = [19, 19];
    bachataBeginers.endHours = [20, 20];
    bachataBeginers.trainers = [trainerNik, trainerRenne];
    bachataBeginers.students = [studentAlex, studentAlexandra, studentCristi, studentGeorgi, studentIoana, studentOvi];
    await groupRepo.save(bachataBeginers);

    const kizombaBeginers = new Group();
    kizombaBeginers.class = "Kizomba incepatori";
    kizombaBeginers.days = [DOW.Monday, DOW.Wednesday];
    kizombaBeginers.startHours = [20, 20];
    kizombaBeginers.endHours = [21, 21];
    kizombaBeginers.trainers = [trainerNik, trainerRenne];
    kizombaBeginers.students = [studentAlex, studentAlexandra, studentCristi, studentIoana];
    await groupRepo.save(kizombaBeginers);

    const salsaAdvanced = new Group();
    salsaAdvanced.class = "Salsa Avansati";
    salsaAdvanced.days = [DOW.Monday, DOW.Wednesday];
    salsaAdvanced.startHours = [21, 21];
    salsaAdvanced.endHours = [22, 22];
    salsaAdvanced.trainers = [trainerNik, trainerRenne];
    salsaAdvanced.students = [studentAlex, studentAlexandra, studentCristi, studentIoana];
    await groupRepo.save(salsaAdvanced);


    const sessionRepo = repos.forSession();

    const luniBachata = new Session();
    luniBachata.class = bachataBeginers.class;
    luniBachata.day = "2023-01-02";
    luniBachata.startHour = 19;
    luniBachata.endHour = 20;
    luniBachata.trainers = bachataBeginers.trainers;
    luniBachata.students = bachataBeginers.students;
    luniBachata.group = bachataBeginers;
    await sessionRepo.save(luniBachata);

    const luniKizomba = new Session();
    luniKizomba.class = kizombaBeginers.class;
    luniKizomba.day = "2023-01-02";
    luniKizomba.startHour = 20;
    luniKizomba.endHour = 21;
    luniKizomba.trainers = kizombaBeginers.trainers;
    luniKizomba.students = kizombaBeginers.students;
    luniKizomba.group = kizombaBeginers;
    await sessionRepo.save(luniKizomba);

    const luniSalsa = new Session();
    luniSalsa.class = salsaAdvanced.class;
    luniSalsa.day = "2023-01-02";
    luniSalsa.startHour = 21;
    luniSalsa.endHour = 22;
    luniSalsa.trainers = salsaAdvanced.trainers;
    luniSalsa.students = salsaAdvanced.students;
    luniSalsa.group = salsaAdvanced;
    await sessionRepo.save(luniSalsa);

    const miercuriBachata = new Session();
    miercuriBachata.class = bachataBeginers.class;
    miercuriBachata.day = "2023-01-04";
    miercuriBachata.startHour = 19;
    miercuriBachata.endHour = 20;
    miercuriBachata.trainers = bachataBeginers.trainers;
    miercuriBachata.students = bachataBeginers.students;
    miercuriBachata.group = bachataBeginers;
    await sessionRepo.save(miercuriBachata);

}

export default initData;