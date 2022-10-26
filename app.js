var a = [
    {
        question : "Who designed Pakistan's national flag ___________",
        option : ["Ameer-ud-din Khidwai","Allama Iqbal","Sir Syed Ahmed Khan","None of these"],
        answer: "Ameer-ud-din Khidwai"
    },{
        question : "Name the Highest peak of Pakistan _____________",
        option : ["Karakoram","Mount Everst","K-2 Mountain","None of these"],
        answer: "K-2 Mountain"
    },{
        question : "Which is the national language of Pakistan _____________",
        option : ["A & B both","Sindhi","Punjabi","Urdu"],
        answer: "Urdu"
    },{
        question : "Which is the national bird of Pakistan _____________",
        option : ["parrot","Chakor","pigeon","Chicken"],
        answer: "Chakor"
    },{
        question : "Which is the national flower of Pakistan _____________",
        option : ["Jasmine","Rose","sunflower","None of these"],
        answer: "Jasmine"
    }
   ]

   var displaycurrentqes = document.getElementById("displaycurrentqes")
   var displayallques = document.getElementById("displayallques")
   var mainQues = document.getElementById("mainQues")
   var optionAll = document.getElementById("optionAll")
   var showResult = document.getElementById("showResult")

   var marksCal = document.getElementById("marksCal")
   var marksPer = document.getElementById("marksPer")
   var marksStat = document.getElementById("marksStat")


   var countIndex = 0;
   var marks = 0;

   function init(){
    displayallques.innerHTML = a.length;
    displaycurrentqes.innerHTML = countIndex +1 ;
    mainQues.innerHTML = a[countIndex].question; 
    
    optionAll.innerHTML = ""
    for(var i=0 ; i< a[countIndex].option.length;i++ ){
        
        optionAll.innerHTML += `<div  class="col-md-6">
        <div>
            <button onclick="checkresult('${a[countIndex].option[i]}','${a[countIndex].answer}')" class="mt-2  btn border-primary rounded-pill  bg-warning w-75">${a[countIndex].option[i]}</button>
        </div>
    </div>`
    }
   }
   init()

 
   function next(){
       countIndex++

       if(countIndex + 1  == a.length + 1){

        showResult.style.display = "block"
 
        marksCal.innerHTML = marks
        percentage = (marks/5)*100
        marksPer.innerHTML = percentage
        console.log(percentage + " % ")
        if(percentage < 50){
            marksStat.innerHTML = "fail"
        }else{
            marksStat.innerHTML = "pass"

        }
       }
                 
       init()
   }
   
   function checkresult(a,b){
       if(a == b){
        marks++;
        console.log(marks)
       }
       next()
   }