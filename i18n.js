/* ============================================================
   OneTap i18n · KO/EN runtime translation (v1)
   - ?lang=en|ko  >  localStorage 'onetap_lang'  >  navigator.language
   - DOM text and attributes are translated in place and restored on switch.
   - Elements added later by app.js are translated by a MutationObserver.
   - Missing keys are reported to console as "I18N_MISS: <korean>".
   ============================================================ */
(function (root, doc) {
  'use strict';

  var LANG_KEY = 'onetap_lang';
  var COMMON = /*__COMMON__*/ {"닫기":"Close","취소":"Cancel","저장":"Save","저장됨":"Saved","삭제":"Delete","복사":"Copy","복사됨":"Copied","다운로드":"Download","내려받기":"Download","공유":"Share","인쇄":"Print","초기화":"Reset","다시 시도":"Try again","불러오기":"Load","내보내기":"Export","적용":"Apply","추가":"Add","편집":"Edit","수정":"Edit","보기":"View","미리보기":"Preview","설정":"Settings","도움말":"Help","사용법":"Guide","예시":"Example","샘플":"Sample","무료":"Free","유료":"Paid","개인정보":"Privacy","개인정보 처리방침":"Privacy policy","개인정보 처리 안내":"Privacy notice","이용약관":"Terms","홈":"Home","뒤로":"Back","다음":"Next","이전":"Previous","확인":"OK","검색":"Search","필터":"Filter","전체":"All","없음":"None","준비 중":"Coming soon","준비 중입니다":"Coming soon","로딩 중":"Loading","불러오는 중":"Loading","처리 중":"Working","빈칸":"Blank","필수":"Required","선택":"Optional","이름":"Name","제목":"Title","날짜":"Date","시간":"Time","메모":"Note","상태":"Status","결과":"Result","요약":"Summary","상세":"Details","언어":"Language","한국어":"Korean","영어":"English","복사하기":"Copy","링크 복사":"Copy link","전체 복사":"Copy all","다크 모드로 전환":"Switch to dark mode","라이트 모드로 전환":"Switch to light mode","테마 전환":"Toggle theme","라이트/다크":"Light / dark","다크/라이트":"Dark / light","새 탭에서 보기":"Open in new tab","새 창":"New window","본문으로 건너뛰기":"Skip to content","본문으로 바로가기":"Skip to content","맨 위로":"Back to top","더 보기":"Show more","접기":"Collapse","펼치기":"Expand","자주 묻는 질문":"Frequently asked questions","이 브라우저에만 저장됩니다":"Saved only in this browser","이 브라우저에만 저장됩니다 · 서버 전송 0":"Saved only in this browser · zero uploads","서버 전송 없음":"No upload","서버 업로드 없음":"No server upload","100% 브라우저 처리":"100% in-browser","브라우저에서 처리":"Processed in your browser","파일은 서버로 전송되지 않습니다":"Files never leave your device","파일이 서버로 전송되지 않습니다":"Files never leave your device","붙여넣은 코드는 서버로 전송되지 않습니다":"Pasted code never leaves your device"};
  var APP = /*__DICT__*/ {"1인사업자 부가세·종소세·순수익 계산기 · 2026년 세법 기준":"Solo Business VAT, Income Tax & Net Profit Calculator · 2026 Korean tax rules","간이과세·일반과세 부가세, 3.3% 프리랜서 종합소득세 환급액, 월별 고정비를 반영한 실제 순수익과 분기별 세금 통장 예치액을 10초 만에 계산합니다. 서버 전송 0건, 브라우저 로컬 계산.":"Work out simplified and standard VAT, a freelancer's 3.3% income tax refund, real monthly net profit after fixed costs and how much to set aside for tax each quarter — in seconds. Nothing sent to a server; everything runs in your browser.","1인사업자 부가세·종소세·순수익 계산기":"Solo Business Tax & Net Profit Calculator","간이·일반 부가세 비교, 3.3% 프리랜서 종소세 환급액, 고정비를 반영한 이번 달 순수익과 분기 예치 계획을 한 화면에서 계산합니다. 서버 전송 0건.":"Compare simplified and standard VAT, see a freelancer's 3.3% income tax refund, and work out this month's net profit after fixed costs with a quarterly set-aside plan — all on one screen. Nothing sent to a server.","주요 섹션":"Main sections","2026년 세법 핵심 숫자":"2026 key tax figures","계산 모드 선택":"Choose a calculation mode","1인사업자 세금·순수익 계산기는 입력값을 서버로 보내지 않습니다. 무엇을 어디에 저장하고 무엇을 수집하지 않는지 안내합니다.":"The solo business tax and net profit calculator never sends your inputs to a server. This page explains what is stored, where, and what is not collected.","세금계산서":"Tax Invoice","1인사업자 세금·순수익":"Solo business tax & net profit","계산기":"Calculator","적용 기준":"Rules applied","세금 일정":"Tax calendar","서버 전송 0건":"No uploads","2026년 세법 기준":"2026 tax rules","A4 PDF로 저장":"Save as A4 PDF","부가세 · 종합소득세 · 진짜 순수익":"VAT · income tax · real net profit","본문으로 건너뛰기":"Skip to content","간이과세 기준":"Simplified VAT threshold","1억 400만원":"₩104,000,000","납부면제":"Payment exemption","3.3% 원천징수 정산":"3.3% withholding settlement","입력값은 이 기기에만":"Inputs stay on this device","브라우저 로컬 계산":"Calculated locally in your browser","간이과세 적용 기준":"Simplified VAT applies below","직전 연도 공급대가 미만":"prior-year supply value","납부의무 면제":"Payment exempt below","공급대가 미만":"supply value","종합소득세":"Income tax","8구간 누진":"8 progressive brackets","사업소득 원천징수":"Business income withheld","소득세 3% + 지방 0.3%":"3% income tax + 0.3% local","부가세 비교":"VAT comparison","간이 vs 일반":"simplified vs standard","3.3% 종소세":"3.3% income tax","5월 환급·추가납부":"May refund or extra payment","월 순수익":"Monthly net profit","세금 통장 적립액":"tax account set-aside","간이과세자 vs 일반과세자":"Simplified vs standard VAT taxpayer","직전 연도 공급대가와 매입을 넣으면 이번 부가세를 두 유형으로 나란히 계산합니다. 간이과세는 업종별 부가가치율을 곱해 계산합니다.":"Enter last year's supply value and purchases to see this period's VAT under both types side by side. Simplified VAT multiplies by the value-added rate for your industry.","연 단위":"per year","업종":"Industry","간이과세 부가가치율":"simplified VAT value-added rate","소매업 · 음식점업 (15%)":"Retail · restaurants (15%)","제조업 · 농림어업 · 소화물 전문 운송업 (20%)":"Manufacturing · farming, forestry, fishing · courier transport (20%)","숙박업 (25%)":"Accommodation (25%)","건설 · 운수창고 · 정보통신 · 기타 서비스업 (30%)":"Construction · transport and warehousing · IT · other services (30%)","부동산임대 · 전문과학기술 · 금융보험 (40%)":"Real-estate leasing · professional and technical · finance and insurance (40%)","부가가치율 15% → 매출의 1.5%를 부가세로 냅니다.":"At a 15% value-added rate, VAT is 1.5% of sales.","연 매출":"Annual revenue","부가세 포함":"VAT included","카드·현금·배달앱 매출을 모두 더한 공급대가":"Supply value: card, cash and delivery-app sales combined","연 매입":"Annual purchases","세금계산서·카드로 받은 매입":"Purchases backed by tax invoices or cards","카드·현금영수증 매출":"Card and cash-receipt sales","선택":"Optional","발행세액공제 대상 결제금액":"Payment amount eligible for the issue credit","세액공제 반영":"Apply tax credit","카드·현금영수증 발행세액공제":"Card and cash-receipt issue credit","(연 1,000만원 한도, 2026.12.31까지)":"(₩10M a year cap, until 2026-12-31)","부가세 예상액":"Estimated VAT","단위: 원 · 부가세 포함 금액 기준":"In KRW · VAT-inclusive amounts","일반과세자":"Standard taxpayer","납부세액":"VAT payable","매출세액":"Output VAT","매입세액 공제":"Input VAT credit","카드 발행세액공제":"Card issue credit","유리":"Better","간이과세자":"Simplified taxpayer","매출 기준 세액":"VAT on sales","매입 공제 (0.5%)":"Purchase credit (0.5%)","계산 중…":"Calculating…","3.3% 프리랜서 종합소득세":"3.3% freelancer income tax","받을 때 3.3%가 떼인 사업소득이 있다면, 5월 신고 때 돌려받을 돈인지 더 낼 돈인지 미리 계산합니다.":"If 3.3% was withheld from your business income, work out now whether the May return brings a refund or a further payment.","연간 총수입":"Annual gross income","3.3% 떼기 전":"before 3.3% withholding","원천징수 전, 세금계산서·용역 대금으로 받은 총액":"Total received for invoices and services, before withholding","경비 계산":"Expenses method","단순경비율":"Simplified expense rate","실제 경비":"Actual expenses","2025년 귀속 단순경비율":"2025 simplified expense rate","소프트웨어 프리랜서 (940926)":"Software freelancer (940926)","컴퓨터프로그래머 (940909)":"Computer programmer (940909)","1인미디어 콘텐츠창작자 (940306)":"Solo media content creator (940306)","작가 (940100)":"Writer (940100)","학원강사 · 재단사 (940903)":"Academy instructor · tailor (940903)","전문디자인 (749916)":"Professional design (749916)","보험설계사 (940906)":"Insurance agent (940906)","퀵서비스 배달원 (940918)":"Quick-service courier (940918)","직접 입력":"Enter manually","기본율 64.4% · 연 4,000만원 초과분은 50.2%":"Base rate 64.4% · 50.2% on income above ₩40M","4,000만원 초과분":"Income above ₩40M","연간 실제 경비":"Annual actual expenses","장부·증빙 기준":"books and receipts","재료비·임차료·인건비·통신비·건강보험료 등 사업 관련 지출":"Materials, rent, payroll, telecoms, health premiums and other business costs","부양가족 수":"Dependants","본인 포함":"including yourself","1인당 기본공제 150만원":"₩1.5M basic deduction each","국민연금":"National pension","연간 본인 부담":"your annual contribution","지역가입자 9.5%로 자동 추정":"estimated at 9.5% for local subscribers","노란우산공제":"Yellow Umbrella mutual aid","연 납입액":"annual contribution","소득구간별 한도 200만~600만원":"cap ₩2M–₩6M by income band","기타 소득공제":"Other income deductions","연간":"per year","청약저축·주택자금·연금보험료 등":"housing subscription savings, home loans, pension premiums…","기타 세액공제":"Other tax credits","없으면 표준세액공제 7만원 자동 적용":"if none, the ₩70,000 standard credit applies","기납부 세액":"Tax already paid","3.3% 원천징수":"3.3% withheld","총수입의 3.3%로 자동 계산":"calculated as 3.3% of gross income","성실사업자 요건 해당 → 표준세액공제":"Sincere-business conditions met → standard credit","12만원":"₩120,000","사업용계좌 신고 · 장부 신고 · 카드·현금영수증 가맹점. 해당하지 않으면 7만원":"Business account, bookkeeping, card/cash-receipt merchant. Otherwise ₩70,000","5월 종합소득세 정산":"May income tax settlement","소득세 + 개인지방소득세":"income tax + local income tax","5월에 돌려받을 돈":"Refund due in May","실제 부담 세액":"Actual tax you bear","실효세율":"Effective rate","원천징수 3.3%와 비교":"compare with the 3.3% withheld","총수입 대비 세 부담":"tax as a share of gross income","원천징수 3.3%":"3.3% withheld","필요경비":"Necessary expenses","사업소득금액":"Business income","소득공제 합계":"Total income deductions","과세표준":"Tax base","산출세액":"Tax computed","세액공제":"Tax credits","결정세액 (소득세)":"Final income tax","개인지방소득세":"Local income tax","총 납부세액":"Total tax","기납부 (3.3%)":"Already paid (3.3%)","5월 정산":"May settlement","월별 순수익 시뮬레이터":"Monthly net profit simulator","매출에서 매입·임대료·인건비·수수료를 빼고, 세금 통장에 미리 둘 돈까지 떼면 이번 달 진짜 남는 돈이 보입니다.":"Take purchases, rent, payroll and fees off revenue, then set aside the tax you owe, and this month's real profit appears.","월 단위":"per month","과세 유형":"VAT type","간이 부가가치율":"simplified value-added rate","제조업 · 농림어업 · 소화물운송 (20%)":"Manufacturing · farming, forestry, fishing · courier (20%)","건설 · 운수 · 정보통신 · 기타 서비스 (30%)":"Construction · transport · IT · other services (30%)","부동산임대 · 전문직 (40%)":"Real-estate leasing · professions (40%)","월 매출":"Monthly revenue","월 매입 · 재료비":"Monthly purchases & materials","월 임대료":"Monthly rent","월 인건비":"Monthly payroll","월 광고비":"Monthly ads","월 기타 고정비":"Other fixed costs","플랫폼 수수료":"Platform fee","매출의 %":"% of revenue","수수료 10% → 월 800,000원":"A 10% fee → ₩800,000 a month","4대보험료":"Social insurance","월":"per month","지역가입자 국민연금 + 건강보험":"local-subscriber pension + health insurance","월, 부가세 포함":"monthly, VAT included","발행세액공제 대상 결제금액 — 현금 매출이 섞여 있으면 줄여서 입력하세요.":"Payments eligible for the issue credit — reduce it if some sales are cash.","카드·현금영수증 발행세액공제 반영":"Apply the card and cash-receipt issue credit","— 소매·음식점 등 소비자 대상 업종만":"— consumer-facing trades only (retail, restaurants…)","이번 달 남는 돈":"What you keep this month","월 금액 × 12개월로 연간 세금 계산":"annual tax from monthly figures × 12","세전 순수익":"Pre-tax net profit","순이익률 0%":"net margin 0%","세금 통장 적립":"Tax set-aside","부가세 + 종소세":"VAT + income tax","세후 실수령":"After-tax take-home","이번 달 쓸 수 있는 돈":"yours to spend this month","매출 대비 세금 적립 비율":"tax set aside as a share of revenue","월 매출 (부가세 포함)":"Monthly revenue (VAT incl.)","매입 · 재료비":"Purchases & materials","임대료":"Rent","인건비":"Payroll","광고비":"Ads","기타 고정비":"Other fixed costs","월 부가세 적립":"Monthly VAT set-aside","월 종소세 적립":"Monthly income tax set-aside","세금 통장 · 분기 예치 계획":"Tax account · quarterly deposits","월 적립액 × 3개월 · 실제 납부는 1월·7월·5월에 몰립니다":"set-aside × 3 months · payments bunch in January, July and May","부가세는 1월·7월에 반기분이, 종소세는 5월에 1년치가 한 번에 나갑니다. 부족한 분기는 전년도 적립분으로 메우세요.":"VAT leaves in half-yearly lumps in January and July, and a full year of income tax in May. Cover a short quarter from last year's set-aside.","간이과세 기준 납부세액":"VAT payable, simplified basis","계산 중입니다.":"Calculating.","요약 복사":"Copy summary","A4 PDF 저장":"Save A4 PDF","결과 카드 PNG":"Result card PNG","JSON 백업":"JSON backup","JSON 불러오기":"Load JSON","이 기기의 브라우저에만 저장됩니다":"Saved only in this browser","2026년 세금 일정":"2026 tax calendar","부가세 2기 확정신고":"VAT Q2 final return","개인 일반과세자 · 간이과세자는 연 1회":"individual standard taxpayers · simplified once a year","종합소득세 신고":"Income tax return","성실신고확인 대상은 6.30까지":"audited filers by 30 June","부가세 1기 확정신고":"VAT Q1 final return","1월~6월분":"January–June","종합소득세 중간예납":"Income tax interim payment","사업소득 있으면 고지·납부":"assessed if you have business income","입력 정보는 어디로 갈까":"Where your inputs go","모든 계산은 이 브라우저 안에서만 이뤄집니다. 매출·경비 같은 입력값은 서버로 전송되지 않고, 자동 저장도 이 기기의 브라우저 저장소에만 남습니다. 외부 분석 도구도 쓰지 않습니다.":"Every calculation happens inside this browser. Revenue, expenses and other inputs are never sent to a server, and autosave stays in this device's browser storage. No external analytics are used.","입력값 지우기":"Clear inputs","2026년 적용 기준":"2026 rules applied","계산에 쓰는 값은 모두 공개된 법령·고시 그대로입니다. 화면의 결과는 이 기준을 단순화한 모의 추정치이며, 실제 신고 금액은 증빙과 감면에 따라 달라집니다.":"Every figure used comes straight from published statutes and notices. On-screen results are a simplified simulation, and the amount you actually report depends on evidence and reliefs.","핵심 수치":"Key figures","항목":"Item","적용값":"Value","근거":"Source","직전 연도 공급대가 1억 400만원 미만":"Prior-year supply value under ₩104,000,000","부가세법 §61":"VAT Act §61","간이과세 납부면제":"Simplified VAT payment exemption","공급대가 4,800만원 미만":"Supply value under ₩48,000,000","부가세법 §69":"VAT Act §69","간이과세 세액":"Simplified VAT amount","공급대가 × 부가가치율(15~40%) × 10%":"supply value × value-added rate (15–40%) × 10%","부가세법 §63":"VAT Act §63","결제금액 1.3% · 연 1,000만원 한도":"1.3% of payments · ₩10M annual cap","부가세법 §46":"VAT Act §46","종합소득세율":"Income tax rates","6% ~ 45% 8구간 누진":"6%–45% over 8 progressive brackets","소득세법 §55":"Income Tax Act §55","소득세의 10%":"10% of income tax","지방소득세법 §103의3":"Local Income Tax Act §103-3","3.3% (소득세 3% + 지방 0.3%)":"3.3% (3% income tax + 0.3% local)","소득세법 §129·§134":"Income Tax Act §129 · §134","국세청 고시 제2026-14호 (2025년 귀속)":"NTS Notice 2026-14 (2025 tax year)","소득세법 §143④":"Income Tax Act §143④","단순경비율은 아무나 쓰는 게 아닙니다":"Not everyone can use the simplified expense rate","직전 연도 수입금액이 업종군 기준(서비스업":"It applies only when prior-year revenue is below the industry threshold (services",", 제조·숙박·음식점":", manufacturing, lodging and food service",", 도소매":", retail and wholesale",")에 미달할 때만 적용됩니다. 넘으면 기준경비율이나 장부 신고 대상이라 결과가 달라집니다.":"). Above that you fall under the standard expense rate or bookkeeping, and the result differs.","부가세는 과세기간 단위입니다":"VAT runs by tax period","일반과세자는 반기마다(1월·7월), 간이과세자는 1월에 한 번 신고합니다. 이 계산기는 연간 금액을 기준으로 두 유형을 비교합니다.":"Standard taxpayers file half-yearly (January and July); simplified taxpayers once, in January. This calculator compares the two on annual figures.","입력값은 이 브라우저에만":"Inputs stay in this browser","모의 추정치입니다.":"This is a simulation.","2026년 세법(부가세법 §61·§63·§69, 소득세법 §55, 2025년 귀속 국세청 고시 제2026-14호)을 기준으로 단순화해 계산했습니다. 실제 신고 금액은 업종 코드, 증빙, 감면, 가산세, 지방세 감면 등에 따라 달라지므로":"Calculated simply from the 2026 tax rules (VAT Act §61, §63, §69; Income Tax Act §55; NTS Notice 2026-14 for the 2025 tax year). The amount you actually report depends on industry codes, evidence, reliefs, penalties and local tax reductions, so","홈택스 신고서 또는 세무사 확인":"the HomeTax return or a tax accountant","이 필요합니다.":" should confirm it.","입력값은 서버로 전송되지 않습니다. JSON 백업 파일은 이 기기에 내려받은 뒤 직접 보관하세요.":"Inputs are never sent to a server. Keep the JSON backup file yourself once it is downloaded to this device.","개인정보 처리방침":"Privacy policy","· 계산 결과는 참고용 추정치입니다.":"· Results are reference estimates.","세금계산서 · 2026":"Tax Invoice · 2026","세금계산서 · 1인사업자":"Tax Invoice · solo business","부가세 비교 리포트":"VAT comparison report","2026-11-21 · 2026년 세법 기준":"2026-11-21 · 2026 tax rules","입력":"Inputs","결과":"Results","모의 추정치이며 실제 신고는 홈택스 또는 세무사 확인이 필요합니다. 이 리포트는 브라우저에서만 계산되었고 어떤 값도 외부로 전송되지 않았습니다.":"Simulated estimates; confirm the actual return on HomeTax or with a tax accountant. This report was calculated only in the browser and nothing was sent out.","1인사업자 부가세·종소세·순수익 계산기 · 서버 전송 0건":"Solo Business Tax & Net Profit Calculator · nothing sent to a server","개인정보 처리방침 — 1인사업자 부가세·종소세·순수익 계산기":"Privacy policy — Solo Business Tax & Net Profit Calculator","← 계산기로 돌아가기":"← Back to the calculator","1인사업자 부가세·종소세·순수익 계산기 · 최종 갱신 2026-11-22":"Solo Business Tax & Net Profit Calculator · last updated 2026-11-22","요약:":"Summary:","이 계산기는 회원가입·로그인·결제가 없고, 입력한 매출·비용·인적공제 값을":"There is no sign-up, login or payment, and the revenue, expense and personal deduction figures you enter are","서버로 보내지 않습니다.":"never sent to a server.","계산은 전부 이 브라우저 안에서 끝나고, 입력값은 같은 기기에서 다시 열었을 때 이어 쓰도록 브라우저 저장소에만 남습니다.":"Everything is calculated inside this browser, and inputs stay only in browser storage so you can pick up where you left off on the same device.","계정 0개":"0 accounts","쿠키 0개":"0 cookies","분석 도구 0개":"0 analytics tools","수집하는 개인정보":"Personal data we collect","운영자는 이용자의 개인정보를 수집하지 않습니다. 이름·연락처·사업자등록번호를 입력받는 칸이 없고, 입력한 매출·매입·고정비·부양가족 수 같은 값도 운영자에게 전달되지 않습니다.":"The operator collects no personal data. There is no field for your name, contact details or business number, and the revenue, purchases, fixed costs or dependants you enter never reach the operator.","값이 저장되는 위치":"Where values are stored","입력값은 이 브라우저의":"Inputs are saved only in this browser's","(키":"(key",")에만 저장됩니다. 서버·다른 기기와 동기화되지 않습니다.":"). They are not synced to a server or another device.","JSON 백업 파일은 이용자가 버튼을 눌렀을 때 이 기기로 직접 내려받는 파일이며, 어디에도 업로드되지 않습니다.":"The JSON backup is a file you download to this device by pressing a button; it is never uploaded anywhere.","도 이 브라우저가 직접 그려서 내려받는 이미지입니다. 카드에 담기는 값은 화면에 보이는 계산 결과뿐이고, 외부로 전송되지 않습니다.":"is an image drawn and downloaded by this browser itself. The card contains only the results you see on screen and is never sent out.","브라우저의 ‘사이트 데이터 삭제’나 화면의":"You can delete saved values at any time through the browser's “clear site data” or the","로 저장된 값을 언제든 지울 수 있습니다. 지우면 이전 입력은 복원되지 않습니다.":"button on screen. Once cleared, earlier inputs cannot be restored.","외부 전송":"External requests","페이지가 불러오는 것은 같은 폴더의 스크립트·스타일·글꼴 파일뿐입니다. CDN·분석 도구·광고 스크립트를 넣지 않았고, 계산 과정에서 외부로 나가는 요청은 0건입니다.":"The page loads only script, style and font files from its own folder. There are no CDNs, analytics or ad scripts, and calculating sends nothing out.","쿠키와 추적":"Cookies and tracking","이 계산기는 쿠키를 쓰지 않고 방문 기록을 수집하지 않습니다. 사이트가 나중에 광고(예: Google AdSense)를 게재하는 경우 광고 사업자가 자체 쿠키를 사용할 수 있으며, 이는 브라우저 설정이나 해당 사업자의 광고 설정에서 거부할 수 있습니다.":"This calculator sets no cookies and collects no visit history. If ads (for example Google AdSense) are later shown on the site, the ad provider may use its own cookies, which you can refuse in your browser settings or that provider's ad settings.","제3자 제공·위탁":"Sharing with third parties","제3자에게 제공하거나 처리를 위탁하는 데이터가 없습니다. 운영자가 데이터를 받지 않으므로 제공·위탁 자체가 발생하지 않습니다.":"No data is shared with or processed by third parties. The operator receives nothing, so there is nothing to share.","계산 결과의 성격":"What the results are","부가세·종합소득세·순수익은 공개된 세법 조항과 고시 요율을 규칙으로 옮긴":"VAT, income tax and net profit here are a","참고용 추정치":"reference estimate","입니다. 업종 코드, 증빙, 감면, 가산세에 따라 실제 신고 금액이 달라지므로 홈택스 신고서나 세무사 확인이 필요합니다. 이 계산기는 세무 대리·신고 대행을 제공하지 않습니다.":" built from published tax provisions and notice rates. The amount you actually report varies with industry codes, evidence, reliefs and penalties, so check the HomeTax return or a tax accountant. This calculator does not provide tax representation or filing services.","아동의 개인정보":"Children's privacy","만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 별도로 수집하지 않습니다.":"This service is not aimed at children under 14 and does not collect children's personal data.","문의":"Contact","처리 방식이 바뀌면 이 페이지에 먼저 고지합니다. 오류 제보나 문의는 배포 저장소의 이슈로 남겨 주세요.":"Any change in how data is handled will be announced on this page first. Report errors or ask questions through an issue in the deployment repository.","자동 저장됨 · 이 기기의 브라우저에만":"Autosaved · only in this browser","를 부가세로 냅니다.":" of sales goes to VAT.","미반영":"not applied","이 환급됩니다.":" is refunded.","공급대가를 공급가액으로 바꿔 10% 매출세액을 계산합니다.":"Converts the supply value to net sales and charges 10% output VAT.","은 간이과세 기준(1억 400만원)을 넘어 적용할 수 없습니다.":" is above the simplified-VAT threshold (₩104,000,000), so simplified VAT cannot apply.","일반과세만 가능합니다":"standard VAT only","으로 계산됩니다.":".",". 매입 세금계산서가 늘면 일반과세가 유리해질 수 있습니다.":". With more purchase invoices, standard VAT can win.",". 매입세액 공제가 큰 업종은 일반과세가 낫습니다.":". Trades with large input VAT credits do better on standard VAT.","두 유형의 부가세가 같습니다":"Both types give the same VAT","부가세 신고: 일반과세자 1월 25일·7월 25일, 간이과세자는 1월 25일 연 1회입니다.":"VAT filing: standard taxpayers 25 January and 25 July; simplified taxpayers once, on 25 January.","카드·현금영수증 발행세액공제는 소매·음식점·숙박 등 소비자 대상 업종만 받을 수 있습니다(2026년 1.3%, 연 1,000만원 한도).":"The card and cash-receipt issue credit is only for consumer-facing trades such as retail, restaurants and lodging (1.3% in 2026, ₩10M annual cap).","연 공급대가가 1억 400만원 이상이면 간이과세 대상이 아닙니다. 다음 해 7월 1일부터 일반과세로 전환됩니다.":"Above ₩104,000,000 of annual supply value you are out of simplified VAT and move to standard VAT from 1 July next year.","간이과세 기준선의 90%를 넘었습니다. 올해 매출에 따라 내년 7월 유형이 바뀔 수 있습니다.":"You are above 90% of the simplified-VAT threshold; this year's revenue could change your type next July.","간이과세자는 공급대가 4,800만원 미만이면 납부의무가 면제되고 영수증을 발급합니다(세금계산서 발급 의무 없음).":"Simplified taxpayers under ₩48,000,000 of supply value are exempt from payment and issue receipts (no duty to issue tax invoices).","간이과세는 매입세액 전액 공제가 아니라, 세금계산서·카드로 받은 매입 공급대가의 0.5%만 공제합니다.":"Simplified VAT does not credit the full input VAT — only 0.5% of purchase supply value backed by invoices or cards.","일반과세 기준 납부세액":"VAT payable, standard basis","일반과세 납부세액":"Standard VAT payable","간이과세 기준 초과 · 일반과세만 가능":"Above the simplified threshold · standard only","두 유형 차이 없음":"No difference","일반과세":"Standard","간이과세":"Simplified","적용 불가":"not applicable","차이":"Difference","국세청 고시 단순경비율을 직접 입력하세요.":"Enter the NTS simplified expense rate.","5월에 더 낼 돈":"Extra tax due in May","5월 정산 금액":"May settlement amount","신고 기간은 5월 1일~31일이고, 성실신고확인 대상은 6월 30일까지입니다. 11월에는 중간예납이 있습니다.":"The filing window is 1–31 May, with 30 June for audited filers. November has an interim payment.","단순경비율은 직전 연도 수입금액이 업종군 기준(서비스업 2,400만원) 미만일 때만 적용됩니다. 넘으면 기준경비율이나 장부 신고 대상입니다.":"The simplified expense rate only applies when prior-year revenue is below the industry threshold (₩24,000,000 for services). Above that you use the standard rate or books.","국민연금 보험료는 소득공제, 건강보험료는 사업소득 필요경비로 인정됩니다(장부 신고 기준).":"Pension contributions are an income deduction; health premiums count as business expenses (under bookkeeping).","성실사업자 요건을 체크해 표준세액공제 12만원을 적용했습니다.":"Sincere-business conditions are ticked, so the ₩120,000 standard credit applies.","표준세액공제는 7만원이며, 성실사업자(사업용계좌·장부 신고)는 12만원입니다.":"The standard credit is ₩70,000; ₩120,000 for sincere businesses (business account, books).","원천징수된 3.3%보다 실제 세금이 큽니다. 5월 추가 납부분을 미리 적립해 두세요.":"Actual tax exceeds the 3.3% withheld. Set aside the extra payment for May.","3.3%를 미리 냈기 때문에 환급이 생깁니다. 실제 환급액은 경비 증빙과 공제 항목에 따라 달라집니다.":"A refund arises because 3.3% was prepaid. The actual refund depends on expense evidence and deductions.","과세표준이 24% 구간입니다. 노란우산·연금계좌 납입으로 과세표준을 낮추면 절세 폭이 큽니다.":"Your tax base is in the 24% bracket. Lowering it with Yellow Umbrella or pension contributions saves a lot.","5월 환급 예상액":"Estimated May refund","5월 추가 납부액":"Extra payment due in May","기납부 3.3%":"Already paid 3.3%","세금을 빼면 적자입니다":"After tax you are in the red","연 매출 <b>":"Annual revenue <b>","</b> · 연 사업소득(추정) <b>":"</b> · annual business income (estimated) <b>","</b><br>연 부가세 <b>":"</b><br>Annual VAT <b>","</b> · 연 종소세(지방세 포함) <b>":"</b> · annual income tax (incl. local) <b>","은 간이과세 기준(1억 400만원)을 넘습니다. 다음 해 7월 1일부터 일반과세자로 전환됩니다.":" is above the simplified-VAT threshold (₩104,000,000). You move to standard VAT from 1 July next year.","연 매출이 간이과세 기준의 90%를 넘었습니다(":"Annual revenue is above 90% of the simplified-VAT threshold (","). 유형 전환을 미리 준비하세요.":"). Prepare for the change of type.","이번 달은 비용이 매출보다 큽니다. 고정비를 먼저 줄여야 합니다.":"Costs exceed revenue this month. Cut fixed costs first.","순이익률이 10% 미만입니다. 세금을 내고 나면 남는 돈이 거의 없습니다.":"Net margin is under 10%. After tax there is barely anything left.","일반과세자는 매입세액을 전액 공제받으므로, 매입이 많은 달은 부가세가 환급될 수 있습니다.":"Standard taxpayers credit input VAT in full, so months with heavy purchases can bring a VAT refund.","월 부가세·종소세는 연간 기준으로 계산해 12로 나눈 적립 참고액입니다. 실제 납부는 1월·7월(부가세), 5월(종소세)에 몰립니다.":"Monthly VAT and income tax are annual figures divided by 12 as a guide. Actual payments bunch in January and July (VAT) and May (income tax).","4대보험료는 비용으로 반영했고, 국민연금 소득공제는 따로 넣지 않았습니다(보수적 추정).":"Social insurance is counted as a cost; the pension income deduction is not applied separately (a cautious estimate).","월 세전 순수익":"Monthly pre-tax net profit","순이익률":"Net margin","1분기":"Q1","1~3월":"Jan–Mar","1.25 부가세 2기":"25 Jan · VAT Q2","2분기":"Q2","4~6월":"Apr–Jun","5.31 종합소득세":"31 May · income tax","3분기":"Q3","7~9월":"Jul–Sep","7.25 부가세 1기":"25 Jul · VAT Q1","4분기":"Q4","10~12월":"Oct–Dec","11.30 중간예납(해당 시)":"30 Nov · interim payment (if due)","매달 적립액의 3개월치로 각 분기 납부액을 감당할 수 있습니다. 부가세는 1월·7월, 종소세는 5월에 나갑니다.":"Three months of set-aside covers each quarter's payment. VAT leaves in January and July, income tax in May.","연 매출 (부가세 포함)":"Annual revenue (VAT incl.)","연 매입 (부가세 포함)":"Annual purchases (VAT incl.)","일반과세 매출세액":"Standard output VAT","일반과세 매입세액":"Standard input VAT","간이과세 납부세액":"Simplified VAT payable","간이과세 매출 기준 세액":"Simplified VAT on sales","간이과세 매입 공제 (0.5%)":"Simplified purchase credit (0.5%)","결론":"Conclusion","일반과세만 가능":"standard VAT only","차이 없음":"no difference","간이과세 기준: 직전 연도 공급대가 1억 400만원 미만 (부가가치세법 §61, 시행령 §109)":"Simplified VAT: prior-year supply value under ₩104,000,000 (VAT Act §61, Decree §109)","간이과세 납부면제: 해당 과세기간 공급대가 4,800만원 미만 (§69)":"Simplified VAT exemption: supply value under ₩48,000,000 in the period (§69)","간이과세 세액 = 공급대가 × 업종별 부가가치율 × 10%, 매입 공제는 공급대가의 0.5% (§63)":"Simplified VAT = supply value × industry value-added rate × 10%; purchase credit 0.5% of supply value (§63)","일반과세 세액 = 매출세액 − 매입세액 − 카드 발행세액공제(1.3%, 연 1,000만원 한도)":"Standard VAT = output VAT − input VAT − card issue credit (1.3%, ₩10M cap)","부가세는 과세기간 단위로 계산합니다. 간이과세 부가가치율은 업종 코드에 따라 달라지고, 카드 발행세액공제는 소매·음식점·숙박 등 소비자 대상 업종만 받을 수 있습니다.":"VAT is calculated per tax period. The simplified value-added rate depends on the industry code, and the card issue credit is only for consumer-facing trades such as retail, restaurants and lodging.","3.3% 프리랜서 종소세 리포트":"3.3% freelancer income tax report","연간 총수입 (3.3% 떼기 전)":"Annual gross income (before 3.3%)","부양가족 수 (본인 포함)":"Dependants (incl. yourself)","국민연금 (소득공제)":"National pension (deduction)","기타 소득공제 · 세액공제":"Other deductions & credits","기납부 세액 (3.3%)":"Already paid (3.3%)","종합소득세율: 1,400만원 이하 6%부터 10억원 초과 45%까지 8구간 누진 (소득세법 §55)":"Income tax: 6% up to ₩14M rising to 45% above ₩1bn over 8 brackets (Income Tax Act §55)","개인지방소득세는 소득세의 10%":"Local income tax is 10% of income tax","사업소득 원천징수 3% + 지방소득세 0.3% = 3.3% (소득세법 §129·§134)":"Business income withholding 3% + local income tax 0.3% = 3.3% (Income Tax Act §129 · §134)","단순경비율: 국세청 고시 제2026-14호(2025년 귀속), 인적용역은 4,000만원 초과분에 초과율 적용":"Simplified expense rate: NTS Notice 2026-14 (2025 tax year); for personal services the higher rate applies above ₩40M","기본공제 1인당 150만원, 표준세액공제 7만원(성실사업자 12만원, 다른 세액공제가 없을 때)":"Basic deduction ₩1.5M per person; standard credit ₩70,000 (₩120,000 for sincere businesses, when no other credit)","실제 환급·추가납부는 경비 증빙, 업종 코드, 부양가족, 연금계좌·보험료 공제 등에 따라 달라집니다. 단순경비율은 직전 연도 수입금액이 업종군 기준 미만일 때만 적용됩니다.":"The actual refund or extra payment depends on expense evidence, industry code, dependants and pension or insurance deductions. The simplified expense rate applies only when prior-year revenue is below the industry threshold.","월 순수익 시뮬레이션 리포트":"Monthly net profit report","과세 유형 · 업종":"VAT type · industry","월 임대료 · 인건비":"Monthly rent & payroll","월 광고비 · 기타":"Monthly ads & other","4대보험료 (월)":"Social insurance (monthly)","카드·현금영수증 매출 (월)":"Card and cash-receipt sales (monthly)","세금 통장 적립 합계":"Total tax set-aside","연 매출 · 연 사업소득(추정)":"Annual revenue · annual business income (est.)","부가세: 간이과세는 공급대가 × 부가가치율 × 10%, 일반과세는 매출세액 − 매입세액":"VAT: simplified = supply value × value-added rate × 10%; standard = output VAT − input VAT","간이과세 기준 연 공급대가 1억 400만원, 납부면제 4,800만원 (부가가치세법 §61·§69)":"Simplified VAT threshold ₩104,000,000 of annual supply value; exemption ₩48,000,000 (VAT Act §61 · §69)","종소세: 연 사업소득에서 기본공제 150만원을 뺀 과세표준에 누진세율(소득세법 §55), 지방소득세 10%":"Income tax: progressive rates on business income less the ₩1.5M basic deduction (Income Tax Act §55), plus 10% local income tax","소득은 부가세를 제외한 공급가액 기준으로 계산":"Income is calculated on net supply value, excluding VAT","월 적립액은 연간 기준으로 계산해 12로 나눈 참고값입니다. 실제 부가세는 1월·7월, 종소세는 5월에 몰려 나오므로 통장을 분리해 두는 편이 안전합니다.":"The monthly set-aside is an annual figure divided by 12 as a guide. Actual VAT falls in January and July and income tax in May, so keep a separate account.","간이과세 기준 초과, 일반과세만 가능":"above the simplified threshold — standard VAT only","2026년 세법 기준 모의 추정치 · 실제 신고는 홈택스/세무사 확인":"2026 tax rules · simulation only · confirm the return on HomeTax or with a tax accountant","요약 리포트를 복사했습니다":"Copied the summary report","복사하지 못했습니다. 내용을 선택해 복사하세요.":"Could not copy. Select the text and copy it yourself.","이번 부가세":"VAT this period","두 유형 차액":"Difference between types","은 간이과세 기준을 넘어 일반과세만 가능합니다.":" is above the simplified threshold, so only standard VAT applies.","두 유형의 부가세가 같습니다.":"Both types give the same VAT.","5월 종합소득세":"May income tax","총 납부세액 (지방세 포함)":"Total tax (incl. local)","원천징수 3.3%를 미리 냈기 때문에 환급이 생깁니다. 실제 환급액은 증빙과 공제에 따라 달라집니다.":"A refund arises because 3.3% was prepaid. The actual refund depends on evidence and deductions.","원천징수보다 실제 세금이 큽니다. 5월 추가 납부분을 미리 적립해 두세요.":"Actual tax is larger than the withholding. Set aside the extra payment for May.","낼 세금과 미리 낸 세금이 같습니다.":"Tax due equals tax already paid.","세금을 빼면 적자입니다. 고정비와 수수료를 먼저 줄여야 합니다.":"After tax you are in the red. Cut fixed costs and fees first.","1인사업자 세금·순수익 계산기":"Solo business tax & net profit calculator","2026년 세법 기준 · 브라우저 로컬 계산 · 서버 전송 0건":"2026 tax rules · calculated locally · nothing sent to a server","판정":"Verdict","모의 추정치입니다. 실제 신고는 홈택스 신고서 또는 세무사 확인이 필요합니다.":"Simulation only. Confirm the actual return on HomeTax or with a tax accountant.","입력값은 이 기기의 브라우저에만 저장되고 어디로도 전송되지 않습니다.":"Inputs are saved only in this browser and never sent anywhere.","카드를 만들지 못했습니다":"Could not build the card","세금카드-":"tax-card-","결과 카드를 PNG로 저장했습니다":"Saved the result card as a PNG","세금계산-백업-":"tax-calc-backup-","JSON 백업 파일을 내려받았습니다":"Downloaded the JSON backup","백업을 불러왔습니다":"Loaded the backup","이 계산기의 백업 파일이 아닙니다":"That is not a backup from this calculator","파일을 읽지 못했습니다":"Could not read the file","입력한 값을 모두 지우고 처음 상태로 돌아갑니다. 계속할까요?":"All inputs will be cleared and the form reset. Continue?","입력값을 지웠습니다":"Cleared the inputs","1억 400만":"104M","4,800만":"48M","원":" KRW","· 연 사업소득(추정)":"· annual business income (est.)","연 부가세":"Annual VAT","· 연 종소세(지방세 포함)":"· annual income tax (incl. local)","소매업 · 음식점업":"Retail · restaurants","소매업":"retail","음식점업":"restaurants","숙박업":"accommodation","기본공제 {0}":"basic deduction {0}","세전 {0}":"Pre-tax {0}","세금 적립 {0}":"tax set aside {0}","총수입 {0}":"Gross income {0}","만원":" ₩10k","명":" people","1.25":"Jan 25","5.31":"May 31","7.25":"Jul 25","11.30":"Nov 30","부가가치율":"Value-added rate ","→ 매출의":"→ ","매입세액이 더 많아":"Input VAT is higher, so ","공급대가 4,800만원 미만이라 납부의무가 면제됩니다(계산상":"Supply value is under ₩48,000,000, so payment is exempt (calculated ","공급대가 ×":"Supply value × ","× 10%로 계산하고, 매입은 0.5%만 공제합니다.":" × 10%, and only 0.5% of purchases is credited.","연 공급대가":"Annual supply value ","은 간이과세 기준(1억 400만원) 이상입니다. 일반과세 납부세액은":" is at or above the simplified-VAT threshold (₩104,000,000). Standard VAT payable is ","간이과세가":"Simplified VAT is ","유리합니다":" better.","vs 간이과세":" vs simplified ","일반과세가":"Standard VAT is ","일반과세와 간이과세 모두":"Standard and simplified both come to ","기본율":"Base rate ","% · 연 4,000만원 초과분":"% · above ₩40M ","소득구간별 한도":"cap by income band ","(사업소득 기준)":" (business income)","기납부":"Already paid ","· 총 부담":" · total burden ","소득세":"Income tax ","+ 지방세":" + local tax ","실효":"Effective ","/ 원천징수 3.3%":" / 3.3% withheld","(실제)":" (actual)","환급":"Refund ","추가납부":"Extra payment ","총수입":"Gross income ","· 실효세율":" · effective rate ","수수료":"Fee ","% → 월":"% → ","(매출 대비)":" (of revenue)","부가세":"VAT ","+ 종소세":" + income tax ","세후 남는 돈 · 매출의":"Take-home · of revenue ","매출의":"of revenue ","(연":" (annual ","세전":"Pre-tax ","· 세금 적립":" · tax set aside ","부족":"Short ","남는 돈":"Left over ","작성 · 2026년 세법 기준 · 브라우저 로컬 계산":" · 2026 tax rules · calculated locally in the browser","(부가가치율":" (value-added rate ","(발행세액공제 반영)":" (issue credit applied)","(공제 미반영)":" (no credit)","(4,000만원 초과":" (above ₩40M ","명 · 기본공제":" people · basic deduction ","(한도":" (cap ","[1인사업자 세금 요약]":"[Solo business tax summary] ","· 업종:":"· Industry: ","· 연 매출":"· Annual revenue ","/ 매입":" / purchases ","· 일반과세":"· Standard VAT ","· 결론:":"· Conclusion: ","· 연 총수입":"· Annual gross income ","/ 필요경비":" / necessary expenses ","(단순경비율":" (simplified rate ","· 과세표준":"· Tax base ","· 총 납부세액":" · total tax ","· 기납부 3.3%":"· already paid 3.3% ","· 5월 정산:":"· May settlement: ","· 월 매출":"· Monthly revenue ","/ 세전 순수익":" / pre-tax net profit ","(순이익률":" (net margin ","(부가세":" (VAT ","· 세후 실수령":"· Take-home ","/ 연 매출":" / annual revenue ","부가세 비교 ·":"VAT comparison · ","유리합니다.":" is better.","3.3% 프리랜서 · 단순경비율":"3.3% freelancer · simplified rate ","월 순수익 ·":"Monthly net profit · ","가 세후 남습니다. 연 매출":" stays after tax. On annual revenue of ","기준입니다.":"."};
  var PATTERNS = /*__PATTERNS__*/ [[new RegExp("^(\\d[\\d.,]*)\\s*일$", ""), "$1 days"],[new RegExp("^(\\d[\\d.,]*)\\s*년$", ""), "$1 years"],[new RegExp("^(\\d[\\d.,]*)\\s*개월$", ""), "$1 months"],[new RegExp("^(\\d[\\d.,]*)\\s*시간$", ""), "$1 hours"],[new RegExp("^(\\d[\\d.,]*)\\s*분$", ""), "$1 min"],[new RegExp("^(\\d[\\d.,]*)\\s*명$", ""), "$1 people"],[new RegExp("^(\\d[\\d.,]*)\\s*개$", ""), "$1"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월$", ""), "$1 yr $2 mo"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 yr $2 mo $3 d"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 mo $2 d"],[new RegExp("^(\\d[\\d.,]*)\\s*일\\s*전$", ""), "$1 days ago"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*전$", ""), "$1 months ago"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*전$", ""), "$1 years ago"],[new RegExp("^부가가치율 (.+) → 매출의 (.+)를 부가세로 냅니다\\.$", ""), "Value-added rate $1 → $2 of sales goes to VAT."],[new RegExp("^연 매출 (\\{\\d+\\})은 간이과세 기준\\((\\{\\d+\\})\\)을 넘어 적용할 수 없습니다\\.$", ""), "Annual revenue $1 is above the simplified-VAT threshold ($2), so simplified VAT cannot apply."],[new RegExp("^연 공급대가 (\\{\\d+\\})은 간이과세 기준\\((\\{\\d+\\})\\) 이상입니다\\. 일반과세 납부세액은 (\\{\\d+\\})으로 계산됩니다\\.$", ""), "Annual supply value $1 is at or above the simplified-VAT threshold ($2). Standard VAT payable is $3."],[new RegExp("^기본율 (.+) · 연 (\\{\\d+\\}) 초과분 (.+)$", ""), "Base rate $1 · over $2 the rate is $3"],[new RegExp("^소득구간별 한도 (\\{\\d+\\}) \\(사업소득 기준\\)$", ""), "Cap by income band $1 (business income)"],[new RegExp("^기납부 (\\{\\d+\\}) · 총 부담 (\\{\\d+\\})$", ""), "Already paid $1 · total burden $2"],[new RegExp("^소득세 (\\{\\d+\\}) \\+ 지방세 (\\{\\d+\\})$", ""), "Income tax $1 + local tax $2"],[new RegExp("^실효 (.+) / 원천징수 3\\.3%$", ""), "Effective $1 / 3.3% withheld"],[new RegExp("^(\\{\\d+\\}) \\((.+)\\)$", ""), "$1 ($2)"],[new RegExp("^환급 (\\{\\d+\\})$", ""), "Refund $1"],[new RegExp("^수수료 (.+) → 월 (\\{\\d+\\})$", ""), "Fee $1 → $2 a month"],[new RegExp("^순이익률 (.+) \\(매출 대비\\)$", ""), "Net margin $1 (of revenue)"],[new RegExp("^부가세 (\\{\\d+\\}) \\+ 종소세 (\\{\\d+\\})$", ""), "VAT $1 + income tax $2"],[new RegExp("^세후 남는 돈 · 매출의 (.+)$", ""), "Take-home · $1 of revenue"],[new RegExp("^매출의 (.+)$", ""), "$1 of revenue"],[new RegExp("^(\\{\\d+\\}) \\(연 (\\{\\d+\\})\\)$", ""), "$1 (annual $2)"],[new RegExp("^적립 ([\\d.,]+)개월$", ""), "Set aside $1 months"],[new RegExp("^남는 돈 (\\{\\d+\\})$", ""), "Left over $1"],[new RegExp("^부족 (\\{\\d+\\})$", ""), "Short $1"],[new RegExp("^부가세는 1월·7월에 반기분이, 종소세는 5월에 1년치가 한 번에 나갑니다\\. 부족한 분기\\(([\\d.,]+)곳\\)는 전년도 적립분이나 별도 통장으로 메워야 합니다\\.$", ""), "VAT leaves in half-yearly lumps in January and July, and a full year of income tax in May. Cover the $1 short quarter(s) from last year's set-aside or a separate account."],[new RegExp("^(.+) 작성 · 2026년 세법 기준 · 브라우저 로컬 계산$", ""), "$1 · 2026 tax rules · calculated locally in the browser"],[new RegExp("^(.+) \\(부가가치율 (.+)\\)$", ""), "$1 (value-added rate $2)"],[new RegExp("^(\\{\\d+\\}) \\(발행세액공제 반영\\)$", ""), "$1 (issue credit applied)"],[new RegExp("^(.+) \\(공제 미반영\\)$", ""), "$1 (no credit)"],[new RegExp("^(\\{\\d+\\}) \\((\\d[\\d.]*)%\\)$", ""), "$1 ($2%)"],[new RegExp("^연 매출 (\\{\\d+\\})은 간이과세 기준\\((\\{\\d+\\})\\)을 넘습니다\\. 다음 해 7월 1일부터 일반과세자로 전환됩니다\\.$", ""), "Annual revenue $1 is above the simplified-VAT threshold ($2). You move to standard VAT from 1 July next year."],[new RegExp("^(\\{\\d+\\}) \\(한도 (\\{\\d+\\})\\)$", ""), "$1 (cap $2)"],[new RegExp("^간이과세가 (\\{\\d+\\}) 유리$", ""), "Simplified VAT is $1 better"],[new RegExp("^공급대가 × (.+) × 10%로 계산하고, 매입은 0.5%만 공제합니다\\.$", ""), "Supply value × $1 × 10%, with only 0.5% of purchases credited."],[new RegExp("^단순경비율 (.+) \\((\\{\\d+\\}) 초과 (.+)\\)$", ""), "Simplified rate $1 ($3 above $2)"],[new RegExp("^연 매출이 간이과세 기준의 90%를 넘었습니다\\((\\{\\d+\\})\\)\\. 유형 전환을 미리 준비하세요\\.$", ""), "Annual revenue is above 90% of the simplified-VAT threshold ($1). Prepare for the change of type."],[new RegExp("^일반과세 (\\{\\d+\\}) vs 간이과세 (\\{\\d+\\})\\. 매입 세금계산서가 늘면 일반과세가 유리해질 수 있습니다\\.$", ""), "Standard $1 vs simplified $2. With more purchase invoices, standard VAT can win."],[new RegExp("^실효세율 (.+)$", ""), "Effective rate $1"]];
  var BLOCKS = /*__BLOCKS__*/ {"hero-h1":"This quarter's tax,<br>visible in <em>10 seconds</em>.","hero-lede":"Just enter revenue and purchases. Simplified and standard VAT, the income tax refund due in May, the money to set aside for tax and a <b>quarterly deposit plan</b> — all on one screen.","privacy-note":"External requests <b>0</b>, analytics tools <b>0</b>, accounts <b>0</b>. Inputs stay only in this device's storage and you can clear them any time with <b>Clear inputs</b>."};

  var DICT = {};
  var k;
  for (k in COMMON) if (Object.prototype.hasOwnProperty.call(COMMON, k)) DICT[k] = COMMON[k];
  for (k in APP) if (Object.prototype.hasOwnProperty.call(APP, k)) DICT[k] = APP[k];

  var HANGUL = /[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7A3]/;
  var SKIP_TAG = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, SVG: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var state = { lang: 'ko' };
  var records = [];
  var missing = {};
  var missingList = [];
  var observer = null;

  /* ---------- language ---------- */
  function detect() {
    try {
      var q = new URLSearchParams(root.location.search).get('lang');
      if (q === 'ko' || q === 'en') return q;
    } catch (e) { /* very old browser */ }
    try {
      var saved = root.localStorage.getItem(LANG_KEY);
      if (saved === 'ko' || saved === 'en') return saved;
    } catch (e) { /* private mode */ }
    var nav = root.navigator.language || root.navigator.userLanguage || 'ko';
    return /^ko/i.test(nav) ? 'ko' : 'en';
  }

  /* ---------- lookup ---------- */
  function report(text) {
    if (missing[text]) return;
    missing[text] = 1;
    missingList.push(text);
    if (root.console && console.warn) console.warn('I18N_MISS: ' + text);
  }

  /* Pattern with capture translation: captures that still hold Korean are looked up too. */
  function applyPattern(core, p) {
    if (!p[0].test(core)) return null;
    var m = p[0].exec(core);
    var caps = [], i, ok = true;
    for (i = 1; i < m.length; i++) {
      var c = m[i];
      if (c == null) { caps[i] = ''; continue; }
      if (HANGUL.test(c)) {
        var t = lookupSmall(c.trim());
        if (t == null) { ok = false; caps[i] = c; } else { caps[i] = t; }
      } else { caps[i] = c; }
    }
    var out = p[1].replace(/\$(\d+)/g, function (all, n) { return caps[+n] != null ? caps[+n] : all; });
    if (!ok || HANGUL.test(out)) return null;
    return out;
  }

  function tr(raw) {
    if (typeof raw !== 'string' || !HANGUL.test(raw)) return raw;
    raw = raw.replace(/\u00a0/g, ' ');
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(raw);
    var lead = m[1], core = m[2], tail = m[3];
    if (!core) return raw;
    var hit = DICT[core];
    if (hit == null && /\s{2,}|\n/.test(core)) hit = DICT[core.replace(/\s+/g, ' ').trim()];
    if (hit != null) return lead + hit + tail;

    /* Korean date: 2026년 11월 27일 -> November 27, 2026 */
    var dt = /^(\d{4})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일$/.exec(core);
    if (dt) {
      var MO = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var mm = parseInt(dt[2], 10);
      if (mm >= 1 && mm <= 12) return lead + MO[mm - 1] + ' ' + parseInt(dt[3], 10) + ', ' + dt[1] + tail;
    }

    /* money in Korean format: 81만 원 / 2,980,750원  ->  {0} template */
    var money = takeMoney(core);
    if (money.map.length) {
      var tpl = money.text;
      var th = DICT[tpl];
      if (th == null && /\s{2,}|\n/.test(tpl)) th = DICT[tpl.replace(/\s+/g, ' ').trim()];
      if (th == null && /^\{0\}$/.test(tpl.trim())) th = '{0}';
      if (th != null) return lead + putMoney(th, money.map) + tail;
      for (var mi = 0; mi < PATTERNS.length; mi++) {
        var mo = applyPattern(tpl, PATTERNS[mi]);
        if (mo != null) return lead + putMoney(mo, money.map) + tail;
      }
      var mseg = trSegments(tpl);
      if (mseg != null) return lead + putMoney(mseg, money.map) + tail;
    }
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(core, PATTERNS[i]);
      if (pout != null) return lead + pout + tail;
    }
    var seg = trSegments(core);
    if (seg != null) return lead + seg + tail;
    report(core);
    return raw;
  }


  /* Korean money -> token template; values are formatted as ₩1,234,567 */
  function won(n) { return (n < 0 ? '−₩' : '₩') + Math.abs(n).toLocaleString('en-US'); }
  function takeMoney(core) {
    var map = [];
    var out = core.replace(/([\d,]+)\s*억(?:\s*([\d,]+)\s*만)?(?:\s*([\d,]+))?\s*원/g, function (all, a, b, c) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 100000000 +
        (b ? parseInt(b.replace(/,/g, ''), 10) * 10000 : 0) +
        (c ? parseInt(c.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([\d,]+)\s*만(?:\s*([\d,]+))?\s*원/g, function (all, a, b) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 10000 + (b ? parseInt(b.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([+\-\u2212]?[\d,]+)\s*원/g, function (all, a) {
      var raw = a.replace(/\u2212/g, '-').replace(/,/g, '');
      var num = parseInt(raw, 10);
      map.push(isFinite(num) ? won(num) : a);
      return '{' + (map.length - 1) + '}';
    });
    return { text: out, map: map };
  }
  function putMoney(s, map) {
    return s.replace(/\{(\d+)\}/g, function (all, i) { return map[+i] != null ? map[+i] : all; });
  }

  /* A small unit: dictionary hit or pattern hit, no whitespace trimming. */
  function lookupSmall(unit) {
    var hit = DICT[unit];
    if (hit != null) return hit;
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(unit, PATTERNS[i]);
      if (pout != null) return pout;
    }
    return null;
  }

  function trPipe(line) {
    var parts = line.split(/\s*\|\s*/);
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var t = lookupSmall(parts[i].trim());
      if (t == null) return null;
      out.push(t);
    }
    return out.join(' | ');
  }

  /* piece lookup: dictionary, patterns, money token, or bare number/unit */
  function piece(unit) {
    var u = unit.trim();
    if (!u) return '';
    if (!HANGUL.test(u)) return u;
    if (/^\{\d+\}$/.test(u)) return u;
    var t = lookupSmall(u);
    if (t != null) return t;
    return null;
  }

  var SEG_SPLIT = /\s*(\s·\s|\s→\s|\s:\s|\s\/\s)/;
  function trSplit(line) {
    var parts = line.split(SEG_SPLIT);
    if (parts.length < 3) return null;
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      if (i % 2) { out.push(parts[i]); continue; }
      var t = piece(parts[i]);
      if (t == null) return null;
      out.push(t);
    }
    return out.join('');
  }

  function trSegments(core) {
    if (core.indexOf('\n') > -1) {
      var lines = core.split('\n');
      var out = [];
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (!line.trim()) { out.push(line); continue; }
        var t = line.indexOf('|') > -1 ? trPipe(line) : piece(line);
        if (t == null) t = trSplit(line);
        if (t == null) { if (root.__I18N_DEBUG) (root.__I18N_SEGFAIL = root.__I18N_SEGFAIL || []).push(line); return null; }
        out.push(t);
      }
      return out.join('\n');
    }
    if (core.indexOf('|') > -1) return trPipe(core);
    if (/[·:→]/.test(core) && /\s/.test(core)) return trSplit(core);
    return null;
  }

  /* ---------- DOM walking ---------- */
  function skipped(el) {
    while (el) {
      if (el.nodeType === 1) {
        if (SKIP_TAG[el.tagName]) return true;
        if (el.getAttribute && (el.hasAttribute('data-i18n-skip') || el.getAttribute('contenteditable') === 'true')) return true;
        if (el.classList && el.classList.contains('onetap-lang')) return true;
      }
      el = el.parentNode;
    }
    return false;
  }

  function trText(node) {
    var v = node.nodeValue;
    if (!v || !HANGUL.test(v)) return;
    var out = tr(v);
    if (out !== v) {
      records.push({ n: node, v: v });
      node.nodeValue = out;
    }
  }

  function trAttrs(el) {
    var i, at, v, out;
    for (i = 0; i < ATTRS.length; i++) {
      at = ATTRS[i];
      if (!el.hasAttribute(at)) continue;
      v = el.getAttribute(at);
      if (!v || !HANGUL.test(v)) continue;
      out = tr(v);
      if (out !== v) {
        records.push({ e: el, a: at, v: v });
        el.setAttribute(at, out);
      }
    }
    if (el.tagName === 'INPUT' && el.hasAttribute('value') && el.type !== 'checkbox' && el.type !== 'radio' && el.type !== 'hidden') {
      v = el.getAttribute('value');
      if (v && HANGUL.test(v)) {
        out = tr(v);
        if (out !== v) {
          records.push({ e: el, a: 'value', v: v });
          el.setAttribute('value', out);
          if (el.value === v) el.value = out;
        }
      }
    }
    if (el.tagName === 'INPUT') {
      var ty = (el.type || '').toLowerCase();
      if (ty === 'button' || ty === 'submit' || ty === 'reset') {
        v = el.value;
        if (v && HANGUL.test(v)) {
          out = tr(v);
          if (out !== v) { records.push({ e: el, a: 'value', v: v }); el.value = out; }
        }
      }
    }
  }

  function walk(node) {
    if (node.nodeType === 3) { trText(node); return; }
    if (node.nodeType !== 1) return;
    if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'SVG' &&
        !(node.classList && node.classList.contains('onetap-lang'))) trAttrs(node);
    if (skipped(node)) return;
    if (node.tagName === 'META') return;
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }

  function trMeta() {
    var list = doc.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], v = el.getAttribute('content');
      if (v && HANGUL.test(v)) {
        var out = tr(v);
        if (out !== v) { records.push({ e: el, a: 'content', v: v }); el.setAttribute('content', out); }
      }
    }
  }

  function trJsonLd() {
    var list = doc.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      try {
        var data = JSON.parse(el.textContent);
        var changed = fixJson(data);
        if (changed) el.textContent = JSON.stringify(data);
      } catch (e) { /* leave as is */ }
    }
  }

  function fixJson(o) {
    var changed = false, i;
    if (Array.isArray(o)) {
      for (i = 0; i < o.length; i++) if (fixJson(o[i])) changed = true;
      return changed;
    }
    if (!o || typeof o !== 'object') return false;
    for (var key in o) {
      if (!Object.prototype.hasOwnProperty.call(o, key)) continue;
      var v = o[key];
      if (typeof v === 'string' && HANGUL.test(v)) {
        var out = DICT[v.trim()];
        if (out != null) { o[key] = out; changed = true; }
      } else if (v && typeof v === 'object') {
        if (fixJson(v)) changed = true;
      }
    }
    return changed;
  }

  /* ---------- apply / restore ---------- */
  function applyBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], id = el.getAttribute('data-i18n-block');
      if (!BLOCKS[id] || el.__i18nOrig != null) continue;
      el.__i18nOrig = el.innerHTML;
      el.innerHTML = BLOCKS[id];
    }
  }
  function restoreBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__i18nOrig != null) { el.innerHTML = el.__i18nOrig; el.__i18nOrig = null; }
    }
  }

  function applyEn() {
    var title = root.__onetapTitle || (root.__onetapTitle = doc.title);
    applyBlocks();
    walk(doc.body);
    trMeta();
    trJsonLd();
    doc.documentElement.lang = 'en';
    var t = DICT[title] || DICT[title.trim()];
    doc.title = t || title;
  }

  function restoreKo() {
    for (var i = records.length - 1; i >= 0; i--) {
      var r = records[i];
      if (r.n) { if (r.n.nodeValue !== r.v) r.n.nodeValue = r.v; }
      else if (r.e) {
        if (r.a === 'value') { if (r.e.value !== r.v) r.e.value = r.v; }
        else if (r.e.getAttribute(r.a) !== r.v) r.e.setAttribute(r.a, r.v);
      }
    }
    records.length = 0;
    restoreBlocks();
    var title = root.__onetapTitle;
    if (title) doc.title = title;
    doc.documentElement.lang = 'ko';
  }

  /* ---------- language switch UI ---------- */
  function buildSwitch() {
    var wrap = doc.createElement('div');
    wrap.className = 'onetap-lang';
    wrap.setAttribute('role', 'group');
    wrap.innerHTML = '<button type="button" data-onetap-lang="ko" aria-pressed="true">KO</button>' +
      '<button type="button" data-onetap-lang="en" aria-pressed="false">EN</button>';
    var box = doc.querySelector('.top-actions') || doc.querySelector('.topbar__inner') ||
      doc.querySelector('.topbar-inner') || doc.querySelector('.topbar-in') ||
      doc.querySelector('.top-badges') || doc.querySelector('.top-in') ||
      doc.querySelector('.topbar') || doc.querySelector('header');
    if (box) {
      if (box.classList.contains('top-badges')) box.insertBefore(wrap, box.firstChild);
      else if (box.classList.contains('top-actions')) box.insertBefore(wrap, box.firstChild);
      else {
        var act = box.querySelector('.top-actions');
        if (act) box.insertBefore(wrap, act); else box.appendChild(wrap);
      }
    } else {
      wrap.style.cssText = 'position:fixed;top:10px;right:10px;z-index:99999;background:rgba(255,255,255,.9);color:#111';
      doc.body.appendChild(wrap);
    }
    wrap.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-onetap-lang]');
      if (!b) return;
      setLang(b.getAttribute('data-onetap-lang'));
    });
    return wrap;
  }

  var CSS = '.onetap-lang{display:inline-flex;flex:none;align-items:center;padding:2px;border:1px solid currentColor;border-radius:999px;opacity:.72;transition:opacity .15s;vertical-align:middle;align-self:center}' +
    '.onetap-lang:hover,.onetap-lang:focus-within{opacity:1}' +
    '.onetap-lang button{appearance:none;-webkit-appearance:none;border:0;background:transparent;color:inherit;font:inherit;font-size:10.5px;font-weight:700;letter-spacing:.04em;line-height:1;padding:5px 6px;border-radius:999px;cursor:pointer;min-width:26px;text-align:center}' +
    '.onetap-lang button[aria-pressed="true"]{background:rgba(128,128,128,.3)}' +
    '@media (max-width:520px){.onetap-lang button{padding:4px 4px;font-size:10px;min-width:22px}.onetap-lang{margin-left:2px}}' +
    'html[lang="en"] .unit,html[lang="en"] .won{margin-left:4px}';

  function injectCss() {
    var s = doc.createElement('style');
    s.id = 'onetap-lang-css';
    s.textContent = CSS;
    (doc.head || doc.documentElement).appendChild(s);
  }

  function paintSwitch() {
    var bs = doc.querySelectorAll('[data-onetap-lang]');
    for (var i = 0; i < bs.length; i++) {
      bs[i].setAttribute('aria-pressed', bs[i].getAttribute('data-onetap-lang') === state.lang ? 'true' : 'false');
    }
    var wrap = doc.querySelector('.onetap-lang');
    if (wrap) wrap.setAttribute('aria-label', state.lang === 'ko' ? '언어' : 'Language');
  }

  /* ---------- observe ---------- */
  function startObserver() {
    if (observer || !root.MutationObserver) return;
    observer = new MutationObserver(function (muts) {
      if (state.lang !== 'en') return;
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'characterData') { trText(m.target); continue; }
        if (m.type === 'attributes') { if (m.target.nodeType === 1 && !skipped(m.target)) trAttrs(m.target); continue; }
        for (var j = 0; j < m.addedNodes.length; j++) {
          if (m.addedNodes[j].nodeType === 1 && m.addedNodes[j].hasAttribute && m.addedNodes[j].hasAttribute('data-i18n-block')) applyBlocks();
          walk(m.addedNodes[j]);
        }
      }
    });
    observer.observe(doc.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'aria-label', 'title', 'alt'] });
  }

  function setLang(lang) {
    state.lang = lang === 'en' ? 'en' : 'ko';
    try { root.localStorage.setItem(LANG_KEY, state.lang); } catch (e) { /* private mode */ }
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      if (observer) { observer.disconnect(); observer = null; }
      restoreKo();
    }
    paintSwitch();
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  function boot() {
    injectCss();
    buildSwitch();
    state.lang = detect();
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      doc.documentElement.lang = 'ko';
    }
    paintSwitch();
    root.ONETAP_I18N = {
      lang: function () { return state.lang; },
      setLang: setLang,
      t: tr,
      missing: function () { return missingList.slice(); },
      dict: DICT
    };
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window, document);
