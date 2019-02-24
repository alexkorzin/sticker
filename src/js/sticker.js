export default class Sticker {
    constructor(obj) {
        this.btn = document.querySelectorAll('.sticky_w');
        this.text = document.querySelectorAll('.sticky_t');
        this.btn.forEach((b, i) => {
            b.innert = b.getAttribute("data-sticky");
            b.text = this.text[i];
            b.text.style.pointerEvents = "none";

            b.offsetY = 0;
            b.offsetX = 0;

            b.translateX = 0;
            b.translateY = 0;

            b.btnSize = {
                width: parseInt(getComputedStyle(b).width) + parseInt(getComputedStyle(b).paddingRight) * 2,
                height: parseInt(getComputedStyle(b).height) + parseInt(getComputedStyle(b).paddingTop) * 2
            }

            b.addEventListener("mousemove", (e) => {
                e = e || window.event;
                b.offsetX = e.offsetX;
                b.offsetY = e.offsetY;
                b.translateX = (-b.btnSize.width / 2) + b.offsetX;
                b.translateY = (-b.btnSize.height / 2) + b.offsetY;
                TweenLite.to(b.text, obj.inertion, {
                    x: ((-b.btnSize.width / 2) + b.offsetX) / b.innert,
                    y: ((-b.btnSize.height / 2) + b.offsetY) / b.innert,
                    ease: Power1.easeOut
                })
                console.log(1);
            });

            b.addEventListener("mouseenter", (e) => {
                b.offsetX = e.offsetX;
                b.offsetY = e.offsetY;
                TweenLite.to(b.text, 0.1, {
                    x: ((-b.btnSize.width / 2) + b.offsetX) / b.innert,
                    y: ((-b.btnSize.height / 2) + b.offsetY) / b.innert,
                    ease: Power1.easeOut
                })
            });

            b.addEventListener("mouseleave", (e) => {
                TweenLite.to(this.text, obj.spring, {
                    x: 0,
                    y: 0,
                    ease: Power1.easeOut
                })
            });

        })
    }
}

window.Sticker = Sticker;



