try{
    const unitsBox = document.getElementById('command_units')
    const unitLeftBtn = document.getElementById('units_nav_left');
    const unitRightBtn = document.getElementById('units_nav_right');

     const scrollRight = () => {
        unitsBox.scrollBy(370, 0);
    }
    const scrollLeft = () => {
        unitsBox.scrollBy(-370, 0);
    }

    unitRightBtn.addEventListener('click', scrollRight);
    unitLeftBtn.addEventListener('click', scrollLeft);
}
catch (e) {
    console.log(e);
}

try {
    const marketKB = document.getElementsByClassName('marketing_content_box');
    const marketBtn = document.getElementsByClassName('marketing_svg');
    const marketSVG = document.getElementsByClassName('marketing_svg_btn');
    const marketItemName = document.getElementsByClassName('marketing_item_name');

    const idForItems = () =>{
        for(let i = 0; i < marketKB.length; i++){
            marketKB[i].id ='marketKB' + i;
            marketKB[i].classList.add('marketing_content_invisible');
            marketKB[0].classList.remove('marketing_content_invisible');
        }
        for(let i = 0; i < marketBtn.length; i++){
            marketBtn[i].id ='marketBtn' + i;
            marketBtn[i].addEventListener('click', setActive);
        }
        for(let i = 0; i < marketSVG.length; i++){
            marketSVG[i].id ='marketSVG' + i;
            marketSVG[0].classList.add('marketing_svg_btn_action');

        }
        for (let i = 0; i < marketItemName.length; i++){
            marketItemName[i].id ='marketItemName' + i;
            marketItemName[0].classList.add('marketing_item_name_action');
        }
    }

    const setActive = (e) => {
        let action
        if (e.target.id.length !== 0){
            action = Number(e.target.id.slice(-1));
        }
        else {
            action = Number(e.target.parentNode.id.slice(-1))
        }
        for(let i = 0; i < marketKB.length; i++){
            marketKB[i].classList.add('marketing_content_invisible');
            marketKB[action].classList.remove('marketing_content_invisible');
        }
        for(let i = 0; i < marketSVG.length; i++){
            marketSVG[i].classList.remove('marketing_svg_btn_action');
            marketSVG[action].classList.add('marketing_svg_btn_action');
        }
        for (let i = 0; i < marketItemName.length; i++){
            marketItemName[i].classList.remove('marketing_item_name_action');
            marketItemName[action].classList.add('marketing_item_name_action');
        }
    }

    idForItems();

}
catch (e) {
    console.log(e)
}

try{
    const responseBox = document.getElementById('responseBox');
    const responseLeftBtn = document.getElementById('response_left');
    const responseRightBtn = document.getElementById('response_right');
    const scrollRight = () => {
        responseBox.scrollBy(400, 0);
    }
    const scrollLeft = () => {
        responseBox.scrollBy(-400, 0);
    }
    responseLeftBtn.addEventListener('click', scrollLeft);
    responseRightBtn.addEventListener('click', scrollRight);

}
catch (e){
    console.log(e)
}
//research start
try{
    const researchBlock = document.getElementById('research_block')
    const researchBox = document.getElementById('research_box')
    const researchLeftBtn = document.getElementById('research_nav_left');
    const researchRightBtn = document.getElementById('research_nav_right');

    const scrollRight = () => {
        researchBlock.scrollBy((researchBox.offsetWidth + 80), 0);
    }
    const scrollLeft = () => {
        researchBlock.scrollBy(-(researchBox.offsetWidth + 80), 0);
    }

    researchRightBtn.addEventListener('click', scrollRight);
    researchLeftBtn.addEventListener('click', scrollLeft);
}
catch (e) {
    console.log(e);
}


//research end

// faq start
try{
    const openFaq = document.getElementsByClassName('faq_item_q_svg');
    const itemQ = document.getElementsByClassName('faq_item_q');
    const itemAns = document.getElementsByClassName('faq_ans');

    const setIdForElemFaq = () => {
        for (let i = 0; i < openFaq.length; i++){
            openFaq[i].id = 'openFaq' + i;
            openFaq[i].addEventListener('click', openAns)
        }
        for (let i = 0; i < itemQ.length; i++){
            itemQ[i].id = 'itemQ' + i;
        }
        for (let i = 0; i < itemAns.length; i++){
            itemAns[i].id = 'faq_ans' + i;
        }
    }

    const openAns = (e) => {
        let action;
        if ( e.target.classList.contains('faq_item_q_svg')) {
            action = Number(e.target.id.slice(-1))
        }
        if (!e.target.classList.contains('faq_item_q_svg')) {
            action = Number(e.target.parentNode.id.slice(-1));
        }
        document.getElementById(`openFaq${action}`).classList.toggle('faq_item_q_svg_active');
        document.getElementById(`faq_ans${action}`).classList.toggle('faq_ans_active');

    }





    setIdForElemFaq();


}
catch (e){
    console.log(e)
}
// faq end

try{
    const langBtn = document.getElementById('lang_icons');
    const langOther = document.getElementById('langOther');
    const langBlock = document.getElementById('langBlock');

    const openLangs = () => {
        langOther.classList.toggle('lang_open');
    }
    const closedLang = (e) => {
        e.stopPropagation();
        langOther.classList.remove('lang_open');

    }

    langBtn.addEventListener('click', openLangs);
    langBlock.addEventListener('mouseleave', closedLang);

}
catch (e) {
    console.log(e)
}