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

// market start
try {
    const marketKB = document.getElementsByClassName('marketing_content_box');
    const marketBtn = document.getElementsByClassName('marketing_svg');
    const marketSVG = document.getElementsByClassName('marketing_svg_btn');
    const marketItemName = document.getElementsByClassName('marketing_item_name');
    const marketItem = document.getElementsByClassName('marketing_item');

    const idForItems = () =>{
        for(let i = 0; i < marketKB.length; i++){
            marketKB[i].id ='marketKB' + i;
            marketKB[i].classList.add('marketing_content_invisible');
            marketKB[0].classList.remove('marketing_content_invisible');
        }
        for(let i = 0; i < marketItem.length; i++){
            marketItem[i].id = 'marketItem'+i;
            marketItem[i].addEventListener('click', setActive);
        }
        if(!!marketBtn) {
            for (let i = 0; i < marketBtn.length; i++) {
                marketBtn[i].id = 'marketBtn' + i;
                marketBtn[i].addEventListener('click', setActive);
            }
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

// market end


//research start
try{
    const researchBlock = document.getElementById('research_block')
    const researchBoxs = document.getElementsByClassName('research_background_s');
    const researchLeftBtn = document.getElementById('research_nav_left');
    const researchRightBtn = document.getElementById('research_nav_right');

    const setIdForItems = () => {
        for (let i = 0; i < researchBoxs.length; i++){
            researchBoxs[i].id = 'researchBox' + i;
        }
    }
    setIdForItems();

    const researchBox = document.getElementById('researchBox1');

    if(researchBox.offsetWidth === 540) {
        const scrollRight = () => {
            researchBlock.scrollBy((540 + 80), 0);
        }
        const scrollLeft = () => {
            researchBlock.scrollBy(-(540 + 80), 0);
        }

        researchRightBtn.addEventListener('click', scrollRight);
        researchLeftBtn.addEventListener('click', scrollLeft);
    }
    if(researchBox.offsetWidth < 540) {

        const invisItems = () => {
            for (let i = 0; i < researchBoxs.length; i++) {
                researchBoxs[i].classList.add('invisible')
                researchBoxs[0].classList.remove('invisible')
            }

        }
        invisItems();
        const isActive = () => {
            for (let i = 0; i < researchBoxs.length; i++){
                if(!researchBoxs[i].classList.contains('invisible')) {
                    return i;
                }}}
        const stepLeft = () => {
            let active = Number(isActive());
            if (active === 0) {
                return false;
            }
            else {
                for (let i = 0; i < researchBoxs.length; i++){
                    researchBoxs[i].classList.add('invisible'); }
                researchBoxs[active - 1].classList.remove('invisible')
            }
        }
        const stepRight = () => {
            let active = Number(isActive());
            if ((active + 1) === researchBoxs.length) {
                return false;
            }
            else {
                for (let i = 0; i < researchBoxs.length; i++) {
                    researchBoxs[i].classList.add('invisible');
                    researchBoxs[active + 1].classList.remove('invisible');
                }
            }
        }
        let x1 = null;
        let y1 = null;

        const handleTouchStart = (event) => {
            const firstTouch = event.touches[0];
            x1 = firstTouch.clientX;
            y1 = firstTouch.clientY;

        }
        const handleToucheMove = (event) =>{
            if(!x1 || !y1){
                return false;
            }
            let x2 = event.touches[0].clientX
            let y2 = event.touches[0].clientY
            let xDiff = x2 - x1;
            let yDiff = y2 - y1;
            if(Math.abs(xDiff) < Math.abs(yDiff)){
                return false;
            }
            if (xDiff > 0){
                stepLeft();
            }
            if(xDiff < 0){
                stepRight();
            }
            x1 = null;
            y1 = null;
        }

        researchBlock.addEventListener('touchstart', handleTouchStart, false);
        researchBlock.addEventListener('touchmove', handleToucheMove, false);
        researchLeftBtn.addEventListener('click', stepLeft);
        researchRightBtn.addEventListener('click', stepRight);

    }
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

//lang start
try{
    const langBtn = document.getElementById('lang_icons');
    const langOther = document.getElementById('langOther');
    const langBlock = document.getElementById('langBlock');
    const langSVG = document.getElementById('langSVG');

    const openLangs = () => {
        langOther.classList.toggle('lang_open');
        langSVG.classList.toggle('lang_box_svg_action')
    }
    const closedLang = (e) => {
        e.stopPropagation();
        langOther.classList.remove('lang_open');
        langSVG.classList.remove('lang_box_svg_action')

    }

    langBtn.addEventListener('click', openLangs);
    langBlock.addEventListener('mouseleave', closedLang);

}
catch (e) {
    console.log(e)
}
//lang end

//industries start
try{
    const industriesItems = document.getElementsByClassName('industries_mob');
    const industriesBtnLeft = document.getElementById('industries_nav_left');
    const industriesBtnRight = document.getElementById('industries_nav_right');


    const setIdForElem = () => {
        for (let i = 0; i < industriesItems.length; i++){
            industriesItems[i].id = 'industriesItems' + i;
            industriesItems[i].classList.add('invisible');
            industriesItems[0].classList.remove('invisible');
        }
    }

    const isActive = () => {
        for (let i = 0; i < industriesItems.length; i++){
            if(!industriesItems[i].classList.contains('invisible')) {
            return i;
        }}}

    const stepLeft = () => {
        let active = Number(isActive());
        if (active === 0) {
                    return false;
                }
                    else {
                        for (let i = 0; i < industriesItems.length; i++){
                            industriesItems[i].classList.add('invisible'); }
                            industriesItems[active - 1].classList.remove('invisible')
                }
            }
    const stepRight = () => {
        let active = Number(isActive());
        if ((active + 1) === industriesItems.length) {
            return false;
        }
        else {
            for (let i = 0; i < industriesItems.length; i++) {
                industriesItems[i].classList.add('invisible');
                industriesItems[active + 1].classList.remove('invisible');
            }
        }
    }
    setIdForElem();

    industriesBtnLeft.addEventListener('click', stepLeft);
    industriesBtnRight.addEventListener('click', stepRight)
}
catch (e) {
    console.log(e)
}
//industries end

//response open start

 const textData = document.getElementsByClassName('response_data_content_text');
    const openBtn = document.getElementsByClassName('response_data_content_button');
    const btns = document.getElementById('response_data_nav_block');
    const response = document.getElementById('response_background');
    const responseBlock = document.getElementsByClassName('response_box');
    const limitHi = () => {
        for (let i = 0; i < openBtn.length; i++){
            openBtn[i].id = 'openBtn' + i;
            openBtn[i].addEventListener('click', openData)
        }
            for (let i = 0; i < textData.length; i++){
            textData[i].id = 'textData' + i;

            if(((textData[i].offsetHeight < 27) && (textData[i].offsetWidth > 1100))
            ||
            ((textData[i].offsetHeight < 53) && (textData[i].offsetWidth < 1100) && (textData[i].offsetWidth > 640))
            ||
            ((textData[i].offsetHeight < 157) && (textData[i].offsetWidth < 640))

            ){
                openBtn[i].classList.add('invisible');
            }
            textData[i].style.height = "155px";
        }

    }
    const openData = (e) => {
        let numb = e.target.id.slice(-1);
        btns.classList.add('invisible');
        textData[numb].style.height = 'fit-content';
        openBtn[numb].classList.add('invisible');
        textData[numb].addEventListener('mouseleave', function () {
            textData[numb].style.height = "150px";
            openBtn[numb].classList.remove('invisible');
            btns.classList.remove('invisible');

        })
        textData[numb].addEventListener('touchmove', function () {
            textData[numb].style.height = "150px";
            openBtn[numb].classList.remove('invisible');
            btns.classList.remove('invisible');

        })
    }
    limitHi();

////response open end