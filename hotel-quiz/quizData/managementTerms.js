const managementTerms = [
    {
        question: "ADR（Average Daily Rate）とは何を表す指標ですか？",
        options: ["平均宿泊率", "平均客室単価", "総収益", "総客室数"],
        answer: "平均客室単価",
        details: "ADRは、一日に販売された客室の平均価格を示す指標です。計算式は「総客室売上 ÷ 販売客室数」です。ホテルの収益性を評価する際に重要な指標となります。"
    },
    {
        question: "客室稼働率（OCC）の計算式はどれですか？",
        options: ["販売客室数 ÷ 総客室数", "総客室数 ÷ 販売客室数", "総客室売上 ÷ ADR", "ADR × RevPAR"],
        answer: "販売客室数 ÷ 総客室数",
        details: "OCCは、販売客室数を総客室数で割って算出されます。ホテルの稼働状況を示す重要な指標です。"
    },
    {
        question: "RevPAR（Revenue Per Available Room）の計算方法は？",
        options: ["ADR × OCC", "総収益 ÷ 総客室数", "ADR ÷ OCC", "総収益 × 総客室数"],
        answer: "ADR × OCC",
        details: "RevPARは、客室稼働率（OCC）と平均客室単価（ADR）を掛け合わせて算出されます。ホテル全体の収益性を評価するための重要な指標です。"
    },
    {
        question: "ADR（Average Daily Rate）の計算式はどれですか？",
        options: ["総客室売上 ÷ 販売客室数", "総客室売上 ÷ 総客室数", "販売客室数 ÷ 総客室数", "総客室数 ÷ 販売客室数"],
        answer: "総客室売上 ÷ 販売客室数",
        details: "ADRは平均客室単価を示し、総客室売上を販売客室数で割って算出します。"
    },
    {
        question: "RevPAR（Revenue Per Available Room）とは何を示す指標ですか？",
        options: ["販売可能な客室あたりの収益", "平均宿泊率", "総収益", "客室稼働率"],
        answer: "販売可能な客室あたりの収益",
        details: "RevPARは、客室稼働率と平均客室単価を掛け合わせたもので、ホテルの収益性を評価する重要な指標です。"
    },
    {
        question: "客室稼働率（OCC）が80%で、総客室数が200室の場合、販売客室数は何室ですか？",
        options: ["160室", "180室", "200室", "150室"],
        answer: "160室",
        details: "販売客室数 = 総客室数 × 客室稼働率。200室 × 0.8 = 160室。"
    },
    {
        question: "GOP（Gross Operating Profit）とは何を示す指標ですか？",
        options: ["営業総利益", "純利益", "総収益", "運営費用"],
        answer: "営業総利益",
        details: "GOPは、総収益から運営費用を差し引いた金額で、ホテルの営業効率を示します。"
    },
    {
        question: "RevPARの計算式はどれですか？",
        options: ["ADR × OCC", "ADR ÷ OCC", "ADR × 販売客室数", "総収益 ÷ 総客室数"],
        answer: "ADR × OCC",
        details: "RevPARは、平均客室単価（ADR）と客室稼働率（OCC）を掛け合わせて算出します。"
    },

    {
        question: "ARR（Average Room Rate）と同義の用語はどれですか？",
        options: ["ADR", "RevPAR", "GOP", "OCC"],
        answer: "ADR",
        details: "ARR（平均室料）は、ADR（平均客室単価）と同じ意味で使用されます。"
    },


    {
        question: "客室販売価格の設定において、需要に応じて価格を変動させる手法はどれですか？",
        options: ["ダイナミックプライシング", "固定プライシング", "コストプラスプライシング", "バンドルプライシング"],
        answer: "ダイナミックプライシング",
        details: "ダイナミックプライシングは、需要に応じて価格を変動させることで収益を最大化する手法です。"
    },
    {
        question: "ホテルの収益管理を意味する「レベニューマネジメント」の主な目的はどれですか？",
        options: ["収益の最大化", "運営コストの削減", "従業員満足度向上", "宿泊率の維持"],
        answer: "収益の最大化",
        details: "レベニューマネジメントは、客室の需要と価格を調整して収益を最大化することを目的としています。"
    },
    {
        question: "EBITDAとは、どのような指標ですか？",
        options: ["利息・税金・減価償却前営業利益", "純利益", "総収益", "営業費用"],
        answer: "利息・税金・減価償却前営業利益",
        details: "EBITDAは、ホテルの経営状況を分析する際に使用される指標で、利息、税金、減価償却費を除いた利益を示します。"
    },
    {
        question: "マーケットシェアとは何を示す指標ですか？",
        options: ["市場での収益シェア", "市場全体の宿泊数", "稼働率の平均値", "平均客室単価"],
        answer: "市場での収益シェア",
        details: "マーケットシェアは、市場全体に対するホテルの収益の割合を示し、競争力を測る指標です。"
    },
   
    {
        question: "ROI（Return on Investment）とは何を示す指標ですか？",
        options: ["投資利益率", "営業利益", "総収益", "投資額"],
        answer: "投資利益率",
        details: "ROIは、投資した金額に対する利益の割合を示し、投資の効率性を評価するために使われます。"
    },
    {
        question: "ターゲットマーケティングにおいて、主に使用されるセグメンテーション手法はどれですか？",
        options: ["地理的セグメンテーション", "行動的セグメンテーション", "心理的セグメンテーション", "すべての上記"],
        answer: "すべての上記",
        details: "ターゲットマーケティングでは、地理的、行動的、心理的などの複数の手法を組み合わせて顧客層をセグメントします。"
    },
    {
        question: "ホテルの稼働率が50%の場合、200室あるホテルで販売されている客室数は何室ですか？",
        options: ["100室", "50室", "150室", "200室"],
        answer: "100室",
        details: "稼働率50%の200室では、100室が販売されている計算になります。200 × 0.5 = 100。"
    },
    {
        question: "配分費用に関する説明として正しいものはどれですか？",
        options: ["収益を分配するための費用", "予約経路ごとに異なる販売手数料", "広告のための費用", "客室清掃費用"],
        answer: "予約経路ごとに異なる販売手数料",
        details: "配分費用は、予約経路（OTAや直接予約など）により異なる販売手数料や手配コストを指します。"
    },
    {
        question: "CPA（Cost Per Acquisition）とは何を示す指標ですか？",
        options: ["新規顧客獲得のためのコスト", "平均客室単価", "宿泊率", "運営費用"],
        answer: "新規顧客獲得のためのコスト",
        details: "CPAは、新規顧客を獲得するためにかかる費用を示し、マーケティング効果を評価する際に用いられます。"
    },
    {
        question: "トリプルオキュパンシーとは何ですか？",
        options: ["1部屋に3人宿泊すること", "客室清掃が1日に3回行われること", "3つのベッドがある部屋", "3部屋が連結していること"],
        answer: "1部屋に3人宿泊すること",
        details: "トリプルオキュパンシーとは、1部屋に3人宿泊することを指し、収益管理においても活用される指標です。"
    },
    {
        question: "LOS（Length of Stay）とは何を示す指標ですか？",
        options: ["平均宿泊日数", "平均客室料金", "宿泊者数", "滞在中の平均支出"],
        answer: "平均宿泊日数",
        details: "LOSは、宿泊者がホテルに滞在する平均日数を表し、ホテルのマーケティングや収益管理において重要な指標です。"
    },
    {
        question: "キャッシュフロー（CF）とは何を示す指標ですか？",
        options: ["資金の流入と流出", "純利益", "運営費用", "収益の合計"],
        answer: "資金の流入と流出",
        details: "キャッシュフローは、一定期間内の資金の流入と流出を示し、経営の健全性を評価する際に用いられます。"
    },
    {
        question: "アップセルとはどのような販売手法ですか？",
        options: ["より高価な商品を勧める", "割引を提供する", "通常のサービスに特典を追加する", "複数の商品をパッケージにして販売する"],
        answer: "より高価な商品を勧める",
        details: "アップセルは、顧客により高価な商品やオプションを勧めることで、売上の増加を図る手法です。"
    },
    {
        question: "ベンチマーキングとは何を目的とするプロセスですか？",
        options: ["他社の優れた方法を学ぶこと", "売上を増やすこと", "宿泊率を上げること", "コストを削減すること"],
        answer: "他社の優れた方法を学ぶこと",
        details: "ベンチマーキングは、他社や競合の成功事例を参考にして、自社のパフォーマンスを向上させるためのプロセスです。"
    },
    {
        question: "ホテルにおけるフランチャイズ契約のメリットとして正しいものはどれですか？",
        options: ["ブランド力の活用", "すべての利益を独占", "施設管理費の削減", "客室数の制限がない"],
        answer: "ブランド力の活用",
        details: "フランチャイズ契約は、ホテルが有名ブランドの名前を使用できるため、集客力を高める効果があります。"
    },
    {
        question: "アセットライト戦略とは何を意味しますか？",
        options: ["物件所有に依存しない経営戦略", "固定資産の積極的な取得", "全ての資産を売却する戦略", "物件に依存する経営"],
        answer: "物件所有に依存しない経営戦略",
        details: "アセットライト戦略は、物件所有に依存せず、運営や管理に特化することで経営リスクを軽減する方法です。"
    },
    {
        question: "RFP（Request for Proposal）とは何を指す用語ですか？",
        options: ["提案依頼書", "売上予測", "コスト削減計画", "マーケティング戦略"],
        answer: "提案依頼書",
        details: "RFPは、ホテルなどのクライアントが、サービス提供者に提案を求める際に発行する文書です。"
    },
    {
        question: "ホテル業界におけるCAPEXとは何を指しますか？",
        options: ["設備投資", "運営コスト", "収益予測", "マーケティング費用"],
        answer: "設備投資",
        details: "CAPEXは、長期的な利益を生み出すための設備や施設への投資を指します。"
    }
];

function displayManagementTermResults() {
    clearInterval(timerInterval);
    managementTermsQuiz.innerHTML = `<h3>クイズ結果</h3>`;
    managementTermsTimer.innerHTML = '';
    managementTermsResult.innerHTML = `<p>あなたのスコアは ${managementTermScore} / ${managementTermQuestions.length} です。</p>`;
    managementTermsNext.style.display = 'none';
    managementTermsProgress.style.width = '100%';

    // ユーザーの回答結果を表示
    let resultHtml = '<ul class="result-list">';
    managementTermUserAnswers.forEach((answer, index) => {
        resultHtml += `
        <li class="result-item">
            <h4>Q${index + 1}: ${answer.question}</h4>
            <p class="user-answer">あなたの回答: ${answer.selected || '未回答'}</p>
            <p class="correct-answer">正解: ${answer.correct}</p>
            <div class="details">
                <p>${answer.details}</p>
            </div>
        </li>`;
    });
    resultHtml += '</ul>';
    managementTermsQuiz.innerHTML += resultHtml;

    managementTermsQuiz.innerHTML += `<button class="return-btn" onclick="setActiveNav('home')">ホームに戻る</button>`;
}