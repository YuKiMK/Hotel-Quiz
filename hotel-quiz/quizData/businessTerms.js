const businessTerms = [
    {
        question: "KPI（Key Performance Indicator）とは何を示す指標ですか？",
        options: ["成功の主要評価指標", "従業員満足度", "収益額", "運営コスト"],
        answer: "成功の主要評価指標",
        details: "KPIは、企業の目標達成度を評価するための具体的な指標で、パフォーマンスを数値で測定する際に使用されます。"
    },
    {
        question: "PDCAサイクルの各ステップは何を意味しますか？",
        options: ["計画・実行・評価・改善", "準備・進捗・完成・確認", "企画・実施・完了・評価", "プラン・デザイン・実施・評価"],
        answer: "計画・実行・評価・改善",
        details: "PDCAサイクルは、Plan（計画）→ Do（実行）→ Check（評価）→ Act（改善）の流れで業務の継続的改善を目指します。"
    },
    {
        question: "SWOT分析の「T」は何を意味しますか？",
        options: ["脅威", "技術", "ターゲット", "テクニック"],
        answer: "脅威",
        details: "SWOT分析は、Strength（強み）、Weakness（弱み）、Opportunity（機会）、Threat（脅威）の要素を評価して戦略を立てる手法です。"
    },
    {
        question: "ROI（Return on Investment）とは何の略称ですか？",
        options: ["投資利益率", "経費削減率", "運営コスト", "売上成長率"],
        answer: "投資利益率",
        details: "ROIは、投資によって得られた利益がどれだけあったかを評価する指標で、投資効果の測定に使用されます。"
    },
    {
        question: "B2Bとは何の略ですか？",
        options: ["Business to Business", "Business to Buyer", "Brand to Business", "Buyer to Buyer"],
        answer: "Business to Business",
        details: "B2Bは、企業間で取引やサービスを提供するビジネスモデルを指します。対して消費者向けはB2C（Business to Consumer）です。"
    },
    {
        question: "キャッシュフローに関する用語で、「営業キャッシュフロー」とは何を意味しますか？",
        options: ["営業活動による資金の流入と流出", "販売活動による利益", "顧客満足度", "従業員福利費用"],
        answer: "営業活動による資金の流入と流出",
        details: "営業キャッシュフローは、企業の本業から生じる現金収支で、資金の運用状況を評価する重要な指標です。"
    },
    {
        question: "デリバティブとは何を指す金融用語ですか？",
        options: ["金融派生商品", "現物取引", "短期投資商品", "長期国債"],
        answer: "金融派生商品",
        details: "デリバティブは、株式や債券などの基礎資産から派生した金融商品で、リスクヘッジや投機目的で利用されます。"
    },
    {
        question: "セグメンテーションとは何のことですか？",
        options: ["市場の細分化", "売上向上", "コスト削減", "広告制作"],
        answer: "市場の細分化",
        details: "セグメンテーションは、市場を特定の基準で細分化し、ターゲットを絞るマーケティング手法です。"
    },
    {
        question: "リスクマネジメントとは何を意味しますか？",
        options: ["リスクの評価と対策", "コスト削減", "収益の最大化", "従業員満足度向上"],
        answer: "リスクの評価と対策",
        details: "リスクマネジメントは、予測されるリスクを事前に評価し、回避または軽減するためのプロセスです。"
    },
    {
        question: "マーケットシェアとは何を意味しますか？",
        options: ["市場での占有率", "収益性", "成長率", "コスト削減率"],
        answer: "市場での占有率",
        details: "マーケットシェアは、企業が市場で占める割合を示し、競争力や業績を判断する際の指標となります。"
    },
        {
            question: "バリューチェーンとは何を示す概念ですか？",
            options: ["企業活動全体での価値創造の流れ", "商品の価格設定", "マーケットシェアの計算方法", "消費者の購買行動"],
            answer: "企業活動全体での価値創造の流れ",
            details: "バリューチェーンは、企業活動全体でどのように価値が創出されるかを示す分析ツールです。"
        },
        {
            question: "ブレークイーブンポイントとはどのような点ですか？",
            options: ["利益がゼロになる点", "最高の売上を達成する点", "運営コストを下げる点", "マーケットシェアの最大化"],
            answer: "利益がゼロになる点",
            details: "ブレークイーブンポイントは、売上がコストを上回る最低の売上水準を示します。"
        },
        {
            question: "サプライチェーンとは何を指す用語ですか？",
            options: ["商品の生産から消費までの流れ", "販売戦略", "マーケティング手法", "財務管理の方法"],
            answer: "商品の生産から消費までの流れ",
            details: "サプライチェーンは、原材料調達から製品の供給までの一連の流れを表します。"
        },
        {
            question: "ROE（Return on Equity）とは何を意味する指標ですか？",
            options: ["株主資本利益率", "収益性", "営業利益", "運転資本"],
            answer: "株主資本利益率",
            details: "ROEは、株主からの投資に対してどれだけの利益を上げたかを示す指標です。"
        },
        {
            question: "M&Aとは何の略称ですか？",
            options: ["Mergers and Acquisitions", "Market and Analysis", "Marketing and Advertising", "Money and Assets"],
            answer: "Mergers and Acquisitions",
            details: "M&Aは、企業の合併（Merger）や買収（Acquisition）を指し、企業拡大の手法の一つです。"
        },
        {
            question: "P/L（損益計算書）で示されるものはどれですか？",
            options: ["一定期間の収益と費用", "資産と負債", "資本の内訳", "会社の現金残高"],
            answer: "一定期間の収益と費用",
            details: "損益計算書は、一定期間の収益と費用を示し、会社の業績を把握するための財務報告書です。"
        },
        {
            question: "「マーケティングミックス」に含まれる「4P」のうち、正しくないものはどれですか？",
            options: ["Product", "Price", "Promotion", "Performance"],
            answer: "Performance",
            details: "マーケティングミックスの4Pは、Product（製品）、Price（価格）、Place（場所）、Promotion（販促）を指します。"
        },
        {
            question: "アセットマネジメントとはどのような業務ですか？",
            options: ["資産の運用と管理", "商品在庫管理", "マーケティング戦略", "従業員の人事管理"],
            answer: "資産の運用と管理",
            details: "アセットマネジメントは、資産の運用と管理を行い、利益を生むための戦略です。"
        },
        {
            question: "「インバウンドマーケティング」とは、どのような方法ですか？",
            options: ["顧客からの問い合わせや関心に応える形でのマーケティング", "広告を通じた直接アプローチ", "営業担当者による訪問営業", "商品の無料提供"],
            answer: "顧客からの問い合わせや関心に応える形でのマーケティング",
            details: "インバウンドマーケティングは、顧客自らが関心を持って訪れる形で関係を築く手法です。"
        },
        {
            question: "ホスピタリティ産業において、「クロスセル」とは何を指しますか？",
            options: ["関連商品やサービスを併せて提案すること", "高級品を薦めること", "値引きを行うこと", "既存の契約を更新すること"],
            answer: "関連商品やサービスを併せて提案すること",
            details: "クロスセルは、顧客が既に購入した商品と関連する他の商品を追加で提案する手法です。"
        },
        {
            question: "CRM（Customer Relationship Management）は何を目的とするシステムですか？",
            options: ["顧客との関係強化", "在庫管理", "経費削減", "競合分析"],
            answer: "顧客との関係強化",
            details: "CRMは、顧客情報を管理し、長期的な関係構築と満足度向上を目指すシステムです。"
        },
        {
            question: "BCP（Business Continuity Plan）とは何を指す用語ですか？",
            options: ["事業継続計画", "売上増加計画", "コスト削減計画", "新規事業計画"],
            answer: "事業継続計画",
            details: "BCPは、災害やリスクが発生した際に事業を継続できるよう備える計画です。"
        },
        {
            question: "ファイナンシャルリテラシーとはどのようなスキルですか？",
            options: ["お金に関する知識と管理能力", "法律知識", "技術知識", "環境に関する知識"],
            answer: "お金に関する知識と管理能力",
            details: "ファイナンシャルリテラシーは、お金の使い方や管理、投資などに関する知識とスキルを指します。"
        },
        {
            question: "ベンチャーキャピタル（VC）とはどのような投資会社ですか？",
            options: ["新興企業に投資する会社", "株式市場で投資する会社", "不動産に投資する会社", "国際市場で投資する会社"],
            answer: "新興企業に投資する会社",
            details: "ベンチャーキャピタルは、成長の可能性がある新興企業に投資し、リターンを期待する会社です。"
        },
        {
            question: "「ブルーオーシャン戦略」とはどのような経営戦略ですか？",
            options: ["競争が少ない未開拓市場を狙う", "競争が激しい市場に参入する", "コスト削減を目指す", "高級品を販売する"],
            answer: "競争が少ない未開拓市場を狙う",
            details: "ブルーオーシャン戦略は、競争が少ない新しい市場を開拓することで競争を避け、利益を得る戦略です。"
        },
        {
            question: "「リテンション率」とはどのような指標ですか？",
            options: ["顧客維持率", "販売量", "収益成長率", "従業員満足度"],
            answer: "顧客維持率",
            details: "リテンション率は、企業が顧客をどの程度維持できているかを示す指標です。"
        },
        {
            question: "ポジショニングとはどのようなマーケティング手法ですか？",
            options: ["商品やサービスの位置づけを明確にする", "市場シェアを高める", "新規顧客を獲得する", "コスト削減を行う"],
            answer: "商品やサービスの位置づけを明確にする",
            details: "ポジショニングは、商品が競合他社と差別化できるように位置づけを明確にするマーケティング手法です。"
        },
        {
            question: "「トリプルボトムライン」とは何を意味しますか？",
            options: ["経済、環境、社会の3つの視点", "収益、コスト、利益の3つの視点", "製品、サービス、顧客の3つの視点", "売上、利益、シェアの3つの視点"],
            answer: "経済、環境、社会の3つの視点",
            details: "トリプルボトムラインは、経済的利益に加え、環境と社会的責任を考慮する経営理念です。"
        },
        {
            question: "「ダイバーシティ」とは何を推進する概念ですか？",
            options: ["多様性の尊重", "業務効率化", "コスト削減", "シェア拡大"],
            answer: "多様性の尊重",
            details: "ダイバーシティは、人種、性別、年齢などの多様性を尊重し、組織内に受け入れることを推進する概念です。"
        },
        {
            question: "ESG投資とは、どの要素を重視した投資ですか？",
            options: ["環境、社会、ガバナンス", "経済、利益、成長", "安全、信頼、品質", "エネルギー、サステナビリティ、グローバル"],
            answer: "環境、社会、ガバナンス",
            details: "ESG投資は、企業の環境（Environment）、社会（Social）、ガバナンス（Governance）の要素を考慮した投資手法です。"
        }
    ];

    function displayBusinessTermResults() {
        clearInterval(timerInterval);
        businessTermsQuiz.innerHTML = `<h3>クイズ結果</h3>`;
        businessTermsTimer.innerHTML = '';
        businessTermsResult.innerHTML = `<p>あなたのスコアは ${businessTermScore} / ${businessTermQuestions.length} です。</p>`;
        businessTermsNext.style.display = 'none';
        businessTermsProgress.style.width = '100%';
    
        // ユーザーの回答結果を表示
        let resultHtml = '<ul class="result-list">';
        businessTermUserAnswers.forEach((answer, index) => {
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
        businessTermsQuiz.innerHTML += resultHtml;
    
        businessTermsQuiz.innerHTML += `<button class="return-btn" onclick="setActiveNav('home')">ホームに戻る</button>`;
    }