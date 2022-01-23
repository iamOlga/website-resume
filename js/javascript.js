/* animate hello block */
setTimeout(function() {
    const helloCircle = document.querySelector('.hello-animate');
    helloCircle.classList.add('hello-animate-on');

    const helloText = document.querySelector('.hello_text');
    helloText.classList.add('hello_text-opacity');

    const helloBg = document.querySelector('.bg-hello');
    helloBg.classList.add('bg-hello-opacity');
    
    setTimeout(function() {
        helloBg.classList.add('bg-hello-none');
    }, 750);

    setTimeout(function() {
        const headNameAnim = document.querySelector('.head-name').childNodes[1];
        headNameAnim.classList.add('head-name-animate');
    }, 1500);
}, 2000);

/* animate learn more button */
const learnMoreButton = document.querySelector('.info-button-container');
learnMoreButton.addEventListener('mouseover', (event) => {
    const infotextDiv = document.querySelector('.info-text');
    infotextDiv.classList.add('info-text-show');

    const learnMoreButtonDiv = document.querySelector('.info-button-container');
    learnMoreButtonDiv.classList.add('info-button-container-hide');
    
});

/* animate portfolio buttons */
const coverGit = document.querySelector('.portfolio-link-cover-git');
coverGit.addEventListener('mouseover', () => link_mouseover(coverGit, '.portfolio-link-lower-git', 'portfolio-link-cover-on', 'portfolio-link-lower-off', 'portfolio-link-lower-on'));
coverGit.addEventListener('mouseleave', () => link_mouseleave(coverGit, '.portfolio-link-lower-git', 'portfolio-link-cover-on', 'portfolio-link-lower-on', 'portfolio-link-lower-off'));

const coverFigma= document.querySelector('.portfolio-link-cover-figma');
coverFigma.addEventListener('mouseover', () => link_mouseover(coverFigma, '.portfolio-link-lower-figma', 'portfolio-link-cover-on', 'portfolio-link-lower-off', 'portfolio-link-lower-on'));
coverFigma.addEventListener('mouseleave', () => link_mouseleave(coverFigma, '.portfolio-link-lower-figma', 'portfolio-link-cover-on', 'portfolio-link-lower-on', 'portfolio-link-lower-off'));


function link_mouseover(div_cover, lower, cover_class, lower_class_r, lower_class_a){
    const div_lower = document.querySelector(lower);
    div_lower.classList.remove(lower_class_r);
    div_lower.classList.add(lower_class_a);
    div_cover.classList.add(cover_class);
}
function link_mouseleave(div_cover, lower, cover_class, lower_class_r, lower_class_a){
    const div_lower = document.querySelector(lower);
    div_lower.classList.remove(lower_class_r);
    div_lower.classList.add(lower_class_a);
    div_cover.classList.remove(cover_class);
}

/* animate scroll */
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});