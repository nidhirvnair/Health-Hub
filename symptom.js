function test(){
    qdiv="<h3>Are you having one or more of these symptoms</h4>";
    b1="<span><div class='flexbutton2'><input type='button'  class='check-box' id='noneb' label='none' value='none'></input></div><div class='flexbutton2'><input type='button' class='check-box' onclick='doo()' id='feverb' label='fever' value='fever'></input></div><div class='flexbutton2'><input type='button' onclick='doo()'class='check-box' id='sob' label='shob' value='Shortness of breath'></input></div><div class='flexbutton2'><input type='button' oncilck='doo()'class='check-box' id='tire' label='tired' value='Tiredness'></span>";
    b2="<span><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='DC' label='Dry cough' value='Dry cough'></input></div><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='st' label='sore' value='Sore throath'></input></div><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='hov' label='hovo' value='Hoarsness in voice'></input></div><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='ha' label='headache' value='Headache'></span>";
    b3="<span><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='DcF' label='Discoloured F and T' value='Discoloured Fingers and Toes'></input></div><div class='flexbutton2'><input type='button'onclick='doo()' class='check-box' id='rn' label='runnose' value='running noose'></input></div><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='losat' label='lossosat' value='loss of smell and taste'></input></div><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='mp' label='musclep' value='Muscle pain'></span>";
    b4="<span><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='r' label='ra' value='rash'></input></div><div class='flexbutton2'><input type='button'onclick='doo()' class='check-box' id='re' label='redeye' value='Reddness of eye'></input></div><div class='flexbutton2'><input type='button' onclick='doo()' class='check-box' id='dihoea' label='diarr' value='Diarrhoea'></span>";
    nb="<br><button id='nb' onclick='nexxt()'>Next</button>"
    bdiv=b1+b2+b3+b4+nb;
    adiv=qdiv+bdiv;
    document.getElementById("sdiv").innerHTML=adiv;
}
 ptn=0;
function nexxt(){
    qdiv1="<h3>Have you or someone in your family staying with you come in close contact with a laboratory confirmed Covid -19 Patient in the last 14 days without protective gear (Mask or PPE)?</h4>";
    b11="<span><div class ='flexbutton2'><input type ='button'onclick='doo()' class= 'check-box' id='Yes'label= 'button11' value = 'Yes'></input></div><div class ='flexbutton2'><input type ='button' class= 'check-box' id='No'label= 'button11.1' value = 'No'></input></div></span>"
    nb1="<br><button id='nb1' onclick='nextone()'>Next</button>"
    wdiv=qdiv1+b11+nb1;
    document.getElementById("ndiv").innerHTML=wdiv;
}

function nextone(){
    qdiv2="<h3>Have you been tested for COVID -19 in the last 14 days?</h3>";
    b12="<span><div class='flexbutton2'><input type='button' class= 'check-box' id ='button12' label='btn12' value='Not Tested'</input></div><div class='flexbutton2'><input type='button' class='check-box' id= 'Waiting' label='waiting for result'value='Yes Waiting for Result'></input></div><div class='flexbutton2'><input type='button' onclick='ex()'class='check-box' id= 'Positive' label='Positive result'value='Yes and Result is Postive'></input></div><div class='flexbutton2'><input type='button' class='check-box' id= 'Negative' label='Negative result'value='Yes and Result is Negative'></input></div></span>";
    b13="<br><button id='nb1' onclick='ddone()'>done</button>"
    tdiv=qdiv2+b12+b13;
    document.getElementById("ddiv").innerHTML=tdiv;
}

function doo(){
ptn=ptn+1;
console.log(ptn);
}
function ex(){
    ptn=ptn+4;
    console.log(ptn);
}
function ddone(){
    if(ptn==0){
        document.getElementById("ldiv").innerHTML="Low risk";
    }
    else{
           document.getElementById("ldiv").innerHTML="High risk";
    }
    if(ptn==1){
        document.getElementById("ldiv").innerHTML="Medium risk"; 
    }
}