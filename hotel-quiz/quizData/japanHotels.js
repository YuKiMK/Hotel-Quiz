const japanHotels = [
 
    {
        question: "次のうち、東京にある有名なホテルはどれですか？",
        options: ["ザ・ペニンシュラ東京", "ホテルオークラ神戸", "ホテルニューオータニ大阪", "帝国ホテル札幌"],
        answer: "ザ・ペニンシュラ東京",
        details: "ザ・ペニンシュラ東京は、東京・有楽町に位置する高級ホテルで、2007年に開業しました。世界的なホテルチェーンであるペニンシュラグループの日本初進出のホテルです。",
        website: "https://www.peninsula.com/ja/tokyo"
    },
    {
        question: "日本最古のホテルとして知られるのはどれですか？",
        options: ["ホテルニューグランド", "法師旅館", "富士屋ホテル", "奈良ホテル"],
        answer: "法師旅館",
        details: "石川県にある法師旅館は718年創業で、世界最古の旅館としてギネスにも認定されています。約1300年の歴史を持ち、46代にわたって家族経営が続いています。",
        website: "https://www.ho-shi.co.jp/"
    },
    {
        question: "京都にある老舗旅館で、「和の心」を体現する宿はどれですか？",
        options: ["柊家旅館", "加賀屋", "俵屋旅館", "俵屋本館"],
        answer: "柊家旅館",
        details: "柊家旅館は、京都の中心部に位置する創業1818年の老舗旅館で、細やかなサービスと伝統的な和の空間が魅力です。",
        website: "https://www.hiiragiya.co.jp/"
    },
    {
        question: "日本で最も高いビルに入っているホテルは次のうちどれですか？",
        options: ["大阪マリオット都ホテル", "ザ・リッツ・カールトン東京", "コンラッド東京", "パークハイアット東京"],
        answer: "大阪マリオット都ホテル",
        details: "大阪マリオット都ホテルは、あべのハルカス内に位置し、日本で最も高いビルに入っているホテルです。",
        website: "https://www.miyakohotels.ne.jp/osaka-m-miyako/"
    },
    {
        question: "富士山を望む老舗高級ホテルとして有名なのは次のうちどれですか？",
        options: ["富士屋ホテル", "箱根湯本ホテル", "熱海後楽園ホテル", "ラビスタ富士河口湖"],
        answer: "富士屋ホテル",
        details: "富士屋ホテルは、1878年創業の日本初の本格的リゾートホテルで、富士山を望む美しい景観が特徴です。",
        website: "https://www.fujiyahotel.jp/"
    },
    {
        question: "「天空の城」とも称される、兵庫県にある城を改装したホテルはどれですか？",
        options: ["姫路城ホテル", "竹田城城下町ホテルEN", "明石城ホテル", "洲本城ホテル"],
        answer: "竹田城城下町ホテルEN",
        details: "竹田城城下町ホテルENは、竹田城跡の近くに位置し、城下町の歴史的建造物をリノベーションした宿泊施設です。",
        website: "https://www.takedacastle.jp/"
    },
    {
        question: "北海道のリゾート地、ニセコにある高級ホテルは次のうちどれですか？",
        options: ["ザ・リッツ・カールトン日光", "パークハイアットニセコ", "フォーシーズンズホテル京都", "アマン東京"],
        answer: "パークハイアットニセコ",
        details: "パークハイアットニセコは、ニセコの美しい自然に囲まれたラグジュアリーホテルで、冬のスキーリゾートとしても人気です。",
        website: "https://www.hyatt.com/ja-JP/hotel/japan/park-hyatt-niseko-hanazono/ctsph"
    },
    {
        question: "長崎県にある、ハウステンボス内のホテルは次のうちどれですか？",
        options: ["ホテルヨーロッパ", "ホテル日航ハウステンボス", "ホテルアムステルダム", "ウォーターマークホテル長崎"],
        answer: "ホテルヨーロッパ",
        details: "ホテルヨーロッパは、ハウステンボス内にある5つ星ホテルで、ヨーロッパの宮殿を思わせる豪華な内装が特徴です。",
        website: "https://www.huistenbosch.co.jp/hotel/europe/"
    },

    {
        question: "東京都で最も高層に位置するホテルはどれですか？",
        options: ["パークハイアット東京", "マンダリンオリエンタル東京", "ザ・プリンスギャラリー東京紀尾井町", "アンダーズ東京"],
        answer: "アンダーズ東京",
        details: "アンダーズ東京は虎ノ門ヒルズ内に位置し、都内で最も高層階にあるラグジュアリーホテルです。",
        website: "https://www.hyatt.com/ja-JP/hotel/japan/andaz-tokyo-toranomon-hills/tyoaz"
    },
    {
        question: "日本で最も歴史が長い温泉旅館はどれですか？",
        options: ["道後温泉 ふなや", "白玉の湯 華鳳", "法師旅館", "星野リゾート 界 松本"],
        answer: "法師旅館",
        details: "法師旅館は718年創業で、世界で最も歴史のある温泉旅館としてギネス記録にも認定されています。",
        website: "https://www.ho-shi.co.jp/"
    },
    {
        question: "沖縄県にある、ビーチリゾートで有名なホテルはどれですか？",
        options: ["星野リゾート リゾナーレ小浜島", "ホテル日航アリビラ", "シェラトン沖縄サンマリーナリゾート", "リッツカールトン沖縄"],
        answer: "ホテル日航アリビラ",
        details: "ホテル日航アリビラは、美しいビーチと沖縄の自然を楽しめるリゾートホテルです。",
        website: "https://www.alivila.co.jp/"
    },
    {
        question: "名古屋市内で唯一の高級インターナショナルホテルはどれですか？",
        options: ["ザ・リッツ・カールトン名古屋", "ヒルトン名古屋", "名古屋マリオットアソシアホテル", "グランドプリンスホテル名古屋"],
        answer: "ヒルトン名古屋",
        details: "ヒルトン名古屋は、名古屋市内で唯一の外資系高級ホテルとして高い人気を誇ります。",
        website: "https://www.hilton.com/ja/hotels/naghihi-hilton-nagoya/"
    },
    {
        question: "京都の嵐山に位置する、自然と調和したデザインのホテルはどれですか？",
        options: ["アマン京都", "翠嵐ラグジュアリーコレクションホテル京都", "フォーシーズンズホテル京都", "ザ・リッツ・カールトン京都"],
        answer: "翠嵐ラグジュアリーコレクションホテル京都",
        details: "翠嵐ラグジュアリーコレクションホテル京都は、嵐山の美しい自然に囲まれた落ち着いたホテルです。",
        website: "https://www.marriott.com/ja/hotels/ukylc-suiran-a-luxury-collection-hotel-kyoto/overview/"
    },
    {
        question: "日本で唯一、海の上に建てられたホテルはどれですか？",
        options: ["竹富島リゾート", "浦島ホテル", "淡島ホテル", "ANAインターコンチネンタル石垣リゾート"],
        answer: "淡島ホテル",
        details: "淡島ホテルは、静岡県沼津市の淡島の上に位置し、唯一海上に建てられた特別なホテルです。",
        website: "https://www.awashima.com/"
    },
    {
        question: "箱根の名湯で、モダンなデザインで人気の温泉旅館はどれですか？",
        options: ["天成園", "強羅花壇", "箱根ハイランドホテル", "湯本富士屋ホテル"],
        answer: "強羅花壇",
        details: "強羅花壇は、伝統と現代のデザインが調和した温泉旅館で、多くの観光客に人気です。",
        website: "https://www.gorakadan.com/"
    },
    {
        question: "星野リゾートが運営する、青森県にある温泉宿はどれですか？",
        options: ["奥入瀬渓流ホテル", "大鰐温泉 露天風呂宿", "八甲田温泉ホテル", "浅虫温泉ホテル"],
        answer: "奥入瀬渓流ホテル",
        details: "奥入瀬渓流ホテルは、自然豊かな奥入瀬渓流沿いに位置する温泉リゾートです。",
        website: "https://www.oirase-keiryuu.jp/"
    },
    {
        question: "富士山の麓に位置し、温泉を楽しめる高級リゾートはどれですか？",
        options: ["ラビスタ富士河口湖", "富士屋ホテル", "ハイランドリゾート ホテル&スパ", "フジプレミアムリゾート"],
        answer: "ラビスタ富士河口湖",
        details: "ラビスタ富士河口湖は、富士山の美しい景観を楽しめる温泉リゾートホテルです。",
        website: "https://www.hotespa.net/hotels/lavista_fuji/"
    },
    {
        question: "伊豆にある、自然に囲まれた静かなリゾートホテルはどれですか？",
        options: ["東伊豆オーシャンホテル", "アンダリゾート伊豆高原", "伊豆マリオットホテル修善寺", "リゾナーレ熱海"],
        answer: "アンダリゾート伊豆高原",
        details: "アンダリゾート伊豆高原は、伊豆の自然と調和した隠れ家風のリゾートホテルです。",
        website: "https://www.andarizort.com/"
    },
    {
        question: "軽井沢にある、日本初のアマンリゾート系列のホテルはどれですか？",
        options: ["アマネム", "アマン軽井沢", "軽井沢マリオットホテル", "軽井沢プリンスホテル"],
        answer: "アマン軽井沢",
        details: "アマン軽井沢は、軽井沢の美しい自然の中にあるアマンリゾート初の日本拠点です。",
        website: "https://www.aman.com/resorts/aman-karuizawa"
    },
    {
        question: "関西空港に直結している唯一のホテルはどれですか？",
        options: ["ホテル日航関西空港", "関西エアポートホテル", "ホテルオークラ関空", "関空ゲートタワーホテル"],
        answer: "ホテル日航関西空港",
        details: "ホテル日航関西空港は、関西空港ターミナルビルに直結しており、便利な立地が特徴です。",
        website: "https://www.nikkokix.com/"
    },
    {
        question: "星野リゾートが運営する沖縄のリゾートは次のうちどれですか？",
        options: ["星のや沖縄", "星野リゾート リゾナーレ小浜島", "星のや竹富島", "星野リゾート 界 石垣"],
        answer: "星のや沖縄",
        details: "星のや沖縄は、豊かな自然と沖縄文化を楽しめる高級リゾートです。",
        website: "https://hoshinoya.com/okinawa/"
    },
    {
        question: "京都の市街地に位置する、最も高層のホテルはどれですか？",
        options: ["京都グランビアホテル", "ザ・リッツ・カールトン京都", "ウェスティン都ホテル京都", "京都センチュリーホテル"],
        answer: "京都グランビアホテル",
        details: "京都グランビアホテルは、京都駅直結で市街地に位置し、最高層の景色が楽しめます。",
        website: "https://www.granvia-kyoto.co.jp/"
    },
    {
        question: "長野県の白馬村にあるリゾートホテルはどれですか？",
        options: ["白馬リゾートホテル", "アマネム", "白馬アスティルホテル", "アルパインリゾート白馬"],
        answer: "白馬アスティルホテル",
        details: "白馬アスティルホテルは、長野県白馬村にある人気のリゾートホテルです。",
        website: "https://www.astil.co.jp/hakuba/"
    },
    {
        question: "青森県で海の幸と温泉を楽しめるホテルはどれですか？",
        options: ["浅虫温泉ホテル", "星野リゾート 青森屋", "八甲田温泉ホテル", "浅虫リゾートホテル"],
        answer: "星野リゾート 青森屋",
        details: "星野リゾート 青森屋は、青森の豊かな自然と温泉、料理が楽しめる宿泊施設です。",
        website: "https://www.aoimori-yuki.jp/"
    }
];

function displayJapanHotelResults() {
    clearInterval(timerInterval);
    japanHotelsQuiz.innerHTML = `<h3>クイズ結果</h3>`;
    japanHotelsTimer.innerHTML = '';
    japanHotelsResult.innerHTML = `<p>あなたのスコアは ${japanHotelScore} / ${japanHotelQuestions.length} です。</p>`;
    japanHotelsNext.style.display = 'none';
    japanHotelsProgress.style.width = '100%';

    // ユーザーの回答結果を表示
    let resultHtml = '<ul class="result-list">';
    japanHotelUserAnswers.forEach((answer, index) => {
        resultHtml += `
        <li class="result-item">
            <h4>Q${index + 1}: ${answer.question}</h4>
            <p class="user-answer">あなたの回答: ${answer.selected || '未回答'}</p>
            <p class="correct-answer">正解: ${answer.correct}</p>
            <div class="details">
                <p>${answer.details}</p>
                ${answer.website ? `<p><a href="${answer.website}" target="_blank">公式ウェブサイトはこちら</a></p>` : ''}
            </div>
        </li>`;
    });
    resultHtml += '</ul>';
    japanHotelsQuiz.innerHTML += resultHtml;

    japanHotelsQuiz.innerHTML += `<button class="return-btn" onclick="setActiveNav('home')">ホームに戻る</button>`;
}
