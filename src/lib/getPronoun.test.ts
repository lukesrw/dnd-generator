import {
    PRONOUN_CONTEXTS,
    PRONOUN_PERSONS,
    PRONOUN_TOPICS,
    getPronoun,
    isPronounContext,
    isPronounPerson
} from "./getPronoun.js";

test("isPronounContext() works", () => {
    for (const context of PRONOUN_CONTEXTS) {
        expect(isPronounContext(context)).toBeTruthy();
    }
    expect(isPronounContext("Not a pronoun context")).toBeFalsy();
});

test("isPronounPerson() works", () => {
    for (const person of PRONOUN_PERSONS) {
        expect(isPronounPerson(person)).toBeTruthy();
    }
    expect(isPronounPerson("Not a pronoun person")).toBeFalsy();
});

const getPronounExpectedResults = [
    "my",
    "your",
    "her",
    "my",
    "your",
    "his",
    "my",
    "your",
    "their",
    "our",
    "your",
    "their",
    "my",
    "your",
    "their",
    "mine",
    "yours",
    "hers",
    "mine",
    "yours",
    "his",
    "mine",
    "yours",
    "theirs",
    "ours",
    "yours",
    "theirs",
    "mine",
    "yours",
    "theirs",
    "me",
    "your",
    "her",
    "me",
    "your",
    "him",
    "me",
    "your",
    "them",
    "us",
    "your",
    "them",
    "me",
    "your",
    "them",
    "myself",
    "yourselves",
    "herself",
    "myself",
    "yourselves",
    "himself",
    "myself",
    "yourselves",
    "themself",
    "ourselves",
    "yourselves",
    "themselves",
    "myself",
    "yourself",
    "themself",
    "I",
    "you",
    "she",
    "I",
    "you",
    "he",
    "I",
    "you",
    "they",
    "we",
    "you",
    "they",
    "I",
    "you",
    "they"
];

let i = 0;

for (const context of PRONOUN_CONTEXTS) {
    for (const topic of PRONOUN_TOPICS) {
        for (const person of PRONOUN_PERSONS) {
            test(`getPronoun (${context}, ${topic}, ${person}) works`, () => {
                expect(getPronoun(context, topic, person)).toEqual(getPronounExpectedResults[i]);

                i++;
            });
        }
    }
}
