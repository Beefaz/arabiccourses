import flagAR from './img/languageFlags/arabicLogo.png'
import flagLT from './img/languageFlags/ltflag.png'
import flagEN from './img/languageFlags/ukflag.png'
import skypeLogo from '../res/img/logo/skype.png'
import googleMeetLogo from '../res/img/logo/googleMeet.png'

const importAll = r => r.keys().map(r);

export const LOGOS = {
    GOOGLE : {
        title: 'Google Meet',
        href: 'https://meet.google.com/',
        img: googleMeetLogo
    },
    SKYPE : {
        title: 'Skype',
        href: 'https://www.skype.com/',
        img: skypeLogo
    }
};
export const GALLERY_IMAGES = importAll(require.context('./img/gallery', false, /\.(png|jpe?g|svg)$/));
export const LINKS = ['/aboutUs', '/remotecourses', '/lessons',  '/gallery', '/contacts'];
export const FLAGS = [flagLT, flagEN, flagAR];
export const LANGUAGES = {
    LT: {
        LINKLABELS: ['Apie mus','Nuotoliniai kursai', 'Pamokos', 'Galerija', 'Kontaktai'],
        EMAIL: 'El-paštas:',
        ADDRESS: 'Adresas:',
        REMOTECOURSES: {
            TEXT1: 'Užsiėmimai vyksta jums patogiu laiku.\n' +
                'Pirma pamoka nemokama.\n' +
                'Grupėse ne daugiau 4 žmonių.\n' +
                'Pamokos vyksta nuotoliniu būdu per:',
            TEXT2: 'Vienos pamokos trukmė 90 min.\n' +
                'Vieną kursą sudaro 20 pamokų (40 akademinių valandų).\n' +
                'Visa mokymo medžiaga atsiunčiama el. paštu.\n' +
                'Naujos grupės formuojamos kas du mėnesius arba susidarius grupei iš 4 vienodo lygio žmonių.\n' +
                'Artimiausia A1 lygio kurso pradžia 2020 m. spalio 6 d.\n' +
                'Registracija el. paštu:'
        },
        ABOUTUS: 'Naujoji arabų kalbos studija Vilniaus centre kviečia mokytis arabų kalbos individualiai arba mažose grupėse (nuo 2 iki 4 žmonių). Mokytojas iš arabų šalies, turintis daugiau nei aštuonerių metų mokymo patirtį tiek individualiai, tiek grupėmis, tiek nuotoliniu būdu.'
},
    EN: {
        LINKLABELS: ['About us', 'Remote courses', 'Lessons', 'Gallery', 'Contacts'],
        EMAIL: 'E-mail:',
        ADDRESS: 'Address:',
        REMOTECOURSES: {
            TEXT1: 'Courses can be scheduled for any time.\n' +
                'First lesson for free.\n' +
                'Group size - 4 people or less.\n' +
                'Courses are available on:',
            TEXT2: 'Lesson length - 90 minutes.\n' +
                'Full course consists of 20 lessons (40 academic hours).\n' +
                'All course material will be provided by e-mail.\n' +
                'New groups are formed each 2 months or when there is 4 people of same level to form a group.\n' +
                'Closest A1 level course start - 2020 October 6th.\n' +
                'Sign up:'
        },
        ABOUTUS: 'New Arabic language studio in Vilnius Center invite you to learn Arabic individually or in small groups (2 to 4 people). A teacher from an Arab country with more than eight years of teaching experience, either individually, collectively or remotely.'
    },
    AR: {
        LINKLABELS: ['معلومات','الدراسة عن  بعد', 'الدروس', 'معرض الصور','البريد و الهاتف'],
        EMAIL: 'البريد الإلكتروني:',
        ADDRESS: 'عنوان:',
        REMOTECOURSES: {
            TEXT1: 'Užsiėmimai vyksta jums patogiu laiku.\n' +
                'Pirma pamoka nemokama.\n' +
                'Grupėse ne daugiau 4 žmonių.\n' +
                'Pamokos vyksta nuotoliniu būdu per:',
            TEXT2: 'Vienos pamokos trukmė 90 min.\n' +
                'Vieną kursą sudaro 20 pamokų (40 akademinių valandų).\n' +
                'Visa mokymo medžiaga atsiunčiama el. paštu.\n' +
                'Naujos grupės formuojamos kas du mėnesius arba susidarius grupei iš 4 vienodo lygio žmonių.\n' +
                'Artimiausia A1 lygio kurso pradžia 2020 m. spalio 6 d.\n' +
                'Registracija el. paštu:'
        },
        ABOUTUS: 'استديو جديد للغة العربية في مركز فيلنيوس  ندعوك لتعلم اللغة العربية بشكل فردي أو مجموعات صغيرة (من 2 إلى 4 أشخاص).  مدرس من بلد عربي لده أكثر من ثماني سنوات من الخبرة في التدريس سواء بشكل فردي أو جماعي أو عن بعد '
    }
};