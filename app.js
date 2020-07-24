// ===> Quiz App <===

var name = prompt("Enter Your Name Please : ")
var up = name.toUpperCase()
document.getElementById('name').innerHTML=up

function finish(){



    var x = 0;

    var a = document.getElementsByClassName('radios-1');
    if(a[1].checked==true){
        x++
    }

    var b = document.getElementsByClassName('radios-2');
    if(b[2].checked==true){
        x++
    }

    var c = document.getElementsByClassName('radios-3');
    if(c[0].checked==true){
        x++
    }


    if((a[0].checked==false && a[1].checked==false && a[2].checked==false && a[3].checked==false) || (b[0].checked==false && b[1].checked==false && b[2].checked==false && b[3].checked==false) || (c[0].checked==false && c[1].checked==false && c[2].checked==false && c[3].checked==false)){
        alert('Some Feilds Are Empty !')
    }else{

        var quiz = document.getElementById('quiz');
        quiz.className='hide'

        var result = document.getElementById('result');
        result.className='show'

        function submitIt(){
            document.getElementById('score').innerHTML=x;
            document.getElementById('percent').innerHTML=((x/3)*100).toFixed(2)
            if(x==0){
                var emo = document.getElementById('emotions');
                emo.innerHTML= "Sorry, 0 Marks !";
                emo.style.color='red'
            
            }else if(x==1){
                var emo = document.getElementById('emotions');
                emo.innerHTML= "Failed, Need more Practice !";
                emo.style.color='red'
            }else if(x==2){
                var emo = document.getElementById('emotions');
                emo.innerHTML= "Need Practice !";
                emo.style.color='orange'
            }else if(x==3){
                var emo = document.getElementById('emotions');
                emo.innerHTML= "Congratulations !";
                emo.style.color='green'
            }
        }
        submitIt()
    }

}

var time = 60;
var inter=setInterval(timer,1000)
function timer(){
    time--;
    document.getElementById('timer').innerHTML=time;
    if(time<=0){
        clearInterval(inter)
        var y = document.getElementById('result1')
        y.className='show'
        var z = document.getElementById('quiz')
        z.className='hide'
    }
    if(time<10){
        document.getElementById('timer').innerHTML='0'+time;
    }
}
