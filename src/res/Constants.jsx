import flagAR from './img/languageFlags/arabicLogo.png'
import flagLT from './img/languageFlags/ltflag.png'
import flagEN from './img/languageFlags/ukflag.png'
import skypeLogo from '../res/img/logo/skype.png'
import googleMeetLogo from '../res/img/logo/googleMeet.png'
import React from "react";

const importAll = r => r.keys().map(r);
export const newLinesToComponents = (HTMLComponentString, styleProp, content) => {
    return content.split('\n').map((lineText, index) => React.createElement(HTMLComponentString, {
        style: styleProp,
        key: index,
    }, lineText))
};

export const LOGOS = {
    GOOGLE: {
        title: 'Google Meet',
        href: 'https://meet.google.com/',
        img: googleMeetLogo
    },
    SKYPE: {
        title: 'Skype',
        href: 'https://www.skype.com/',
        img: skypeLogo
    }
};
export const GALLERY_IMAGES = importAll(require.context('./img/gallery', false, /\.(png|jpe?g|svg|webp)$/));
export const LINKS = ['/', '/remotecourses', '/lessons', '/gallery', '/contacts'];
export const FLAGS = [flagLT, flagEN, flagAR];
export const LANGUAGES = {
    LT: {
        STYLES: {
            AVATARIMAGEFLOAT: 'right'
        },
        PAGE404: 'Atsiprašome, toks puslapis neegzistuoja',
        LINKLABELS: ['Apie mus', 'Nuotoliniai kursai', 'Pamokos', 'Galerija', 'Kontaktai'],
        EMAIL: 'El-paštas:',
        ADDRESS: 'Adresas:',
        PHONE: 'Telefonas:',
        FB: 'Facebook:',
        JOIN: 'Prisijunkite prie mūsų grupės',
        REMOTECOURSES: {
            TEXT1: 'Užsiėmimai vyksta jums patogiu laiku.\n' +
                'Pirma pamoka nemokama.\n' +
                'Grupėse ne daugiau 4 žmonių.\n' +
                'Pamokos vyksta nuotoliniu būdu per:',
            TEXT2: 'Vienos pamokos trukmė 90 min.\n' +
                'Vieną kursą sudaro 20 pamokų (40 akademinių valandų).\n' +
                'Visa mokymo medžiaga atsiunčiama el. paštu.\n' +
                'Naujos grupės formuojamos kas du mėnesius arba susidarius grupei iš 4 vienodo lygio žmonių.\n' +
                'Artimiausia A1 lygio kurso pradžia 2021 m. sausio 11 d.\n' +
                'Registracija el. paštu:'
        },
        ABOUTUS: 'Naujoji arabų kalbos studija Vilniaus centre kviečia mokytis arabų kalbos individualiai arba mažose grupėse (nuo 2 iki 4 žmonių).\n' +
            'Mokytojas iš arabų šalies, turintis daugiau nei aštuonerių metų mokymo patirtį tiek individualiai, tiek grupėmis, tiek nuotoliniu būdu.\n' +
            'Pamokų metu ne tik mokysime gramatikos, taisyklingos rašybos bei kalbėsenos, bet ir pasidalinsime naudinga informacija apie arabiškai kalbančias šalis, jų kultūrą, tradicijas bei informacija apie Lietuvoje vykstančius renginius, kurie įtrauks Jus į arabiškąjį pasaulį. Visa mokymo medžiaga bus pateikiama pamokų metu.\n' +
            'O kad mokytis būtų dar maloniau, pavaišinsime karštos arbatos puodeliu!\n ' +
            'Be mokymų galime pasiūlyti vertimus raštu bei žodžiu iš lietuvių ir anglų kalbų į arabų kalbą. Taip pat verčiame iš arabų kalbos.'
    },
    EN: {
        STYLES: {
            AVATARIMAGEFLOAT: 'right'
        },
        PAGE404: 'Sorry. Such page does not exist',
        LINKLABELS: ['About us', 'Remote courses', 'Lessons', 'Gallery', 'Contacts'],
        EMAIL: 'E-mail:',
        ADDRESS: 'Address:',
        PHONE: 'Phone:',
        FB: 'Facebook:',
        JOIN: 'Join our group',
        REMOTECOURSES: {
            TEXT1: 'Courses can be scheduled for any time.\n' +
                'First lesson for free.\n' +
                'Group size - 4 people or less.\n' +
                'Courses are available on:',
            TEXT2: 'Duration of one lesson - 90 minutes.\n' +
                'Full course consists of 20 lessons (40 academic hours).\n' +
                'All course material will be provided by e-mail.\n' +
                'New groups are formed each 2 months or when there is 4 people of same level to form a group.\n' +
                'Closest A1 level course start - 2020 January 11th.\n' +
                'Sign up:'
        },
        ABOUTUS: 'New Arabic language studio in Vilnius Center invite you to learn Arabic individually or in small groups (2 to 4 people).\n' +
            'A teacher from an Arab country with more than eight years of teaching experience, either individually, collectively or remotely.\n' +
            'During the lectures, we will not only teach grammar, correct spelling and speaking, but also share useful information about Arabic-speaking countries, their culture, traditions and information about events taking place in Lithuania that will involve you in the Arab world. All study materials will be provided during the lectures.\n' +
            '\n' +
            'And to make studying even more enjoyable, we will serve you a cup of hot tea!\n' +
            '\n' +
            'In addition to training, we can also offer written and verbal translations from Lithuanian and English into Arabic. We also translate from Arabic.'
    },
    AR: {
        STYLES: {
            PHONEDIRECTION: {direction: 'ltr', textAlign: 'end'},
            TEXTDIRECTION: {direction: 'rtl', textAlign: 'start'},
            AVATARIMAGEFLOAT: 'left',
        },
        PAGE404: 'آسف. هذه الصفحة غير موجودة',
        LINKLABELS: ['معلومات', 'الدراسة عن  بعد', 'الدروس', 'معرض الصور', 'البريد و الهاتف'],
        EMAIL: 'البريد الإلكتروني:',
        ADDRESS: 'عنوان:',
        PHONE: 'رقم الهاتف:',
        FB: 'فيسبوك:',
        JOIN: 'انضم لمجموعتنا',
        REMOTECOURSES: {
            TEXT1: 'دورات عن بعد لمجموعات لا تزيد عن 4 أشخاص.\n' +
                'الدروس تتم عن بعد من خلال:',
            TEXT2: 'مدة الدرس الواحد - 90 دقيقة.\n' +
                'تتكون الدورة الكاملة من 20 درسًا.\n' +
                'تبدأ أقرب دورة مستوى A1 في 11 يناير 2020.\n' +
                'يتم تشكيل مجموعات جديدة كل شهرين أو عندما يكون هناك 4 أشخاص من نفس المستوى لتشكيل مجموعة.\n' +
                'التسجيل\n'
        },
        ABOUTUS: 'استوديوجديد للغة العربية  في فيلنيوس لتعلم اللغة العربية بشكل فردي أو في مجموعات صغيرة (من 2 إلى 4 أشخاص).\n' +
            '\n.مدرس من دولة عربية لديه أكثر من ثماني سنوات من الخبرة في تدريس ، سواء بشكل فردي أو جماعي أو عن بعد.' +
            'خلال الدرس ، لن نقوم فقط بتدريس القواعد اللغوية والتهجئة الصحيحة والتحدث ، ولكننا أيضًا نشارك معلومات مفيدة حول البلدان الناطقة باللغة العربية وثقافاتها وتقاليدها ومعلومات حول الأحداث التي تجري في ليتوانيا والتي ستشركك في العالم العربي. سيتم توفير جميع المواد الدراسية خلال الدروس\n' +
            'ولجعل الدراسة أكثر متعة ، سنقدم لك كوبًا من الشاي الساخن!\n' +
            'بالإضافة إلى التدريس، يمكننا أيضًا تقديم ترجمات مكتوبة وشفهية من الليتوانية والإنجليزية إلى العربية. كما نترجم من العربية.\n'
    }
};