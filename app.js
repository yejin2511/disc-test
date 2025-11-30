// DISC 진단 문항 데이터 (12개 문항)
// A = D (주도형), B = I (사교형), C = C (신중형), D = S (안정형)
const questions = [
    {
        id: 1,
        text: "회의 중 침묵이 길어질 때 나는?",
        options: [
            { key: "A", text: "답답함을 못 참고 먼저 결론이나 방향을 제시한다.", type: "D" },
            { key: "B", text: "분위기 전환을 위해 가벼운 농담이나 스몰토크를 던진다.", type: "I" },
            { key: "C", text: "내 논리와 자료가 맞는지 다시 한번 꼼꼼히 점검한다.", type: "C" },
            { key: "D", text: "다른 사람이 의견을 낼 때까지 차분히 기다려준다.", type: "S" }
        ]
    },
    {
        id: 2,
        text: "새로운 프로젝트 TF팀에 합류했을 때 우선순위는?",
        options: [
            { key: "A", text: "프로젝트의 목표 달성과 나의 권한 확인", type: "D" },
            { key: "B", text: "팀원들과의 친목 도모 및 즐거운 분위기 형성", type: "I" },
            { key: "C", text: "세부 일정, 리스크 요인, 업무 프로세스 분석", type: "C" },
            { key: "D", text: "기존 업무와의 조화 및 내 역할 파악", type: "S" }
        ]
    },
    {
        id: 3,
        text: "나를 가장 춤추게 하는 말은?",
        options: [
            { key: "A", text: "\"이건 김프로만 해결할 수 있어.\"", type: "D" },
            { key: "B", text: "\"김프로 덕분에 팀 분위기가 너무 좋아.\"", type: "I" },
            { key: "C", text: "\"역시 김프로 보고서는 논리적이고 빈틈이 없어.\"", type: "C" },
            { key: "D", text: "\"김프로는 항상 한결같아서 든든해.\"", type: "S" }
        ]
    },
    {
        id: 4,
        text: "업무 중 큰 스트레스를 받을 때 나의 모습은?",
        options: [
            { key: "A", text: "예민해지고 말투가 직설적이고 명령조로 변한다.", type: "D" },
            { key: "B", text: "말이 많아지거나 감정 표현이 격해진다.", type: "I" },
            { key: "C", text: "꼬치꼬치 따지거나 비판적이고 차가워진다.", type: "C" },
            { key: "D", text: "입을 다물고 혼자 삭히거나 위축된다.", type: "S" }
        ]
    },
    {
        id: 5,
        text: "'일 잘한다'는 평가를 듣기 위해 내가 추구하는 것은?",
        options: [
            { key: "A", text: "남들보다 빠른 속도와 압도적인 성과", type: "D" },
            { key: "B", text: "폭넓은 대인관계와 원활한 소통 능력", type: "I" },
            { key: "C", text: "실수 없는 완벽함과 논리적인 업무 처리", type: "C" },
            { key: "D", text: "성실함과 꾸준함, 그리고 신뢰감", type: "S" }
        ]
    },
    {
        id: 6,
        text: "누군가를 설득해야 할 때 나는 주로?",
        options: [
            { key: "A", text: "이 일이 가져올 이득과 핵심 결과를 강조한다.", type: "D" },
            { key: "B", text: "열정적인 태도와 공감대를 활용해 호소한다.", type: "I" },
            { key: "C", text: "객관적인 데이터와 구체적인 증거 자료를 제시한다.", type: "C" },
            { key: "D", text: "상대방의 입장을 충분히 듣고 배려하며 천천히 다가간다.", type: "S" }
        ]
    },
    {
        id: 7,
        text: "새로운 업무 툴(Tool) 도입이 결정되었을 때?",
        options: [
            { key: "A", text: "\"일단 써보자. 편하면 장땡이지.\" 바로 실행한다.", type: "D" },
            { key: "B", text: "\"오, 이거 재밌겠는데?\" 호기심을 보인다.", type: "I" },
            { key: "C", text: "\"보안이나 기능상 문제는 없나?\" 매뉴얼부터 분석한다.", type: "C" },
            { key: "D", text: "\"손에 익은 게 편한데...\" 적응하는 데 시간이 걸린다.", type: "S" }
        ]
    },
    {
        id: 8,
        text: "팀 내 의견 충돌 발생 시 나의 대처법은?",
        options: [
            { key: "A", text: "내 주장을 강하게 밀고 나가 관철시킨다.", type: "D" },
            { key: "B", text: "\"좋은 게 좋은 거지~\" 유머로 분위기를 푼다.", type: "I" },
            { key: "C", text: "규정과 원칙, 팩트를 근거로 시시비비를 가린다.", type: "C" },
            { key: "D", text: "양보하거나 다수결에 따르는 편이 마음 편하다.", type: "S" }
        ]
    },
    {
        id: 9,
        text: "업무 지시를 받을 때 선호하는 스타일은?",
        options: [
            { key: "A", text: "\"언제까지 이거 완료해.\" (목표와 기한 중심)", type: "D" },
            { key: "B", text: "\"이거 하면 진짜 멋질 거야!\" (기대감과 동기 부여)", type: "I" },
            { key: "C", text: "\"A는 B 방식으로 처리해 주세요.\" (구체적인 지침)", type: "C" },
            { key: "D", text: "\"천천히 이렇게 하시면 됩니다.\" (친절한 방법 안내)", type: "S" }
        ]
    },
    {
        id: 10,
        text: "점심 메뉴를 고를 때 나는?",
        options: [
            { key: "A", text: "\"오늘은 이거 먹자.\" 내가 먼저 결정한다.", type: "D" },
            { key: "B", text: "\"거기 핫하다던데!\" 새롭고 인기 있는 곳을 추천한다.", type: "I" },
            { key: "C", text: "\"가격이랑 리뷰 괜찮나?\" 정보를 따져보고 고른다.", type: "C" },
            { key: "D", text: "\"다들 뭐 드시나요?\" 대세에 따르거나 익숙한 곳을 간다.", type: "S" }
        ]
    },
    {
        id: 11,
        text: "목표 달성에 실패했을 때 나는?",
        options: [
            { key: "A", text: "\"다음엔 무조건 한다.\" 오기가 생겨 더 강하게 도전한다.", type: "D" },
            { key: "B", text: "\"아쉽지만 어쩔 수 없지!\" 긍정적으로 털어내려 한다.", type: "I" },
            { key: "C", text: "\"원인이 뭐지?\" 프로세스를 처음부터 복기하며 분석한다.", type: "C" },
            { key: "D", text: "\"나 때문에 팀에 피해가 갔나?\" 자책하며 걱정한다.", type: "S" }
        ]
    },
    {
        id: 12,
        text: "내가 생각하는 '최고의 팀'은?",
        options: [
            { key: "A", text: "성과 1등, 업계 최고의 실력을 갖춘 팀", type: "D" },
            { key: "B", text: "웃음이 끊이지 않고 단합이 잘 되는 팀", type: "I" },
            { key: "C", text: "시스템이 체계적이고 업무 분장이 확실한 팀", type: "C" },
            { key: "D", text: "서로 돕고 배려하며 트러블이 없는 팀", type: "S" }
        ]
    }
];

// DISC 유형별 기본 정보
const discTypeInfo = {
    D: {
        name: "주도형 (Dominance)",
        shortName: "주도형",
        color: "#C62828",
        compatibleTypes: ["I", "S"]
    },
    I: {
        name: "사교형 (Influence)",
        shortName: "사교형",
        color: "#E65100",
        compatibleTypes: ["D", "S"]
    },
    S: {
        name: "안정형 (Steadiness)",
        shortName: "안정형",
        color: "#2E7D32",
        compatibleTypes: ["I", "C"]
    },
    C: {
        name: "신중형 (Conscientiousness)",
        shortName: "신중형",
        color: "#1565C0",
        compatibleTypes: ["S", "D"]
    }
};

// 하위 세부 유형 정보
const subTypeInfo = {
    // D 주도형 하위 유형
    "Di": {
        name: "영향력 있는 주도형",
        description: "추진력과 사교성을 겸비한 리더. 목표 달성을 위해 적극적으로 사람들을 이끌며 영향력을 발휘합니다."
    },
    "Dc": {
        name: "분석적 주도형",
        description: "결단력과 정확성을 겸비한 전략가. 데이터 기반의 빠른 의사결정으로 목표를 달성합니다."
    },
    "Ds": {
        name: "안정적 주도형",
        description: "추진력과 배려심을 겸비한 리더. 팀의 안정을 유지하면서도 목표를 향해 나아갑니다."
    },
    // I 사교형 하위 유형
    "Id": {
        name: "추진력 있는 사교형",
        description: "열정과 결단력을 겸비한 소통가. 사람들을 동기부여하며 빠르게 결과를 만들어냅니다."
    },
    "Ic": {
        name: "분석적 사교형",
        description: "친화력과 논리력을 겸비한 설득가. 데이터와 스토리를 결합해 효과적으로 소통합니다."
    },
    "Is": {
        name: "안정적 사교형",
        description: "따뜻함과 배려를 겸비한 조율자. 팀의 분위기를 살리며 조화로운 관계를 만듭니다."
    },
    // S 안정형 하위 유형
    "Sd": {
        name: "추진력 있는 안정형",
        description: "인내심과 결단력을 겸비한 실행가. 안정적인 기반 위에서 목표를 향해 꾸준히 나아갑니다."
    },
    "Si": {
        name: "사교적 안정형",
        description: "배려심과 친화력을 겸비한 지원자. 팀원들을 따뜻하게 지원하며 조화를 이끕니다."
    },
    "Sc": {
        name: "분석적 안정형",
        description: "안정성과 정확성을 겸비한 전문가. 체계적이고 꼼꼼하게 업무를 수행합니다."
    },
    // C 신중형 하위 유형
    "Cd": {
        name: "추진력 있는 신중형",
        description: "분석력과 결단력을 겸비한 전략가. 정확한 데이터를 바탕으로 빠르게 실행합니다."
    },
    "Ci": {
        name: "사교적 신중형",
        description: "논리력과 소통력을 겸비한 분석가. 복잡한 내용을 명확하게 설명하고 공유합니다."
    },
    "Cs": {
        name: "안정적 신중형",
        description: "정확성과 일관성을 겸비한 완벽주의자. 체계적이고 안정적으로 높은 품질을 유지합니다."
    }
};

// Gemini API 설정
const GEMINI_API_KEY = "AIzaSyA0eWHTn8K37SzKIAD9KciaIlYL6GupRp4";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

// 상태 관리
let currentUser = null;
let answers = {};

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const testScreen = document.getElementById('test-screen');
const resultScreen = document.getElementById('result-screen');
const loginForm = document.getElementById('login-form');
const testForm = document.getElementById('test-form');
const submitTestBtn = document.getElementById('submit-test');
const retryTestBtn = document.getElementById('retry-test');
const loadingOverlay = document.getElementById('loading-overlay');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');

// 화면 전환 함수
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    // 강제로 상단으로 스크롤
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// 로그인 처리
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const department = document.getElementById('department').value.trim();
    const name = document.getElementById('name').value.trim();
    
    if (!department || !name) {
        alert('부서명과 이름을 모두 입력해주세요.');
        return;
    }
    
    currentUser = { department, name };
    answers = {};
    
    renderQuestions();
    showScreen('test-screen');
});

// 문항 렌더링
function renderQuestions() {
    testForm.innerHTML = questions.map((q, index) => `
        <div class="question-card" id="question-${q.id}">
            <span class="question-number">문항 ${q.id}</span>
            <p class="question-text">${q.text}</p>
            <div class="options-list">
                ${q.options.map(opt => `
                    <div class="option-item">
                        <input type="radio" 
                               id="q${q.id}_${opt.key}" 
                               name="q${q.id}" 
                               value="${opt.key}"
                               data-type="${opt.type}">
                        <label class="option-label" for="q${q.id}_${opt.key}">
                            <span class="option-marker">${opt.key}</span>
                            <span class="option-text">${opt.text}</span>
                        </label>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    // 선택 이벤트 리스너 추가
    testForm.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', handleAnswerChange);
    });
    
    updateProgress();
}

// 답변 변경 처리
function handleAnswerChange(e) {
    const questionId = e.target.name;
    const selectedKey = e.target.value;
    const selectedType = e.target.dataset.type;
    
    answers[questionId] = { key: selectedKey, type: selectedType };
    
    // 카드 스타일 업데이트
    const card = document.getElementById(`question-${questionId.replace('q', '')}`);
    card.classList.add('answered');
    
    updateProgress();
}

// 진행률 업데이트
function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const totalCount = questions.length;
    const percentage = (answeredCount / totalCount) * 100;
    
    progressText.textContent = answeredCount;
    progressFill.style.width = `${percentage}%`;
    
    submitTestBtn.disabled = answeredCount < totalCount;
}

// DISC 유형 및 하위 유형 계산
function calculateDiscType() {
    const counts = { D: 0, I: 0, S: 0, C: 0 };
    
    Object.values(answers).forEach(answer => {
        counts[answer.type]++;
    });
    
    // 점수 순으로 정렬
    const sortedTypes = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);
    
    const primaryType = sortedTypes[0][0];
    const secondaryType = sortedTypes[1][0];
    
    // 하위 세부 유형 결정 (첫 번째 + 두 번째 소문자)
    const subType = primaryType + secondaryType.toLowerCase();
    
    // 백분율 계산
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const percentages = {};
    for (const [type, count] of Object.entries(counts)) {
        percentages[type] = Math.round((count / total) * 100);
    }
    
    return { 
        primaryType, 
        secondaryType, 
        subType, 
        counts, 
        percentages,
        sortedTypes 
    };
}

// Gemini API 호출 (심화 리포트)
async function generateResultWithGemini(result) {
    const { primaryType, secondaryType, subType, counts, percentages } = result;
    const subTypeData = subTypeInfo[subType];
    
    const prompt = `
당신은 DISC 성격 유형 전문가입니다. 다음 DISC 진단 결과를 바탕으로 심층적인 분석 리포트를 제공해주세요.

진단 결과:
- 주요 유형: ${primaryType} (${discTypeInfo[primaryType].name})
- 보조 유형: ${secondaryType} (${discTypeInfo[secondaryType].name})
- 하위 세부 유형: ${subType} (${subTypeData.name})
- 점수 분포: D=${counts.D}점(${percentages.D}%), I=${counts.I}점(${percentages.I}%), S=${counts.S}점(${percentages.S}%), C=${counts.C}점(${percentages.C}%)
- 총 문항 수: 28문항

하위 세부 유형 기본 설명: ${subTypeData.description}

다음 형식으로 JSON 응답을 제공해주세요 (JSON만 반환, 다른 텍스트 없이):
{
    "summary": "이 사람의 전체적인 업무 성격을 3-4줄로 요약. 주요 유형과 하위 유형의 특성을 통합해서 설명",
    "subTypeAnalysis": "하위 세부 유형(${subType})에 대한 상세 분석 3-4줄. ${primaryType}와 ${secondaryType}의 조합이 만들어내는 독특한 특성 설명",
    "workStyle": "업무 스타일에 대한 상세 설명 4-5줄. 일하는 방식, 의사결정 스타일, 커뮤니케이션 특성 포함",
    "strengths": ["강점1 - 설명", "강점2 - 설명", "강점3 - 설명", "강점4 - 설명", "강점5 - 설명"],
    "cautions": ["주의점1 - 구체적 조언", "주의점2 - 구체적 조언", "주의점3 - 구체적 조언"],
    "idealEnvironment": "이 유형이 가장 잘 맞는 업무 환경과 역할 2-3줄",
    "communicationTips": "이 유형과 효과적으로 소통하는 방법 2-3줄",
    "compatibleTypes": [
        {"type": "D 또는 I 또는 S 또는 C 중 하나", "reason": "협업이 잘 맞는 이유 1줄"}
    ],
    "growthAdvice": "성장을 위한 조언 2-3줄"
}

응답은 한국어로, 업무 환경에 맞게 구체적이고 실용적으로 작성해주세요. 긍정적이고 건설적인 톤을 유지하되, 실질적인 인사이트를 제공하세요.
`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2048
                }
            })
        });

        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.status}`);
        }

        const data = await response.json();
        const textResponse = data.candidates[0].content.parts[0].text;
        
        // JSON 파싱 (코드블록 제거)
        const jsonStr = textResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(jsonStr);
    } catch (error) {
        console.error('Gemini API 오류:', error);
        // 폴백 결과 반환
        return getFallbackResult(primaryType, secondaryType, subType);
    }
}

// 폴백 결과 (API 실패 시)
function getFallbackResult(primaryType, secondaryType, subType) {
    const subTypeData = subTypeInfo[subType];
    
    const fallbacks = {
        D: {
            summary: "결단력 있고 추진력이 강한 리더형입니다. 목표 달성을 위해 빠르게 행동하며, 도전적인 상황에서 능력을 발휘합니다. 직접적인 의사소통을 선호하고 결과 중심적으로 일합니다.",
            workStyle: "목표 지향적이며 빠른 의사결정을 선호합니다. 큰 그림을 먼저 파악하고 효율적으로 업무를 추진합니다. 권한과 책임을 명확히 하는 것을 좋아하며, 변화와 도전을 두려워하지 않습니다.",
            strengths: ["뛰어난 추진력과 결단력", "목표 달성에 대한 강한 의지", "위기 상황에서의 빠른 대응력", "리더십과 영향력", "효율적인 업무 처리"],
            cautions: ["타인의 의견을 충분히 경청하기", "세부 사항에도 주의를 기울이기", "팀원들의 감정을 배려하기"],
            idealEnvironment: "빠른 의사결정이 필요하고 도전적인 목표가 있는 환경에서 최고의 성과를 냅니다. 리더 역할이나 프로젝트 관리 업무에 적합합니다.",
            communicationTips: "핵심을 먼저 전달하고, 결론 중심으로 소통하세요. 구체적인 목표와 기대 결과를 명확히 하면 효과적입니다.",
            growthAdvice: "경청의 기술을 개발하고, 팀원들의 의견을 수렴하는 시간을 갖는 것이 좋습니다. 완벽한 실행보다 팀의 성장에도 관심을 기울여보세요."
        },
        I: {
            summary: "열정적이고 사교적인 소통의 달인입니다. 긍정적인 에너지로 팀 분위기를 이끌며, 새로운 아이디어를 제시하는 것을 좋아합니다. 사람들과의 관계를 중요시합니다.",
            workStyle: "관계 중심적이며 협력적인 환경에서 최고의 성과를 냅니다. 창의적인 아이디어를 내고 팀원들을 동기부여하는 역할을 잘 수행합니다. 유연하고 낙관적인 태도로 업무에 임합니다.",
            strengths: ["뛰어난 커뮤니케이션 능력", "긍정적인 에너지와 열정", "창의적인 아이디어 발상", "팀 분위기 조성 능력", "네트워킹 역량"],
            cautions: ["세부 계획 수립에 더 신경쓰기", "마감 시간 관리하기", "객관적 데이터 기반 의사결정하기"],
            idealEnvironment: "자유로운 소통이 가능하고 창의성을 발휘할 수 있는 환경에서 빛납니다. 대인 관계나 영업, 마케팅 업무에 적합합니다.",
            communicationTips: "열린 대화와 브레인스토밍을 좋아합니다. 긍정적인 피드백과 함께 구체적인 가이드라인을 제시하면 효과적입니다.",
            growthAdvice: "아이디어를 실행으로 옮기는 구체적인 계획을 세워보세요. 디테일에 대한 관심을 높이면 더 큰 성과를 만들 수 있습니다."
        },
        S: {
            summary: "차분하고 신뢰할 수 있는 팀의 든든한 지원군입니다. 안정적인 환경에서 꾸준히 성과를 내며, 팀원들을 세심하게 배려합니다. 협력과 조화를 중요시합니다.",
            workStyle: "팀워크 중심적이며 안정적인 업무 환경을 선호합니다. 변화보다는 일관성을 추구하고, 팀원들 간의 조화를 위해 노력합니다. 인내심이 강하고 꾸준하게 업무를 수행합니다.",
            strengths: ["뛰어난 팀워크와 협력 능력", "차분하고 안정적인 업무 처리", "강한 인내심과 끈기", "타인에 대한 세심한 배려", "신뢰받는 일관성"],
            cautions: ["변화에 좀 더 유연하게 대응하기", "자신의 의견을 적극적으로 표현하기", "새로운 도전을 두려워하지 않기"],
            idealEnvironment: "안정적이고 협력적인 팀 환경에서 최고의 성과를 냅니다. 지원 업무나 운영, 고객 서비스 역할에 적합합니다.",
            communicationTips: "충분한 시간을 갖고 차분하게 대화하세요. 급격한 변화보다는 단계적인 접근이 효과적입니다.",
            growthAdvice: "자신의 의견을 표현하는 연습을 해보세요. 작은 변화부터 시도하며 적응력을 높이면 성장할 수 있습니다."
        },
        C: {
            summary: "분석적이고 정확성을 추구하는 전문가형입니다. 데이터와 논리를 기반으로 신중하게 판단하며, 높은 품질의 결과물을 만들어냅니다. 체계적인 접근 방식을 선호합니다.",
            workStyle: "절차 중심적이며 정확성을 중요시합니다. 충분한 정보와 분석을 바탕으로 의사결정을 하며, 세부 사항까지 꼼꼼하게 확인합니다. 품질과 전문성에 높은 기준을 적용합니다.",
            strengths: ["뛰어난 분석력과 논리적 사고", "높은 정확성과 품질 추구", "체계적인 업무 처리 능력", "전문 지식에 대한 깊은 이해", "객관적 판단력"],
            cautions: ["완벽주의로 인한 지연 주의하기", "큰 그림도 함께 보기", "팀원들과 더 자주 소통하기"],
            idealEnvironment: "정확성과 전문성이 요구되는 환경에서 빛납니다. 분석, 연구, 품질 관리 업무에 적합합니다.",
            communicationTips: "데이터와 근거를 바탕으로 소통하세요. 충분한 검토 시간을 제공하고, 논리적인 설명을 곁들이면 효과적입니다.",
            growthAdvice: "때로는 80%의 완성도로도 먼저 실행해보세요. 소통을 통해 다양한 관점을 수용하면 더 나은 결과를 만들 수 있습니다."
        }
    };
    
    const base = fallbacks[primaryType];
    
    return {
        ...base,
        subTypeAnalysis: subTypeData.description + ` ${primaryType}의 핵심 역량에 ${secondaryType}의 특성이 더해져 더욱 균형 잡힌 업무 스타일을 보여줍니다.`,
        compatibleTypes: [
            { type: discTypeInfo[primaryType].compatibleTypes[0], reason: `${discTypeInfo[discTypeInfo[primaryType].compatibleTypes[0]].shortName}의 특성이 당신의 부족한 부분을 보완해줍니다` },
            { type: discTypeInfo[primaryType].compatibleTypes[1], reason: `${discTypeInfo[discTypeInfo[primaryType].compatibleTypes[1]].shortName}과의 협업이 시너지를 만듭니다` }
        ]
    };
}

// 팀원 중 해당 유형 찾기
function findTeammatesWithType(targetType) {
    const records = JSON.parse(localStorage.getItem('discRecords') || '[]');
    const teammates = records
        .filter(r => r.resultType === targetType && r.name !== currentUser.name)
        .map(r => r.name);
    return [...new Set(teammates)]; // 중복 제거
}

// 결과 화면 렌더링
function renderResult(discResult, analysisResult) {
    const { primaryType, secondaryType, subType, counts, percentages, sortedTypes } = discResult;
    const typeInfo = discTypeInfo[primaryType];
    const subTypeData = subTypeInfo[subType];
    const resultContent = document.getElementById('result-content');
    
    resultContent.innerHTML = `
        <div class="result-type-card">
            <span class="result-type-badge">${currentUser.name}님의 DISC 유형</span>
            <div class="result-type-letter">${primaryType}</div>
            <div class="result-type-name">${typeInfo.name}</div>
            <div class="result-subtype">
                <span class="subtype-badge">${subType}</span>
                <span class="subtype-name">${subTypeData.name}</span>
            </div>
            <p class="result-type-summary">${analysisResult.summary}</p>
        </div>
        
        <div class="result-section score-distribution">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                </svg>
                DISC 점수 분포
            </h3>
            <div class="result-section-content">
                <div class="score-bars">
                    ${sortedTypes.map(([type, count]) => `
                        <div class="score-bar-item">
                            <div class="score-bar-label">
                                <span class="type-badge type-${type}">${type}</span>
                                <span class="type-name">${discTypeInfo[type].shortName}</span>
                                <span class="score-value">${percentages[type]}%</span>
                            </div>
                            <div class="score-bar-track">
                                <div class="score-bar-fill type-${type}" style="width: ${percentages[type]}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="result-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                </svg>
                하위 유형 분석: ${subType}
            </h3>
            <div class="result-section-content">
                <p>${analysisResult.subTypeAnalysis}</p>
            </div>
        </div>
        
        <div class="result-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 7h-9M14 17H5M17 17a3 3 0 100-6 3 3 0 000 6zM7 7a3 3 0 100-6 3 3 0 000 6z"/>
                </svg>
                업무 스타일
            </h3>
            <div class="result-section-content">
                <p>${analysisResult.workStyle}</p>
            </div>
        </div>
        
        <div class="result-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                강점
            </h3>
            <div class="result-section-content">
                <ul>
                    ${analysisResult.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="result-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                주의해야 할 점
            </h3>
            <div class="result-section-content">
                <ul>
                    ${analysisResult.cautions.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="result-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                이상적인 업무 환경
            </h3>
            <div class="result-section-content">
                <p>${analysisResult.idealEnvironment}</p>
            </div>
        </div>
        
        <div class="result-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                커뮤니케이션 팁
            </h3>
            <div class="result-section-content">
                <p>${analysisResult.communicationTips}</p>
            </div>
        </div>
        
        <div class="result-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
                나와 잘 맞는 유형
            </h3>
            <div class="result-section-content">
                ${(() => {
                    const ct = analysisResult.compatibleTypes[0];
                    // 유효한 DISC 유형인지 확인하고 보정
                    const validTypes = ['D', 'I', 'S', 'C'];
                    const compatibleType = validTypes.includes(ct.type) ? ct.type : discTypeInfo[primaryType].compatibleTypes[0];
                    const teammates = findTeammatesWithType(compatibleType);
                    return `
                    <div class="compatible-type-row">
                        <div class="compatible-type-main">
                            <span class="type-badge type-${compatibleType}">${compatibleType}</span>
                            <div class="compatible-info">
                                <span class="compatible-subtype">${discTypeInfo[compatibleType].name}</span>
                                <span class="compatible-reason">${ct.reason}</span>
                            </div>
                        </div>
                        ${teammates.length > 0 ? `
                        <div class="teammate-inline">
                            <span class="teammate-label-small">팀원 중 해당 유형</span>
                            <div class="teammate-names-small">
                                ${teammates.map(name => `<span class="teammate-name-small">${name}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                    `;
                })()}
            </div>
        </div>
        
        <div class="result-section growth-section">
            <h3 class="result-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                성장을 위한 조언
            </h3>
            <div class="result-section-content">
                <p>${analysisResult.growthAdvice}</p>
            </div>
        </div>
        
        <div class="disc-quadrant-section">
            <h3 class="disc-quadrant-title">📊 DISC 대표 유형 이해하기</h3>
            <div class="disc-quadrant-container">
                <div class="quadrant-axis quadrant-axis-vertical"></div>
                <div class="quadrant-axis quadrant-axis-horizontal"></div>
                <span class="quadrant-label quadrant-label-top">빠르다 (외향성)</span>
                <span class="quadrant-label quadrant-label-bottom">느리다 (내향성)</span>
                <span class="quadrant-label quadrant-label-left">과업 중심</span>
                <span class="quadrant-label quadrant-label-right">사람 중심</span>
                
                <div class="quadrant-grid">
                    <div class="quadrant-box quadrant-box-D">
                        <div class="quadrant-header">
                            <span class="quadrant-emoji">🔶</span>
                            <span class="quadrant-type-name">D - 주도형</span>
                        </div>
                        <div class="quadrant-keywords">목표, 속도, 결단</div>
                        <ul class="quadrant-traits">
                            <li>빠르게 결정함</li>
                            <li>문제 해결에 강함</li>
                            <li>도전 좋아함</li>
                            <li>상황을 주도함</li>
                        </ul>
                    </div>
                    
                    <div class="quadrant-box quadrant-box-I">
                        <div class="quadrant-header">
                            <span class="quadrant-emoji">🟩</span>
                            <span class="quadrant-type-name">I - 사교형</span>
                        </div>
                        <div class="quadrant-keywords">소통, 에너지, 긍정</div>
                        <ul class="quadrant-traits">
                            <li>활발하게 소통함</li>
                            <li>사람들과 교류 즐김</li>
                            <li>분위기 형성에 능함</li>
                            <li>설득·동기부여에 강함</li>
                        </ul>
                    </div>
                    
                    <div class="quadrant-box quadrant-box-C">
                        <div class="quadrant-header">
                            <span class="quadrant-emoji">🟪</span>
                            <span class="quadrant-type-name">C - 신중형</span>
                        </div>
                        <div class="quadrant-keywords">정확, 분석, 기준</div>
                        <ul class="quadrant-traits">
                            <li>꼼꼼하고 체계적</li>
                            <li>규칙·기준 중시</li>
                            <li>자료·정보 분석 선호</li>
                            <li>완성도에 집중</li>
                        </ul>
                    </div>
                    
                    <div class="quadrant-box quadrant-box-S">
                        <div class="quadrant-header">
                            <span class="quadrant-emoji">🟦</span>
                            <span class="quadrant-type-name">S - 안정형</span>
                        </div>
                        <div class="quadrant-keywords">안정, 협력, 배려</div>
                        <ul class="quadrant-traits">
                            <li>차분하고 신뢰감 줌</li>
                            <li>경청을 잘함</li>
                            <li>팀 조화 중시</li>
                            <li>꾸준하고 성실함</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 데이터 저장
function saveResult(discResult, analysisResult) {
    const { primaryType, secondaryType, subType, counts, percentages } = discResult;
    
    const record = {
        id: Date.now().toString(),
        name: currentUser.name,
        department: currentUser.department,
        answers: answers,
        resultType: primaryType,
        subType: subType,
        resultCounts: counts,
        resultPercentages: percentages,
        resultSummary: `${subTypeInfo[subType].name} - ${analysisResult.summary.substring(0, 40)}...`,
        createdAt: new Date().toISOString()
    };
    
    // LocalStorage에 저장
    const records = JSON.parse(localStorage.getItem('discRecords') || '[]');
    records.push(record);
    localStorage.setItem('discRecords', JSON.stringify(records));
    
    return record;
}

// 결과 제출 처리
submitTestBtn.addEventListener('click', async () => {
    if (Object.keys(answers).length < questions.length) {
        alert('모든 문항에 답변해주세요.');
        return;
    }
    
    // 로딩 표시
    loadingOverlay.classList.add('active');
    
    try {
        // DISC 유형 계산
        const discResult = calculateDiscType();
        
        // Gemini API로 상세 분석 생성
        const analysisResult = await generateResultWithGemini(discResult);
        
        // 결과 저장
        saveResult(discResult, analysisResult);
        
        // 결과 화면 렌더링
        renderResult(discResult, analysisResult);
        
        // 결과 화면으로 이동
        showScreen('result-screen');
    } catch (error) {
        console.error('결과 처리 오류:', error);
        alert('결과 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        loadingOverlay.classList.remove('active');
    }
});

// 다시 테스트하기
retryTestBtn.addEventListener('click', () => {
    currentUser = null;
    answers = {};
    document.getElementById('department').value = '';
    document.getElementById('name').value = '';
    showScreen('login-screen');
});

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    showScreen('login-screen');
});
