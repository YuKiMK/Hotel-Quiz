const businessEnglishTerms = [
    {
        question: "What does the term 'synergy' mean in a business context?",
        options: ["Combined effect greater than individual efforts", "Profit increase", "Employee satisfaction", "Cost reduction"],
        answer: "Combined effect greater than individual efforts",
        details: "Synergy refers to the concept that the combined efforts of two or more entities produce a result greater than the sum of their individual effects."
    },
    {
        question: "What does 'benchmarking' involve?",
        options: ["Measuring performance against industry standards", "Setting quarterly goals", "Increasing profit margins", "Managing cash flow"],
        answer: "Measuring performance against industry standards",
        details: "Benchmarking is the practice of comparing a company’s performance with industry standards to identify areas for improvement."
    },
    {
        question: "In a business meeting, what does 'agenda' refer to?",
        options: ["The list of topics to discuss", "A meeting's location", "The main speaker", "The company’s goals"],
        answer: "The list of topics to discuss",
        details: "An agenda is a list of items to be discussed in a meeting, helping to structure and organize the discussion."
    },
    {
        question: "What is meant by 'competitive advantage'?",
        options: ["An advantage over competitors in some aspect", "A measure of company profits", "An international market expansion", "A reduction in production costs"],
        answer: "An advantage over competitors in some aspect",
        details: "Competitive advantage refers to an attribute that allows a company to outperform its competitors, such as unique products or cost efficiency."
    },
    {
        question: "What does the acronym 'ROI' stand for?",
        options: ["Return on Investment", "Rate of Interest", "Revenue on Increment", "Return on Innovation"],
        answer: "Return on Investment",
        details: "ROI, or Return on Investment, measures the gain or loss generated on an investment relative to the amount invested."
    },
    {
        question: "What does 'liability' mean in a financial context?",
        options: ["A company's debts or obligations", "A company’s total assets", "Employee benefits", "Corporate taxes"],
        answer: "A company's debts or obligations",
        details: "Liabilities are financial obligations or debts owed by a company to other entities, representing an outflow of resources in the future."
    },
    {
        question: "What does 'scalability' mean in business?",
        options: ["The ability to grow without compromising performance", "Reducing employee numbers", "Increasing prices", "Cutting costs"],
        answer: "The ability to grow without compromising performance",
        details: "Scalability is the capability of a business to expand without negatively impacting efficiency or profit margins."
    },
    {
        question: "What is a 'balance sheet'?",
        options: ["A financial statement showing assets, liabilities, and equity", "An inventory report", "A marketing analysis document", "A strategic planning document"],
        answer: "A financial statement showing assets, liabilities, and equity",
        details: "A balance sheet is a financial statement that summarizes a company's assets, liabilities, and shareholders' equity at a specific point in time."
    },
    {
        question: "In business, what does 'due diligence' mean?",
        options: ["A comprehensive assessment before making a decision", "Hiring a new employee", "Setting financial goals", "Reviewing past profits"],
        answer: "A comprehensive assessment before making a decision",
        details: "Due diligence involves thorough research and analysis before entering into a business transaction or investment."
    },
    {
        question: "What does 'diversification' refer to in business strategy?",
        options: ["Expanding into new markets or products", "Reducing company expenses", "Increasing stock prices", "Improving customer satisfaction"],
        answer: "Expanding into new markets or products",
        details: "Diversification is a strategy that involves entering new markets or introducing new products to spread risk and increase growth potential."
    },
    {
        question: "What does the term 'stakeholder' mean?",
        options: ["Anyone with an interest in the company", "Only the company's employees", "Only the company's shareholders", "Only the company's customers"],
        answer: "Anyone with an interest in the company",
        details: "Stakeholders include anyone affected by the company’s operations, such as employees, customers, shareholders, and suppliers."
    },
    {
        question: "What is 'cash flow'?",
        options: ["The movement of money in and out of a business", "The total revenue", "A summary of liabilities", "Company expenses"],
        answer: "The movement of money in and out of a business",
        details: "Cash flow represents the net amount of cash moving into and out of a business, impacting liquidity and overall financial health."
    },
    {
        question: "What does 'break-even point' mean?",
        options: ["Where total revenue equals total costs", "The point of maximum profit", "A decrease in costs", "A market entry strategy"],
        answer: "Where total revenue equals total costs",
        details: "The break-even point is when a company's revenue covers all its expenses, resulting in no net profit or loss."
    },
    {
        question: "What is 'equity' in finance?",
        options: ["The ownership value in a company", "Company debts", "Inventory value", "Employee benefits"],
        answer: "The ownership value in a company",
        details: "Equity represents the shareholders' claim on the assets of a company, calculated as total assets minus liabilities."
    },
    {
        question: "What does 'fiscal year' mean?",
        options: ["A one-year period for financial reporting", "A calendar year", "A tax exemption period", "A profit calculation period"],
        answer: "A one-year period for financial reporting",
        details: "A fiscal year is a 12-month period used by companies for accounting purposes, not necessarily aligning with the calendar year."
    },
    {
        question: "What is 'liquidity' in a financial context?",
        options: ["The ability to quickly convert assets to cash", "A company’s profit margin", "The debt-to-equity ratio", "The rate of return on investments"],
        answer: "The ability to quickly convert assets to cash",
        details: "Liquidity refers to how easily assets can be converted to cash without affecting their value, essential for meeting short-term obligations."
    },
    {
        question: "What does 'B2C' stand for?",
        options: ["Business to Consumer", "Business to Corporation", "Business to Client", "Business to Commerce"],
        answer: "Business to Consumer",
        details: "B2C refers to transactions between businesses and individual consumers, commonly seen in retail and e-commerce."
    },
    {
        question: "What is meant by 'operational efficiency'?",
        options: ["Minimizing waste while maximizing output", "Expanding market share", "Increasing prices", "Reducing the workforce"],
        answer: "Minimizing waste while maximizing output",
        details: "Operational efficiency involves optimizing processes to use resources effectively, reducing waste and costs while maximizing productivity."
    },
    {
        question: "What is a 'merger'?",
        options: ["When two companies combine to form one", "An investment in new markets", "An employee layoff", "A marketing campaign"],
        answer: "When two companies combine to form one",
        details: "A merger occurs when two companies join together to create a new entity, often to gain a competitive advantage."
    },
    {
        question: "What does 'scaling up' mean in a business context?",
        options: ["Expanding operations to grow revenue", "Reducing expenses", "Hiring new staff", "Entering a new market"],
        answer: "Expanding operations to grow revenue",
        details: "Scaling up refers to increasing a business's capacity to handle greater demand, leading to growth in revenue and reach."
    },
    {
        question: "What does 'arbitrage' mean in financial markets?",
        options: ["Taking advantage of price differences in different markets", "Setting the lowest possible price", "Reducing financial risk", "Increasing profit margins by expanding products"],
        answer: "Taking advantage of price differences in different markets",
        details: "Arbitrage involves buying and selling the same asset in different markets to profit from price discrepancies."
    },
    {
        question: "In finance, what does 'hedging' refer to?",
        options: ["Reducing exposure to risk", "Maximizing investment returns", "Analyzing market trends", "Issuing more shares"],
        answer: "Reducing exposure to risk",
        details: "Hedging is a strategy used to offset potential losses by taking an opposite position in a related asset."
    },
    {
        question: "What is a 'leveraged buyout'?",
        options: ["Acquiring a company using borrowed funds", "Selling shares in a private company", "Reducing company liabilities", "Expanding into a new market"],
        answer: "Acquiring a company using borrowed funds",
        details: "A leveraged buyout (LBO) involves purchasing a company primarily with borrowed money, often secured by the acquired company’s assets."
    },
    {
        question: "What does the term 'capital gains' mean?",
        options: ["Profit from the sale of an asset", "Total company revenue", "Employee compensation", "Company debt"],
        answer: "Profit from the sale of an asset",
        details: "Capital gains are the profits made from selling an asset like stocks or real estate at a higher price than its purchase cost."
    },
    {
        question: "What is an 'IPO' (Initial Public Offering)?",
        options: ["The first sale of a company's stock to the public", "A private sale of shares", "A financial loss", "Issuing a new product"],
        answer: "The first sale of a company's stock to the public",
        details: "An IPO is when a company offers its shares to the public for the first time to raise capital and become publicly traded."
    },
    {
        question: "What does 'dividend yield' represent?",
        options: ["Annual dividend income relative to stock price", "Total profit of the company", "Share price growth rate", "Company revenue growth"],
        answer: "Annual dividend income relative to stock price",
        details: "Dividend yield is calculated as annual dividends per share divided by the stock price, indicating how much a company pays in dividends relative to its stock price."
    },
    {
        question: "What is 'EBITDA' commonly used for?",
        options: ["Evaluating a company's profitability before taxes and depreciation", "Calculating employee expenses", "Setting executive bonuses", "Determining stock dividends"],
        answer: "Evaluating a company's profitability before taxes and depreciation",
        details: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization, providing insight into operational profitability."
    },
    {
        question: "What does 'liquidation' mean in a business context?",
        options: ["Selling off assets to pay creditors", "Acquiring new assets", "Increasing cash flow", "Expanding market share"],
        answer: "Selling off assets to pay creditors",
        details: "Liquidation is the process of selling a company's assets to settle debts, often occurring when a company faces insolvency."
    },
    {
        question: "What is a 'hostile takeover'?",
        options: ["Acquiring a company without the approval of its board", "A friendly acquisition", "A merger of two equal companies", "Issuing new shares in a company"],
        answer: "Acquiring a company without the approval of its board",
        details: "A hostile takeover occurs when one company acquires another against the wishes of the target company's management."
    },
    {
        question: "What is the purpose of 'due diligence' in M&A?",
        options: ["Evaluating all aspects of a target company", "Announcing the merger publicly", "Closing the acquisition", "Issuing new stock"],
        answer: "Evaluating all aspects of a target company",
        details: "Due diligence is the comprehensive appraisal of a target company before a merger or acquisition to assess its value and risks."
    },
    {
        question: "In finance, what does 'amortization' refer to?",
        options: ["The gradual repayment of a debt over time", "Issuing new stocks", "Increasing cash flow", "Merging two companies"],
        answer: "The gradual repayment of a debt over time",
        details: "Amortization is the process of paying off debt with a fixed repayment schedule in regular installments over a specified period."
    },
    {
        question: "What does 'equity financing' mean?",
        options: ["Raising capital by selling ownership shares", "Taking a loan from a bank", "Selling company assets", "Issuing debt securities"],
        answer: "Raising capital by selling ownership shares",
        details: "Equity financing is the process of raising capital by selling shares of the company to investors, providing them with ownership interest."
    },
    {
        question: "What is 'intellectual property' (IP)?",
        options: ["Legal rights to inventions, designs, and brands", "Physical assets owned by a company", "Shares issued to investors", "A company's financial records"],
        answer: "Legal rights to inventions, designs, and brands",
        details: "Intellectual property includes creations of the mind like inventions, symbols, and names, protected by law."
    },
    {
        question: "What does 'dilution' mean in terms of equity?",
        options: ["A reduction in ownership percentage for existing shareholders", "A decrease in company revenue", "An increase in share prices", "Selling company assets"],
        answer: "A reduction in ownership percentage for existing shareholders",
        details: "Dilution occurs when a company issues additional shares, reducing the ownership percentage of existing shareholders."
    },
    {
        question: "What is 'inventory turnover' a measure of?",
        options: ["How often a company sells and replaces its inventory", "Total sales in a year", "Stock price increase", "The number of new products launched"],
        answer: "How often a company sells and replaces its inventory",
        details: "Inventory turnover is calculated by dividing cost of goods sold by average inventory, indicating the efficiency of inventory management."
    },
    {
        question: "In business terms, what does 'marginal cost' refer to?",
        options: ["The cost to produce one additional unit of product", "The total production cost", "The marketing expense per unit", "The fixed overhead costs"],
        answer: "The cost to produce one additional unit of product",
        details: "Marginal cost is the additional cost incurred to produce one more unit, aiding in pricing and production decisions."
    },
    {
        question: "What is 'capital structure'?",
        options: ["The mix of debt and equity financing used by a company", "A company's financial assets", "The organization’s market share", "The board of directors' composition"],
        answer: "The mix of debt and equity financing used by a company",
        details: "Capital structure refers to the proportion of debt and equity a company uses to finance its operations and growth."
    },
    {
        question: "What does the term 'run rate' refer to in finance?",
        options: ["An extrapolation of current performance over a full year", "The interest rate on a loan", "The rate of inflation", "Annual employee turnover"],
        answer: "An extrapolation of current performance over a full year",
        details: "Run rate projects the future performance of a company by annualizing data from a shorter period."
    },
    {
        question: "In accounting, what does 'goodwill' refer to?",
        options: ["The intangible asset value of a company’s reputation", "Total company revenue", "Annual profits", "Employee satisfaction"],
        answer: "The intangible asset value of a company’s reputation",
        details: "Goodwill is an intangible asset reflecting the value of a company's brand reputation, customer base, and other non-physical assets."
    },
    {
        question: "What does 'accounts receivable' mean?",
        options: ["Money owed to a company by its customers", "The company's debts", "Employee salaries", "Shareholder dividends"],
        answer: "Money owed to a company by its customers",
        details: "Accounts receivable represents outstanding invoices or money owed by customers for goods or services provided."
    }
];

function displayBusinessEnglishTermResults() {
    clearInterval(timerInterval);
    businessEnglishTermsQuiz.innerHTML = `<h3>クイズ結果</h3>`;
    businessEnglishTermsTimer.innerHTML = '';
    businessEnglishTermsResult.innerHTML = `<p>あなたのスコアは ${businessEnglishTermScore} / ${businessEnglishTermQuestions.length} です。</p>`;
    businessEnglishTermsNext.style.display = 'none';
    businessEnglishTermsProgress.style.width = '100%';

    // ユーザーの回答結果を表示
    let resultHtml = '<ul class="result-list">';
    businessEnglishTermUserAnswers.forEach((answer, index) => {
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
    businessEnglishTermsQuiz.innerHTML += resultHtml;

    businessEnglishTermsQuiz.innerHTML += `<button class="return-btn" onclick="setActiveNav('home')">ホームに戻る</button>`;
}