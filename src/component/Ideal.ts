import { List as _List } from "../util/List.js";
import { Ethic } from "./Ethic.js";
import { Moral } from "./Moral.js";

const IDEALS = [
    {
        category: "Faith",
        value: "I trust that my deity will guide my actions. I have faith that if I work hard, things will go well",
        ethic: "Lawful"
    },
    {
        category: "Tradition",
        value: "The ancient traditions of worship and sacrifice must be preserved and upheld",
        ethic: "Lawful"
    },
    {
        category: "Charity",
        value: "I always try to help those in need, no matter what the personal cost",
        moral: "Good"
    },
    {
        category: "Change",
        value: "We must help bring about the changes the gods are constantly working in the world",
        ethic: "Chaotic"
    },
    {
        category: "Power",
        value: "I hope to one day rise to the top of my faith's religious hierarchy",
        ethic: "Lawful"
    },
    {
        category: "Aspiration",
        value: "I seek to prove my self worthy of my god's favor by matching my actions against his or her teachings"
    },
    {
        category: "Independence",
        value: "I am a free spirit--no one tells me what to do",
        ethic: "Chaotic"
    },
    {
        category: "Fairness",
        value: "I never target people who can't afford to lose a few coins",
        ethic: "Lawful"
    },
    {
        category: "Charity",
        value: "I distribute money I acquire to the people who really need it",
        moral: "Good"
    },
    {
        category: "Creativity",
        value: "I never run the same con twice",
        ethic: "Chaotic"
    },
    {
        category: "Friendship",
        value: "Material goods come and go. Bonds of friendship last forever",
        moral: "Good"
    },
    {
        category: "Aspiration",
        value: "I'm determined to make something of myself"
    },
    {
        category: "Honor",
        value: "I don't steal from others in the trade",
        ethic: "Lawful"
    },
    {
        category: "Freedom",
        value: "Chains are meant to be broken, as are those who would forge them",
        ethic: "Chaotic"
    },
    {
        category: "Charity",
        value: "I steal from the wealthy so that I can help people in need",
        moral: "Good"
    },
    {
        category: "Greed",
        value: "I will do whatever it takes to become wealthy",
        moral: "Evil"
    },
    {
        category: "People",
        value: "I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care",
        moral: "Neutral"
    },
    {
        category: "Redemption",
        value: "There's a spark of good in everyone",
        moral: "Good"
    },
    {
        category: "Beauty",
        value: "When I perform, I make the world better than it was",
        moral: "Good"
    },
    {
        category: "Tradition",
        value: "The stories, legends, and songs of the past must never be forgotten",
        ethic: "Lawful"
    },
    {
        category: "Creativity",
        value: "The world is in need of new ideas and bold action",
        ethic: "Chaotic"
    },
    {
        category: "Greed",
        value: "I'm only in it for the money and fame",
        moral: "Evil"
    },
    {
        category: "People",
        value: "I like seeing the smiles on people's faces when I perform. That's all that matters",
        moral: "Neutral"
    },
    {
        category: "Honesty",
        value: "Art should reflect the soul; it should come from within and reveal who we really are"
    },
    {
        category: "Respect",
        value: "People deserve to be treated with dignity and respect",
        moral: "Good"
    },
    {
        category: "Fairness",
        value: "No one should get preferential treatment before the law, and no one is above the law",
        ethic: "Lawful"
    },
    {
        category: "Freedom",
        value: "Tyrants must not be allowed to oppress the people",
        ethic: "Chaotic"
    },
    {
        category: "Might",
        value: "If I become strong, I can take what I want--what I deserve",
        moral: "Evil"
    },
    {
        category: "Sincerity",
        value: "There's no good pretending to be something I'm not",
        moral: "Neutral"
    },
    {
        category: "Destiny",
        value: "Nothing and no one can steer me away from my higher calling"
    },
    {
        category: "Community",
        value: "It is the duty of all civilized people to strengthen the bonds of community and the security of civilization",
        ethic: "Lawful"
    },
    {
        category: "Generosity",
        value: "My talents were given to me so that I could use them to benefit the world",
        moral: "Good"
    },
    {
        category: "Freedom",
        value: "Everyone should be free to pursue his or her livelihood",
        ethic: "Chaotic"
    },
    {
        category: "Greed",
        value: "I'm only in it for the money",
        moral: "Evil"
    },
    {
        category: "People",
        value: "I'm committed to the people I care about, not to ideals",
        ethic: "Neutral"
    },
    {
        category: "Aspiration",
        value: "I work hard to be the best there is at my craft"
    },
    {
        category: "Greater Good",
        value: "My gifts are meant to be shared with all, not used for my own benefit",
        moral: "Good"
    },
    {
        category: "Logic",
        value: "Emotions must not cloud our sense of what is right and true, or our logical thinking",
        ethic: "Lawful"
    },
    {
        category: "Free Thinking",
        value: "Inquiry and curiosity are the pillars of progress",
        ethic: "Chaotic"
    },
    {
        category: "Power",
        value: "Solitude and contemplation are paths toward mystical or magical power",
        moral: "Evil"
    },
    {
        category: "Live and Let Live",
        value: "Meddling in the affairs of others only causes trouble",
        ethic: "Neutral"
    },
    {
        category: "Self-Knowledge",
        value: "If you know yourself, there's nothing left to know"
    },
    {
        category: "Respect",
        value: "Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity",
        moral: "Good"
    },
    {
        category: "Responsibility",
        value: "It is my duty to respect the authority of those above me, just as those below me must respect mine",
        ethic: "Lawful"
    },
    {
        category: "Independence",
        value: "I must prove that I can handle myself without the coddling of my family",
        ethic: "Chaotic"
    },
    {
        category: "Power",
        value: "If I can attain more power, no one will tell me what to do",
        moral: "Evil"
    },
    {
        category: "Family",
        value: "Blood runs thicker than water"
    },
    {
        category: "Noble Obligation",
        value: "It is my duty to protect and care for the people beneath me",
        moral: "Good"
    },
    {
        category: "Change",
        value: "Life is like the seasons, in constant change, and we must change with it",
        ethic: "Chaotic"
    },
    {
        category: "Greater Good",
        value: "It is each person's responsibility to make the most happiness for the whole tribe",
        moral: "Good"
    },
    {
        category: "Honor",
        value: "If I dishonor myself, I dishonor my whole clan",
        ethic: "Lawful"
    },
    {
        category: "Might",
        value: "The strongest are meant to rule",
        moral: "Evil"
    },
    {
        category: "Nature",
        value: "The natural world is more important than all the constructs of civilization",
        ethic: "Neutral"
    },
    {
        category: "Glory",
        value: "I must earn glory in battle, for myself and my clan"
    },
    {
        category: "Knowledge",
        value: "The path to power and self-improvement is through knowledge",
        moral: "Neutral"
    },
    {
        category: "Beauty",
        value: "What is beautiful points us beyond itself toward what is true",
        moral: "Good"
    },
    {
        category: "Logic",
        value: "Emotions must not cloud our logical thinking",
        ethic: "Lawful"
    },
    {
        category: "No Limits",
        value: "Nothing should fetter the infinite possibility inherent in all existence",
        ethic: "Chaotic"
    },
    {
        category: "Power",
        value: "Knowledge is the path to power and domination",
        moral: "Evil"
    },
    {
        category: "Self-improvement",
        value: "The goal of a life of study is the betterment of oneself"
    },
    {
        category: "Respect",
        value: "The thing that keeps a ship together is mutual respect between captain and crew",
        moral: "Good"
    },
    {
        category: "Fairness",
        value: "We all do the work, so we all share in the rewards",
        ethic: "Lawful"
    },
    {
        category: "Freedom",
        value: "The sea is freedom--the freedom to go anywhere and do anything",
        ethic: "Chaotic"
    },
    {
        category: "Master",
        value: "I'm a predator, and the other ships on the sea are my prey",
        moral: "Evil"
    },
    {
        category: "People",
        value: "I'm committed to my crewmates, not to ideals",
        ethic: "Neutral"
    },
    {
        category: "Aspiration",
        value: "Someday I'll own my own ship and chart my own destiny"
    },
    {
        category: "Greater Good",
        value: "Our lot is to lay down our lives in defense of others",
        moral: "Good"
    },
    {
        category: "Responsibility",
        value: "I do what I must and obey just authority",
        ethic: "Lawful"
    },
    {
        category: "Independence",
        value: "When people follow orders blindly they embrace a kind of tyranny",
        ethic: "Chaotic"
    },
    {
        category: "Might",
        value: "In life as in war, the stronger force wins",
        moral: "Evil"
    },
    {
        category: "Neutral",
        value: "Ideals aren't worth killing for or going to war for",
        moral: "Neutral"
    },
    {
        category: "Nation",
        value: "My city, nation, or people are all that matters"
    },
    {
        category: "Respect",
        value: "All people, rich or poor, deserve respect",
        moral: "Good"
    },
    {
        category: "Community",
        value: "We have to take care of each other because no one else is going to do it",
        ethic: "Lawful"
    },
    {
        category: "Change",
        value: "The low is lifted up, and the high and mighty are brought down. Change is the nature of things",
        ethic: "Chaotic"
    },
    {
        category: "Retribution",
        value: "The rich need to be shown what life and death are like in the gutters",
        moral: "Evil"
    },
    {
        category: "People",
        value: "I help people who help me--that's what keeps us alive",
        moral: "Neutral"
    },
    {
        category: "Aspiration",
        value: "I'm going to prove that I'm worthy of a better life"
    }
] as const;

export namespace Ideal {
    export const List = _List.createList<
        Ideal,
        {
            category: string;
            ethic?: Ethic;
            moral?: Moral;
        },
        Ideal
    >(IDEALS);
}

export type Ideal = (typeof IDEALS)[number]["value"];
