import { Gender } from "../gender/gender";

export function getPronoun(
    person: "first" | "second" | "third",
    topic: "singular" | "plural" | Gender,
    context: "subject" | "object" | "determiner" | "possessive" | "reflexive"
) {
    switch (person) {
        case "first":
            switch (topic) {
                case "singular":
                    switch (context) {
                        case "subject":
                            return "I";
                        case "object":
                            return "me";
                        case "determiner":
                            return "my";
                        case "possessive":
                            return "mine";
                        default:
                            return "myself";
                    }

                default:
                    switch (context) {
                        case "subject":
                            return "we";
                        case "object":
                            return "us";
                        case "determiner":
                            return "our";
                        case "possessive":
                            return "ours";
                        default:
                            return "ourselves";
                    }
            }

        case "second":
            switch (context) {
                case "subject":
                    return "you";
                case "object":
                    return "your";
                case "determiner":
                    return "your";
                case "possessive":
                    return "yours";
                default:
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
                        case "subject":
                            return "he";
                        case "object":
                            return "him";
                        case "determiner":
                            return "his";
                        case "possessive":
                            return "his";
                        default:
                            return "himself";
                    }

                case "Female":
                    switch (context) {
                        case "subject":
                            return "she";
                        case "object":
                            return "her";
                        case "determiner":
                            return "her";
                        case "possessive":
                            return "hers";
                        default:
                            return "herself";
                    }

                default:
                    switch (context) {
                        case "subject":
                            return "they";
                        case "object":
                            return "them";
                        case "determiner":
                            return "their";
                        case "possessive":
                            return "theirs";
                        default:
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
