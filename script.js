var searchButton = document.getElementById('searchbox');

var colors = ['green', 'black'];
var colorIndex = 0;

setInterval(function () {
    searchButton.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

let learnerCount = 0;
let teacherCount = 0;
const targetLearnerCount = 5000; // العدد المستهدف للتعداد
const targetTeacherCount = 5000;

const updateCounts = () => {
    document.getElementById("learnerCount").textContent = `+${learnerCount}`;
    document.getElementById("teacherCount").textContent = `+${teacherCount}`;
};

const countUp = () => {
    if (learnerCount < targetLearnerCount) {
        learnerCount += 10; // يمكنك ضبط القيمة حسب رغبتك
    }

    if (teacherCount < targetTeacherCount) {
        teacherCount += 10; // يمكنك ضبط القيمة حسب رغبتك
    }

    updateCounts();

    if (learnerCount < targetLearnerCount || teacherCount < targetTeacherCount) {
        setTimeout(countUp, 100); // زمن التأخير بين التحديثات (50 مللي ثانية في هذا المثال)
    }
};

countUp();


AOS.init(); //animation on scroll


  



  const texts1 = [
    "Take the first step to knowledge with US"
    // يمكنك إضافة المزيد من النصوص حسب الحاجة
  ];
  
  const texts2 = [
    "Take the first step to knowledge with US"
    // يمكنك إضافة المزيد من النصوص حسب الحاجة
  ];
  
  // تكوين Typed.js
  const options = {
    typeSpeed: 50, // سرعة الكتابة (يمكنك تعديلها)
    backSpeed: 20, // سرعة المسح (يمكنك تعديلها)
    backDelay: 4000, // مدة التأخير قبل المسح (يمكنك تعديلها)
    loop: true, // تكرار النصوص
  };
  
  // إنشاء Typed.js instance للعنصر الأول
  const typed1 = new Typed("#typedOutput1", {
    ...options,
    strings: texts1,
  });
  
  // إنشاء Typed.js instance للعنصر الثاني
  const typed2 = new Typed("#typedOutput2", {
    ...options,
    strings: texts2,
  });
  

  typed1.start();
  typed2.start();

  window.onload = function() {
    // اظهر الـ spinner في وسط الصفحة
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
  
    // انتظر 3 ثوانٍ ثم أظهر محتوى الصفحة وأخفي الـ spinner
    setTimeout(function () {
      var content = document.getElementById("content");
      content.style.display = "block";
      overlay.style.display = "none";
    }, 3000);
  };
  

