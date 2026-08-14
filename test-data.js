const IMG = "assets/test5-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts) => ({ id, type: "paired", prompt, points: parts.length, parts });

const sections = [
  { key: "A", label: "A", title: "Listen and write the letter.", note: "Listen carefully and choose a, b, or c.", points: 4, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["a. tuna", "b. exotic fruit", "c. batik"], "c. batik", "The recording says that you cannot eat this item. Batik is a patterned cloth, so the correct letter is c."),
    choice("A2", "2.", ["a. cinema", "b. port", "c. castle"], "b. port", "A port must be beside water because boats arrive and leave there, so the correct letter is b."),
    choice("A3", "3.", ["a. canal", "b. antiques", "c. souvenir"], "b. antiques", "Antiques are old objects, so the correct letter is b."),
    choice("A4", "4.", ["a. street vendor", "b. architecture", "c. rickshaw"], "c. rickshaw", "A rickshaw is a small passenger vehicle that you can ride in, so the correct letter is c.")
  ]},
  { key: "B", label: "B", title: "Unscramble the words.", note: "Use every letter to make one Unit 9 word.", points: 4, questions: [
    input("B1", "1. g e l h g a", ["haggle"], "The letters form haggle, which means to discuss a price until the buyer and seller agree."),
    input("B2", "2. t u c s e l s n o", ["countless"], "The letters form countless, meaning too many to count."),
    input("B3", "3. l g i e c i n", ["ceiling"], "The letters form ceiling, the inside surface at the top of a room."),
    input("B4", "4. m i h r p s", ["shrimp"], "The letters form shrimp, a small sea animal that people often eat.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences. Then match them to the pictures.", note: "Write the missing word, then choose picture a, b, c, or d. The labels are placed below the clean original pictures.", points: 8, sectionImage: IMG + "c-picture-strip.png", questions: [
    paired("C1", "1. I bought my best friend a great ___ on my trip to Japan.", [
      { key: "word", label: "Missing word", type: "input", answers: ["souvenir"], explanation: "A souvenir is an object bought to remember a place or trip." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows a Japanese souvenir doll." }
    ]),
    paired("C2", "2. We walked along the ___ and looked at the boats.", [
      { key: "word", label: "Missing word", type: "input", answers: ["canal"], explanation: "A canal is a narrow human-made waterway where boats can travel." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows boats travelling along a canal." }
    ]),
    paired("C3", "3. The roads here are so ___. There are too many cars!", [
      { key: "word", label: "Missing word", type: "input", answers: ["congested"], explanation: "Congested means crowded or blocked by too much traffic." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows a road crowded with cars." }
    ]),
    paired("C4", "4. I am studying ___ because I am interested in the style of different buildings.", [
      { key: "word", label: "Missing word", type: "input", answers: ["architecture"], explanation: "Architecture is the art and study of designing buildings." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows the design of a building." }
    ])
  ]},
  { key: "D", label: "D", title: "Circle the correct words.", note: "Choose the indefinite pronoun that makes each sentence correct.", points: 4, questions: [
    choice("D1", "1. There is ___ to eat in the refrigerator.", ["nothing", "no one"], "nothing", "Nothing refers to a thing. Food is a thing, not a person."),
    choice("D2", "2. There was ___ in the class. I was the first student to arrive.", ["nothing", "nobody"], "nobody", "Nobody refers to a person. The sentence says that no person was in the class."),
    choice("D3", "3. ___ in my family plays the piano.", ["No one", "Nothing"], "No one", "No one refers to people. Family members are people."),
    choice("D4", "4. I have ___ to do today.", ["nobody", "nothing"], "nothing", "Nothing refers to an activity or thing. The speaker has no activity to do.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences.", note: "Use the word bank: nothing, something, anyone, no one, someone.", points: 4, questions: [
    input("E1", "1. At the museum, ___ was talking about historic cities. It was interesting.", ["someone", "somebody"], "Someone refers to an unspecified person who was giving the talk."),
    input("E2", "2. ___ was at school when I arrived. It was Sunday!", ["no one", "nobody"], "No one means that there was not a single person at school."),
    input("E3", "3. I'm thirsty. I want ___ to drink.", ["something"], "Something is used in this affirmative sentence for an unspecified drink."),
    input("E4", "4. I know ___ about Jakarta, but I want to learn.", ["nothing"], "Nothing means that the speaker has no knowledge about Jakarta yet.")
  ]},
  { key: "F", label: "F", title: "Write the words in the correct order to make sentences. Then match them to the pictures.", note: "Write each complete sentence, then choose picture a, b, or c.", points: 6, sectionImage: IMG + "f-picture-strip.png", questions: [
    paired("F1", "1. nothing / store / bought / I / the / at", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["I bought nothing at the store", "I bought nothing at the store."], explanation: "The correct order is subject + past verb + object + place: I bought nothing at the store." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Picture c shows a person leaving a store without an item." }
    ]),
    paired("F2", "2. park / to / No one / went / the", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["No one went to the park", "No one went to the park."], explanation: "No one is the subject, followed by went to the park." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Picture b shows an empty park." }
    ]),
    paired("F3", "3. eat / He / to / nothing / has", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["He has nothing to eat", "He has nothing to eat."], explanation: "Use has + nothing + to-infinitive: He has nothing to eat." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Picture a shows an almost empty refrigerator." }
    ])
  ]},
  { key: "G", label: "G", title: "Listen and circle the correct answer.", note: "Listen carefully and choose True or False.", points: 4, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1. The mayor is the leader of a country.", ["T", "F"], "F", "The statement is false. A mayor leads a city or town, not a country."),
    choice("G2", "2. A mayor's assistant does things like make phone calls.", ["T", "F"], "T", "The statement is true according to the recording."),
    choice("G3", "3. City hall is one of the places where decisions for a city are made.", ["T", "F"], "T", "The statement is true according to the recording."),
    choice("G4", "4. Volunteers get paid for their work.", ["T", "F"], "F", "The statement is false. Volunteers normally work without being paid.")
  ]},
  { key: "H", label: "H", title: "Look and complete the sentences.", note: "Study each clean original illustration and write the city word that completes the sentence.", points: 4, questions: [
    input("H1", "1. A few ___ come every Tuesday morning.", ["garbage collectors"], "Garbage collectors collect and remove household waste.", IMG + "h1.png"),
    input("H2", "2. City workers need lots of ___ to fix the streets in our town.", ["equipment"], "Equipment means the tools and machines needed for a job.", IMG + "h2.png"),
    input("H3", "3. Our ___ makes decisions that affect everyone in the country.", ["president"], "A president is the elected leader of a country.", IMG + "h3.png"),
    input("H4", "4. The reporters asked the mayor questions at the ___.", ["news conference", "press conference"], "A news conference is a meeting where reporters ask a public figure questions.", IMG + "h4.png")
  ]},
  { key: "I", label: "I", title: "Unscramble and match.", note: "Unscramble each word, then choose its correct definition.", points: 8, questions: [
    paired("I1", "1. n c i t z i e", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["citizen"], explanation: "The letters form citizen." },
      { key: "match", label: "Definition", type: "choice", options: ["a. an event when one person tries to beat another person", "b. a person who lives in a country all the time, not a visitor", "c. a formal talk given to an audience", "d. an outdoor place where children have fun together"], answers: ["b. a person who lives in a country all the time, not a visitor"], explanation: "A citizen is a person who legally belongs to or lives permanently in a country, so it matches b." }
    ]),
    paired("I2", "2. d l y p r o g u a n", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["playground"], explanation: "The letters form playground." },
      { key: "match", label: "Definition", type: "choice", options: ["a. an event when one person tries to beat another person", "b. a person who lives in a country all the time, not a visitor", "c. a formal talk given to an audience", "d. an outdoor place where children have fun together"], answers: ["d. an outdoor place where children have fun together"], explanation: "A playground is an outdoor place where children play, so it matches d." }
    ]),
    paired("I3", "3. h e p c e s", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["speech"], explanation: "The letters form speech." },
      { key: "match", label: "Definition", type: "choice", options: ["a. an event when one person tries to beat another person", "b. a person who lives in a country all the time, not a visitor", "c. a formal talk given to an audience", "d. an outdoor place where children have fun together"], answers: ["c. a formal talk given to an audience"], explanation: "A speech is a formal talk given to an audience, so it matches c." }
    ]),
    paired("I4", "4. t n s t c e o", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["contest"], explanation: "The letters form contest." },
      { key: "match", label: "Definition", type: "choice", options: ["a. an event when one person tries to beat another person", "b. a person who lives in a country all the time, not a visitor", "c. a formal talk given to an audience", "d. an outdoor place where children have fun together"], answers: ["a. an event when one person tries to beat another person"], explanation: "A contest is an event in which people compete, so it matches a." }
    ])
  ]},
  { key: "J", label: "J", title: "Circle the correct answer.", note: "Choose the tag question that correctly completes each sentence.", points: 4, questions: [
    choice("J1", "1. You want to be class president, ___?", ["do you", "don't you"], "don't you", "The statement is affirmative in the present simple, so the tag is negative: don't you?"),
    choice("J2", "2. You'll come and listen to my speech, ___?", ["won't you", "will you"], "won't you", "The statement uses affirmative will, so the tag uses negative won't."),
    choice("J3", "3. He can't come to the council meeting, ___?", ["can he", "can't he"], "can he", "The statement is negative with can't, so the tag is affirmative: can he?"),
    choice("J4", "4. She was a volunteer, ___?", ["wasn't she", "was she"], "wasn't she", "The statement is affirmative with was, so the tag is negative: wasn't she?")
  ]},
  { key: "K", label: "K", title: "Complete the sentences. Write the correct tag question.", note: "Use the auxiliary and subject from each statement, and reverse positive and negative.", points: 6, questions: [
    input("K1", "1. She is the class president, ___?", ["isn't she", "isnt she"], "The statement is affirmative with is, so the tag is negative: isn't she?"),
    input("K2", "2. You didn't meet the mayor yesterday, ___?", ["did you"], "The statement is negative with didn't, so the tag is affirmative: did you?"),
    input("K3", "3. You are an assistant, ___?", ["aren't you", "arent you"], "The statement is affirmative with are, so the tag is negative: aren't you?"),
    input("K4", "4. You don't like giving speeches, ___?", ["do you"], "The statement is negative with don't, so the tag is affirmative: do you?"),
    input("K5", "5. He won a contest, ___?", ["didn't he", "didnt he"], "Won is past simple, so the negative tag uses didn't: didn't he?"),
    input("K6", "6. They are going to the play, ___?", ["aren't they", "arent they"], "The statement is affirmative with are, so the tag is negative: aren't they?")
  ]},
  { key: "L", label: "L", title: "Look and complete the sentences.", note: "Use the sentence bank: He's a good dancer, She can't sing, She doesn't have a brother, He's a fast runner, He'll come to the party. One sentence is extra.", points: 4, questions: [
    input("L1", "1. ___, can she?", ["She can't sing", "She can't sing."], "The picture shows a girl singing well and a girl covering her ears. The negative statement She can't sing takes the positive tag can she?", IMG + "l1.png"),
    input("L2", "2. ___, won't he?", ["He'll come to the party", "He'll come to the party."], "The picture shows a person arriving with a gift. The affirmative statement He'll come to the party takes the negative tag won't he?", IMG + "l2.png"),
    input("L3", "3. ___, does she?", ["She doesn't have a brother", "She doesn't have a brother."], "The picture shows a family with daughters and no son. The negative statement She doesn't have a brother takes the positive tag does she?", IMG + "l3.png"),
    input("L4", "4. ___, isn't he?", ["He's a fast runner", "He's a fast runner."], "The picture shows a boy running quickly. The affirmative statement He's a fast runner takes the negative tag isn't he?", IMG + "l4.png")
  ]}
];
