// Global Variable
let score = 0;
let questionCount = 0;
let correctAnswer;
let numQuestion = 0;

// loading
async function loadData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.classList.remove('center');
            resolve('Data berhasil dimuat')
        }, 800);
    });
}

async function init() {
    const loading = document.querySelector('.loading');
    const content = document.querySelector('.container');
    document.body.classList.add('center');

    const page = await loadData();

    loading.style.display = 'none';
    content.style.display = 'block';
}

window.addEventListener('load',init);
// loading END

// loadAnimation
const main = document.querySelector('main');
main.classList.add('load-animation');
// loadAnimation END

//Math
function additionalQuestion() {
    const text = document.querySelector('.math .question');
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;
    correctAnswer = num1 + num2;
    text.textContent = `Berapa hasil dari ${num1} + ${num2} ?`;
}

function subtractionQuestion() {
    const text = document.querySelector('.math .question');
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;
    correctAnswer = num1 - num2;
    text.textContent = `Berapa hasil dari ${num1} - ${num2} ?`;
}

function multiplicationQuestion() {
    const text = document.querySelector('.math .question');
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;
    correctAnswer = num1 * num2;
    text.textContent = `Berapa hasil dari ${num1} x ${num2} ?`;
}

function dividerQuestion() {
	const text = document.querySelector('.math .question');
	let num1 = Math.floor(Math.random() * (40 - 0 + 1)) + 0;
    let num2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    if (num1 % 2 === 0 && num2 % 2 === 0) {
	    correctAnswer = Math.floor(num1 / num2);
	    text.textContent = `Berapa hasil dari ${num1} : ${num2} ?`;
    }
   	else if(num1 % 2 === 1 && num2 % 2 === 1) {
   		num1++;
   		num2++;
   		correctAnswer = Math.floor(num1 / num2);
	    text.textContent = `Berapa hasil dari ${num1} : ${num2} ?`;
   	}
   	else if(num1 % 2 === 0 && num2 % 2 === 1) {
   		num2++;
   		correctAnswer = Math.floor(num1 / num2);
	    text.textContent = `Berapa hasil dari ${num1} : ${num2} ?`;
   	}
   	else if(num1 % 2 === 1 && num2 % 2 === 0) {
   		num1++
   		correctAnswer = Math.floor(num1 / num2);
	    text.textContent = `Berapa hasil dari ${num1} : ${num2} ?`;
   	}
}

function checkAnswerMath() {
    const answer = document.querySelector('.math input').value.trim();
    const infoS = document.createElement('div');
    infoS.textContent = `Jawaban Salah`;
    infoS.classList.add('infoS');

    const alert = document.createElement('div');
    alert.classList.add('alert');

    if (answer == '') {
        alert.textContent = `Jawaban diisi kocak bukan asal pencet doang blokk`;
        document.body.append(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
        return;
    } else if (isNaN(answer)) {
        alert.textContent = `Itu bukan angka kocak lo kira gw gatau`;
        document.body.append(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
        return;
    }

    const currentScore = document.querySelector('.currentScore p');

    if (answer == correctAnswer) {
        score += 10;
    } else {
        score -= 10;
        document.body.append(infoS);
        setTimeout(() => {
            infoS.remove();
        }, 1000);
    }

    currentScore.textContent = `Skor Anda: ${score}`;

    questionCount++;

    if (questionCount >= 10) {
        const button = document.querySelector('.math .submit');
        const input = document.querySelector('.math input');
        const text = document.querySelector('.question');
        const playerScore = document.querySelector('.score');

        text.style.display = 'none';
        input.style.display = 'none';
        button.style.display = 'none';

        if (score < 0) {
            playerScore.textContent = `Anomali jir gitu doang gabisa. ${score} poin`;
        } else if (score < 50) {
            playerScore.textContent = `Belajar lebih giat lagi ngab. ${score} poin`;
        } else {
            playerScore.textContent = `Gila sepuh banget kamu. ${score} poin`;
        }
    } else {
        // Pilih dan tampilkan soal baru
        let numRandom = Math.floor(Math.random() * 12) + 1;
        if (numRandom <= 3) {
            additionalQuestion();
        } else if (numRandom <= 6) {
            subtractionQuestion();
        } else if(numRandom <= 9) {
            multiplicationQuestion();
        }
        else {
        	dividerQuestion();
        }
        document.querySelector('.math input').value = '';
    }
};

function startMathQuestion() {
    questionCount = 0;
    score = 0;
    document.querySelector('.math input').style.display = 'block';
    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;
    document.querySelector('.math .submit p').textContent = `Submit`;
    document.querySelector('.math .question').style.display = 'block';
    document.querySelector('.math input').style.display = 'block';

     let numRandom = Math.floor(Math.random() * 12) + 1;
        if (numRandom <= 3) {
            additionalQuestion();
        } else if (numRandom <= 6) {
            subtractionQuestion();
        } else if(numRandom <= 9) {
            multiplicationQuestion();
        }
        else {
        	dividerQuestion();
        }
}

function startMath() {
    const buttonText = document.querySelector('.submit p').textContent;
    if (buttonText === 'Mulai') {
        startMathQuestion();
    } else {
        checkAnswerMath();
    }
};
// Math END

// Astronomy
function startAstro() {
    const buttonText = document.querySelector('.submit p').textContent;
    if (buttonText === 'Mulai') {
        startAstroQuestion();
    } else {
        checkAnswerAstro();
    }
}

function startAstroQuestion() {
    document.querySelector('.astro input').style.display = 'block';
    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;
    document.querySelector('.astro .submit p').textContent = `Submit`;
    document.querySelector('.astro .question').style.display = 'block';
    document.querySelector('.astro input').style.display = 'block';
    document.querySelector('.astro h3').style.display = 'block';

    const questionAstro = [
        { question: 'Apakah di tata surya kita terdapat 9 planet ?', answer: 'salah' },
        { question: 'Apakah saat ini NASA mengekspolarasi mars ?', answer: 'benar' },
        { question: 'Jumlah bulan jupiter berjumlah 5 ?', answer: 'salah' },
        { question: 'Ada 12 bulan dalam setahun ?', answer: 'benar' },
        { question: 'Apakah planet bumi termasuk zona layak huni ?', answer: 'benar' },
        { question: 'Apakah Bulan mengitari bumi ?', answer: 'benar' },
        { question: 'Apakah galaksi kita bernama andromeda ?', answer: 'salah' },
        { question: 'Di tengah galaksi kita terdapat lubang hitam supermasif ?', answer: 'benar' },
        { question: 'Apakah pluto adalah planet kerdil ?', answer: 'benar' },
        { question: 'Di ujung tata surya kita terdapat awan oort ?', answer: 'benar' },
        { question: 'Tetangga dari galaksi kita adalah messier 31 ?', answer: 'benar' },
        { question: 'Bigbang adalah sebuah ledakan besar ?', answer: 'salah' },
        { question: 'Bumi kita dilindungi dari meteor oleh planet jupiter  ?', answer: 'benar' },
        { question: 'Nama lubang hitam galaksi kita adalah Sagittarius A ?', answer: 'benar' },
        { question: 'Bintang neutron lebih berat dari bintang biasa ?', answer: 'benar' },
        { question: 'Di jupiter terdapat dataran ?', answer: 'salah' },
        { question: 'Matahari akan berubah menjadi raksasa merah dalam miliaran tahun ke depan ?', answer: 'benar' },
        { question: 'Planer yang disebut bintang senja adalah venus ?', answer: 'benar' },
        { question: 'Skala kardhasev adalah fakta ?', answer: 'salah' },
        { question: 'Di venus terdapat mikroorganisme ?', answer: 'salah' },
        { question: 'Di galaksi lain terdapat planet yang layak huni ?', answer: 'benar' },
        { question: 'Lubang cacing benar-benar ada ?', answer: 'salah' },
    ];

    // Pilih pertanyaan dan jawabannya
    const selectedQuestion = questionAstro[numQuestion];
    correctAnswer = selectedQuestion.answer; // Menyimpan jawaban yang benar
    const textQuestion = document.querySelector('.astro .question');
    textQuestion.textContent = selectedQuestion.question;

    // memilih soal
    let numRandom = Math.floor(Math.random() * 10) + 1;
    if (numRandom <= 5) {
        numQuestion++;
    }
    else {
        numQuestion += 2;
    }
}

function checkAnswerAstro() {
    const answer = document.querySelector('.astro input').value.trim().toLowerCase();
    const infoS = document.createElement('div');
    infoS.textContent = `Jawaban Salah`;
    infoS.classList.add('infoS');

    const alert = document.createElement('div');
    alert.classList.add('alert');

    if (answer === '') {
        alert.textContent = `Jawaban diisi kocak bukan asal pencet doang blokk`;
        document.body.append(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
        return;
    }

    const currentScore = document.querySelector('.currentScore p');

    if (answer === correctAnswer) {
        score += 10;
    } else {
        score -= 10;
        document.body.append(infoS);
        setTimeout(() => {
            infoS.remove();
        }, 1000);
    }

    currentScore.textContent = `Skor Anda: ${score}`;

    questionCount++;

    if (questionCount >= 10) {
        const button = document.querySelector('.astro .submit');
        const input = document.querySelector('.astro input');
        const text = document.querySelector('.astro .question');
        const playerScore = document.querySelector('.score');

        text.style.display = 'none';
        input.style.display = 'none';
        button.style.display = 'none';

        if (score < 0) {
            document.querySelector('.astro h3').style.display = 'none';
            playerScore.textContent = `Anomali jir gitu doang gabisa. ${score} poin`;
        } else if (score < 50) {
            document.querySelector('.astro h3').style.display = 'none';
            playerScore.textContent = `Belajar lebih giat lagi ngab. ${score} poin`;
        } else {
            document.querySelector('.astro h3').style.display = 'none';
            playerScore.textContent = `Gila sepuh banget kamu. ${score} poin`;
        }
    } else {
        // Pilih dan tampilkan soal baru
        startAstroQuestion();
        document.querySelector('.astro input').value = '';
    }
};
// Astro END

// Country
function startCountry() {
    const buttonText = document.querySelector('.submit p').textContent;
    if (buttonText === 'Mulai') {
        startCountryQuestion();
    } else {
        checkAnswerCountry();
    }
}

function startCountryQuestion() {
    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;
    document.querySelector('.country .submit p').textContent = `Submit`;
    document.querySelector('.country .question').style.display = 'block';
    document.querySelector('.country .option').style.display = 'block';
    document.querySelector('.country .submit').style.display = 'none';

    const questionCountry = [
        {
            question: 'Negara dengan pulau terbanyak adalah ?',
            option1: 'Bulgaria',
            option2: 'Swedia',
            option3: 'Indonesia',
            option4: 'Rusia',
            correctOption: 'option2'
        },
        {
            question: 'Negara dengan luas terbesar adalah ?',
            option1: 'Rusia',
            option2: 'China',
            option3: 'Indonesia',
            option4: 'Amerika Serikat',
            correctOption: 'option1'
        },
        {
            question: 'Negara yang memiliki piramida tertua di dunia ?',
            option1: 'Mesir',
            option2: 'Azerbajian',
            option3: 'Maroko',
            option4: 'Nigeria',
            correctOption: 'option1'
        },
        {
            question: 'Ibukota negara Italia ?',
            option1: 'Napoli',
            option2: 'Lazio',
            option3: 'Roma',
            option4: 'Milan',
            correctOption: 'option3'
        },
        {
            question: 'Benua mana yang memiliki penduduk paling banyak ?',
            option1: 'Australia',
            option2: 'Eropa',
            option3: 'Amerika',
            option4: 'Asia',
            correctOption: 'option4'
        },
         {
            question: 'Negara yang dikenal dengan negara kangguru ?',
            option1: 'Selandia Baru',
            option2: 'Islandia',
            option3: 'Australia',
            option4: 'Kamerun',
            correctOption: 'option3'
        },
         {
            question: 'Negara mana yang mengalami urbanisasi tertinggi ?',
            option1: 'Singapura',
            option2: 'Jepang',
            option3: 'China',
            option4: 'Rusia',
            correctOption: 'option1'
        },
         {
            question: 'Ibukota negara Amerika Serikat ?',
            option1: 'New York',
            option2: 'Los Angeles',
            option3: 'Ohio',
            option4: 'Washington',
            correctOption: 'option4'
        },
         {
            question: 'Benua Apa yang tidak memiliki negara ?',
            option1: 'Australia',
            option2: 'Antartika',
            option3: 'Afrika',
            option4: 'Amerika',
            correctOption: 'option2'
        },
         {
            question: 'Ibukota negara Jepang ?',
            option1: 'Tokyo',
            option2: 'Kyoto',
            option3: 'Osaka',
            option4: 'Fukuoka',
            correctOption: 'option1'
        },
         {
            question: 'Negara dengan luas wilayah kepulauan terbesar ?',
            option1: 'Indonesia',
            option2: 'Swedia',
            option3: 'Rusia',
            option4: 'China',
            correctOption: 'option3'
        },
        {
            question: 'Apa ibukota negara australia ?',
            option1: 'Canberra',
            option2: 'Sydney',
            option3: 'Melbourne',
            option4: 'Perth',
            correctOption: 'option1'
        },
    ];

    const selectedQuestion = questionCountry[numQuestion];
    const textQuestion = document.querySelector('.country .question');
    textQuestion.textContent = selectedQuestion.question;

    const options = [
        { text: selectedQuestion.option1, value: 'option1' },
        { text: selectedQuestion.option2, value: 'option2' },
        { text: selectedQuestion.option3, value: 'option3' },
        { text: selectedQuestion.option4, value: 'option4' }
    ];

    options.sort(() => Math.random() - 0.5);

    correctAnswer = options.find(option => option.value === selectedQuestion.correctOption).text;
 
    const buttons = document.querySelectorAll('.country .option button');
    
    buttons.forEach((button, index) => {
        const p = button.querySelector('p');
        p.textContent = options[index].text;
        button.classList.remove('selected'); // Remove previously selected class
        
        // Remove old event listeners to avoid duplication
        button.removeEventListener('click', handleClick);
        button.addEventListener('click', handleClick);
    });
}

function handleClick() {
    console.log('Button clicked');
    document.querySelectorAll('.country .option button').forEach(btn => btn.classList.remove('selected'));
    this.classList.add('selected');
}


function checkAnswerCountry() {
     const selectedButton = document.querySelector('.country .option button.selected');
    
    // Pastikan tombol yang terpilih ada
    if (!selectedButton) {
        console.log('No button selected');
        return; // Tidak ada jawaban yang dipilih
    }
    
    // Ambil teks dari pilihan yang dipilih
    const answer = selectedButton.querySelector('p').textContent;
    const infoS = document.createElement('div');
    infoS.textContent = `Jawaban Salah`;
    infoS.classList.add('infoS');

    // Periksa jawaban
    if (answer === correctAnswer) {
        score += 10;
    } else {
        score -= 10;
        document.body.append(infoS);
        setTimeout(() => {
            infoS.remove();
        }, 1000);
    }

    // Update skor
    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;

    questionCount++;
    numQuestion++;

    // Cek apakah jumlah pertanyaan sudah mencapai 10
    if (questionCount >= 10) {
        const text = document.querySelector('.country .question');
        const button = document.querySelector('.country .option');
        const playerScore = document.querySelector('.score');

        button.style.display = 'none';
        text.style.display = 'none';

        if (score < 0) {
            playerScore.textContent = `Anomali jir gitu doang gabisa. ${score} poin`;
        } else if (score < 50) {
            playerScore.textContent = `Belajar lebih giat lagi ngab. ${score} poin`;
        } else {
            playerScore.textContent = `Gila sepuh banget kamu. ${score} poin`;
        }
    } else {
        startCountryQuestion();
    }
}
// Country END

// Generic
function startGeneric() {
    const buttonText = document.querySelector('.submit p').textContent;
    if (buttonText === 'Mulai') {
        startGenericQuestion();
    } else {
        checkAnswerGeneric();
    }
};

function startGenericQuestion() {
    document.querySelector('.generic input').style.display = 'block';
    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;
    document.querySelector('.generic .submit p').textContent = `Submit`;
    document.querySelector('.generic .question').style.display = 'block';

    const questionGeneric = [
        {question: 'Dimana ibukota negara Indonesia ?', answer: 'kalimantan timur'},
        {question: 'Siapa penemu bola lampu ?', answer: 'thomas alva edison'},
        {question: 'Apa benua terbesar di dunia ?', answer: 'asia'},
        {question: 'Apa hewan terbesar di dunia ?', answer: 'paus biru'},
        {question: 'Apa rumus kimia air ?', answer: 'h2o'},
        {question: 'Apa planet yang terdekat dengan matahari ?', answer: 'merkurius'},
        {question: 'Apa satuan dasar untuk mengukur panjang ?', answer: 'meter'},
        {question: 'Tahun berapa perang dunia II berakhir ?', answer: '1945'},
        {question: 'Siapa yang menemukan benua Amerika ?', answer: 'christopher columbus'},
        {question: 'Siapa penemu mesin uap ?', answer: 'james watt'},
        {question: 'Apa agama terbesar di dunia ?', answer: 'kristen'},
        {question: 'Siapa penemu telepon ?', answer: 'alexander graham bell'},
        {question: 'Apa samudra terbesar di dunia ?', answer: 'pasifik'},
        {question: 'Apa gunung tertinggi di dunia ?', answer: 'everest'},
        {question: 'Apa satuan dasar untuk mengukur waktu ?', answer: 'detik'},
        {question: 'Apa nama olahraga yang memakai raket dan bola kecil ?', answer: 'tenis'},
        {question: 'Siapa nama pelukis yang melukis lukisan Mona Lisa ?', answer: 'leonardo da vinci'},
        {question: 'Apa nama alat ukur suhu ?', answer: 'termometer'},
        {question: 'Apa nama alat untuk mengamati bintang ?', answer: 'teleskop'},
        {question: 'Apa nama negara terkecil di dunia ?', answer: 'vatikan'},
    ];

    // Pilih pertanyaan dan jawabannya
    const selectedQuestion = questionGeneric[numQuestion];
    correctAnswer = selectedQuestion.answer; // Menyimpan jawaban yang benar
    const textQuestion = document.querySelector('.generic .question');
    textQuestion.textContent = selectedQuestion.question;

    // memilih soal
    let numRandom = Math.floor(Math.random() * 10) + 1;
    if (numRandom <= 5) {
        numQuestion++;
    }
    else {
        numQuestion += 2;
    }
};

function checkAnswerGeneric() {
    const answer = document.querySelector('.generic input').value.trim().toLowerCase();
    const infoS = document.createElement('div');
    infoS.textContent = `Jawaban Salah`;
    infoS.classList.add('infoS');

    const alert = document.createElement('div');
    alert.classList.add('alert');

    if (answer === '') {
        alert.textContent = `Jawaban diisi kocak bukan asal pencet doang blokk`;
        document.body.append(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
        return;
    }

    const currentScore = document.querySelector('.currentScore p');

    if (answer === correctAnswer) {
        score += 10;
    } else {
        score -= 10;
        document.body.append(infoS);
        setTimeout(() => {
            infoS.remove();
        }, 1000);
    }

    currentScore.textContent = `Skor Anda: ${score}`;

    questionCount++;

    if (questionCount >= 10) {
        const button = document.querySelector('.generic .submit');
        const input = document.querySelector('.generic input');
        const text = document.querySelector('.generic .question');
        const playerScore = document.querySelector('.score');

        text.style.display = 'none';
        input.style.display = 'none';
        button.style.display = 'none';

        if (score < 0) {
            playerScore.textContent = `Anomali jir gitu doang gabisa. ${score} poin`;
        } else if (score < 50) {
            playerScore.textContent = `Belajar lebih giat lagi ngab. ${score} poin`;
        } else {
            playerScore.textContent = `Gila sepuh banget kamu. ${score} poin`;
        }
    } else {
        // Pilih dan tampilkan soal baru
        startGenericQuestion();
        document.querySelector('.generic input').value = '';
    }
}
// Generic END

// history
function startHistory() {
    const buttonText = document.querySelector('.submit p').textContent;
    if (buttonText === 'Mulai') {
        startHistoryQuestion();
    } else {
        checkAnswerHistory();
    }
}

function startHistoryQuestion() {
    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;
    document.querySelector('.history .submit p').textContent = `Submit`;
    document.querySelector('.history .question').style.display = 'block';
    document.querySelector('.history .hero').style.display = 'grid';

    const questionHistory = [
        {question: 'Siapa saja tokoh yang terlibat dalam proklamasi kemerdekaan Indonesia ?',
         option1: 'Ir.Soekarno',
         option2: 'Moh.Hatta',
         option3: 'Sutan Sjahrir',
         option4: 'Ahmad Subarjo',
         correctOption1: 'option1',
         correctOption2: 'option2'
        },
        {question: 'Perang dunia II dimulai pada tahun berapa dan negara mana yang pertama kali diserang oleh Jerman ?',
         option1: '1938,Prancis',
         option2: '1939,Polandia',
         option3: '1941,Uni Soviet',
         option4: '1942,Inggris',
         correctOption1: 'option2',
         correctOption2: 'option3'
        },
        {question: 'Revolusi industri pertama kali terjadi di negara mana dan pada abad ke berapa ?',
         option1: 'Inggris',
         option2: 'Amerika Serikat',
         option3: 'Abad ke-18',
         option4: 'Abad ke-19',
         correctOption1: 'option1',
         correctOption2: 'option3'
        },
        {question: 'Siapa saja presiden pertama dan kedua republik Indonesia ?',
         option1: 'Soeharto',
         option2: 'Ir.Soekarno',
         option3: 'B.J.Habibie',
         option4: 'Megawati',
         correctOption1: 'option1',
         correctOption2: 'option2'
        },
        {question: 'Pada masa perang dingin,dua negara manakah yang dianggap superpower dunia ?',
         option1: 'Uni Soviet',
         option2: 'Amerika Serikat',
         option3: 'Cina',
         option4: 'Jerman',
         correctOption1: 'option1',
         correctOption2: 'option2'
        },
        {question: 'Apa nama perjanjian yang mengakhiri perang dunia I dan siapa yang menandatanganinya',
         option1: 'Perjanjian Versailles',
         option2: 'Perjanjian Tordesillas',
         option3: 'Jerman',
         option4: 'Prancis',
         correctOption1: 'option1',
         correctOption2: 'option3'
        },
        {question: 'Siapa saja pemimpin yang terkenal dalam perang dunia II ?',
         option1: 'Winston Churchill',
         option2: 'Franklin D. Roosevelt',
         option3: 'Joseph Stalin',
         option4: 'Adolf Hitler',
         correctOption1: 'option3',
         correctOption2: 'option4'
        },
        {question: 'Siapa yang menjadi raja Prancis terakhir sebelim revolusi Prancis ?',
         option1: 'Louis XVI',
         option2: 'Louis XV',
         option3: 'Napoleon Bonaparte',
         option4: 'Charles X',
         correctOption1: 'option1',
         correctOption2: 'option4'
        },
        {question: 'Apa saja peran dari Mahatma Gandhi dalam pergerakan kemerdekaan India ?',
         option1: 'Memimpin gerakan non-kekerasan',
         option2: 'Mendukung penggunaan senjata',
         option3: 'Menginisiasi gerakan Salt March',
         option4: 'Menjajah wilayah Inggris',
         correctOption1: 'option1',
         correctOption2: 'option3'
        },
        {question: 'Pada tahun berapa dan di mana terjadi revolusi Bolshevik ?',
         option1: '1917,Rusia',
         option2: '1918,Jerman',
         option3: '1917,Prancis',
         option4: '1918,Inggris',
         correctOption1: 'option1',
         correctOption2: 'option3'
        },
    ];

    const selectedQuestion = questionHistory[numQuestion];
    const textQuestion = document.querySelector('.history .question');
    textQuestion.textContent = selectedQuestion.question;

    const options = [
        { text: selectedQuestion.option1, value: 'option1' },
        { text: selectedQuestion.option2, value: 'option2' },
        { text: selectedQuestion.option3, value: 'option3' },
        { text: selectedQuestion.option4, value: 'option4' }
    ];

    options.sort(() => Math.random() - 0.5);

    correctAnswer = [selectedQuestion.correctOption1, selectedQuestion.correctOption2];

    const optionLabels = document.querySelectorAll('.history .hero label');
    optionLabels.forEach((label, index) => {
        const text = label.querySelector('p');
        text.textContent = options[index].text;
        label.querySelector('input').value = options[index].value;
    });
}

function checkAnswerHistory() {
    const infoS = document.createElement('div');
    infoS.textContent = `Pilihan anda ada yang salah`;
    infoS.classList.add('infoS');

    const alert = document.createElement('div');
    alert.classList.add('alert');

    // Ambil semua checkbox yang dicentang
    const checkedboxes = document.querySelectorAll('.history .hero input[name="check"]:checked');

    if (checkedboxes.length === 0) {
        alert.textContent = `Jawaban dicentang kocak bukan asal pencet doang blokk`;
        document.body.append(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
        return;
    }

    // Proses penilaian jika ada checkbox yang dicentang
    checkedboxes.forEach((checkbox) => {
        if (correctAnswer.includes(checkbox.value)) {
            score += 10;
        } else {
            score -= 10;
            document.body.append(infoS);
            setTimeout(() => {
                infoS.remove();
            }, 1000);
        }
    });

    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;

    questionCount++;
    numQuestion++;

    if (questionCount >= 10) {
        document.querySelector('.history .submit').style.display = 'none';
        document.querySelector('.history .question').style.display = 'none';
        document.querySelector('.history .hero').style.display = 'none';
        const playerScore = document.querySelector('.score');

        if (score < 0) {
            playerScore.textContent = `Anomali jir gitu doang gabisa. ${score} poin`;
        } else if (score < 50) {
            playerScore.textContent = `Belajar lebih giat lagi ngab. ${score} poin`;
        } else {
            playerScore.textContent = `Gila sepuh banget kamu. ${score} poin`;
        }
    } else {
        checkedboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
        startHistoryQuestion();
    }
};
// history END

// english
function startEnglish() {
    const buttonText = document.querySelector('.submit p').textContent;
    if (buttonText === 'Mulai') {
        startEnglishQuestion();
    } else {
        checkAnswerEnglish();
    }
}

function startEnglishQuestion() {
    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;
    document.querySelector('.english .submit p').textContent = `Submit`;
    document.querySelector('.english .question').style.display = 'block';
    document.querySelector('.english .hero').style.display = 'grid';

    const questionEnglish = [
        {question: 'I feel very_____after working all day.Tired and exhausted are the right words to describe how I feel.',
         option1: 'Happy',
         option2: 'Tired',
         option3: 'Exhausted',
         option4: 'Excited',
         correctOption1: 'option2',
         correctOption2: 'option3'
        },
        {question: 'Which of the following objects are ussualy made of wood ?',
         option1: 'Glass',
         option2: 'Table',
         option3: 'Chair',
         option4: 'Spoon',
         correctOption1: 'option2',
         correctOption2: 'option3'
        },
        {question: 'What activites are ussualy done in the library ?',
         option1: 'Playing Game',
         option2: 'Reading Books',
         option3: 'Watching Movies',
         option4: 'Doing Homework',
         correctOption1: 'option2',
         correctOption2: 'option4'
        },
        {question: 'What were people doing in the park ?',
         option1: 'Swimming',
         option2: 'Running',
         option3: 'Eating',
         option4: 'Sleeping',
         correctOption1: 'option2',
         correctOption2: 'option3'
        },
        {question: 'Which sentence is grammatically are synonyms for "happy" ?',
         option1: 'Joyful',
         option2: 'Glad',
         option3: 'Sad',
         option4: 'Content',
         correctOption1: 'option1',
         correctOption2: 'option3'
        },
        {question: 'Antonyms for the word "Big" are....',
         option1: 'Small',
         option2: 'Tiny',
         option3: 'Large',
         option4: 'Huge',
         correctOption1: 'option1',
         correctOption2: 'option2'
        },
        {question: 'Classify the following animals into mammals and reptils....',
         option1: 'Turtle',
         option2: 'Cat',
         option3: 'Bird',
         option4: 'Snake',
         correctOption1: 'option2',
         correctOption2: 'option4'
        },
        {question: 'Which words mean the opposite of "Big" ?',
         option1: 'Small',
         option2: 'Large',
         option3: 'Tiny',
         option4: 'Huge',
         correctOption1: 'option2',
         correctOption2: 'option4'
        },
        {question: 'Which words are antonyms of "Fast" ?',
         option1: 'Quick',
         option2: 'Slow',
         option3: 'Rapid',
         option4: 'Speedy',
         correctOption1: 'option2',
         correctOption2: 'option3'
        },
        {question: 'Which words mean the opposite of "Hot" ?',
         option1: 'Cold',
         option2: 'Warm',
         option3: 'Cool',
         option4: 'Freezing',
         correctOption1: 'option1',
         correctOption2: 'option3'
        },
    ];

    const selectedQuestion = questionEnglish[numQuestion];
    const textQuestion = document.querySelector('.english .question');
    textQuestion.textContent = selectedQuestion.question;

    const options = [
        { text: selectedQuestion.option1, value: 'option1' },
        { text: selectedQuestion.option2, value: 'option2' },
        { text: selectedQuestion.option3, value: 'option3' },
        { text: selectedQuestion.option4, value: 'option4' }
    ];

    options.sort(() => Math.random() - 0.5);

    correctAnswer = [selectedQuestion.correctOption1, selectedQuestion.correctOption2];

    const optionLabels = document.querySelectorAll('.english .hero label');
    optionLabels.forEach((label, index) => {
        const text = label.querySelector('p');
        text.textContent = options[index].text;
        label.querySelector('input').value = options[index].value;
    });
}

function checkAnswerEnglish() {
    const infoS = document.createElement('div');
    infoS.textContent = `Pilihan anda ada yang salah`;
    infoS.classList.add('infoS');

    const alert = document.createElement('div');
    alert.classList.add('alert');

    // Ambil semua checkbox yang dicentang
    const checkedboxes = document.querySelectorAll('.english .hero input[name="check"]:checked');

    if (checkedboxes.length === 0) {
        alert.textContent = `Jawaban dicentang kocak bukan asal pencet doang blokk`;
        document.body.append(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
        return;
    }

    // Proses penilaian jika ada checkbox yang dicentang
    checkedboxes.forEach((checkbox) => {
        if (correctAnswer.includes(checkbox.value)) {
            score += 10;
        } else {
            score -= 10;
            document.body.append(infoS);
            setTimeout(() => {
                infoS.remove();
            }, 1000);
        }
    });

    document.querySelector('.currentScore p').textContent = `Skor Anda: ${score}`;

    questionCount++;
    numQuestion++;

    if (questionCount >= 10) {
        document.querySelector('.english .submit').style.display = 'none';
        document.querySelector('.english .question').style.display = 'none';
        document.querySelector('.english .hero').style.display = 'none';
        const playerScore = document.querySelector('.score');

        if (score < 0) {
            playerScore.textContent = `Anomali jir gitu doang gabisa. ${score} poin`;
        } else if (score < 50) {
            playerScore.textContent = `Belajar lebih giat lagi ngab. ${score} poin`;
        } else {
            playerScore.textContent = `Gila sepuh banget kamu. ${score} poin`;
        }
    } else {
        checkedboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
        startEnglishQuestion();
    }
}
// english END