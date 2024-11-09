const worldHotels = [
    {
        question: "ドバイにある世界初の7つ星ホテルはどれですか？",
        options: ["ブルジュ・ハリファ", "アトランティス・ザ・パーム", "ジュメイラ・ビーチ・ホテル", "ブルジュ・アル・アラブ"],
        answer: "ブルジュ・アル・アラブ",
        details: "ブルジュ・アル・アラブは、アラビア湾に建つ象徴的な帆の形をしたホテルで、最高級のサービスを提供します。全室がスイートルームで、専用の執事サービスもあります。",
        website: "https://www.jumeirah.com/en/article/stay/dubai/burj-al-arab-jumeirah"
    },
    {
        question: "シンガポールのランドマークとなっている、屋上プールが有名なホテルはどれですか？",
        options: ["マリーナベイ・サンズ", "ラッフルズ・ホテル", "フラトン・ホテル", "マンダリン・オリエンタル"],
        answer: "マリーナベイ・サンズ",
        details: "マリーナベイ・サンズは、船の形をした屋上プール「インフィニティ・プール」が有名な大型リゾートホテルで、シンガポールの象徴的存在です。",
        website: "https://jp.marinabaysands.com/"
    },
    {
        question: "ニューヨークのセントラルパーク南東角に位置する歴史的なホテルはどれですか？",
        options: ["ザ・プラザホテル", "ウォルドーフ＝アストリア", "ザ・リッツ・カールトン", "セントレジス・ニューヨーク"],
        answer: "ザ・プラザホテル",
        details: "ザ・プラザホテルは、1907年開業のニューヨークを代表するラグジュアリーホテルで、多くの映画やドラマの舞台にもなっています。",
        website: "https://www.theplazany.com/"
    },
    {
        question: "世界で唯一の7つ星ホテルと言われる、ドバイにあるホテルはどれですか？",
        options: ["ブルジュ・ハリファ", "ブルジュ・アル・アラブ", "パーム・ジュメイラ", "ザ・アドレス・ダウンタウン"],
        answer: "ブルジュ・アル・アラブ",
        details: "ブルジュ・アル・アラブは、人工島に建つ帆の形をした超高級ホテルで、世界最高峰のサービスを提供します。",
        website: "https://www.jumeirah.com/en/article/stay/dubai/burj-al-arab-jumeirah"
    },
    {
        question: "シンガポールのランドマークである、屋上プールが有名なホテルはどれですか？",
        options: ["ラッフルズ・シンガポール", "マリーナベイ・サンズ", "フラトンホテル", "マンダリン・オリエンタル"],
        answer: "マリーナベイ・サンズ",
        details: "マリーナベイ・サンズは、空中に船が浮かんでいるようなデザインの屋上プール「インフィニティプール」が有名です。",
        website: "https://jp.marinabaysands.com/"
    },
    {
        question: "アメリカ・ニューヨークで最も歴史のある高級ホテルはどれですか？",
        options: ["ザ・プラザホテル", "ウォルドーフ・アストリア", "セントレジス・ニューヨーク", "ザ・リッツ・カールトン・ニューヨーク"],
        answer: "ウォルドーフ・アストリア",
        details: "ウォルドーフ・アストリアは、1893年に開業したニューヨークを代表する高級ホテルです。",
        website: "https://www.waldorfastoria.com/"
    },
    {
        question: "パリのシャンゼリゼ通り近くに位置する高級ホテルはどれですか？",
        options: ["ホテル・リッツ・パリ", "ル・ムーリス", "ホテル・プラザ・アテネ", "ル・ブリストル・パリ"],
        answer: "ホテル・プラザ・アテネ",
        details: "ホテル・プラザ・アテネは、エッフェル塔を望む絶好のロケーションにあり、ファッション界との結びつきが強いホテルです。",
        website: "https://www.dorchestercollection.com/en/paris/hotel-plaza-athenee/"
    },
    {
        question: "香港のビクトリアハーバーに面した歴史的なホテルはどれですか？",
        options: ["ザ・ペニンシュラ香港", "ザ・リッツ・カールトン香港", "インターコンチネンタル香港", "マンダリン・オリエンタル香港"],
        answer: "ザ・ペニンシュラ香港",
        details: "ザ・ペニンシュラ香港は、1928年開業の香港を代表する高級ホテルで、クラシックなサービスが特徴です。",
        website: "https://www.peninsula.com/ja/hong-kong"
    },

    {
        question: "イタリア・フィレンツェでアルノ川沿いに位置する歴史的なホテルはどれですか？",
        options: ["ホテル・サボイ", "ザ・セントレジス・フィレンツェ", "フォーシーズンズ・ホテル・フィレンツェ", "ベルモンド・ヴィラ・サン・ミケーレ"],
        answer: "ザ・セントレジス・フィレンツェ",
        details: "ザ・セントレジス・フィレンツェは、歴史的な建物を利用した豪華なホテルで、ルネサンスの芸術と文化を感じられます。",
        website: "https://www.marriott.com/hotels/travel/flrxr-the-st-regis-florence/"
    },


    {
        question: "ロンドンのハイドパークに面した高級ホテルはどれですか？",
        options: ["ザ・ランガム・ロンドン", "ザ・リッツ・ロンドン", "ザ・サヴォイ", "フォーシーズンズ・ロンドン・パークレーン"],
        answer: "フォーシーズンズ・ロンドン・パークレーン",
        details: "フォーシーズンズ・ロンドン・パークレーンは、ハイドパークの美しい景観を望む高級ホテルです。",
        website: "https://www.fourseasons.com/london/"
    },
    {
        question: "カリフォルニアのビバリーヒルズにある、有名なハリウッドスターが集う高級ホテルはどれですか？",
        options: ["ザ・ビバリー・ヒルズ・ホテル", "ザ・ロンドン・ウェストハリウッド", "リッツ・カールトン・ロサンゼルス", "モンテージ・ビバリーヒルズ"],
        answer: "ザ・ビバリー・ヒルズ・ホテル",
        details: "ザ・ビバリー・ヒルズ・ホテルは、ピンクの外観が特徴で、ハリウッドスターが愛する歴史的なホテルです。",
        website: "https://www.dorchestercollection.com/en/los-angeles/the-beverly-hills-hotel/"
    },
    {
        question: "エッフェル塔の近くにある高級ホテルで、豪華な内装が特徴なのはどれですか？",
        options: ["ホテル・リッツ・パリ", "ル・ムーリス", "ホテル・プラザ・アテネ", "シャングリラ・ホテル・パリ"],
        answer: "シャングリラ・ホテル・パリ",
        details: "シャングリラ・ホテル・パリは、エッフェル塔を望む豪華な内装とサービスで知られています。",
        website: "https://www.shangri-la.com/paris/shangrila/"
    },
    {
        question: "世界で最も高いホテルがある場所はどこですか？",
        options: ["ドバイ", "香港", "上海", "ニューヨーク"],
        answer: "ドバイ",
        details: "世界で最も高いホテルは、ドバイのゲボラ・ホテルで、高さは356メートルです。",
        website: "https://gevorahotels.com/"
    },
    {
        question: "ニューヨークに位置し、ロビーの天井がアートデコの装飾で有名なホテルはどれですか？",
        options: ["ザ・チャネル", "ウォルドーフ・アストリア", "ザ・プラザホテル", "ザ・リッツ・カールトン"],
        answer: "ウォルドーフ・アストリア",
        details: "ウォルドーフ・アストリアは、アートデコの華麗な装飾が特徴で、ニューヨークの象徴的なホテルです。",
        website: "https://www.waldorfastoria.com/"
    },
    {
        question: "ヴェネツィアにある、豪華な運河沿いのホテルはどれですか？",
        options: ["ザ・グリッティ・パレス", "アマン・ヴェニス", "ベルモンド・ホテル・チプリアーニ", "バウアー・パラッツォ"],
        answer: "ザ・グリッティ・パレス",
        details: "ザ・グリッティ・パレスは、ヴェネツィアの運河沿いに位置する歴史的な豪華ホテルです。",
        website: "https://www.marriott.com/hotels/travel/vcegl-the-gritti-palace-a-luxury-collection-hotel-venice/"
    },
    {
        question: "東京タワーを望む、東京で有名な高級ホテルはどれですか？",
        options: ["アマン東京", "シャングリラ・ホテル東京", "ザ・リッツ・カールトン東京", "プリンスパークタワー東京"],
        answer: "プリンスパークタワー東京",
        details: "プリンスパークタワー東京は、東京タワーの近くにあり、美しい夜景を望むことができます。",
        website: "https://www.princehotels.com/the-prince-park-tower-tokyo/"
    },
    {
        question: "カナダ・バンクーバーのウォーターフロントにある、絶景が楽しめる高級ホテルはどれですか？",
        options: ["フェアモント・ウォーターフロント", "ローズウッド・ホテル・ジョージア", "シャングリラ・ホテル・バンクーバー", "パーク・ハイアット・バンクーバー"],
        answer: "フェアモント・ウォーターフロント",
        details: "フェアモント・ウォーターフロントは、バンクーバー港と山々を一望できる絶景のホテルです。",
        website: "https://www.fairmont.com/waterfront-vancouver/"
    },
    {
        question: "モスクワにある、有名な赤の広場に近接する高級ホテルはどれですか？",
        options: ["ザ・リッツ・カールトン・モスクワ", "メトロポール・モスクワ", "アララト・パーク・ハイアット", "ザ・セントレジス・モスクワ・ニコルスカヤ"],
        answer: "ザ・リッツ・カールトン・モスクワ",
        details: "ザ・リッツ・カールトン・モスクワは、赤の広場にほど近く、豪華な設備を備えた高級ホテルです。",
        website: "https://www.ritzcarlton.com/en/hotels/europe/moscow"
    },
    {
        question: "南アフリカ・ケープタウンで、テーブルマウンテンを望む美しいホテルはどれですか？",
        options: ["ワン&オンリー・ケープタウン", "ケープ・グレース・ホテル", "ザ・スイートホテル", "ザ・タージ・ケープタウン"],
        answer: "ワン&オンリー・ケープタウン",
        details: "ワン&オンリー・ケープタウンは、テーブルマウンテンの絶景を楽しめる高級ホテルです。",
        website: "https://www.oneandonlyresorts.com/cape-town"
    },
    {
        question: "サンフランシスコの有名なユニオンスクエアに位置するクラシックなホテルはどれですか？",
        options: ["ザ・フェアモント・サンフランシスコ", "ウェスティン・セントフランシス", "フォーシーズンズ・サンフランシスコ", "リッツ・カールトン・サンフランシスコ"],
        answer: "ウェスティン・セントフランシス",
        details: "ウェスティン・セントフランシスは、サンフランシスコのユニオンスクエアに位置する歴史的なホテルです。",
        website: "https://www.marriott.com/hotels/travel/sfouw-the-westin-st-francis-san-francisco-on-union-square/"
    },
    {
        question: "ブラジル・リオデジャネイロのコパカバーナビーチ沿いにある有名なホテルはどれですか？",
        options: ["ファサノ リオデジャネイロ", "コパカバーナ・パレス", "シェラトン・リオホテル&リゾート", "ヒルトン・リオ・デ・ジャネイロ"],
        answer: "コパカバーナ・パレス",
        details: "コパカバーナ・パレスは、リオデジャネイロの象徴的なビーチ沿いに位置する高級ホテルです。",
        website: "https://www.belmond.com/hotels/south-america/brazil/rio-de-janeiro/belmond-copacabana-palace/"
    },
    {
        question: "インド・ジャイプールで、王宮として使われていた建物をホテルにしたものはどれですか？",
        options: ["ラージ・パレス", "サムード・パレス", "タージ・レイク・パレス", "ウメイド・バワン・パレス"],
        answer: "ラージ・パレス",
        details: "ラージ・パレスは、かつて王宮として使われていた歴史的建物をリノベーションした高級ホテルです。",
        website: "https://www.raajpalace.com/"
    }
];

function displayWorldHotelResults() {
    clearInterval(timerInterval);
    worldHotelsQuiz.innerHTML = `<h3>クイズ結果</h3>`;
    worldHotelsTimer.innerHTML = '';
    worldHotelsResult.innerHTML = `<p>あなたのスコアは ${worldHotelScore} / ${worldHotelQuestions.length} です。</p>`;
    worldHotelsNext.style.display = 'none';
    worldHotelsProgress.style.width = '100%';

    // ユーザーの回答結果を表示
    let resultHtml = '<ul class="result-list">';
    worldHotelUserAnswers.forEach((answer, index) => {
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
    worldHotelsQuiz.innerHTML += resultHtml;

    worldHotelsQuiz.innerHTML += `<button class="return-btn" onclick="setActiveNav('home')">ホームに戻る</button>`;
}