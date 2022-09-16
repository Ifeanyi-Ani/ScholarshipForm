// declaring variables
let fName = document.getElementById('fName');
let mName = document.getElementById('mName')
let lName = document.getElementById('lName')
let Email = document.getElementById('Email')
let phoneNum = document.getElementById('phoneNum')
let DOB = document.getElementById('DOB')
let place = document.getElementById('continent')
let country = document.getElementById('country')
let address = document.getElementById('address')
let mathematics = document.getElementById('mathematics')
let mathScore = document.getElementById('mathScore')
let english = document.getElementById('english')
let englishScore = document.getElementById('englishScore')
let subject1 = document.getElementById('subject1')
let subject1Score = document.getElementById('subject1Score')
let subject2 = document.getElementById('subject2')
let subject2Score = document.getElementById('subject2Score')
let subject3 = document.getElementById('subject3')
let subject3Score = document.getElementById('subject3Score')
let subject4 = document.getElementById('subject4')
let subject4Score = document.getElementById('subject4Score')
let subject5 = document.getElementById('subject5')
let subject5Score = document.getElementById('subject5Score')
let subject6 = document.getElementById('subject6')
let subject6Score = document.getElementById('subject6Score')
let proPicture = document.getElementById('proPicture')
let acceptTerms = document.getElementById('acceptTerms')
let gender = document.getElementsByName('Gender')
let messageTxt = document.getElementById('messageTxt')

// error message variable
let fNameError = document.getElementById('fNameError')
let mNameError = document.getElementById('mNameError')
let lNameError = document.getElementById('lNameError')
let emailError = document.getElementById('emailError')
let phoneNumError = document.getElementById('phoneNumError')
let DOBerror = document.getElementById('DOBerror')
let countryError = document.getElementById('countryError')
let genderError = document.getElementById('genderError')
let addressError = document.getElementById('addressError')
let mathScoreError = document.getElementById('mathScoreError')
let englishScoreError = document.getElementById('englishScoreError')
let subject1Error = document.getElementById('subject1Error')
let subject1ScoreError = document.getElementById('subject1ScoreError')
let subject2Error = document.getElementById('subject2Error')
let subject2ScoreError = document.getElementById('subject2ScoreError')
let subject3Error = document.getElementById('subject3Error')
let subject3ScoreError = document.getElementById('subject3ScoreError')
let subject4Error = document.getElementById('subject4Error')
let subject4ScoreError = document.getElementById('subject4ScoreError')
let subject5Error = document.getElementById('subject5Error')
let subject5ScoreError = document.getElementById('subject5ScoreError')
let subject6Error = document.getElementById('subject6Error')
let subject6ScoreError = document.getElementById('subject6ScoreError')
let proPictureError = document.getElementById('proPictureError')
let acceptTermsError = document.getElementById('acceptTermsError')
let btn = document.getElementById('btn')

let totalPoint = 0;
let regionPoint = 0;
let agePoint = 0;
let gradePoint = 0;
console.log(place.value)

// validating and checking that field is not empty 
function formValidation() {
    if (fName.value == '') {
        fNameError.innerHTML = '<i>field is required<i>';
        fName.style.borderColor = 'red';
    } else {
        fNameError.innerHTML = '';
        fName.style.borderColor = '#e7ecff'
    }
    if (mName.value == '') {
        mNameError.innerHTML = '<i>field is required<i>';
        mName.style.borderColor = 'red';
    } else {
        mNameError.innerHTML = '';
        mName.style.borderColor = '#e7ecff'
    }
    if (lName.value == '') {
        lNameError.innerHTML = '<i>field is required<i>';
        lName.style.borderColor = 'red';
    } else {
        lNameError.innerHTML = '';
        lName.style.borderColor = '#e7ecff'
    }
    if (Email.value == '') {
        emailError.innerHTML = '<i>field is required<i>';
        Email.style.borderColor = 'red';
    } else {
        emailError.innerHTML = '';
        Email.style.borderColor = '#e7ecff'
    }
    if (phoneNum.value == '') {
        phoneNumError.innerHTML = '<i>field is required<i>';
        phoneNum.style.borderColor = 'red';
    } else {
        phoneNumError.innerHTML = '';
        phoneNum.style.borderColor = '#e7ecff'
    }
    if (DOB.value == '') {
        DOBerror.innerHTML = '<i>field is required<i>';
    } else {
        DOBerror.innerHTML = '';
    }
    if (country.value == '') {
        countryError.innerHTML = '<i>field is required<i>';
        country.style.borderColor = 'red';
    } else {
        countryError.innerHTML = '';
        country.style.borderColor = '#e7ecff'
    }
    if (gender[0].checked == '' && gender[1].checked == '') {
        genderError.innerHTML = '<i>field is required<i>';
    } else {
        genderError.innerHTML = '';
    }
    if (address.value == '') {
        addressError.innerHTML = '<i>field is required<i>';
        address.style.borderColor = 'red';
    } else {
        addressError.innerHTML = '';
        address.style.borderColor = '#e7ecff'
    }
    if (mathScore.value == '') {
        mathScoreError.innerHTML = '<i>field is required<i>';
        mathScore.style.borderColor = 'red';
    } else {
        mathScoreError.innerHTML = '';
        mathScore.style.borderColor = '#e7ecff'
    }
    if (englishScore.value == '') {
        englishScoreError.innerHTML = '<i>field is required<i>';
        englishScore.style.borderColor = 'red';
    } else {
        englishScoreError.innerHTML = '';
        englishScore.style.borderColor = '#e7ecff'
    }
    if (subject1.value == '') {
        subject1Error.innerHTML = '<i>field is required<i>';
        subject1.style.borderColor = 'red';
    } else {
        subject1Error.innerHTML = '';
        subject1.style.borderColor = '#e7ecff'
    }
    if (subject1Score.value == '') {
        subject1ScoreError.innerHTML = '<i>field is required<i>';
        subject1Score.style.borderColor = 'red';
    } else {
        subject1ScoreError.innerHTML = '';
        subject1Score.style.borderColor = '#e7ecff'
    }
    if (subject2.value == '') {
        subject2Error.innerHTML = '<i>field is required<i>';
        subject2.style.borderColor = 'red';
    } else {
        subject2Error.innerHTML = '';
        subject2.style.borderColor = '#e7ecff'
    }
    if (subject2Score.value == '') {
        subject2ScoreError.innerHTML = '<i>field is required<i>';
        subject2Score.style.borderColor = 'red';
    } else {
        subject2ScoreError.innerHTML = '';
        subject2Score.style.borderColor = '#e7ecff'
    }
    if (subject3.value == '') {
        subject3Error.innerHTML = '<i>field is required<i>';
        subject3.style.borderColor = 'red';
    } else {
        subject3Error.innerHTML = '';
        subject3.style.borderColor = '#e7ecff'
    }
    if (subject3Score.value == '') {
        subject3ScoreError.innerHTML = '<i>field is required<i>';
        subject3Score.style.borderColor = 'red';
    } else {
        subject3ScoreError.innerHTML = '';
        subject3Score.style.borderColor = '#e7ecff'
    }
    if (subject4.value == '') {
        subject4Error.innerHTML = '<i>field is required<i>';
        subject4.style.borderColor = 'red';
    } else {
        subject4Error.innerHTML = '';
        subject4.style.borderColor = '#e7ecff'
    }
    if (subject4Score.value == '') {
        subject4ScoreError.innerHTML = '<i>field is required<i>';
        subject4Score.style.borderColor = 'red';
    } else {
        subject4ScoreError.innerHTML = '';
        subject4Score.style.borderColor = '#e7ecff'
    }
    if (subject5.value == '') {
        subject5Error.innerHTML = '<i>field is required<i>';
        subject5.style.borderColor = 'red';
    } else {
        subject5Error.innerHTML = '';
        subject5.style.borderColor = '#e7ecff'
    }
    if (subject5Score.value == '') {
        subject5ScoreError.innerHTML = '<i>field is required<i>';
        subject5Score.style.borderColor = 'red';
    } else {
        subject5ScoreError.innerHTML = '';
        subject5Score.style.borderColor = '#e7ecff'
    }
    if (subject6.value == '') {
        subject6Error.innerHTML = '<i>field is required<i>';
        subject6.style.borderColor = 'red';
    } else {
        subject6Error.innerHTML = '';
        subject6.style.borderColor = '#e7ecff'
    }
    if (subject6Score.value == '') {
        subject6ScoreError.innerHTML = '<i>field is required<i>';
        subject6Score.style.borderColor = 'red';
    } else {
        subject6ScoreError.innerHTML = '';
        subject6Score.style.borderColor = '#e7ecff'
    }
    if (proPicture.value == '') {
        proPictureError.innerHTML = '<i>field is required<i>';
        proPicture.style.borderColor = 'red';
    } else {
        proPictureError.innerHTML = '';
        proPicture.style.borderColor = '#e7ecff'
    }
    if (acceptTerms.checked == '') {
        acceptTermsError.innerHTML = '<i>field is required<i>';
        acceptTerms.style.borderColor = 'red';
    } else {
        acceptTermsError.innerHTML = '';
        acceptTerms.style.borderColor = '#e7ecff'
    }
    if (fName.value != '' &&
        mName.value != '' &&
        lName.value != '' &&
        Email.value != '' &&
        phoneNum.value != '' &&
        DOB.value != '' &&
        country.value != '' &&
        gender.checked != '' &&
        address.value != '' &&
        mathScore.value != '' &&
        englishScore.value != '' &&
        subject1.value != '' &&
        subject1Score.value != '' &&
        subject2.value != '' &&
        subject2Score.value != '' &&
        subject3.value != '' &&
        subject3Score.value != '' &&
        subject4.value != '' &&
        subject4Score.value != '' &&
        subject5.value != '' &&
        subject5Score.value != '' &&
        subject6.value != '' &&
        subject6Score.value != '' &&
        proPicture.value != '' &&
        acceptTerms.checked != ''
    ) {
        ageSection();
    }

}

// age section: point is awarded if requirement is meet
function ageSection() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let birthDate = new Date(DOB.value);
    let birthYear = birthDate.getFullYear();

    let dob = currentYear - birthYear;
    if (dob >= 18 && dob <= 24) {
        agePoint += 100;
    } else if (dob >= 25 && dob <= 30) {
        agePoint += 80;
    } else if (dob >= 31 && dob <= 35) {
        agePoint += 50;
    } else if (dob >= 36 && dob <= 40) {
        agePoint += 30;
    } else if (dob >= 41) {
        agePoint += 10;
    } else {
        agePoint += 0;
    }
    regionSection();
}

// country section point is awarded based on continent
function regionSection() {
    if (place.value == "Africa") {
        regionPoint += 50;
    } else if (place.value == "Asia") {
        regionPoint += 40;
    } else if (place.value == "South America") {
        regionPoint += 30;
    } else if (place.value == "North America") {
        regionPoint += 20;
    } else {
        regionPoint += 10;
    }
    gradeSection();
}

// in this section point is awarded based on Average score value
function gradeSection() {
    let score1 = Number(mathScore.value);
    let score2 = Number(englishScore.value);
    let score3 = Number(subject1Score.value);
    let score4 = Number(subject2Score.value);
    let score5 = Number(subject3Score.value);
    let score6 = Number(subject4Score.value);
    let score7 = Number(subject5Score.value);
    let score8 = Number(subject6Score.value);
    let scoreAvg = (score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8) / 8;
    if (scoreAvg >= 90 && scoreAvg <= 100) {
        gradePoint += 150;
    } else if (scoreAvg >= 85 && scoreAvg <= 89) {
        gradePoint += 140;
    } else if (scoreAvg >= 75 && scoreAvg <= 84) {
        gradePoint += 120;
    } else if (scoreAvg >= 65 && scoreAvg <= 74) {
        gradePoint += 100;
    } else if (scoreAvg >= 60 && scoreAvg <= 64) {
        gradePoint += 80;
    } else if (scoreAvg >= 50 && scoreAvg <= 59) {
        gradePoint += 50;
    } else if (scoreAvg >= 40 && scoreAvg <= 49) {
        gradePoint += 20;
    } else {
        gradePoint += 0;
    }
    decisionSection()
}
function decisionSection() {
    totalPoint = agePoint + regionPoint + gradePoint
    if (totalPoint >= 180) {
        messageTxt.innerHTML = 'Dear ' + fName.value.valueOf(fName) + ' you have been Awarded Scholarship: Your point is ' + totalPoint;
        messageTxt.style.color = 'green'
    } else {
        messageTxt.innerHTML = 'Dear ' + fName.value.valueOf(fName) + ' your Scholarship have been Rejected: Your point is ' + totalPoint;
        messageTxt.style.color = 'green'
    }
    analysePoints();
}
function analysePoints() {

    const ctx = document.getElementById('resultDisplay').getContext('2d');
    const resultPopDisplay = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Age', 'Country', 'Grade'],
            datasets: [{
                label: 'Number of Points',
                data: [agePoint, regionPoint, gradePoint],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    refreshInput();
}
// I can add more continent and country and it will be updated automatically
let myData = [
    ['Europe', 'Hungary'],
    ['Europe', 'Serbia'],
    ['Europe', 'Switzerland'],
    ['Europe', 'France'],
    ['Europe', 'Italy'],
    ['Asia', 'Vietnam'],
    ['Asia', 'Israel'],
    ['Asia', 'Turkey'],
    ['Australia', 'Solomon Islands'],
    ['Australia', 'Marshall Islands'],
    ['Australia', 'Micronesia'],
    ['Australia', 'Australia'],
    ['South America', 'Colombia'],
    ['South America', 'Uruguay'],
    ['Africa', 'Nigeria'],
    ['Africa', 'Ghana'],
    ['Africa', 'Zambia'],
    ['Asia', 'China'],
    ['Asia', 'Cyprus'],
    ['Asia', 'Iran'],
    ['Europe', 'Austria'],
    ['Europe', 'Belarus'],
    ['Europe', 'Belgium'],
    ['North America', 'Canada'],
    ['North America', 'Costa Rica'],
    ['North America', 'Mexico'],
    ['South America', 'Argentina'],
    ['South America', 'Brazil'],
    ['South America', 'Bolivia'],
    ['Africa', 'Mali'],
    ['Africa', 'Kenya']
]

// Dynamic Subject Selection Using filter to the ones that is selected
let subjectData = ['Select Subject','Geography', 'Social Studies','Economics', 'Biology', 'Chemistry', 'Physics', 'Government','Accounting','Banking and Finance'];

function subject1DropDown(){
    let uniqueOption = new Set();
    subjectData.forEach(r => uniqueOption.add(r));
    let uniqueList = [...uniqueOption];

    subject1.innerHTML = '';
    uniqueList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject1.appendChild(option);
    });
    subject1.addEventListener('change', ()=>{
        let subject = subject1.value
        subject2DropDown(uniqueList, subject);
    })
}

function subject2DropDown(data,choose){
    let filterSubject = data.filter(r => r != choose);
    let uniqueOption1 = new Set();
    filterSubject.forEach(r => uniqueOption1.add(r));
    let uniqueList1 = [...uniqueOption1];

    subject2.innerHTML = '';
    uniqueList1.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject2.appendChild(option);
    });
    
    subject2.addEventListener('change', ()=>{
        let option2=subject2.value;
        subject3DropDown(uniqueList1,option2);
    })
}
function subject3DropDown(data,choose){
    let filterSubject = data.filter(r => r != choose);
    let uniqueOption2 = new Set();
    filterSubject.forEach(r => uniqueOption2.add(r));
    let uniqueList2 = [...uniqueOption2];

    subject3.innerHTML = '';
    uniqueList2.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject3.appendChild(option);

    });
    subject3.addEventListener('change', ()=>{
        let option3=subject3.value;
        subject4DropDown(uniqueList2,option3);
    })
}
function subject4DropDown(data,choose){
    let filterSubject = data.filter(r => r != choose);
    let uniqueOption3 = new Set();
    filterSubject.forEach(r => uniqueOption3.add(r));
    let uniqueList3 = [...uniqueOption3];

    subject4.innerHTML = '';
    uniqueList3.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject4.appendChild(option);
    });
    subject4.addEventListener('change', ()=>{
        let option4=subject4.value;
        subject5DropDown(uniqueList3,option4);
    })
}
function subject5DropDown(data,choose){
    let filterSubject = data.filter(r => r != choose);
    let uniqueOption4 = new Set();
    filterSubject.forEach(r => uniqueOption4.add(r));
    let uniqueList4 = [...uniqueOption4];

    subject5.innerHTML = '';
    uniqueList4.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject5.appendChild(option);
    });
    subject5.addEventListener('change', ()=>{
        let option5=subject5.value;
        subject6DropDown(uniqueList4,option5);
    })
}
function subject6DropDown(data,choose){
    let filterSubject = data.filter(r => r != choose);
    let uniqueOption5 = new Set();
    filterSubject.forEach(r => uniqueOption5.add(r));
    let uniqueList5 = [...uniqueOption5];

    subject6.innerHTML = '';
    uniqueList5.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        subject6.appendChild(option);
    });
}


// Dynamic country and continent drop down selection using filter
function countryDropDown(data, choose) {
    let filterCountry = data.filter(r => r[0] === choose);
    let uniqueOption = new Set();
    filterCountry.forEach(r => uniqueOption.add(r[1]));
    let uniqueList = [...uniqueOption];

    country.innerHTML = '';
    uniqueList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        country.appendChild(option);
    });
}


function applyDrop() {
   let placeFrom = place.value
    countryDropDown(myData, placeFrom);
}
function continentDropDown() {
    let uniqueOption = new Set();
    myData.forEach(r => uniqueOption.add(r[0]));
    let uniqueList = [...uniqueOption];

    place.innerHTML = '';
    uniqueList.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        place.appendChild(option);
    });
}



// this refreshes my input Value
function refreshInput() {
    fName.value = '';
    lName.value = '';
    mName.value = '';
    Email.value = '';
    phoneNum.value = '';
    DOB.value = '';
    address.value = '';
    mathScore.value = '';
    englishScore.value = '';
    subject1.value = '';
    subject1Score.value = '';
    subject2.value = '';
    subject2Score.value = '';
    subject3.value = '';
    subject3Score.value = '';
    subject4.value = '';
    subject4Score.value = '';
    subject5.value = '';
    subject5Score.value = '';
    subject6.value = '';
    subject6Score.value = '';
    proPicture.value = '';
    agePoint=0;
    regionPoint=0;
    gradePoint=0;
    totalPoint=0;

}

// this function is called as soon as the page load
function dropDownLoaded() {
    // it triggers dynamic funtion for continent and select
    continentDropDown();
    applyDrop();

    // it triggers my dynamic function for subject
    subject1DropDown();
    
   
}

place.addEventListener('change', applyDrop);
document.addEventListener('DOMContentLoaded', dropDownLoaded);
btn.addEventListener('click', () => {
    formValidation();
})