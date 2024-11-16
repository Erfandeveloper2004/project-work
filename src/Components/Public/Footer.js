import React from 'react';
import '../../Assets/Styles/Footer.css';
import Support from '../../Assets/Images/support.svg'
import Express from '../../Assets/Images/express-delivery.svg'
import Days from '../../Assets/Images/7days.svg'
import Home from '../../Assets/Images/home-payment.svg'
import Zemanat from '../../Assets/Images/zemanat-asl-bodan-kala.svg'
import Digikala from '../../Assets/Images/digikala.svg'
import Linkedin from '../../Assets/Images/linkedin.png'
import Insta from '../../Assets/Images/linkedin.png'
import Twitter from '../../Assets/Images/twitter.png'
import FooterLogo from '../../Assets/Images/footerlogo2.webp'
import Bazar from '../../Assets/Images/coffe-bazzar.svg'
import Myket from '../../Assets/Images/myket.svg'
import Sib from '../../Assets/Images/sib-app.svg'
import Rezi from '../../Assets/Images/rezi.webp'
import Kasbokar from '../../Assets/Images/kasbokar.webp'
import Lego from '../../Assets/Images/logo.png'


const Footer = () => {
  return (
    <footer className="shop-footer">
     <div className="footer-up">
       <div className="digikala-footer">
       <img src={Digikala} alt="Digikala logo" className="digikala-logo" />
       <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ &nbsp; | &nbsp; ۰۲۱-۹۱۰۰۰۱۰۰ &nbsp; | &nbsp; ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>

       </div>
    </div>

      <div className="footer-guarantees">
        <div className="guarantee-item">
          <img src={Zemanat} alt="Guarantee Icon" />
          <p>ضمانت اصل بودن کالا</p>
        </div>
        <div className="guarantee-item">
          <img src={Days} alt="Return Icon" />
          <p>۷ روز ضمانت بازگشت کالا</p>
        </div>
        <div className="guarantee-item">
          <img src={Support} alt="Support Icon" />
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="guarantee-item">
          <img src={Home} alt="Payment Icon" />
          <p>امکان پرداخت در محل</p>
        </div>
        <div className="guarantee-item">
          <img src={Express} alt="express Icon" />
          <p>امکان تحویل اکسپرس</p>
        </div>
      </div>

      <div className="footer-links">
      
        <div className="footer-section">
          <h3>راهنمای خرید از دیجی‌کالا</h3>
          <ul>
            <li><a href="#order">نحوه ثبت سفارش</a></li>
            <li><a href="#shipping">رویه ارسال سفارش</a></li>
            <li><a href="#payment-methods">شیوه‌های پرداخت</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>خدمات مشتریان</h3>
          <ul>
            <li><a href="#faq">پاسخ به پرسش‌های متداول</a></li>
            <li><a href="#returns">رویه‌های بازگرداندن کالا</a></li>
            <li><a href="#terms">شرایط استفاده</a></li>
            <li><a href="#privacy">حریم خصوصی</a></li>
            <li><a href="#bug-report">گزارش باگ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>با دیجی‌کالا</h3>
          <ul>
            <li><a href="#newsroom">اتاق خبر دیجیکالا</a></li>
            <li><a href="#sell">فروش در دیجی‌کالا</a></li>
            <li><a href="#careers">فرصت‌های شغلی</a></li>
            <li><a href="#contact">تماس با دیجی‌کالا</a></li>
            <li><a href="#about">درباره دیجی‌کالا</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>همراه ما باشید!</h3>
          <div className="social-icons">
            <a href="#linkedin"><img src={Linkedin} alt="LinkedIn" /></a>
            <a href="#twitter"><img src={Twitter} alt="Twitter" /></a>
            <a href="#instagram"><img src={Insta} alt="Instagram" /></a>
            <div className="footer-newsletter">
          <h3>با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="ایمیل شما" />
            <button type="button">ثبت</button>
          </div>
        </div>
          </div>
        </div>
      </div>

      <div className="footer-social-newsletter">
     
       
      </div>

      <div className="footer-app-download">
        <div className="footer-app-logo">
          
        <img src= {FooterLogo} />
        </div>
        <p>دانلود اپلیکیشن دیجی‌کالا</p>
        <div className="app-icons">
          <a href="#sib-app"><img src={Sib} alt="Sib App" /></a>
          <a href="#bazaar"><img src={Bazar}alt="Bazaar" /></a>
          <a href="#myket"><img src={Myket} alt="Myket" /></a>
        </div>
      </div>

<div className="footer-certificates">
          <div className="certificate-icons">
             <img src={Lego} alt="Certificate 1" />
             <img src={Kasbokar} alt="Certificate 2" />
             <img src={Rezi} alt="Certificate 3" />
          </div>
             <div className="certificate-description">
               <h4>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h4>
               <p>
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، 
                باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند 
                و ضمانت بازگشت کالا هم داشته باشد.
                <span id="additional-text" style={{ display: 'none' }}>
                  sdssfsfsfsfsfsf
                </span>
                </p>
                <button
                onClick={() => {
                  const additionalText = document.getElementById("additional-text");
                  additionalText.style.display =
                    additionalText.style.display === "none" ? "inline" : "none";
                }}
                className="show-more-button"
              >
                {document.getElementById("additional-text")?.style.display === "none" ? "مشاهده بیشتر" : "مشاهده کمتر"}
              </button>
            </div>
</div>


    </footer>
  );
};

export default Footer;
