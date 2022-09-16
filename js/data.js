let continentData= [
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
]
let filterCountry=continentData.filter(r=> r[0]==='Africa');
console.log(filterCountry)
window.onload = function(){

    subject1.addEventListener('change', function(){
      [].forEach.call(this.form.subject2.options, function(opt) {
        opt.disabled = opt.index == this.selectedIndex && opt.index != 0;
      }, this);
    }, false);
    
    subject2.addEventListener('change', function(){
      [].forEach.call(this.form.subject1.options, function(opt) {
        opt.disabled = opt.index == this.selectedIndex && opt.index != 0;
      }, this);
    }, false);

    subject3.addEventListener('change', function(){
      [].forEach.call(this.form.subject1.options, function(opt) {
        opt.disabled = opt.index == this.selectedIndex && opt.index != 0;
      }, this);
    }, false);
  };

  subject1.addEventListener('change', () => {
    if (subject1.selectedIndex != '') {
        subject2.remove(subject1.selectedIndex);
        subject3.remove(subject1.selectedIndex);
        subject4.remove(subject1.selectedIndex);
        subject5.remove(subject1.selectedIndex);
        subject6.remove(subject1.selectedIndex);
    }
})
subject2.addEventListener('change', () => {
    if (subject2.selectedIndex != '') {
        subject1.remove(subject2.selectedIndex);
        subject3.remove(subject2.selectedIndex);
        subject4.remove(subject2.selectedIndex);
        subject5.remove(subject2.selectedIndex);
        subject6.remove(subject2.selectedIndex);
    }
})
subject3.addEventListener('change', () => {
    if (subject3.selectedIndex != '') {
        subject1.remove(subject3.selectedIndex);
        subject2.remove(subject3.selectedIndex);
        subject4.remove(subject3.selectedIndex);
        subject5.remove(subject3.selectedIndex);
        subject6.remove(subject3.selectedIndex);
    }
})
subject4.addEventListener('change', () => {
    if (subject4.selectedIndex != '') {
        subject1.remove(subject4.selectedIndex);
        subject2.remove(subject4.selectedIndex);
        subject3.remove(subject4.selectedIndex);
        subject5.remove(subject4.selectedIndex);
        subject6.remove(subject4.selectedIndex);
    }
})
subject5.addEventListener('change', () => {
    if (subject5.selectedIndex != '') {
        subject1.remove(subject5.selectedIndex);
        subject2.remove(subject5.selectedIndex);
        subject3.remove(subject5.selectedIndex);
        subject4.remove(subject5.selectedIndex);
        subject6.remove(subject5.selectedIndex);
    }
})
subject6.addEventListener('change', () => {
    if (subject6.selectedIndex != '') {
        subject1.remove(subject6.selectedIndex);
        subject2.remove(subject6.selectedIndex);
        subject3.remove(subject6.selectedIndex);
        subject4.remove(subject6.selectedIndex);
        subject5.remove(subject6.selectedIndex);
    }
})

// subjectData.forEach((item)=>{
    //     let option=document.createElement('option');
    //     option.textContent=item;
    //     subject1.appendChild(option)
    // })

    // subjectData.forEach((item)=>{
    //     let option=document.createElement('option');
    //     option.textContent=item;
    //     subject2.appendChild(option)
    // })

    // subjectData.forEach((item)=>{
    //     let option=document.createElement('option');
    //     option.textContent=item;
    //     subject3.appendChild(option)
    // })

    // subjectData.forEach((item)=>{
    //     let option=document.createElement('option');
    //     option.textContent=item;
    //     subject4.appendChild(option)
    // })

    // subjectData.forEach((item)=>{
    //     let option=document.createElement('option');
    //     option.textContent=item;
    //     subject5.appendChild(option)
    // })

    // subjectData.forEach((item)=>{
    //     let option=document.createElement('option');
    //     option.textContent=item;
    //     subject6.appendChild(option)
    // })