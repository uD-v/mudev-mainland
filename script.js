(function(){
var root=document.documentElement,$=function(s){return document.querySelector(s)};
var nodes=[].slice.call(document.querySelectorAll('[data-en]:not(meta)'));
nodes.forEach(function(n){n.dataset.uk=n.innerHTML});
var md=$('meta[name=description]'),mdUk=md?md.content:'';
var msg={uk:{send:'Надсилаємо…',ok:'Дякуємо! Запит надіслано, ми відповімо найближчим часом.',err:'Не вдалося надіслати. Напишіть нам у Telegram або на email.',req:'Заповніть це поле'},
en:{send:'Sending…',ok:'Thank you! Your request is sent, we will reply soon.',err:'Could not send. Please write to us on Telegram or by email.',req:'Please fill in this field'}};
var lang='uk';try{lang=localStorage.getItem('lang')||'uk'}catch(e){}
var btnLang=$('#lang'),scene=$('.scene'),themeBtn=$('#theme');
if(scene)scene.dataset.labelUk=scene.getAttribute('aria-label');
function setLang(l){lang=l;root.lang=l;
nodes.forEach(function(n){n.innerHTML=l==='en'?n.dataset.en:n.dataset.uk});
if(md&&md.dataset.en)md.content=l==='en'?md.dataset.en:mdUk;
if(btnLang){btnLang.textContent=l==='en'?'UA':'EN';btnLang.setAttribute('aria-label',l==='en'?'Перемкнути на українську':'Switch to English')}
if(themeBtn){var tl=l==='en'?'Toggle theme':'Змінити тему';themeBtn.setAttribute('aria-label',tl);themeBtn.title=tl}
if(scene)scene.setAttribute('aria-label',l==='en'?scene.dataset.labelEn:scene.dataset.labelUk);
try{localStorage.setItem('lang',l)}catch(e){}}
if(btnLang)btnLang.onclick=function(){setLang(lang==='uk'?'en':'uk')};
if(lang==='en')setLang('en');
if(themeBtn)themeBtn.onclick=function(){var t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
var menu=$('#menu'),burger=$('#burger');
if(menu&&burger){
function closeMenu(){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}
burger.onclick=function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
menu.addEventListener('click',function(e){if(e.target.tagName==='A')closeMenu()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});}

/* counters: run once when the numbers scroll into view */
var cs=[].slice.call(document.querySelectorAll('[data-count]'));
function run(el){var to=+el.dataset.count,suf=el.dataset.suf||'',t0=performance.now(),d=1100;
(function f(t){var p=Math.min((t-t0)/d,1),v=Math.round(to*(1-Math.pow(1-p,3)));el.textContent=v+suf;if(p<1)requestAnimationFrame(f)})(t0)}
if(cs.length&&'IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
cs.forEach(function(c){c.textContent='0'+(c.dataset.suf||'')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);run(e.target)})},{threshold:.6});
cs.forEach(function(c){io.observe(c)});}

var form=$('#form');
if(form){
var status=$('#status'),send=$('#send');
var API='https://script.google.com/macros/s/AKfycbyO05i63UczuLC4UMKZfd6MR_FYcpHN-zFluqAymQGVydMp9VajKUIObcdtFBcXsnCjaw/exec';
function say(t,c){status.textContent=t;status.className='status '+(c||'')}
form.addEventListener('submit',function(e){e.preventDefault();
var m=msg[lang],bad=null;
['name','telegram','service'].forEach(function(id){var f=$('#'+id),ok=!!f.value.trim();
f.setAttribute('aria-invalid',!ok);if(!ok&&!bad){bad=f;say(m.req,'err')}});
if(bad){bad.focus();return}
var data={name:$('#name').value,telegram:$('#telegram').value.trim(),service:$('#service').value,message:$('#message').value};
send.disabled=true;var label=send.innerHTML;send.textContent=m.send;say('');
fetch(API,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
.then(function(){say(m.ok,'ok');form.reset()})
.catch(function(){say(m.err,'err')})
.finally(function(){send.disabled=false;send.innerHTML=label});});
form.addEventListener('input',function(e){e.target.removeAttribute('aria-invalid')});}
})();
