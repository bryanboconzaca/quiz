/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val()
        var q1points = question1score(q1Result)
        var q2points = question2score(q2Result)
        var q3points = question3score(q3Result)
        var q4points = question4score(q4Result)
        var totalScore = q1points+ q2points + q3points + q4points;
        console.log(q1points,q2points,q3points,q4points,totalScore)
    if( totalScore < 11){
            $("#characters").text("goku");
            console.log("goku")
    }
    else if (totalScore >= 12 && totalScore < 15){
        $("#characters").text("sangi");
    }
    else if (totalScore >= 15 && totalScore < 20){
        $("#characters").text("Zoro");
    }
    else if (totalScore >= 20 && totalScore < 25){
        $("#characters").text("kousei")
    }
    

    
     console.log(totalScore)
    });

});

function question1score(q1Result) {
    if(q1Result==="fighter"){
        return 3 
    } else if (q1Result==="cook"){
        return 4
    } else if (q1Result==="pianist"){
        return 5
    } else if (q1Result==="swordsman"){
        return 3
    }
    else {
        return 0
    }
}
function question2score(q2Result) {
    if(q2Result==="smart"){
        return 5 
    } else if (q2Result==="dumb"){
        return 5
    } else if (q2Result==="romantic"){
        return 2
    } else if (q2Result==="loving"){
        return 3
    }
    else {
        return 0
    }
}
function question3score(q3Result) {
    if(q3Result==="lost of mother"){
        return 5 
    } else if (q3Result==="not accepted"){
        return 3
    } else if (q3Result==="not human"){
        return 2
    } else if (q3Result==="lost of friend"){
        return 5
    }
    else {
        return 0
    }
}
function question4score(q4Result) {
    if(q4Result==="best swordsman"){
        return 5
    } else if (q4Result==="all blue"){
        return 3
    } else if (q4Result==="strongest man"){
        return 2
    } else if (q4Result==="best pianist"){
        return 6
    }
    else {
        return 0
    }
}