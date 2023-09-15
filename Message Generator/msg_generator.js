
const RandomizeQuoteGen = () => {
    // messages and numbers
    let motivationalQuotes = ['Your time is limited, so don\'t waste it living someone else\'s life- Steve Jobs',
        'All our dreams can come true, if we have the courage to pursue them. —Walt Disney',
        'Success is a lousy teacher. It seduces smart people into thinking they can\'t- Bill Gates',
        'The best time to plant a tree was 20 years ago. The second best time is now. ―Chinese Proverb',
        'The secret of getting ahead is getting started. —Mark Twain',
        'Be humble in victory or defeat- Conor McGregor', 'I like criticism. It makes me stronger- LeBron James',];
    //generating a random number .
    let randomMsgPos = Math.floor(Math.random() * motivationalQuotes.length);
    //outputs the random end result to the console 
    return 'Your motivational quote is: ' + motivationalQuotes[randomMsgPos]
};
console.log(RandomizeQuoteGen);