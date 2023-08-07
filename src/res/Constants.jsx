import flagAR from './img/languageFlags/arabicLogo.png';
import flagLT from './img/languageFlags/ltflag.png';
import flagEN from './img/languageFlags/ukflag.png';
import skypeLogo from '../res/img/logo/skype.png';
import googleMeetLogo from '../res/img/logo/googleMeet.png';
import moment from "moment";
import 'moment/locale/en-gb';
import 'moment/locale/ar-tn';
import 'moment/locale/lt';
import React from "react";

const importAll = r => r.keys().map(r);

export const nextDateOfCourses = () => {
  let startDate = moment('2023-09-15');
  let newDate = moment();

  while (newDate.isAfter(startDate)) {
    startDate.add(42, 'day').calendar();
  }
  newDate = startDate;

  return {
    EN_TIME: newDate.locale('en-gb').format('LL'),
    LT_TIME: newDate.locale('lt').format('LL'),
    AR_TIME: newDate.locale('ar-tn').format('LL')
  };
};

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

export const LINKS = ['/', '/remotecourses', '/lessons', '/gallery', '/contacts', '/prices'];

export const FLAGS = [flagLT, flagEN, flagAR];

export const BANNER_HAS_ENDED = () => {
  const endTime = moment('2023-09-15');
  const today = moment();

  return today > endTime;
}

export const youtubeURLs = [
  '4ybn3kKuu3I',
  '9wv33WQdqOs',
  'QqkuP_i9IsU',
  'vcQNGeUj8C4',
  'PxDTTD6aK5M',
  '3r_h8FOABys',
  '34vSxE9eEAU',
  'eUYpNPkIRcU'
];

export const LANGUAGES = {
  LT: {
    STYLES: {
      AVATARIMAGEFLOAT: 'right'
    },
    PAGE404: 'Atsiprašome, toks puslapis neegzistuoja',
    LINKLABELS: ['Apie mus', 'Nuotoliniai kursai', 'Pamokos', 'Galerija', 'Kontaktai', 'Kainos'],
    EMAIL: 'El-paštas:',
    ADDRESS: 'Adresas:',
    PHONE: 'Telefonas:',
    FB: 'Facebook:',
    JOIN: 'Prisijunkite prie mūsų grupės',
    REMOTECOURSES: {
      TEXT1: 'Užsiėmimai vyksta jums patogiu laiku.\n' +
        'Pirma pamoka nemokama.\n' +
        'Grupėse ne daugiau 4 žmonių.\n' +
        'Yra galimybė mokytis individualiai.\n' +
        'Pamokos vyksta nuotoliniu būdu per:',
      TEXT2: 'Vienos pamokos trukmė 90 min.\n' +
        'Vieną kursą sudaro 20 pamokų (40 akademinių valandų).\n' +
        'Visa mokymo medžiaga yra suteikiama nemokamai arba atsiunčiama el. paštu.\n' +
        'Naujos grupės formuojamos kas du mėnesius arba susidarius grupei iš 4 vienodo lygio žmonių.\n' +
        'Šiuo metu kviečiame mokytis pirmadieniais ir penktadieniais 19:30.\n' +
        'Artimiausia A1 ir A2 lygio kurso pradžia ' + nextDateOfCourses().LT_TIME + '\n' +
        'Registracija el. paštu:'
    },
    ABOUTUS: 'Arabų kalbos studija Vilniaus centre kviečia mokytis arabų kalbos individualiai arba mažose grupėse (nuo 2 iki 4 žmonių).\n' +
      'Mokytojas iš arabų šalies, turintis daugiau nei aštuonerių metų mokymo patirtį tiek individualiai, tiek grupėmis, tiek nuotoliniu būdu.\n' +
      'Mokome visų kalbos lygių (A1 - C2).\n' +
      'Pamokų metu ne tik mokysime gramatikos, taisyklingos rašybos bei kalbėsenos, bet ir pasidalinsime naudinga informacija apie arabiškai kalbančias šalis, jų kultūrą, tradicijas bei informacija apie Lietuvoje vykstančius renginius, kurie įtrauks Jus į arabiškąjį pasaulį. Visa mokymo medžiaga bus pateikiama pamokų metu.\n' +
      'Užsiėmimai vyksta Lietuvių kalba.\n' +
      'O kad mokytis būtų dar maloniau, pavaišinsime karštos arbatos puodeliu!\n ' +
      'Be mokymų galime pasiūlyti vertimus raštu bei žodžiu iš lietuvių ir anglų kalbų į arabų kalbą. Taip pat verčiame iš arabų kalbos.',
    PRICES: 'Mokantis 3-8 mokinių grupėje, vieno lygio (40 akad. val.) kurso kaina yra 200€ (1 akad. val. kaina – 5€, 1 pamoka – 10€). Mokomoji medžiaga įskaičiuota.\n' +
      'Individualių kursų kaina už 1 akademinę valandą - 7.5€. Viso kurso kaina - 300€ (1 pamoka - 20€)\n' +
      'Pirma pamoka - nemokamai.\n' +
      'Visos pamokos gali būti vedamos nuotoliniu būdu ar gyvai.\n' +
      'Verslo klientams - 35€ už 2 akademines valandas (90min) visai grupei.',
    BANNER: {
      TEXT1: 'Nuo rugsėjo 15 d. organizuojami A1 - A2 lygių kursai. Jei susidomėjai, paskubėk ',
      LINK: {
        text: 'registruotis',
        url: '/contacts'
      },
      TEXT2: '.'
    }
  },
  EN: {
    STYLES: {
      AVATARIMAGEFLOAT: 'right'
    },
    PAGE404: 'Sorry. Such page does not exist',
    LINKLABELS: ['About us', 'Remote courses', 'Lessons', 'Gallery', 'Contacts', 'Prices'],
    EMAIL: 'E-mail:',
    ADDRESS: 'Address:',
    PHONE: 'Phone:',
    FB: 'Facebook:',
    JOIN: 'Join our group',
    REMOTECOURSES: {
      TEXT1: 'Courses can be scheduled for any time.\n' +
        'First lesson for free.\n' +
        'Group size - 4 people or less.\n' +
        'There is an option of personal lectures.\n' +
        'Courses are available on:',
      TEXT2: 'Duration of one lesson - 90 minutes.\n' +
        'Full course consists of 20 lessons (40 academic hours).\n' +
        'All course material will be provided free of charge or sent by e-mail.\n' +
        'New groups are formed each 2 months or when there is 4 people of same level to form a group.\n' +
        'Currently we invite to study on mondays and fridays at 7:30pm\n' +
        'Closest A1 and A2 level course start - ' + nextDateOfCourses().EN_TIME + '\n' +
        'Sign up:'
    },
    ABOUTUS: 'Arabic language studio in Vilnius Center invite you to learn Arabic individually or in small groups (2 to 4 people).\n' +
      'A teacher from an Arab country with more than eight years of teaching experience, either individually, collectively or remotely.\n' +
      'We teach all language levels (A1 - C2).\n' +
      'During the lectures, we will not only teach grammar, correct spelling and speaking, but also share useful information about Arabic-speaking countries, their culture, traditions and information about events taking place in Lithuania that will involve you in the Arab world. All study materials will be provided during the lectures.\n' +
      'Lectures are held in Lithuanian, English or French languages\n' +
      'And to make studying even more enjoyable, we will serve you a cup of hot tea!\n' +
      'In addition to training, we can also offer written and verbal translations from Lithuanian and English into Arabic. We also translate from Arabic.',
    PRICES: 'When studying in a group of 3-8 students the price of one level (40 academic hours) course is 200€ (price of 1 academic hour - 5€, 1 lesson - 10€). Price includes learning material.\n' +
      'The price of individual courses for 1 academic hour is 7.5€. Price for whole course - 300€ (1 lesson - 20€)\n' +
      'The first lesson is free.\n' +
      'All lessons can be conducted remotely or live.\n' +
      'For business clients - 35€ for 2 academic hours (90min) for the whole group.',
    BANNER: {
      TEXT1: 'At September 15 there will be new groups for A1 - A2. If interested, hurry up and ',
      LINK: {
        text: 'register',
        url: '/contacts'
      },
      TEXT2: '.'
    }
  },
  AR: {
    STYLES: {
      PHONEDIRECTION: {direction: 'ltr', textAlign: 'end'},
      TEXTDIRECTION: {direction: 'rtl', textAlign: 'start'},
      AVATARIMAGEFLOAT: 'left',
    },
    PAGE404: 'آسف. هذه الصفحة غير موجودة',
    LINKLABELS: ['معلومات', 'الدراسة عن  بعد', 'الدروس', 'معرض الصور', 'البريد و الهاتف', 'الأسعار'],
    EMAIL: 'البريد الإلكتروني:',
    ADDRESS: 'عنوان:',
    PHONE: 'رقم الهاتف:',
    FB: 'فيسبوك:',
    JOIN: 'انضم لمجموعتنا',
    REMOTECOURSES: {
      TEXT1: 'دورات عن بعد لمجموعات لا تزيد عن 4 أشخاص.\n' +
        'الدرس الاول مجاني.\n' +
        'الدروس تتم عن بعد من خلال:',
      TEXT2: 'مدة الدرس الواحد - 90 دقيقة.\n' +
        'تتكون الدورة الكاملة من 20 درسًا.\n' +
        'ندعوك حاليًا للدراسة يومي الثلاثاء والخميس في الساعة 14:00 و 17:30 أو يومي الأربعاء والجمعة الساعة 10:00 و 13:00.\n' +
        'أقرب بداية لدورة المستوى A1 و A2 هي في عام ' + nextDateOfCourses().AR_TIME + '.\n' +
        'يتم تشكيل مجموعات جديدة كل شهرين أو عندما يكون هناك 4 أشخاص من نفس المستوى لتشكيل مجموعة.\n' +
        'التسجيل\n'
    },
    ABOUTUS: 'استوديو للغة العربية  في فيلنيوس لتعلم اللغة العربية بشكل فردي أو في مجموعات صغيرة (من 2 إلى 4 أشخاص).\n' +
      '\n.مدرس من دولة عربية لديه أكثر من ثماني سنوات من الخبرة في تدريس ، سواء بشكل فردي أو جماعي أو عن بعد.' +
      'خلال الدرس ، لن نقوم فقط بتدريس القواعد اللغوية والتهجئة الصحيحة والتحدث ، ولكننا أيضًا نشارك معلومات مفيدة حول البلدان الناطقة باللغة العربية وثقافاتها وتقاليدها ومعلومات حول الأحداث التي تجري في ليتوانيا والتي ستشركك في العالم العربي. سيتم توفير جميع المواد الدراسية خلال الدروس\n' +
      'ولجعل الدراسة أكثر متعة ، سنقدم لك كوبًا من الشاي الساخن!\n' +
      'بالإضافة إلى التدريس، يمكننا أيضًا تقديم ترجمات مكتوبة وشفهية من الليتوانية والإنجليزية إلى العربية. كما نترجم من العربية.\n',
    PRICES: 'عند التعلم في مجموعة مكونة من 3-8 طلاب ، يكون سعر دورة المستوى الواحد (30 ساعة ) هو 200 يورو (سعر 45 دقيقة- 5 يورو ، درس واحد - 10 يورو).\n' +
      'سعر الدورات الفردية45 دقيقة هو 8 يورو.\n' +
      'سعر الدورات الفردية 45 دقيقة لشخصين - 7 يورو / للفرد.\n' +
      'المواد التعليمية لمستوى واحد - مجانًا.\n' +
      'الدرس الأول مجاني.\n' +
      'يمكن إجراء جميع الدروس عن بُعد أو مباشرة.',
    BANNER: {
      DISABLED: true,
      TEXT1: 'At August 9 there will be new groups for A1 - A2. If interested, hurry up and ',
      LINK: {
        text: 'register',
        url: '/contacts'
      },
      TEXT2: '.'
    }
  }
};
