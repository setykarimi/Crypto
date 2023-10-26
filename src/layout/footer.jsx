import React from "react";
import footerBg from "images/backgrounds/footerBg.svg";
import logoRed from "images/logoRed.svg";
import logoWhite from "images/logoWhite.svg";

export default function Footer() {
  return (
    <footer
      className="inner-container mx-auto mt-8 rounded-2xl bg-blue-primary p-8 text-white"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <img src={logoRed} alt="logo" className="mx-auto" />
          <span className="block mt-4">
            عضویت در خبرنامه کریپتر آخرین اخبار و اطلاعیه‌ها را در ایمیل خود
            دریافت کنید:
          </span>
        </div>
        <div>
          
        </div>
        <div></div>
      </div>
      <div className="mt-8">
        <img src={logoWhite} alt="logo" className="w-20" />

        <p className="mt-2 text-justify leading-relaxed">
          در صرافی ارز دیجیتال کریپتر که امن ترین صرافی کریپتوکارنسی
          (Cryptocurrency) کشور است، شما توانایی خرید و فروش انواع ارزهای
          دیجیتال معتبر دنیا مانند بیت کوین، اتریوم، تتر، دوج کوین، شیبا و ...
          را به صورت حرفه ای و سریع را خواهید داشت.با اطمینان خاطر فراوان در
          صرافی امن کریپتر اقدام به معامله و خرید ارز دیجیتال نمایید. پلتفرم
          ترید حرفه ای
        </p>
      </div>
    </footer>
  );
}
