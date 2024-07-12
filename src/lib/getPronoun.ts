import { arrayIncludes } from "./helper/arrayIncludes.js";

/**
 * Pronoun contexts
 */
export const PRONOUN_CONTEXTS = Object.freeze(["their", "theirs", "them", "themself", "they"] as const);
export type PronounContext = (typeof PRONOUN_CONTEXTS)[number];
export function isPronounContext(context: unknown): context is PronounContext {
    return arrayIncludes(PRONOUN_CONTEXTS, context);
}

/**
 * Pronoun topics
 */
export const PRONOUN_TOPICS = Object.freeze(["Female", "Male", "Non-Binary", "plural", "singular"] as const);
export type PronounTopic = (typeof PRONOUN_TOPICS)[number];
export function isPronounTopic(topic: unknown): topic is PronounTopic {
    return arrayIncludes(PRONOUN_TOPICS, topic);
}

/**
 * Pronoun persons
 */
export const PRONOUN_PERSONS = Object.freeze(["first", "second", "third"] as const);
export type PronounPerson = (typeof PRONOUN_PERSONS)[number];
export function isPronounPerson(person: unknown): person is PronounPerson {
    return arrayIncludes(PRONOUN_PERSONS, person);
}

export function getPronoun(context: PronounContext, topic: PronounTopic, person: PronounPerson) {
    switch (person) {
        case "first":
            switch (topic) {
                case "plural":
                    switch (context) {
                        case "they":
                            return "we";

                        case "them":
                            return "us";

                        case "their":
                            return "our";

                        case "theirs":
                            return "ours";

                        case "themself":
                            return "ourselves";
                    }

                default:
                    switch (context) {
                        case "they":
                            return "I";

                        case "them":
                            return "me";

                        case "their":
                            return "my";

                        case "theirs":
                            return "mine";

                        case "themself":
                            return "myself";
                    }
            }

        case "second":
            switch (context) {
                case "they":
                    return "you";

                case "them":
                case "their":
                    return "your";

                case "theirs":
                    return "yours";

                case "themself":
                    switch (topic) {
                        case "singular":
                            return "yourself";

                        default:
                            return "yourselves";
                    }
            }

        case "third":
            switch (topic) {
                case "Male":
                    switch (context) {
                        case "they":
                            return "he";

                        case "them":
                            return "him";

                        case "their":
                        case "theirs":
                            return "his";

                        case "themself":
                            return "himself";
                    }

                case "Female":
                    switch (context) {
                        case "they":
                            return "she";

                        case "them":
                        case "their":
                            return "her";

                        case "theirs":
                            return "hers";

                        default:
                            return "herself";
                    }

                default:
                    switch (context) {
                        case "they":
                        case "them":
                        case "their":
                        case "theirs":
                            return context;

                        case "themself":
                            switch (topic) {
                                case "plural":
                                    return "themselves";

                                default:
                                    return "themself";
                            }
                    }
            }
    }
}
