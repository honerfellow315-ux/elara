/* Elara Wave — Production JS */
document.addEventListener('DOMContentLoaded', function () {
  /* Mobile nav */
  var nt=document.getElementById('navToggle'), mn=document.getElementById('mobileNav'), ov=document.getElementById('mobileNavOverlay'), cb2=document.getElementById('mobileNavClose');
  function openNav(){mn&&mn.classList.add('active');ov&&ov.classList.add('active');nt&&nt.setAttribute('aria-expanded','true');}
  function closeNav(){mn&&mn.classList.remove('active');ov&&ov.classList.remove('active');nt&&nt.setAttribute('aria-expanded','false');}
  if(nt)nt.addEventListener('click',openNav);
  if(cb2)cb2.addEventListener('click',closeNav);
  if(ov)ov.addEventListener('click',closeNav);
  /* Mobile dropdowns */
  document.querySelectorAll('.mobile-nav .has-dropdown > a').forEach(function(a){
    a.addEventListener('click',function(e){e.preventDefault();a.parentElement.classList.toggle('open');});
  });
  /* Bottle slideshow */
  var slides=document.querySelectorAll('.bottle-slide');
  if(slides.length>1){var cur=0;slides[cur].classList.add('active');setInterval(function(){slides[cur].classList.remove('active');cur=(cur+1)%slides.length;slides[cur].classList.add('active');},3500);}
  /* Lazy load observer */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var img=e.target;img.classList.add('loaded');io.unobserve(img);}});},{rootMargin:'200px'});
    document.querySelectorAll('img[loading="lazy"]').forEach(function(img){io.observe(img);});
  }
  /* Global overflow guard */
  document.documentElement.style.overflowX='hidden';
  document.body.style.overflowX='hidden';
});
