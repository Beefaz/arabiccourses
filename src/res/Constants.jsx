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
  let startDate = moment('2024-09-10');
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
  const endTime = moment('2024-01-10');
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
    FLAG: flagLT,
    FLAG_LABEL: "Lietuvių",
    PAGE404: 'Atsiprašome, toks puslapis neegzistuoja',
    LINKLABELS: ['Apie mus', 'Nuotoliniai kursai', 'Pamokos', 'Galerija', 'Kontaktai', 'Kainos'],
    EMAIL: 'El-paštas:',
    ADDRESS: 'Adresas:',
    PHONE: 'Telefonas:',
    FB: 'Facebook:',
    JOIN: 'Prisijunkite prie mūsų grupės',
    REMOTECOURSES: {
      TEXT1: 'Užsiėmimai vyksta jums patogiu laiku.\n' +
        // 'Pirma pamoka nemokama.\n' +
        'Grupėse ne daugiau 4 žmonių.\n' +
        'Yra galimybė mokytis individualiai.\n' +
        'Pamokos vyksta nuotoliniu būdu per:',
      TEXT2: 'Visą kursą sudaro 20 pamokų po 1 valandą (60 min).\n' +
        'Visa mokymo medžiaga yra suteikiama nemokamai arba atsiunčiama el. paštu.\n' +
        'Naujos grupės formuojamos kas du mėnesius arba susidarius grupei iš 4 vienodo lygio žmonių.\n' +
        'Šiuo metu kviečiame mokytis antradieniais ir penktadieniais 17:30.\n' +
        'Artimiausia A1 ir A2 lygio kurso pradžia ' + nextDateOfCourses().LT_TIME + '\n' +
        'Registracija el. paštu:'
    },
    ABOUTUS: 'Arabų kalbos studija Vilniaus centre kviečia mokytis arabų kalbos individualiai arba mažose grupėse (nuo 2 iki 4 žmonių).\n' +
      'Mokytojas iš arabų šalies, turintis daugiau nei aštuonerių metų mokymo patirtį tiek individualiai, tiek grupėmis, tiek nuotoliniu būdu.\n' +
      'Mokome visų kalbos lygių (A1 - C2) ir išduodame lygių sertifikatą.\n' +
      'Pamokų metu ne tik mokysime klasikinės arabų kalbos gramatikos, taisyklingos rašybos bei kalbėsenos, bet ir pasidalinsime naudinga informacija apie arabiškai kalbančias šalis, jų kultūrą ir tradicijas.\n' +
      'Visa mokymo medžiaga, pateikiama pamokų metu, yra įskaičiuota į pamokų kainą ir išduodama nemokamai, be jokio papildomo mokesčio.\n' +
      'Užsiėmimai vyksta arabų - lietuvių kalbomis.\n' +
      'Metų eigoje organizuojami susitikimai su studentais pabendrauti arabų kalba.\n' +
      'Vieną kartą į metus organizuojama patirtinė kelionė į arabų šalį.\n ' +
      'Norint sužinoti lygį, žinių lygio patikrinimas atliekamas nemokamai.\n' +
      'Be mokymų galime pasiūlyti vertimus raštu bei žodžiu iš lietuvių į arabų kalbą.\n',
    PRICES:
      '10€/val. - mokantis iki 4 vienodo lygio žmonių grupėje. \n' +
      '15€/val. - vienam asmeniui. \n' +
      '20€/val. - už papildomas pamokas. \n' +
      '30€/val. - verslo klientams visai grupei. \n' +
      'Visą kursą sudaro 20 pamokų po 1 valandą (60min). \n' +
      'Mokymo medžiaga - įskaičiuota į kainą. \n' +
      'Visos pamokos gali būti vedamos nuotoliniu būdu ar gyvai.',
    BANNER: {
      TEXT1: 'Nuo sausio 16d. organizuojami A1 - A2 lygių kursai. Jei susidomėjai, paskubėk ',
      LINK: {
        text: 'registruotis',
        url: '/contacts'
      },
      TEXT2: ' su 50€ nuolaida iki sausio 10d.'
    }
  },
  EN: {
    STYLES: {
      AVATARIMAGEFLOAT: 'right'
    },
    FLAG: flagEN,
    FLAG_LABEL: "English",
    PAGE404: 'Sorry. Such page does not exist',
    LINKLABELS: ['About us', 'Remote courses', 'Lessons', 'Gallery', 'Contacts', 'Prices'],
    EMAIL: 'E-mail:',
    ADDRESS: 'Address:',
    PHONE: 'Phone:',
    FB: 'Facebook:',
    JOIN: 'Join our group',
    REMOTECOURSES: {
      TEXT1: 'Courses can be scheduled for any time.\n' +
        // 'First lesson for free.\n' +
        'Group size - 4 people or less.\n' +
        'There is an option of personal lectures.\n' +
        'Courses are available on:',
      TEXT2: 'Duration of one lesson - 60 minutes.\n' +
        'Full course consists of 20 lessons (20 hours).\n' +
        'All course material will be provided free of charge or sent by e-mail.\n' +
        'New groups are formed each 2 months or when there is 4 people of same level to form a group.\n' +
        'Currently we invite to study on tuesdays and fridays at 5:30pm\n' +
        'Closest A1 and A2 level course start - ' + nextDateOfCourses().EN_TIME + '\n' +
        'Sign up:'
    },
    ABOUTUS: 'Arabic language studio in Vilnius Center invites you to learn Arabic individually or in small groups (2 to 4 people).\n' +
      'A teacher from an Arab country with more than eight years of teaching experience, either individually, collectively or remotely.\n' +
      'We teach all language levels (A1 - C2) and provide certificate of competency level.\n' +
      'All study material is included in lecture price and will be given for free on lectures with no additional charge.\n' +
      'Lectures are held in Arabic and Lithuanian languages.\n' +
      'In the course of the year, meetings with students are organized to communicate in Arabic.\n' +
      'A learning trip to an Arab country is organized once a year.\n' +
      'To determine the competency, the test is done free of charge.\n' +
      'In addition to courses, we can also offer written and verbal translations from Lithuanian and English into Arabic. We also translate from Arabic.',
    PRICES:
      '10€/hour - when studying in a group of up to 4 students \n' +
      '15€/hour - for single person. \n' +
      '20€/hour - for additional lesson. \n' +
      '30€/hour - for business clients for a whole group. \n' +
      'Whole course consists of 20 lessons (1 hour each). \n' +
      'Course material price is included. \n' +
      'All lessons can be conducted remotely or live.',
    BANNER: {
      TEXT1: 'At January 16th there will be new groups for A1 - A2. If interested, hurry up and ',
      LINK: {
        text: 'register',
        url: '/contacts'
      },
      TEXT2: ' until January 10th and get 50€ discount!.'
    }
  },
  // AR: {
  //   STYLES: {
  //     PHONEDIRECTION: {direction: 'ltr', textAlign: 'end'},
  //     TEXTDIRECTION: {direction: 'rtl', textAlign: 'start'},
  //     AVATARIMAGEFLOAT: 'left',
  //   },
  //   FLAG: flagAR,
  //   FLAG_LABEL: "اَلْعَرَبِيَّةُ",
  //   PAGE404: 'آسف. هذه الصفحة غير موجودة',
  //   LINKLABELS: ['معلومات', 'الدراسة عن  بعد', 'الدروس', 'معرض الصور', 'البريد و الهاتف', 'الأسعار'],
  //   EMAIL: 'البريد الإلكتروني:',
  //   ADDRESS: 'عنوان:',
  //   PHONE: 'رقم الهاتف:',
  //   FB: 'فيسبوك:',
  //   JOIN: 'انضم لمجموعتنا',
  //   REMOTECOURSES: {
  //     TEXT1: 'دورات عن بعد لمجموعات لا تزيد عن 4 أشخاص.\n' +
  //       // 'الدرس الاول مجاني.\n' +
  //       'الدروس تتم عن بعد من خلال:',
  //     TEXT2: 'مدة الدرس الواحد - 60 دقيقة.\n' +
  //       'تتكون الدورة الكاملة من 20 درسًا.\n' +
  //       'ندعوكم لدورة تعلمية جديدة يومي الثلاثاء و والجمعة الجمعة 17:30.\n' +
  //       'أقرب بداية لدورة المستوى A1 و A2 هي في عام ' + nextDateOfCourses().AR_TIME + '.\n' +
  //       'يتم تشكيل مجموعات جديدة كل شهرين أو عندما يكون هناك 4 أشخاص من نفس المستوى لتشكيل مجموعة.\n' +
  //       'التسجيل\n'
  //   },
  //   ABOUTUS: 'استوديو للغة العربية  في فيلنيوس لتعلم اللغة العربية بشكل فردي أو في مجموعات صغيرة (من 2 إلى 4 أشخاص).\n' +
  //     '\n.مدرس من دولة عربية لديه أكثر من ثماني سنوات من الخبرة في تدريس ، سواء بشكل فردي أو جماعي أو عن بعد.' +
  //     'خلال الدرس ، لن نقوم فقط بتدريس القواعد اللغوية والتهجئة الصحيحة والتحدث ، ولكننا أيضًا نشارك معلومات مفيدة حول البلدان الناطقة باللغة العربية وثقافاتها وتقاليدها ومعلومات حول الأحداث التي تجري في ليتوانيا والتي ستشركك في العالم العربي. سيتم توفير جميع المواد الدراسية خلال الدروس\n' +
  //     'ولجعل الدراسة أكثر متعة ، سنقدم لك كوبًا من الشاي الساخن!\n' +
  //     'بالإضافة إلى التدريس، يمكننا أيضًا تقديم ترجمات مكتوبة وشفهية من الليتوانية والإنجليزية إلى العربية. كما نترجم من العربية.\n',
  //   PRICES: 'عند التعلم في مجموعة مكونة من 3-8 طلاب ، يكون سعر دورة المستوى الواحد (30 ساعة ) هو 200 يورو (سعر 45 دقيقة- 5 يورو ، درس واحد - 10 يورو).\n' +
  //     'سعر الدورات الفردية45 دقيقة هو 8 يورو.\n' +
  //     'سعر الدورات الفردية 45 دقيقة لشخصين - 7 يورو / للفرد.\n' +
  //     'المواد التعليمية لمستوى واحد - مجانًا.\n' +
  //     // 'الدرس الأول مجاني.\n' +
  //     'يمكن إجراء جميع الدروس عن بُعد أو مباشرة.',
  //   BANNER: {
  //     DISABLED: true,
  //     TEXT1: 'At August 9 there will be new groups for A1 - A2. If interested, hurry up and ',
  //     LINK: {
  //       text: 'register',
  //       url: '/contacts'
  //     },
  //     TEXT2: '.'
  //   }
  // }
};
