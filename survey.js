const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyResponses = {
  name: "",
  activity: "",
  music: "",
  food: "",
  sport: "",
  superpower: ""
};

const runSurvey = (surveyResponses) => {
  askName(surveyResponses);
};

const askName = (surveyResponses) => {
  rl.question('What\'s your name? (Nicknames are also acceptable :): ', answer => {
    surveyResponses.name = answer;
    askActivity(surveyResponses);
  });
};

const askActivity = (surveyResponses) => {
  rl.question('What\'s an activity you like doing? ', answer => {
    surveyResponses.activity = answer;
    askMusic(surveyResponses);
  });
};

const askMusic = (surveyResponses) => {
  rl.question('What do you listen to while doing that? ', answer => {
    surveyResponses.music = answer;
    askMeal(surveyResponses);
  });
};

const askMeal = (surveyResponses) => {
  rl.question('Which meal is your favourite? (eg: dinner brunch, etc.): ', answer => {
    surveyResponses.meal = answer;
    askFood(surveyResponses);
  });
};

const askFood = (surveyResponses) => {
  rl.question('What\'s your favourite thing to eat with that meal? ', answer => {
    surveyResponses.food = answer;
    askSport(surveyResponses);
  });
};

const askSport = (surveyResponses) => {
  rl.question('Which sport is your absolute favourite? ', answer => {
    surveyResponses.sport = answer;
    askSuperpower(surveyResponses);
  });
};

const askSuperpower = (surveyResponses) => {
  rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', answer => {
    surveyResponses.superpower = answer;
    returnProfile(surveyResponses);
  });
};

const returnProfile = (surveyResponses) => {
  const profile = `
  ${surveyResponses.name} loves listening to ${surveyResponses.music} while ${surveyResponses.activity},
  devouring ${surveyResponses.food} for ${surveyResponses.meal}, prefers ${surveyResponses.sport} over any 
  other sport, and is amazing at ${surveyResponses.superpower}.`;

  console.log(profile);
  
  rl.close();
};

runSurvey(surveyResponses);