
const counterFunc = (percent,id) => {
    let a = 0;
    let run = 0;
    const frames = () => {
        a = a + 1;
        if (a < percent) {
            const htmlCount = document.getElementById(id);
            htmlCount.textContent = a + '%'; 
        } else {
            
            clearInterval(run);
        }
    }
    run = setInterval(frames,50);
}
counterFunc(96,'count_html');
counterFunc(86,'count_css');
counterFunc(76,'count_js');

const circleFunc = (num,className) => {
    let a = 0;
    let run = 0;

    const frames = () => {
        a = a - 1;
        if (a > num) {
            const circles = document.getElementsByClassName(className);
            for (const circle of circles) {
                circle.style.strokeDashoffset = a;
            }
        } else {
            clearInterval(run);
        }
    }
    run = setInterval(frames, 12);
}
circleFunc(-400,'circle_html');
circleFunc(-375,'circle_css');
circleFunc(-340,'circle_js');