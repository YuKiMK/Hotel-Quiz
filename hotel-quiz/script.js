// クイズ状態
let currentJapanHotelIndex = 0;
let currentWorldHotelIndex = 0;
let currentManagementTermIndex = 0;
let currentBusinessTermIndex = 0;
let currentBusinessEnglishTermIndex = 0;

let japanHotelScore = 0;
let worldHotelScore = 0;
let managementTermScore = 0;
let businessTermScore = 0;
let businessEnglishTermScore = 0;

let japanHotelQuestions = [];
let worldHotelQuestions = [];
let managementTermQuestions = [];
let businessTermQuestions = [];
let businessEnglishTermQuestions = [];

let japanHotelUserAnswers = [];
let worldHotelUserAnswers = [];
let managementTermUserAnswers = [];
let businessTermUserAnswers = [];
let businessEnglishTermUserAnswers = [];

// タイマー関連
const timeLimit = 30; // 各質問の制限時間（秒）
let timerInterval;

// DOM要素の取得
const homeBtn = document.getElementById('home-btn');
const japanHotelsBtn = document.getElementById('japan-hotels-btn');
const worldHotelsBtn = document.getElementById('world-hotels-btn');
const managementTermsBtn = document.getElementById('management-terms-btn');
const businessTermsBtn = document.getElementById('business-terms-btn');
const businessEnglishTermsBtn = document.getElementById('business-english-terms-btn');

const homeSection = document.getElementById('home-section');
const japanHotelsSection = document.getElementById('japan-hotels-section');
const worldHotelsSection = document.getElementById('world-hotels-section');
const managementTermsSection = document.getElementById('management-terms-section');
const businessTermsSection = document.getElementById('business-terms-section');
const businessEnglishTermsSection = document.getElementById('business-english-terms-section');

const japanHotelsQuiz = document.getElementById('japan-hotels-quiz');
const worldHotelsQuiz = document.getElementById('world-hotels-quiz');
const managementTermsQuiz = document.getElementById('management-terms-quiz');
const businessTermsQuiz = document.getElementById('business-terms-quiz');
const businessEnglishTermsQuiz = document.getElementById('business-english-terms-quiz');

const japanHotelsNext = document.getElementById('japan-hotels-next');
const worldHotelsNext = document.getElementById('world-hotels-next');
const managementTermsNext = document.getElementById('management-terms-next');
const businessTermsNext = document.getElementById('business-terms-next');
const businessEnglishTermsNext = document.getElementById('business-english-terms-next');

const japanHotelsResult = document.getElementById('japan-hotels-result');
const worldHotelsResult = document.getElementById('world-hotels-result');
const managementTermsResult = document.getElementById('management-terms-result');
const businessTermsResult = document.getElementById('business-terms-result');
const businessEnglishTermsResult = document.getElementById('business-english-terms-result');

const japanHotelsProgress = document.getElementById('japan-hotels-progress');
const worldHotelsProgress = document.getElementById('world-hotels-progress');
const managementTermsProgress = document.getElementById('management-terms-progress');
const businessTermsProgress = document.getElementById('business-terms-progress');
const businessEnglishTermsProgress = document.getElementById('business-english-terms-progress');

const japanHotelsTimer = document.getElementById('japan-hotels-timer');
const worldHotelsTimer = document.getElementById('world-hotels-timer');
const managementTermsTimer = document.getElementById('management-terms-timer');
const businessTermsTimer = document.getElementById('business-terms-timer');
const businessEnglishTermsTimer = document.getElementById('business-english-terms-timer');

// DOM要素の取得（続き）

// クイズ選択ボタンの取得
const quizSelectionButtons = document.querySelectorAll('.quiz-btn');

// クイズ選択ボタンのイベントリスナー
quizSelectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const quizId = button.id;
        if (quizId === 'japan-hotels-btn') {
            setActiveNav('japan-hotels');
        } else if (quizId === 'world-hotels-btn') {
            setActiveNav('world-hotels');
        } else if (quizId === 'management-terms-btn') {
            setActiveNav('management-terms');
        } else if (quizId === 'business-terms-btn') {
            setActiveNav('business-terms');
        } else if (quizId === 'business-english-terms-btn') {
            setActiveNav('business-english-terms');
        }
    });
});


// ナビゲーションボタンイベント
homeBtn.addEventListener('click', () => {
    setActiveNav('home');
});


// セクション表示関数
function setActiveNav(section) {
    // ナビゲーションボタンのアクティブ状態を更新
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    // セクションの表示を更新
    document.querySelectorAll('.quiz-section').forEach(sec => sec.classList.remove('active'));

    clearInterval(timerInterval);

    if (section === 'home') {
        homeBtn.classList.add('active');
        homeSection.classList.add('active');
    } else {
        // クイズセクションの表示
        if (section === 'japan-hotels') {
            japanHotelsSection.classList.add('active');
            resetJapanHotelQuiz();
        } else if (section === 'world-hotels') {
            worldHotelsSection.classList.add('active');
            resetWorldHotelQuiz();
        } else if (section === 'management-terms') {
            managementTermsSection.classList.add('active');
            resetManagementTermQuiz();
        } else if (section === 'business-terms') {
            businessTermsSection.classList.add('active');
            resetBusinessTermQuiz();
        } else if (section === 'business-english-terms') {
            businessEnglishTermsSection.classList.add('active');
            resetBusinessEnglishTermQuiz();
        }
    }
}


// 日本のホテルクイズのリセット
function resetJapanHotelQuiz() {
    currentJapanHotelIndex = 0;
    japanHotelScore = 0;
    japanHotelUserAnswers = [];
    japanHotelQuestions = shuffleArray(japanHotels).slice(0, 10);
    loadJapanHotelQuestion();
}

// 世界のホテルクイズのリセット
function resetWorldHotelQuiz() {
    currentWorldHotelIndex = 0;
    worldHotelScore = 0;
    worldHotelUserAnswers = [];
    worldHotelQuestions = shuffleArray(worldHotels).slice(0, 10);
    loadWorldHotelQuestion();
}

// ホテル経営用語クイズのリセット
function resetManagementTermQuiz() {
    currentManagementTermIndex = 0;
    managementTermScore = 0;
    managementTermUserAnswers = [];
    managementTermQuestions = shuffleArray(managementTerms).slice(0, 10);
    loadManagementTermQuestion();
}

// ビジネス用語クイズのリセット
function resetBusinessTermQuiz() {
    currentBusinessTermIndex = 0;
    businessTermScore = 0;
    businessTermUserAnswers = [];
    businessTermQuestions = shuffleArray(businessTerms).slice(0, 10);
    loadBusinessTermQuestion();
}

// ビジネス英語用語クイズのリセット
function resetBusinessEnglishTermQuiz() {
    currentBusinessEnglishTermIndex = 0;
    businessEnglishTermScore = 0;
    businessEnglishTermUserAnswers = [];
    businessEnglishTermQuestions = shuffleArray(businessEnglishTerms).slice(0, 10);
    loadBusinessEnglishTermQuestion();
}

// 日本のホテルクイズの読み込み
function loadJapanHotelQuestion() {
    if (currentJapanHotelIndex >= japanHotelQuestions.length) {
        displayJapanHotelResults();
        return;
    }

    const currentQuestion = japanHotelQuestions[currentJapanHotelIndex];
    displayQuestion(currentQuestion, japanHotelsQuiz, japanHotelsResult, japanHotelsTimer, japanHotelsNext, updateJapanHotelScore, japanHotelUserAnswers);
    updateProgressBar(japanHotelsProgress, currentJapanHotelIndex, japanHotelQuestions.length);
}

function updateJapanHotelScore(isCorrect) {
    if (isCorrect) {
        japanHotelScore++;
    }
}

japanHotelsNext.addEventListener('click', () => {
    currentJapanHotelIndex++;
    loadJapanHotelQuestion();
});

// 世界のホテルクイズの読み込み
function loadWorldHotelQuestion() {
    if (currentWorldHotelIndex >= worldHotelQuestions.length) {
        displayWorldHotelResults();
        return;
    }

    const currentQuestion = worldHotelQuestions[currentWorldHotelIndex];
    displayQuestion(currentQuestion, worldHotelsQuiz, worldHotelsResult, worldHotelsTimer, worldHotelsNext, updateWorldHotelScore, worldHotelUserAnswers);
    updateProgressBar(worldHotelsProgress, currentWorldHotelIndex, worldHotelQuestions.length);
}

function updateWorldHotelScore(isCorrect) {
    if (isCorrect) {
        worldHotelScore++;
    }
}

worldHotelsNext.addEventListener('click', () => {
    currentWorldHotelIndex++;
    loadWorldHotelQuestion();
});

// ホテル経営用語クイズの読み込み
function loadManagementTermQuestion() {
    if (currentManagementTermIndex >= managementTermQuestions.length) {
        displayManagementTermResults();
        return;
    }

    const currentQuestion = managementTermQuestions[currentManagementTermIndex];
    displayQuestion(currentQuestion, managementTermsQuiz, managementTermsResult, managementTermsTimer, managementTermsNext, updateManagementTermScore, managementTermUserAnswers);
    updateProgressBar(managementTermsProgress, currentManagementTermIndex, managementTermQuestions.length);
}

function updateManagementTermScore(isCorrect) {
    if (isCorrect) {
        managementTermScore++;
    }
}

managementTermsNext.addEventListener('click', () => {
    currentManagementTermIndex++;
    loadManagementTermQuestion();
});

// ビジネス用語クイズの読み込み
function loadBusinessTermQuestion() {
    if (currentBusinessTermIndex >= businessTermQuestions.length) {
        displayBusinessTermResults();
        return;
    }

    const currentQuestion = businessTermQuestions[currentBusinessTermIndex];
    displayQuestion(currentQuestion, businessTermsQuiz, businessTermsResult, businessTermsTimer, businessTermsNext, updateBusinessTermScore, businessTermUserAnswers);
    updateProgressBar(businessTermsProgress, currentBusinessTermIndex, businessTermQuestions.length);
}

function updateBusinessTermScore(isCorrect) {
    if (isCorrect) {
        businessTermScore++;
    }
}

businessTermsNext.addEventListener('click', () => {
    currentBusinessTermIndex++;
    loadBusinessTermQuestion();
});

// ビジネス英語用語クイズの読み込み
function loadBusinessEnglishTermQuestion() {
    if (currentBusinessEnglishTermIndex >= businessEnglishTermQuestions.length) {
        displayBusinessEnglishTermResults();
        return;
    }

    const currentQuestion = businessEnglishTermQuestions[currentBusinessEnglishTermIndex];
    displayQuestion(currentQuestion, businessEnglishTermsQuiz, businessEnglishTermsResult, businessEnglishTermsTimer, businessEnglishTermsNext, updateBusinessEnglishTermScore, businessEnglishTermUserAnswers);
    updateProgressBar(businessEnglishTermsProgress, currentBusinessEnglishTermIndex, businessEnglishTermQuestions.length);
}

function updateBusinessEnglishTermScore(isCorrect) {
    if (isCorrect) {
        businessEnglishTermScore++;
    }
}

businessEnglishTermsNext.addEventListener('click', () => {
    currentBusinessEnglishTermIndex++;
    loadBusinessEnglishTermQuestion();
});

// 質問の表示と共通処理
function displayQuestion(question, quizElement, resultElement, timerElement, nextButton, updateScoreCallback, userAnswersArray) {
    // タイマーのリセット
    clearInterval(timerInterval);
    let timeLeft = timeLimit;
    timerElement.innerHTML = `残り時間: ${timeLeft}秒`;

    // 質問と選択肢の表示
    quizElement.innerHTML = `
        <div class="question">${question.question}</div>
        <ul class="options">
            ${shuffleArray(question.options).map(option => `<li><button class="option-btn">${option}</button></li>`).join('')}
        </ul>
    `;
    resultElement.innerHTML = '';
    nextButton.style.display = 'none';

    const optionButtons = quizElement.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(timerInterval);
            optionButtons.forEach(btn => btn.disabled = true);
            let isCorrect = false;
            if (button.textContent === question.answer) {
                button.classList.add('correct');
                isCorrect = true;
            } else {
                button.classList.add('incorrect');
                optionButtons.forEach(btn => {
                    if (btn.textContent === question.answer) {
                        btn.classList.add('correct');
                    }
                });
            }
            updateScoreCallback(isCorrect);
            userAnswersArray.push({
                question: question.question,
                selected: button.textContent,
                correct: question.answer,
                details: question.details,
                website: question.website || null
            });
            let detailsHtml = `<p>${question.details}</p>`;
            if (question.website) {
                detailsHtml += `<p><a href="${question.website}" target="_blank">公式ウェブサイトはこちら</a></p>`;
            }
            if (isCorrect) {
                resultElement.innerHTML = `<p class="correct">正解！</p>${detailsHtml}`;
            } else {
                resultElement.innerHTML = `<p class="incorrect">不正解。</p><p>正解は「${question.answer}」です。</p>${detailsHtml}`;
            }
            nextButton.style.display = 'block';
        });
    });

    // タイマーの開始
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `残り時間: ${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            optionButtons.forEach(btn => btn.disabled = true);
            optionButtons.forEach(btn => {
                if (btn.textContent === question.answer) {
                    btn.classList.add('correct');
                }
            });
            resultElement.innerHTML = `<p class="incorrect">時間切れです。</p><p>正解は「${question.answer}」です。</p><p>${question.details}</p>`;
            nextButton.style.display = 'block';
            updateScoreCallback(false);
            userAnswersArray.push({
                question: question.question,
                selected: null,
                correct: question.answer,
                details: question.details,
                website: question.website || null
            });
        }
    }, 1000);
}

// 進捗バーの更新関数
function updateProgressBar(progressBarElement, currentIndex, totalQuestions) {
    const progressPercentage = ((currentIndex) / totalQuestions) * 100;
    progressBarElement.style.width = `${progressPercentage}%`;
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 初期表示
setActiveNav('home');
