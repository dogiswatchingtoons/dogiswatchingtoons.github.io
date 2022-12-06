checkfor10 = document.querySelector('#checkfor10');
checkfor20 = document.querySelector('#checkfor20');
checkfor40 = document.querySelector('#checkfor40');
checkfor60 = document.querySelector('#checkfor60');
checkfor70 = document.querySelector('#checkfor70');
checkfor80 = document.querySelector('#checkfor80');
checkfor100 = document.querySelector('#checkfor100');
checkfor110 = document.querySelector('#checkfor110');

pten = document.querySelector('.pten');
ptwenty = document.querySelector('.ptwenty');
pforty = document.querySelector('.pforty');
psixty = document.querySelector('.psixty');
pseventy = document.querySelector('.pseventy');
peighty = document.querySelector('.peighty');
phundred = document.querySelector('.phundred');
phundredten = document.querySelector('.phundredten');

const mediaQuery = window.matchMedia('(max-width: 860px)')

function changeDis1()
{
    if(checkfor10.checked)
    {
       pten.style.padding = "1.5em 0em";
       pten.style.opacity = "1";
    }
    else
    {
       pten.style.padding = "1em 0em";
       pten.style.opacity = "0";
    }

    if(mediaQuery.matches){
       if(checkfor10.checked){
         pten.style.fontSize = "1.1rem";
       }
       else{
         pten.style.fontSize = "0.5rem";
       }
    }      
}

function changeDis2()
{
    if(checkfor20.checked)
    {
       ptwenty.style.padding = "1.5em 0em";
       ptwenty.style.opacity = "1";

    }
    else
    {
       ptwenty.style.padding = "1em 0em";
       ptwenty.style.opacity = "0";
    }
    if(mediaQuery.matches){
      if(checkfor20.checked){
         ptwenty.style.fontSize = "1.1rem";
      }
      else{
         ptwenty.style.fontSize = "0.5rem";
      }
   }
}

function changeDis4()
{
    if(checkfor40.checked)
    {
       pforty.style.padding = "1.5em 0em";
       pforty.style.opacity = "1";
    }
    else
    {
       pforty.style.padding = "1em 0em";
       pforty.style.opacity = "0";
    }
    if(mediaQuery.matches){
      if(checkfor40.checked){
         pforty.style.fontSize = "1.1rem";
      }
      else{
         pforty.style.fontSize = "0.5rem";
      }
   }
}

function changeDis6()
{
    if(checkfor60.checked)
    {
       psixty.style.padding = "1.5em 0em";
       psixty.style.opacity = "1";
    }
    else
    {
       psixty.style.padding = "1em 0em";
       psixty.style.opacity = "0";
    }
    if(mediaQuery.matches){
      if(checkfor60.checked){
         psixty.style.fontSize = "1.1rem";
      }
      else{
         psixty.style.fontSize = "0.5rem";
      }
   }
}

function changeDis7()
{
    if(checkfor70.checked)
    {
       pseventy.style.padding = "1.5em 0em";
       pseventy.style.opacity = "1";
    }
    else
    {
       pseventy.style.padding = "1em 0em";
       pseventy.style.opacity = "0";
    }
    if(mediaQuery.matches){
      if(checkfor70.checked){
         pseventy.style.fontSize = "1.1rem";
      }
      else{
         pseventy.style.fontSize = "0.5rem";
      }
   }
}

function changeDis8()
{
    if(checkfor80.checked)
    {
       peighty.style.padding = "1.5em 0em";
       peighty.style.opacity = "1";
    }
    else
    {
       peighty.style.padding = "1em 0em";
       peighty.style.opacity = "0";
    }
    if(mediaQuery.matches){
      if(checkfor80.checked){
         peighty.style.fontSize = "1.1rem";
      }
      else{
         peighty.style.fontSize = "0.5rem";
      }
   }
}

function changeDis10()
{
    if(checkfor100.checked)
    {
       phundred.style.padding = "1.5em 0em";
       phundred.style.opacity = "1";
    }
    else
    {
       phundred.style.padding = "1em 0em";
       phundred.style.opacity = "0";
    }
    if(mediaQuery.matches){
      if(checkfor100.checked){
         phundred.style.fontSize = "1.1rem";
      }
      else{
         phundred.style.fontSize = "0.5rem";
      }
   }
}

function changeDis11()
{
    if(checkfor110.checked)
    {
       phundredten.style.padding = "1.5em 0em";
       phundredten.style.opacity = "1";
    }
    else
    {
       phundredten.style.padding = "1em 0em";
       phundredten.style.opacity = "0";
    }
    if(mediaQuery.matches){
      if(checkfor110.checked){
         phundredten.style.fontSize = "1.1rem";
      }
      else{
         phundredten.style.fontSize = "0.5rem";
      }
   }
}
