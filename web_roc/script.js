// ===== BILINGUAL CONTENT =====
const translations = {
    en: {
        langText: 'English',
        heroTitle: 'Understanding Return of Capital (ROC)',
        heroSubtitle: 'Learn the benefits, risks, and hidden impact of ROC for investors.',
        learnBtnText: 'Learn More',
        whatTitle: 'What is Return of Capital?',
        whatSubtitle: 'Understand the fundamentals of ROC',
        rocDefTitle: 'What is ROC',
        rocDefDesc: 'Return of Capital is a distribution to shareholders that represents a return of their invested capital, not earnings from the company.',
        rocDefHighlight: 'Unlike dividends, ROC reduces your cost basis',
        rocHowTitle: 'How ROC Works',
        rocHowDesc: 'When a company distributes capital, it lowers your cost basis. This defers taxes but increases your capital gains liability when you sell.',
        rocHowHighlight: 'Reduces cost basis = Higher future capital gains',
        rocVsTitle: 'ROC vs Dividend',
        rocVsDesc: 'Dividends are company earnings; ROC is your own money returned. Dividends are taxed immediately; ROC taxes are deferred.',
        rocVsHighlight: 'Different tax treatment = Different investment strategy',
        qaTitle: 'Frequently Asked Questions',
        qaSubtitle: 'Everything you need to know about ROC',
        q1Title: 'The real danger of ROC without net income',
        q1Content: 'When a company returns capital without generating profits, it may be depleting its asset base. This can signal financial distress and is particularly concerning if debt is rising simultaneously.',
        q1Warning: 'Sustained ROC with negative earnings often precedes dividend cuts',
        warningLabel: 'Red Flag:',
        q2Title: 'Why professional investors prefer ROC',
        q2Content: 'Professional investors often prefer ROC over dividends because it allows tax deferral. They control when to trigger the capital gain by choosing when to sell the position, creating tax efficiency.',
        q2List: ['Deferred tax liability', 'Control over tax timing', 'Higher total returns if held long-term'],
        q3Title: 'Long-term vs short-term investor impact',
        q3Content: 'Long-term investors benefit from tax deferral on ROC, compounding gains over decades. Short-term traders face the same capital gains tax as dividends, making ROC less advantageous.',
        longTermLabel: 'Long-term (10+ years)',
        longTermDesc: 'ROC creates significant tax advantage',
        shortTermLabel: 'Short-term (< 1 year)',
        shortTermDesc: 'ROC offers minimal advantage over dividends',
        q4Title: 'How to identify toxic ROC',
        q4Content: 'Watch for declining NAV, rising debt, and unsustainable payout ratios. These are warning signs that the company cannot maintain its distribution through earnings alone.',
        q4Warnings: [
            'NAV declining quarter-over-quarter',
            'Debt rising while assets shrink',
            'Payout ratio exceeding 100% of earnings',
            'Management not addressing sustainability'
        ],
        q5Title: 'ROC vs selling shares',
        q5Content: 'ROC is essentially a forced sale of your position without you choosing the tax timing. Selling shares gives you control over tax realization and allows you to rebalance strategically.',
        rocLabel: 'ROC',
        sellingLabel: 'Selling',
        compTitle: 'ROC vs Dividend Comparison',
        compSubtitle: 'See how they differ across key factors',
        taxLabel: 'Tax Efficiency',
        rocTaxLabel: 'ROC',
        divTaxLabel: 'Dividend',
        ownershipLabel: 'Ownership Impact',
        rocOwnLabel: 'ROC',
        rocOwnValue: 'Reduces',
        divOwnLabel: 'Dividend',
        divOwnValue: 'No change',
        cashflowLabel: 'Cash Flow Reality',
        rocCashLabel: 'ROC',
        rocCashValue: 'Your money',
        divCashLabel: 'Dividend',
        divCashValue: 'Earnings',
        longtermLabel: 'Long-term Impact',
        rocLongLabel: 'ROC',
        rocLongValue: 'High gains risk',
        divLongLabel: 'Dividend',
        divLongValue: 'Steady income',
        toxicTitle: '⚠️ Toxic ROC Warning',
        toxicSubtitle: 'Know the red flags',
        warningMainTitle: 'Signs of Toxic ROC',
        sign1Title: 'Shrinking NAV',
        sign1Desc: 'Net Asset Value declining quarter after quarter while ROC continues',
        sign2Title: 'Rising Debt',
        sign2Desc: 'Debt increasing while the company pays out capital to shareholders',
        sign3Title: 'Unsustainable Payouts',
        sign3Desc: 'Payout ratios exceeding 100% of available cash flow',
        sign4Title: 'Lack of Transparency',
        sign4Desc: 'Management avoiding questions about ROC sustainability',
        actionTitle: 'What to do:',
        actionDesc: 'Always check the fund\'s financial statements before investing in companies or funds with ROC policies.',
        investorTitle: 'ROC Impact by Investor Type',
        investorSubtitle: 'How different investors are affected',
        traderTitle: 'Short-term Trader',
        traderTimelineLabel: 'Timeline',
        traderTimeline: 'Hold 3-12 months',
        traderImpactLabel: 'ROC Impact',
        traderImpact: 'Minimal advantage over dividends',
        traderTaxLabel: 'Tax Impact',
        traderTax: 'Short-term capital gains tax applies',
        traderAdvantage: '15-20%',
        traderAdvLabel: 'Advantage vs Dividend',
        traderPosTitle: '✓ Positive Impact:',
        traderPosList: [
            'Receives cash flow faster',
            'ROC has limited impact because shares are usually sold quickly',
            'Can provide additional profit besides capital gains'
        ],
        traderNegTitle: '✗ Negative Impact:',
        traderNegList: [
            'Tax benefits from ROC are often minimal',
            'Still subject to short-term capital gains tax',
            'Stock prices may decline after ROC distributions'
        ],
        mediumTitle: 'Medium-term Investor',
        mediumTimelineLabel: 'Timeline',
        mediumTimeline: 'Hold 3-7 years',
        mediumImpactLabel: 'ROC Impact',
        mediumImpact: 'Moderate tax efficiency gains',
        mediumTaxLabel: 'Tax Impact',
        mediumTax: 'Mixed - some deferral advantage',
        mediumAdvantage: '25-35%',
        mediumAdvLabel: 'Advantage vs Dividend',
        mediumPosTitle: '✓ Positive Impact:',
        mediumPosList: [
            'Provides additional cash flow',
            'Taxes not directly paid',
            'Money can be reinvested',
            'Helps compound growth'
        ],
        mediumNegTitle: '✗ Negative Impact:',
        mediumNegList: [
            'Cost basis continues to decrease',
            'Higher capital gains tax risk when selling',
            'Can make unhealthy company appear healthy',
            'Potential company value reduction if ROC excessive'
        ],
        investorLongTitle: 'Long-term Investor',
        investorTimelineLabel: 'Timeline',
        investorTimeline: 'Hold 10+ years',
        investorImpactLabel: 'ROC Impact',
        investorImpact: 'Significant tax efficiency gains',
        investorTaxLabel: 'Tax Impact',
        investorTax: 'Long-term capital gains + deferral',
        investorAdvantage: '35-50%',
        investorAdvLabel: 'Advantage vs Dividend',
        investorLongPosTitle: '✓ Positive Impact:',
        investorLongPosList: [
            'Greater tax efficiency',
            'Better long-term compounding',
            'Maintains the same number of shares'
        ],
        investorLongNegTitle: '✗ Negative Impact:',
        investorLongNegList: [
            'Cost basis may decrease significantly, even to zero',
            'Potentially massive future capital gains tax bill',
            'Risk of toxic ROC if the company keeps paying without strong profits'
        ],
        conclusionTitle: 'CONCLUSION',
        conclusionMain: 'Return of Capital (ROC) affects each type of investor differently. Short-term traders usually experience minimal impact, while medium- and long-term investors benefit more from tax deferral and compounding. However, the longer an investment is held, the greater the risk of cost basis reduction and future capital gains taxes. Therefore, ROC can be both beneficial and risky depending on the company’s condition and the investor’s strategy.',
        highlight1Text: 'ROC can delay tax liabilities for longer-term holders.',
        highlight2Text: 'Reinvested ROC helps amplify growth over time.',
        highlight3Text: 'Lower cost basis may create a larger capital gains bill later.',
        highlight4Text: 'Excessive ROC can signal toxic payout behavior.',
        highlight2: '✓',
        highlight2Text: 'Always check: Fund\'s NAV trend and debt levels',
        highlight3: '✓',
        highlight3Text: 'Remember: You still pay taxes eventually—just later',
        footerAbout: 'About ROC Education',
        footerDesc: 'A modern financial education platform dedicated to making complex investment concepts accessible to everyone.',
        footerMore: 'Learn More',
        footerLinks: ['What is ROC', 'FAQ', 'Comparison', 'Warnings'],
        footerCredit: 'Created by Christian Chico - GoTrade Internship Project',
        footerYear: '© 2026 ROC Education. All rights reserved.',
    },
    id: {
        langText: 'Indonesian',
        heroTitle: 'Memahami Return of Capital (ROC)',
        heroSubtitle: 'Pelajari manfaat, risiko, dan dampak tersembunyi ROC untuk investor.',
        learnBtnText: 'Pelajari Lebih Lanjut',
        whatTitle: 'Apa itu Return of Capital?',
        whatSubtitle: 'Pahami dasar-dasar ROC',
        rocDefTitle: 'Apa itu ROC',
        rocDefDesc: 'Return of Capital adalah distribusi kepada pemegang saham yang mewakili pengembalian modal investasi mereka, bukan keuntungan dari perusahaan.',
        rocDefHighlight: 'Tidak seperti dividen, ROC mengurangi basis biaya Anda',
        rocHowTitle: 'Bagaimana ROC Bekerja',
        rocHowDesc: 'Ketika perusahaan mendistribusikan modal, itu menurunkan basis biaya Anda. Ini menunda pajak tetapi meningkatkan kewajiban capital gains ketika Anda menjual.',
        rocHowHighlight: 'Mengurangi basis biaya = Keuntungan capital gains yang lebih tinggi di masa depan',
        rocVsTitle: 'ROC vs Dividen',
        rocVsDesc: 'Dividen adalah keuntungan perusahaan; ROC adalah uang Anda yang dikembalikan. Dividen dikenai pajak segera; pajak ROC ditangguhkan.',
        rocVsHighlight: 'Perlakuan pajak berbeda = Strategi investasi berbeda',
        qaTitle: 'Pertanyaan yang Sering Diajukan',
        qaSubtitle: 'Semua yang perlu Anda ketahui tentang ROC',
        q1Title: 'Bahaya nyata ROC tanpa pendapatan bersih',
        q1Content: 'Ketika perusahaan mengembalikan modal tanpa menghasilkan keuntungan, itu mungkin menguras basis aset. Ini dapat menandakan kesulitan keuangan dan sangat mengkhawatirkan jika utang meningkat secara bersamaan.',
        q1Warning: 'ROC berkelanjutan dengan pendapatan negatif sering mendahului pemotongan dividen',
        warningLabel: 'Bendera Merah:',
        q2Title: 'Mengapa investor profesional lebih suka ROC',
        q2Content: 'Investor profesional sering lebih suka ROC daripada dividen karena memungkinkan penundaan pajak. Mereka mengontrol kapan pemicu capital gain dengan memilih kapan menjual posisi, menciptakan efisiensi pajak.',
        q2List: ['Kewajiban pajak yang ditangguhkan', 'Kontrol atas waktu pajak', 'Pengembalian total yang lebih tinggi jika disimpan jangka panjang'],
        q3Title: 'Dampak investor jangka pendek vs jangka panjang',
        q3Content: 'Investor jangka panjang mendapat manfaat dari penundaan pajak ROC, memadukan keuntungan selama puluhan tahun. Pedagang jangka pendek menghadapi pajak capital gains yang sama seperti dividen, membuat ROC kurang menguntungkan.',
        longTermLabel: 'Jangka Panjang (10+ tahun)',
        longTermDesc: 'ROC menciptakan keuntungan pajak yang signifikan',
        shortTermLabel: 'Jangka Pendek (< 1 tahun)',
        shortTermDesc: 'ROC menawarkan keuntungan minimal dibanding dividen',
        q4Title: 'Cara mengidentifikasi ROC beracun',
        q4Content: 'Perhatikan penurunan NAV, peningkatan utang, dan rasio pembayaran yang tidak berkelanjutan. Ini adalah tanda peringatan bahwa perusahaan tidak dapat mempertahankan distribusinya melalui keuntungan saja.',
        q4Warnings: [
            'NAV menurun kuartal demi kuartal',
            'Utang meningkat sementara aset menyusut',
            'Rasio pembayaran melebihi 100% dari pendapatan',
            'Manajemen tidak mengatasi keberlanjutan'
        ],
        q5Title: 'ROC vs menjual saham',
        q5Content: 'ROC pada dasarnya adalah penjualan paksa posisi Anda tanpa Anda memilih waktu pajak. Menjual saham memberi Anda kontrol atas realisasi pajak dan memungkinkan Anda menyeimbangkan kembali secara strategis.',
        rocLabel: 'ROC',
        sellingLabel: 'Penjualan',
        compTitle: 'Perbandingan ROC vs Dividen',
        compSubtitle: 'Lihat bagaimana mereka berbeda di berbagai faktor',
        taxLabel: 'Efisiensi Pajak',
        rocTaxLabel: 'ROC',
        divTaxLabel: 'Dividen',
        ownershipLabel: 'Dampak Kepemilikan',
        rocOwnLabel: 'ROC',
        rocOwnValue: 'Mengurangi',
        divOwnLabel: 'Dividen',
        divOwnValue: 'Tidak ada perubahan',
        cashflowLabel: 'Realitas Arus Kas',
        rocCashLabel: 'ROC',
        rocCashValue: 'Uang Anda',
        divCashLabel: 'Dividen',
        divCashValue: 'Penghasilan',
        longtermLabel: 'Dampak Jangka Panjang',
        rocLongLabel: 'ROC',
        rocLongValue: 'Risiko keuntungan tinggi',
        divLongLabel: 'Dividen',
        divLongValue: 'Pendapatan stabil',
        toxicTitle: '⚠️ Peringatan ROC Beracun',
        toxicSubtitle: 'Ketahui bendera merahnya',
        warningMainTitle: 'Tanda-tanda ROC Beracun',
        sign1Title: 'NAV Menyusut',
        sign1Desc: 'Nilai Aset Bersih menurun kuartal demi kuartal sementara ROC berlanjut',
        sign2Title: 'Utang Meningkat',
        sign2Desc: 'Utang meningkat sementara perusahaan membayarkan modal kepada pemegang saham',
        sign3Title: 'Pembayaran Tidak Berkelanjutan',
        sign3Desc: 'Rasio pembayaran melebihi 100% dari arus kas yang tersedia',
        sign4Title: 'Kurangnya Transparansi',
        sign4Desc: 'Manajemen menghindari pertanyaan tentang keberlanjutan ROC',
        actionTitle: 'Yang harus dilakukan:',
        actionDesc: 'Selalu periksa laporan keuangan dana sebelum berinvestasi di perusahaan atau dana dengan kebijakan ROC.',
        investorTitle: 'Dampak ROC menurut Jenis Investor',
        investorSubtitle: 'Bagaimana investor yang berbeda terpengaruh',
        traderTitle: 'Pedagang Jangka Pendek',
        traderTimelineLabel: 'Jangka Waktu',
        traderTimeline: 'Tahan 3-12 bulan',
        traderImpactLabel: 'Dampak ROC',
        traderImpact: 'Keuntungan minimal dibanding dividen',
        traderTaxLabel: 'Dampak Pajak',
        traderTax: 'Pajak capital gains jangka pendek berlaku',
        traderAdvantage: '15-20%',
        traderAdvLabel: 'Keuntungan vs Dividen',
        traderPosTitle: '✓ Dampak Positif:',
        traderPosList: [
            'Mendapat cash flow lebih cepat',
            'ROC tidak terlalu memengaruhi investasi karena saham biasanya cepat dijual',
            'Bisa menjadi tambahan keuntungan selain capital gain'
        ],
        traderNegTitle: '✗ Dampak Negatif:',
        traderNegList: [
            'Manfaat pajak ROC sering tidak terlalu terasa',
            'Tetap terkena pajak capital gain jangka pendek',
            'Harga saham bisa turun setelah distribusi ROC'
        ],
        mediumTitle: 'Investor Jangka Menengah',
        mediumTimelineLabel: 'Jangka Waktu',
        mediumTimeline: 'Tahan 3-7 tahun',
        mediumImpactLabel: 'Dampak ROC',
        mediumImpact: 'Keuntungan efisiensi pajak sedang',
        mediumTaxLabel: 'Dampak Pajak',
        mediumTax: 'Campuran - beberapa keuntungan penundaan',
        mediumAdvantage: '25-35%',
        mediumAdvLabel: 'Keuntungan vs Dividen',
        mediumPosTitle: '✓ Dampak Positif:',
        mediumPosList: [
            'Memberikan cash flow tambahan',
            'Pajak tidak langsung dibayar',
            'Uang bisa digunakan untuk reinvestasi',
            'Membantu pertumbuhan compounding'
        ],
        mediumNegTitle: '✗ Dampak Negatif:',
        mediumNegList: [
            'Cost basis investasi terus menurun',
            'Risiko pajak capital gain lebih besar saat menjual saham',
            'Bisa membuat perusahaan terlihat sehat padahal tidak',
            'Berpotensi menurunkan nilai perusahaan jika ROC berlebihan'
        ],
        investorLongTitle: 'Investor Jangka Panjang',
        investorTimelineLabel: 'Jangka Waktu',
        investorTimeline: 'Tahan 10+ tahun',
        investorImpactLabel: 'Dampak ROC',
        investorImpact: 'Keuntungan efisiensi pajak yang signifikan',
        investorTaxLabel: 'Dampak Pajak',
        investorTax: 'Capital gains jangka panjang + penundaan',
        investorAdvantage: '35-50%',
        investorAdvLabel: 'Keuntungan vs Dividen',
        investorLongPosTitle: '✓ Dampak Positif:',
        investorLongPosList: [
            'Efisiensi pajak lebih besar',
            'Compounding lebih maksimal',
            'Tetap memiliki jumlah saham yang sama'
        ],
        investorLongNegTitle: '✗ Dampak Negatif:',
        investorLongNegList: [
            'Cost basis bisa turun drastis hingga nol',
            'Potensi tagihan pajak capital gain sangat besar di masa depan',
            'Risiko ROC beracun jika perusahaan terus membayar tanpa laba kuat'
        ],
        conclusionTitle: 'KESIMPULAN',
        conclusionMain: 'Return of Capital (ROC) memberikan dampak yang berbeda pada setiap tipe investor. Investor jangka pendek biasanya hanya merasakan dampak kecil, sementara investor jangka menengah dan panjang lebih merasakan manfaat penundaan pajak dan compounding. Namun, semakin lama investasi disimpan, semakin besar pula risiko penurunan cost basis dan potensi pajak capital gain di masa depan. Karena itu, ROC dapat menjadi keuntungan maupun risiko tergantung pada kondisi perusahaan dan strategi investasi investor.',
        highlight1Text: 'ROC dapat menunda kewajiban pajak untuk pemegang jangka panjang.',
        highlight2Text: 'ROC yang diinvestasikan kembali membantu memperbesar pertumbuhan seiring waktu.',
        highlight3Text: 'Basis biaya yang turun dapat menimbulkan tagihan capital gain yang lebih besar nanti.',
        highlight4Text: 'ROC berlebihan dapat menjadi tanda pembayaran beracun.',
        highlight2: '✓',
        highlight2Text: 'Selalu periksa: Tren NAV dana dan tingkat utang',
        highlight3: '✓',
        highlight3Text: 'Ingat: Anda masih membayar pajak pada akhirnya—hanya saja kemudian',
        footerAbout: 'Tentang ROC Education',
        footerDesc: 'Platform edukasi keuangan modern yang berdedikasi untuk membuat konsep investasi yang kompleks dapat diakses oleh semua orang.',
        footerMore: 'Pelajari Lebih Lanjut',
        footerLinks: ['Apa itu ROC', 'FAQ', 'Perbandingan', 'Peringatan'],
        footerCredit: 'Dibuat oleh Christian Chico - Proyek Magang GoTrade',
        footerYear: '© 2026 ROC Education. Semua hak dilindungi.',
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
    updateAllText();
    updateLanguageButton();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateLanguageButton() {
    const langToggle = document.getElementById('langToggle');
    const langFlag = langToggle.querySelector('.lang-flag');
    const langText = langToggle.querySelector('.lang-text');
    
    if (currentLanguage === 'en') {
        langFlag.textContent = '🇺🇸';
        langText.textContent = translations.en.langText;
    } else {
        langFlag.textContent = '🇮🇩';
        langText.textContent = translations.id.langText;
    }
}

function updateAllText() {
    const trans = translations[currentLanguage];
    
    Object.keys(trans).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (Array.isArray(trans[key])) {
                element.innerHTML = trans[key].map(item => `<li>${item}</li>`).join('');
            } else {
                element.textContent = trans[key];
            }
        }
    });
}

function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.infographic-card').forEach(card => {
        observer.observe(card);
    });
    
    document.querySelectorAll('.accordion-item').forEach(item => {
        observer.observe(item);
    });
    
    document.querySelectorAll('.comparison-item-large').forEach(item => {
        observer.observe(item);
    });
    
    document.querySelectorAll('.investor-card').forEach(card => {
        observer.observe(card);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initLearnMoreButton() {
    const learnBtn = document.getElementById('learnBtn');
    if (learnBtn) {
        learnBtn.addEventListener('click', () => {
            const qaSection = document.getElementById('qaSection');
            if (qaSection) {
                qaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

function initParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset;
                const floatingElements = document.querySelectorAll('.floating-element');
                
                floatingElements.forEach((element, index) => {
                    const speed = 0.5 + (index * 0.1);
                    element.style.transform = `translateY(${scrollTop * speed}px)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

function init() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    updateAllText();
    updateLanguageButton();
    
    initAccordions();
    initScrollReveal();
    initSmoothScroll();
    initLearnMoreButton();
    initParallax();
    
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.bar-fill');
                bars.forEach(bar => {
                    bar.style.animation = 'none';
                    setTimeout(() => {
                        bar.style.animation = '';
                    }, 10);
                });
                barObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.comparison-item-large').forEach(item => {
        barObserver.observe(item);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        toggleLanguage();
    }
});
