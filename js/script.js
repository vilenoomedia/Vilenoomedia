const nextBtn = document.querySelector('.about__next')
const prevBtn = document.querySelector('.about__prev')
const sliderElem = document.querySelector('.about__slider')
const navLangBtn = document.querySelector('.nav__lang')
const navLangWrapper = document.querySelector('.nav__lang_wrapper')
const languageSelect = document.querySelector('select')
const mobileLangWrapper = document.querySelector('.mobile_lang')
const mobileLanguageSelect = document.querySelector('#MobileChangeLanguage')
const mobileWrapper = document.querySelector('.mobile_lang_wrapper')
const headerCaption = document.querySelector('.header__caption')
const btnElem = document.querySelector('.btn')
const navbarBtn = document.querySelector('.navbar__btn')
const menu = document.querySelector('.navbar__mobile')
const navWrapper = document.querySelector('.navbar__wrapper')
// NAV ITEMS
const menuHome = document.querySelector('.menu__home')
const menuAbout = document.querySelector('.menu__about')
const menuPackage = document.querySelector('.menu__package')
const menuContact = document.querySelector('.menu__contact')
const mobileLangBtn = document.querySelector('.mobile_lang')
// MOBILE MENU
const mobileAbout = document.querySelector('.mobile__menu_about')
const mobileContact = document.querySelector('.mobile__menu_contact')
const mobilePackage = document.querySelector('.mobile__menu_package')
const mobileHome = document.querySelector('.mobile__menu_home')
// SERVICES ITEM
const serviceMarket = document.querySelector('.service__market')
const serviceMarketP = document.querySelector('.service__market_p')
const serviceWeb = document.querySelector('.service__web')
const serviceWebP = document.querySelector('.service__web_p')
const serviceInsta = document.querySelector('.service__insta')
const serviceInstaP = document.querySelector('.service__insta_p')
const servicePhoto = document.querySelector('.service__photo')
const servicePhotoP = document.querySelector('.service__photo_p')
const serviceEdit = document.querySelector('.service__edit')
const serviceEditP = document.querySelector('.service__edit_p')
// PACKAGES
const packageTitleS = document.querySelector('.package__title_s')
const packageCaptionS = document.querySelector('.package__caption_s')
const packageMobileS = document.querySelector('.package_mobile_video_s')
const packageGimbalS = document.querySelector('.package_gimbal_s')
const packageEditS = document.querySelector('.package_edit_s')
const packageAdminS = document.querySelector('.package_admin_s')
const packagesPriceS = document.querySelector('.package__price_s')

const packageTitleE = document.querySelector('.package__title_e')
const packageCaptionE = document.querySelector('.package__caption_e')
const packageCameraE = document.querySelector('.package__camera_e')
const packageEditE = document.querySelector('.package__edit_e')
const packageAdminE = document.querySelector('.package__admin_e')
const packageDesignE = document.querySelector('.package__design_e')
const packagesPriceE = document.querySelector('.package__price_e')

const packageTitleM = document.querySelector('.package__title_m')
const packageCaptionM = document.querySelector('.package__caption_m')
const packageCameraM = document.querySelector('.package__camera_m')
const packageVideoM = document.querySelector('.package__video_m')
const packageEditM = document.querySelector('.package__edit_m')
const packageDesignM = document.querySelector('.pcakage__design_m')
const packagesPriceM = document.querySelector('.package__price_m')

const btnFirst = document.querySelector('.package__btn_1')
const btnSecond = document.querySelector('.package__btn_2')
const btnThird = document.querySelector('.package__btn_3')
// FOOTER
const footerAbout = document.querySelector('.footer__link_about')
const footerContact = document.querySelector('.footer__link_contact')
const footerPackage = document.querySelector('.footer__link_package')
const footerCopy = document.querySelector('.footer__caption')

const translations = {
    per: {
        navFirst: 'صفحه اصلی',
        navSec: 'پکیج ها',
        navThrd: 'درباره ما',
        navForth: 'ارتباط با ما',

        headerCap: 'ویلنو ارائه‌دهنده خدمات تخصصی ادمینی اینستاگرام، طراحی وب‌سایت و تولید محتواست. از فیلم‌برداری و عکاسی تا تدوین حرفه‌ای و اجرای استراتژی‌های مارکتینگ. کنار شما هستیم تا برندتان دیده شود و رشد کند.',
        btnElem: 'مشاهده پکیج ها',
        btnFirst : 'مشاهده پکیج ها',
        btnSecond : 'مشاهده پکیج ها',
        btnThird : 'مشاهده پکیج ها',

        mobileHome: 'صفحه اصلی',
        mobileAbout: 'درباره ما',
        mobileContact: 'ارتباط با ما',
        mobilePackage: 'پکیج ها',
        mobileLangBtn: 'انتخاب زبان',
        
        serviceWebsite: 'طراحی وبسایت',
        serviceWebstiteP: 'طراحی وب‌سایت حرفه‌ای، سریع و کاربرپسند متناسب با هویت برند شما. با رعایت اصول سئو، تجربه کاربری و سازگار با موبایل برای افزایش فروش و اعتماد مخاطب.',
        serviceInstagram: 'ادمینی اینستاگرام',
        serviceInstagramP: 'مدیریت حرفه‌ای پیج و وب‌سایت شامل تولید محتوا، زمان‌بندی و تعامل با مخاطبان. هدف ما افزایش بازدید، اعتمادسازی و تبدیل مخاطب به مشتری است.',
        serviceStraMarket: 'استراتژی مارکتینگ',
        serviceStraMarketP: 'طراحی و اجرای استراتژی بازاریابی بر اساس اهداف کسب‌وکار و رفتار مخاطبان هدف. با تحلیل بازار، رقبا و مسیر محتوا، برنامه‌ای منسجم برای افزایش دیده‌شدن، تعامل و فروش برند تدوین می‌کنیم.',
        servicePhotoGraph: 'عکس برداری و فیلم برداری',
        servicePhotoGraphP: 'عکاسی حرفه‌ای از محصولات، خدمات و فضای کسب‌وکار با نورپردازی و کادربندی اصولی فیلم‌برداری حرفه‌ای برای معرفی برند، محصولات و خدمات با سناریوی هدفمند.',
        serviceEditing: 'تدوین',
        serviceEditingP: 'تدوین حرفه‌ای ویدئو با رعایت ریتم مناسب، رنگ‌بندی اصولی و هماهنگ با هویت برند. با استفاده از افکت‌ها، تایپوگرافی و ساختار درست، ویدئوهایی جذاب و تأثیرگذار برای افزایش تعامل و دیده‌شدن تولید می‌کنیم.',

        pcakageTitleS: 'استارتر',
        packageCaptionS: 'برای شروع مسیر بازاریابی دیجیتال، مناسب کسب‌وکارهای تازه‌کار با نیازهای پایه‌ای در تحلیل بازار و حضور آنلاین',
        packageMobileS: 'فیلمبرداری با گوشی ایفون',
        packageGimbalS: 'فیلمبرداری با گوشی به همراه گیمبال',
        packageEditS: 'تدوین با سیستم و پریمیر پرو',
        packageAdminS: 'ادمینی پایه شامل 5 استوری روزانه و 3 پست هفتگی 1 گزارش ماهانه',
        packagesPriceS : '25,000,000 تومان',

        packageTitleE: 'حرفه ای',
        packageCAptionE : 'راهکار جامع و اختصاصی برای برندهای جدی که به دنبال بیشترین بازده، آنالیز دقیق داده‌ها و استراتژی‌ها هستند',
        packageCameraE: 'Alpha 7 و Sony FX3 فیلمبرداری با دوربین های روز دنیا مانند',
        packageEditE : 'تدوین با پریمیر پرو و افتر افکت',
        packageAdminE : 'ادمینی حرفه ای 10 استوری و 4 پست',
        packageDesignE : 'جوابگویی 24 ساعته دایرکت و طراحی قالب و پست و استوری',
        packagesPriceE : '40,000,000 تومان',

        packageTitleM : 'استاندارد',
        packageCaptionM : 'ترکیبی از خدمات استراتژیک و اجرایی برای رشد پایدار برند شما و افزایش تعامل مشتریان در فضای دیجیتال',
        packageCameraM : 'canon700D فیلمبرداری با دوربین',
        packageVideoM : 'فیلمبرداری با گیمبال دوربین',
        packageEditM : 'تدوین فقط با پریمیر',
        packageDesignM : 'طراحی کاور و هایلایت 1 گزارش ماهانه و 1 عدد کمپین فروش',
        packagesPriceM : '30,000,000 تومان',

        footerAbout: 'درباره ما',
        footerContact: 'ارتباط با ما',
        footerPackage: 'پکیج',
        footerCaption: 'تمامی حقوق این سایت متعلق به شرکت ویلنو است ©',
    },

    spa: {
        navFirst: 'pagina principal',
        navSec: 'Paquetes',
        navThrd: 'sobre nosotros',
        navForth: 'Contáctenos',

        headerCap: 'Wilno ofrece servicios especializados de administración de Instagram, diseño web y producción de contenido. Desde videografía y fotografía hasta edición profesional e implementación de estrategias de marketing. Te acompañamos para que tu marca sea visible y crezca.Wilno ofrece servicios especializados de administración de Instagram, diseño web y producción de contenido. Desde videografía y fotografía hasta edición profesional e implementación de estrategias de marketing. Te acompañamos para que tu marca sea visible y crezca.',
        btnElem: 'Ver paquetes',
        btnFirst : 'Ver paquetes',
        btnSecond : 'Ver paquetes',
        btnThird : 'Ver paquetes',

        mobileHome: 'pagina principal',
        mobileAbout:  'sobre nosotros',
        mobileContact: 'Contáctenos',
        mobilePackage: 'Paquetes',
        mobileLangBtn: 'Selección de idioma',

        serviceWebsite : 'Diseño de sitios web',
        serviceWebstiteP : 'Diseña un sitio web profesional, rápido e intuitivo que se adapte a tu identidad de marca. Cumple con los principios de SEO, la experiencia de usuario y la compatibilidad con dispositivos móviles para aumentar las ventas y la confianza de tu audiencia.',
        serviceInstagram : 'Administrador de Instagram',
        serviceInstagramP : 'Gestión profesional de páginas y sitios web, incluyendo producción de contenido, programación y fidelización de la audiencia. Nuestro objetivo es aumentar el tráfico, generar confianza y convertir a la audiencia en clientes.',
        serviceStraMarket : 'Estrategia de comercialización',
        serviceStraMarketP : 'Diseñamos e implementamos una estrategia de marketing basada en los objetivos comerciales y el comportamiento del público objetivo. Mediante el análisis del mercado, la competencia y la dirección del contenido, desarrollamos un plan coherente para aumentar la visibilidad de la marca, la interacción y las ventas.',
        servicePhotoGraph : 'Fotografía y videografía',
        servicePhotoGraphP : 'Fotografía profesional de productos, servicios y espacios comerciales con iluminación y encuadre adecuados. Videografía profesional para presentar la marca, los productos y los servicios con un escenario específico.',
        serviceEditing : 'Compilación',
        serviceEditingP : 'Edición de video profesional con ritmo adecuado, paleta de colores consistente e identidad de marca. Utilizando efectos especiales, tipografía y una estructura adecuada, producimos videos atractivos e impactantes para aumentar la interacción y la visibilidad.',

        pcakageTitleS: 'principiante',
        packageCaptionS: 'Para comenzar su viaje en marketing digital, adecuado para nuevas empresas con necesidades básicas en análisis de mercado y presencia en línea.',
        packageMobileS: 'Filmando con un iPhone',
        packageGimbalS: 'Filmando con un teléfono y un cardán',
        packageEditS: 'Edición con el sistema y Premiere Pro',
        packageAdminS: 'La administración básica incluye 5 historias diarias y 3 publicaciones semanales, 1 informe mensual',
        packagesPriceS : '450€',

        packageTitleE: 'profesional',
        packageCAptionE : 'Una solución integral y dedicada para marcas serias que buscan máxima rentabilidad, análisis de datos precisos y estrategias.',
        packageCameraE: 'Videografía con cámaras de última generación como la Alpha 7 y Sony FX3',
        packageEditE : 'Edición con Premiere Pro y After Effects',
        packageAdminE : 'Administrador profesional 10 historias y 4 publicaciones',
        packageDesignE : 'Respuesta directa las 24 horas y diseño de plantillas, publicaciones e historias.',
        packagesPriceE : '750€',

        packageTitleM : 'Estándar',
        packageCaptionM : 'Una combinación de servicios estratégicos y ejecutivos para hacer crecer su marca de manera sostenible y aumentar la participación del cliente en el espacio digital.',
        packageCameraM : 'Grabación de vídeo con la cámara Canon 700D',
        packageVideoM : 'Filmando con un cardán de cámara',
        packageEditM : 'Edición solo con Premiere',
        packageDesignM : 'Diseño de portada y destacados para 1 informe mensual y 1 campaña de ventas',
        packagesPriceM : '1100€',

        footerAbout: 'sobre nosotros',
        footerContact: 'Contáctenos',
        footerPackage: 'paquete',
        footerCaption: 'Todos los derechos de este sitio pertenecen a Wilno Company ©',

    }
}

// nextBtn.addEventListener('click', () => {
//     const slides = document.querySelectorAll('.about__slides')
//     sliderElem.appendChild(slides[0])
// })

// prevBtn.addEventListener('click', () => {
//     const slides = document.querySelectorAll('.about__slides')
//     sliderElem.prepend(slides[slides.length - 1])
// })

window.addEventListener('scroll', ()=> {
    navWrapper.classList.toggle("sticky", window.scrollY > 0)
})

navbarBtn.addEventListener('click', ()=> {
    navbarBtn.classList.toggle('navbar__btn--active')
    menu.classList.toggle('navbar__mobile--active')
})

navLangBtn.addEventListener('click', () => {
    navLangWrapper.classList.toggle('active')
})

mobileLangWrapper.addEventListener('click', event => {
    mobileWrapper.classList.toggle('active')
})

mobileLanguageSelect.addEventListener('change', event => {
    setLanguage(event.target.value)
    mobileWrapper.classList.remove('active')
    navbarBtn.classList.remove('navbar__btn--active')
    menu.classList.remove('navbar__mobile--active')
})

languageSelect.addEventListener('change', event => {
    setLanguage(event.target.value)
    navLangWrapper.classList.remove('active')
})

const setLanguage = (language) => {
    if (language == 'per') {
        menuHome.innerHTML = translations.per.navFirst
        menuAbout.innerHTML = translations.per.navThrd
        menuContact.innerHTML = translations.per.navForth
        menuPackage.innerHTML = translations.per.navSec

        headerCaption.innerHTML = translations.per.headerCap
        btnElem.innerHTML = translations.per.btnElem
        btnFirst.innerHTML = translations.per.btnFirst
        btnSecond.innerHTML = translations.per.btnSecond
        btnThird.innerHTML = translations.per.btnThird

        mobileAbout.innerHTML = translations.per.mobileAbout
        mobileContact.innerHTML = translations.per.mobileContact
        mobileHome.innerHTML = translations.per.mobileHome
        mobilePackage.innerHTML = translations.per.mobilePackage
        mobileLangBtn.innerHTML = translations.per.mobileLangBtn
        
        serviceMarket.innerHTML = translations.per.serviceStraMarket
        serviceMarketP.innerHTML = translations.per.serviceStraMarketP
        serviceEdit.innerHTML = translations.per.serviceEditing
        serviceEditP.innerHTML = translations.per.serviceEditingP
        serviceInsta.innerHTML = translations.per.serviceInstagram
        serviceInstaP.innerHTML = translations.per.serviceInstagramP
        serviceWeb.innerHTML = translations.per.serviceWebsite
        serviceWebP.innerHTML = translations.per.serviceWebstiteP
        servicePhoto.innerHTML = translations.per.servicePhotoGraph
        servicePhotoP.innerHTML = translations.per.servicePhotoGraphP

        packageTitleS.innerHTML = translations.per.pcakageTitleS
        packageCaptionS.innerHTML = translations.per.packageCaptionS
        packageMobileS.innerHTML = translations.per.packageMobileS
        packageGimbalS.innerHTML = translations.per.packageGimbalS
        packageEditS.innerHTML = translations.per.packageEditS
        packageAdminS.innerHTML = translations.per.packageAdminS
        packagesPriceS.innerHTML = translations.per.packagesPriceS

        packageTitleE.innerHTML = translations.per.packageTitleE
        packageCaptionE.innerHTML = translations.per.packageCAptionE
        packageEditE.innerHTML = translations.per.packageEditE
        packageAdminE.innerHTML = translations.per.packageAdminE
        packageCameraE.innerHTML = translations.per.packageCameraE
        packageDesignE.innerHTML = translations.per.packageDesignE
        packagesPriceE.innerHTML = translations.per.packagesPriceE

        packageTitleM.innerHTML = translations.per.packageTitleM
        packageCaptionM.innerHTML = translations.per.packageCaptionM
        packageEditM.innerHTML = translations.per.packageEditM
        packageDesignM.innerHTML = translations.per.packageDesignM
        packageCameraM.innerHTML = translations.per.packageCameraM
        packageVideoM.innerHTML = translations.per.packageVideoM
        packagesPriceM.innerHTML = translations.per.packagesPriceM

        footerAbout.innerHTML = translations.per.footerAbout
        footerContact.innerHTML = translations.per.footerContact
        footerPackage.innerHTML = translations.per.footerPackage
        footerCopy.innerHTML = translations.per.footerCaption
        
    } else if (language == 'spa') {
        menuHome.innerHTML = translations.spa.navFirst
        menuAbout.innerHTML = translations.spa.navThrd
        menuContact.innerHTML = translations.spa.navForth
        menuPackage.innerHTML = translations.spa.navSec

        headerCaption.innerHTML = translations.spa.headerCap
        btnElem.innerHTML = translations.spa.btnElem
        btnFirst.innerHTML = translations.spa.btnFirst
        btnSecond.innerHTML = translations.spa.btnSecond
        btnThird.innerHTML = translations.spa.btnThird

        mobileAbout.innerHTML = translations.spa.mobileAbout
        mobileContact.innerHTML = translations.spa.mobileContact
        mobileHome.innerHTML = translations.spa.mobileHome
        mobilePackage.innerHTML = translations.spa.mobilePackage
        mobileLangBtn.innerHTML = translations.spa.mobileLangBtn

        serviceMarket.innerHTML = translations.spa.serviceStraMarket
        serviceMarketP.innerHTML = translations.spa.serviceStraMarketP
        serviceEdit.innerHTML = translations.spa.serviceEditing
        serviceEditP.innerHTML = translations.spa.serviceEditingP
        serviceInsta.innerHTML = translations.spa.serviceInstagram
        serviceInstaP.innerHTML = translations.spa.serviceInstagramP
        serviceWeb.innerHTML = translations.spa.serviceWebsite
        serviceWebP.innerHTML = translations.spa.serviceWebstiteP
        servicePhoto.innerHTML = translations.spa.servicePhotoGraph
        servicePhotoP.innerHTML = translations.spa.servicePhotoGraphP

        packageTitleS.innerHTML = translations.spa.pcakageTitleS
        packageCaptionS.innerHTML = translations.spa.packageCaptionS
        packageMobileS.innerHTML = translations.spa.packageMobileS
        packageGimbalS.innerHTML = translations.spa.packageGimbalS
        packageEditS.innerHTML = translations.spa.packageEditS
        packageAdminS.innerHTML = translations.spa.packageAdminS
        packagesPriceS.innerHTML = translations.spa.packagesPriceS

        packageTitleE.innerHTML = translations.spa.packageTitleE
        packageCaptionE.innerHTML = translations.spa.packageCAptionE
        packageEditE.innerHTML = translations.spa.packageEditE
        packageAdminE.innerHTML = translations.spa.packageAdminE
        packageCameraE.innerHTML = translations.spa.packageCameraE
        packageDesignE.innerHTML = translations.spa.packageDesignE
        packagesPriceE.innerHTML = translations.spa.packagesPriceE

        packageTitleM.innerHTML = translations.spa.packageTitleM
        packageCaptionM.innerHTML = translations.spa.packageCaptionM
        packageEditM.innerHTML = translations.spa.packageEditM
        packageDesignM.innerHTML = translations.spa.packageDesignM
        packageCameraM.innerHTML = translations.spa.packageCameraM
        packageVideoM.innerHTML = translations.spa.packageVideoM
        packagesPriceM.innerHTML = translations.spa.packagesPriceM

        footerAbout.innerHTML = translations.spa.footerAbout
        footerContact.innerHTML = translations.spa.footerContact
        footerPackage.innerHTML = translations.spa.footerPackage
        footerCopy.innerHTML = translations.spa.footerCaption
    }
}