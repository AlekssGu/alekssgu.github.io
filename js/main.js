$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

    if (consoleOpened) {
        console.warn("Perhaps you are an employer who is looking for talents?\n" +
                     "If so - please leave me a message on Facebook or LinkedIn");
    }

    var windowLocation = window.location.pathname.substr(1);
    if(windowLocation.toLowerCase().indexOf("leduslauzis") >= 0) {
        var questionType = $("#questionType").val();
        $("#question").html(getQuestion(questionType));
    }
});

$("#questionType").change(function() {
    var questionType = $("#questionType").val();
    $("#question").html(getQuestion(questionType));
});

function consoleOpened () {
    console.profile();
    console.profileEnd();
    if(console.clear) { console.clear() };
    return console.profiles.length > 0;
}

function getQuestion(questionType) {
    var dating = [
        "Describe your spouse on your first date?"
        ,"How did you meet your spouse?"
        ,"When and where did you first kiss?"
        ,"My spouse’s first kiss made me think ________________."
        ,"What color did your spouse wear on your first date?"
        ,"What did your spouse think about you after your first date?"
        ,"What was it your spouse that made you realize that they were “the one”?"
        ,"What was your worst date with your spouse?"
        ,"What would be your spouse’s ideal date?"
        ,"Where did you go on your first date?"
        ,"Where did you go on your most recent date with your spouse?"
        ,"Whom did your spouse last date before you met?"
        ,"Do you have a pet name for your spouse? What is it?"
        ,"How often do you date since your marriage?"
        ,"How would you express your love for your spouse on Valentine’s Day? On your spouse’s birthday?"
        ,"If someone told you that your spouse was an ex-convict, how would you react?"
        ,"Is there any special memory about your spouse that you will never forget?"
        ,"What is your spouse’s idea of romance?"
        ,"When did you first know you were in love?"
        ,"Which one of you makes the final decision on important matters?"
        ,"Which one of you proposed marriage first?"
        ,"Who does the most work around the house?"
    ];

    var firsts = [
        "What did your spouse get you for your first Christmas together? For your first birthday?"
        ,"What is the first thing your spouse would buy if they won the lottery?"
        ,"What was the first car your spouse ever owned?"
        ,"What was the first meal that your spouse ever cooked for you? Was it good?"
        ,"What was the first movie that you both watched together in a theater? At home?"
        ,"What was your first impression of your spouse?"
        ,"When and where was your first kiss?"
        ,"When did you and our spouse dance first and to what song?"
        ,"When did you have your first fight and what was it about?"
        ,"Which one of your said, “I love you” first?"
    ];

    var friendsAndFamily = [
        "Did your spouse have any pets growing up? What were their names?"
        ,"How many cousins does your spouse have?"
        ,"If you could send your mother-in-law or father-in-law on a trip, which would you choose, where would you send them and for how long?"
        ,"What adjective best describes your spouse’s family?"
        ,"What is the name of your spouse’s best friend?"
        ,"On what street did your spouse live on as a child?"
        ,"When is your mother-in-law’s birthday? What is your father-in-law’s birthday?"
        ,"Which of your spouse’s family members do you find most annoying?"
        ,"Which one of your spouse’s friends do you find the most attractive?"
        ,"Who would you say is the most unusual family member that you have met?"
    ];

    var favourites = [
        "What is your spouse’s favorite color?"
        ,"What is your spouse’s favorite junk food?"
        ,"What is your spouse’s favorite candy bar?"
        ,"What is your spouse’s favorite flavor of ice cream?"
        ,"What is your spouse’s favorite movie snack?"
        ,"What is your spouse’s favorite movie?"
        ,"What is your spouse’s favorite restaurant?"
        ,"What is your spouse’s favorite TV show?"
        ,"What is your spouse’s favorite vehicle?"
        ,"What meal is your spouse’s favorite?"
    ];

    var bestsAndWorsts = [
        "What clothing does your spouse wear that looks best on him/her?"
        ,"What do you like best about your spouse?"
        ,"What do you think is the one thing that your spouse likes best about you?"
        ,"What frightens your spouse the most?"
        ,"What is the most embarrassing thing your spouse has said or done around you?"
        ,"What is your spouse’s most irritating habit?"
        ,"What is your spouse’s most irritating habit in the bedroom?"
        ,"What is your spouse’s most-repeated sentence or phrase? Do you find this irritating?"
        ,"What one item of clothing does your spouse wear that you just cannot stand?"
        ,"What word best describes your spouse first thing in the morning?"
        ,"What would your spouse say is his/her best and worst features?"
        ,"Where will your spouse say they had the best vacation with you?"
        ,"Which of you eats the most junk food?"
        ,"Who is the best cook?"
        ,"Who would you say has the better in-laws, you or your spouse?"
    ];

    var finances = [
        "Have you ever bought anything and kept the purchase a secret from your spouse?"
        ,"Have you ever fought over finances?"
        ,"If your spouse won the lottery, what would be the first thing they buy?"
        ,"What bill does your spouse complain about most?"
        ,"What bill would you like to keep a secret from your spouse?"
        ,"To which charity is your spouse most likely to donate?"
        ,"Who actually controls the money in the family?"
        ,"Who is better at managing finances?"
        ,"Who makes the most money?"
        ,"Who spends the most money on personal items?"
    ];

    var preferences = [
        "Does your spouse prefer a bikini or one-piece swimsuit? Which do you prefer?"
        ,"How does your spouse like their steak cooked?"
        ,"How would you describe the perfect weekend?"
        ,"If today were the last day before the end of the world, how would you spend it? How would your spouse spend it?"
        ,"If you could change anything about your spouse, what would it be?"
        ,"If your house caught on fire, what one thing would your spouse grab before leaving?"
        ,"If your spouse could be any famous person, either living or dead, who would they choose to be?"
        ,"What is one item you like that your spouse would love to get rid of?"
        ,"What is one thing that your spouse does for you that they hate, but does because you love it?"
        ,"What is one trait of yours that annoys your spouse the most?"
        ,"What is the one bad habit you have that your spouse hates?"
        ,"What would your spouse request as a last meal?"
        ,"Which room in your house would your spouse like to makeover?"
    ];

    var funFacts = [
        "How many pairs of shoes does your spouse own?"
        ,"I wish my spouse would stop __________________."
        ,"What color are your spouse’s eyes?"
        ,"What is the last movie you saw together?"
        ,"What is the most embarrassing thing you have done around your spouse?"
        ,"What is your spouse’s favorite clothing color?"
        ,"What is your spouse’s pant size?"
        ,"What is your spouse’s shoe size?"
        ,"Which of their physical features does your spouse like the most? The least?"
        ,"Whom would you cast to play your spouse in a movie?"
    ];

    var future = [
        "How many kids do you want? How many does your spouse want?"
        ,"What is the destination your spouse would most likely choose for a second honeymoon?"
        ,"If you planned your dream vacation, where would you go and what would you do?"
        ,"Where would your spouse choose to go on a dream vacation?"
        ,"What is your spouse’s dream job? What is your dream job?"
        ,"Do you believe that two people can still be madly in love, even when they get old and gray?"
        ,"What is your definition of, “And they lived happily ever after”?"
        ,"If you woke up one day and found out your spouse had lost their memory, what would you do?"
        ,"Many marriages end up in divorce. What do you think is the most important part of the marriage to concentrate on to keep it stable?"
        ,"If you could live anywhere in the world, where would it be? Where would your spouse like to live if they had a choice?"
    ];

    var funQuestions = [
        "If you could describe your spouse in one word, what word would it be?"
        ,"If your mother-in-law were an animal, what animal would she be?"
        ,"If your spouse could wear one of your clothing items, what would it be?"
        ,"If your spouse had a superhero power, what would it be?"
        ,"If your spouse were a character from the sitcom ‘Friends’, who would they be?"
        ,"Imitate how your spouse behaves when they get angry."
        ,"What animal would your spouse choose to be?"
        ,"What is the strangest gift your spouse ever bought for you?"
        ,"Which cartoon character would your spouse choose to be?"
        ,"Which of you controls the TV remote?"
        ,"Which of you is smarter? Which of you has the highest IQ?"
        ,"Which of you spends more time on the computer? Doing what?"
        ,"Who takes longer to get dressed, you or your spouse?"
        ,"Who usually gets their way?"
        ,"Would you reveal a deep, dark secret about your spouse for a million dollars?"
    ];

    var loveQuestions = [
        "Do you make love as often as you would like?"
        ,"How do you know your spouse is in the mood for making love?"
        ,"How long does your love making usually last?"
        ,"How would you describe your spouse on your wedding night?"
        ,"What adjective describes your spouse in the bedroom?"
        ,"What do you find most physically attractive about your spouse?"
        ,"What does your partner wear to bed?"
        ,"What does your spouse’s sexiest pajamas look like?"
        ,"What grade would you give your spouse for their lovemaking?"
        ,"What is your spouse’s favorite time of day for making love?"
        ,"What song describes your spouse in the bedroom?"
        ,"When is your spouse least appealing to you? The most appealing?"
        ,"Where is the strangest place you have made love?"
        ,"Who is the dominating partner in the bedroom?"
        ,"Who would you say is better when it comes to making love, you or your spouse?"
    ];

    var questions = [];
    switch (questionType) {
        case "DATING":
            questions = questions.concat(dating);
            break;
        case "FIRSTS":
            questions = questions.concat(firsts);
            break;
        case "FRIENDSANDFAMILY":
            questions = questions.concat(friendsAndFamily);
            break;
        case "BESTSANDWORSTS":
            questions = questions.concat(bestsAndWorsts);
            break;
        case "FINANCES":
            questions = questions.concat(finances);
            break;
        case "PREFERENCES":
            questions = questions.concat(preferences);
            questions = questions.concat(favourites);
            break;
        case "FUNFACTS":
            questions = questions.concat(funFacts);
            break;
        case "FUTURE":
            questions = questions.concat(future);
            break;
        case "FUN":
            questions = questions.concat(funQuestions);
            break;
        case "LOVE":
            questions = questions.concat(loveQuestions);
            break;
        default:
            questions = questions.concat(dating);
            questions = questions.concat(firsts);
            questions = questions.concat(friendsAndFamily);
            questions = questions.concat(favourites);
            questions = questions.concat(bestsAndWorsts);
            questions = questions.concat(finances);
            questions = questions.concat(preferences);
            questions = questions.concat(funFacts);
            questions = questions.concat(future);
            questions = questions.concat(funQuestions);
            questions = questions.concat(loveQuestions);
            break;
    }

    return questions[Math.floor(Math.random()*questions.length)];
}