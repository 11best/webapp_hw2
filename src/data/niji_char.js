import tab_img from '../img/tab';
import char_img from '../img/char';
import char_logo from '../img/char_logo';
import char_sign from '../img/char_sign';

const niji_char = [
    {
        id: '1',
        name: 'Nakasu Kasumi',
        tab_img: tab_img.kasumin,
        char_img: [char_img.kasumin1, char_img.kasumin2, char_img.kasumin3],
        char_logo: char_logo.kasumin,
        char_sign: char_sign.kasumin,
        year: 'First year',
        unit: 'QU4RTZ',
        color: 'Pastel yellow',
        birthday: '23 January',
        description: "A first-year at Nijigasaki High School. She loves cute things and admires school idols far more than the average person. She hates losing, and gets angry when people call her by her nickname, Kasukasu. She'll do all sorts of mischief to overcome her rivals, but often ends up doing what everyone else does.",
        vid_src: 'https://www.youtube.com/embed/gknDmz_5AFo',
    },
    {
        id: '2',
        name: 'Osaka Shizuku',
        tab_img: tab_img.shisuku,
        char_img: [char_img.shisuku1, char_img.shisuku2, char_img.shisuku3],
        char_logo: char_logo.shisuku,
        char_sign: char_sign.shisuku,
        year: 'First year',
        unit: 'A・ZU・NA',
        color: 'Pale blue',
        birthday: '3 April',
        description: "A recent addition to Nijigasaki High School and first-year. A straight-laced star student, Shizuku is part of the theater club. She's athletic, but poor at ball sports. She wants to grow up to be an actress, and she seeks to use her school idol experience to that end.",
        vid_src: 'https://www.youtube.com/embed/d9hGriTd7-o',
    },
    { 
        id: '3', 
        name: 'Tennoji Rina', 
        tab_img: tab_img.rina,
        char_img: [char_img.rina1, char_img.rina2, char_img.rina3],
        char_logo: char_logo.rina,
        char_sign: char_sign.rina,
        year: 'First year',
        unit: 'QU4RTZ',
        color: 'White',
        birthday: '13 November',
        description: "A first-year at Nijigasaki High School who went to its attached middle school. She has a lot of trouble expressing her emotions through facial expressions, so she draws a face on white paper -- the 'Rina-chan Board' -- and uses that to communicate.",
        vid_src: 'https://www.youtube.com/embed/bFEQmHKxK_Q',
    },
    { 
        id: '4', 
        name: 'Mifune Shioriko', 
        tab_img: tab_img.shioriko,
        char_img: [char_img.mifune1, char_img.mifune2, char_img.mifune3],
        char_logo: char_logo.mifune,
        char_sign: char_sign.mifune,
        year: 'First year',
        unit: '-',
        color: 'Jade green',
        birthday: '5 October',
        description: "She is calm and is well-focused on her academics, always achieving high scores and managing her school life properly. Shioriko is good at telling people about what they're good and bad at, which she uses to help the Nijigasaki girls in their club activities. Even if she sounds rude with her words, people thank her for her help.",
        vid_src: 'https://www.youtube.com/embed/mXkHA3IPhgA',
    },
    { 
        id: '5', 
        name: 'Uehara Ayumu', 
        tab_img: tab_img.ayumu,
        char_img: [char_img.ayumu1, char_img.ayumu2, char_img.ayumu3],
        char_logo: char_logo.ayumu,
        char_sign: char_sign.ayumu,
        year: 'Second year',
        unit: 'A・ZU・NA',
        color: 'Light pink',
        birthday: '1 March',
        description : "A second-year student at Nijigasaki High School, she's a hard worker who takes anything and everything on diligently. She started being a school idol at the suggestion of her childhood friend. She's a highly caring friend who always supports her beloved pal in her endeavors.",
        vid_src: 'https://www.youtube.com/embed/Nxr3Y7Fx-zs',
    },
    { 
        id: '6', 
        name: 'Takasaki Yu', 
        tab_img: tab_img.yu,
        char_img: [char_img.yu1, char_img.yu2, char_img.yu3],
        char_logo: char_logo.yu,
        char_sign: char_sign.yu,
        year: 'Second year',
        unit: '-',
        color: 'Black',
        birthday: '-',
        description: "Yu Takasaki is the main protagonist of Love Live! Nijigasaki High School Idol Club and the anime adaptation's representation of the player character in Love Live! School Idol Festival ALL STARS. She is a second year at Nijigasaki High School, and the club's manager and song composer. Her image color is black.",
        vid_src: 'https://www.youtube.com/embed/6rYT31OEFvk',
    },
    { 
        id: '7', 
        name: 'Yuki Setsuna',
        tab_img: tab_img.setsu, 
        char_img: [char_img.setsu1, char_img.setsu2, char_img.setsu3],
        char_logo: char_logo.setsu,
        char_sign: char_sign.setsu,
        year: 'Second year',
        unit: 'A・ZU・NA',
        color: 'Scarlet red',
        birthday: '8 August',
        description: "A second-year at Nijigasaki and a rising star of the school idol world. Setsuna's energetic smile and great performances draw many eyes. She loves anime and manga, and if you get her talking about either, she won't stop. Since she's so busy with her idol work, she has urban-style rumors surrounding her, stating that no one has ever seen her on campus.",
        vid_src: 'https://www.youtube.com/embed/a615YBN6CBg',
    },
    { 
        id: '8', 
        name: 'Miyashita Ai', 
        tab_img: tab_img.ai,
        char_img: [char_img.ai1, char_img.ai2, char_img.ai3],
        char_logo: char_logo.ai,
        char_sign: char_sign.ai,
        year: 'Second year',
        unit: 'DiverDiva',
        color: 'Ultra orange',
        birthday: '30 May',
        description: "A second-year at Nijigasaki High School. Ai is easy to get along with and very caring, leading her to have plenty of friends. Her flashy appearance leads to many a misunderstanding, but she goes to great lengths for friends and family and loves her grandmother. Her favorite food is miso-pickled vegetables.",
        vid_src: 'https://www.youtube.com/embed/MOUnOovLizw',
    },
    { 
        id: '9', 
        name: 'Konoe Kanata', 
        tab_img: tab_img.kanata,
        char_img: [char_img.kanata1, char_img.kanata2, char_img.kanata3],
        char_logo: char_logo.kanata,
        char_sign: char_sign.kanata,
        year: 'Third year',
        unit: 'QU4RTZ',
        color: 'Violet',
        birthday: '16 December',
        description: "A third-year who just enrolled into Nijigasaki High School. Though passionate about cooking and doting on her younger sister, Haruka, Kanata battles against sleep when it comes to anything else. She also knows all the best spots to take a secret nap in Nijigasaki's campus.",
        vid_src: 'https://www.youtube.com/embed/G6G5NopjVfU',
    },
    { 
        id: '10', 
        name: 'Emma Verde', 
        tab_img: tab_img.emma,
        char_img: [char_img.emma1, char_img.emma2, char_img.emma3],
        char_logo: char_logo.emma,
        char_sign: char_sign.emma,
        year: 'Third year',
        unit: 'QU4RTZ',
        color: 'Light green',
        birthday: '5 February',
        description: "A third-year at Nijigasaki High School. A foreign exchange student from Switzerland, Emma very recently entered Nijigasaki. With a laid-back personality, she's a gentle girl who loves the mountains and nature of her homeland, as well as Japanese bread. She also has a bit of a ditsy side to her, and she'll throw those around her for a loop on occasion.",
        vid_src: 'https://www.youtube.com/embed/ceDfcGIxhDg',
    },
    { 
        id: '11', 
        name: 'Asaka Karin', 
        tab_img: tab_img.karin,
        char_img: [char_img.karin1, char_img.karin2, char_img.karin3],
        char_logo: char_logo.karin,
        char_sign: char_sign.karin,
        year: 'Third year',
        unit: 'DiverDiva',
        color: 'Royal blue',
        birthday: '29 June',
        description: "A third-year student at Nijigasaki High School. She has looks and proportions unlike any high school student and has been an amateur model before. Karin is surprisingly stubborn in contrast to her mature appearance. She hasn't taken much seriously until now, but ever since becoming a school idol on a whim, she's really gotten into it.",
        vid_src: 'https://www.youtube.com/embed/80SXsYjjNoA',
    },
];

export default niji_char;