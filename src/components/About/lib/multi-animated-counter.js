import React from "react";
import $ from "jquery";

const visibilityIds = ['#counters_1', '#counters_2', '#counters_3',"#vector_counter"]; //must be an array, could have only one element
const counterClass = '.counter';
const defaultSpeed = 3000; //default value


function counter_init(groupId) {
        let num, speed, direction, index = 0;
        let easing;
        $(counterClass).each(function () {
            num = $(this).attr('data-targetnum');
            speed = $(this).attr('data-speed');
            direction = $(this).attr('data-direction');
            easing = $(this).attr('data-easing');
            if (speed === undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index); //add a class to recognize each counter
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
}

function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if(easing === undefined) easing = "swing";
        $(className).animate({
            num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction === 'reverse') {
                    $(this).text(num - Math.floor(now));
                } else {
                    $(this).text(Math.floor(now));
                }
            },
            complete: doCount
        });
}

function getVisibilityStatus() {
let elValFromTop = [];
let windowHeight = $(window).height(),
    windowScrollValFromTop = $(document).scrollTop();

visibilityIds.forEach(function (item, index) { //Call each class
    try { //avoid error if class not exist
        elValFromTop[index] = Math.ceil($(item).offset().top);
    } catch (err) {
        return; 
    }
    // if the sum of the window height and scroll distance from the top is greater than the target element's distance from the top, 
    //it should be in view and the event should fire, otherwise reverse any previously applied methods
    if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
        counter_init(item);
    }
});
}

function useCounter(_diff){
    React.useEffect(()=>{
        $(()=>{
             $(window).on('scroll', function () {getVisibilityStatus()});
             getVisibilityStatus();
        });
        return ()=>{ $(window).off('scroll')};
    },[_diff]);
}

export default useCounter;