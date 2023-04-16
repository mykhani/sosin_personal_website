/* Animations */
import Kindness from "./animations/kindness/kindness.js";
import Spotify from "./animations/spotify/spotify.js";
import WalkCycle from "./animations/walk-cycle/walk-cycle.js"
import Frog from "./animations/frog/frog.js";
import HairAnimation from "./animations/hair-animation/hair-animation.js"
import DogJump from "./animations/dog-jump/dog-jump.js"

/* Game */
import Smash from "./games/smash/smash.js";
import Pixel from "./games/pixel_mania/pixel.js";
import Birds from "./games/birds/birds.js";
import VectorArt from "./games/vector_art/vector.js";
import Aztec from "./games/aztec_slots/aztec.js";
import Tower from "./games/tower_defense/tower.js";

/* Illustrations */
import Punjabi from "./illustrations/punjabi_calendar/punjabi.js"
import Doodles from "./illustrations/doodles/doodles.js";
import Dragon from "./illustrations/dragon/dragon.js";
import Fantasy from "./games/fantasy_warrior/fantasy.js";
import Candy from "./games/candy/candy.js";
import Egyptian from "./games/egyptian_slots/egyptian.js";

/* Concept Art */
import LineArt from "./concept_art/line_art/lineart.js";
import SpaceJump from "./concept_art/space_jump/space_jump.js";
import Mythical from "./concept_art/mythical/mythical.js";

let Projects = {
    /* Animations */
    animations: [
        new Kindness(),
        new Spotify(),
        new WalkCycle(),
        new Frog(),
        new HairAnimation(),
        new DogJump(),
    ],
    /* Games */
    games: [
        new Birds(),
        new VectorArt(),
        new Fantasy(),
        new Aztec(),
        new Egyptian(),
        new Smash(),
        new Candy(),
        new Pixel(),
        new Tower(),
    ],
    /* Illustrations */
    illustrations: [
        new Punjabi(),
        new Dragon(),
        new Doodles(),

    ],
    /* Concept Arts */
    concept_arts: [
        new SpaceJump(),
        new LineArt(),
        new Mythical(),
    ]
}

export function FindProject(id) {
    let idx = parseInt(id.split('_')[1])
    if (id.startsWith('animation')) {
        return Projects.animations[idx];
    } else if (id.startsWith('game')) {
        return Projects.games[idx];
    } else if (id.startsWith('illustration')) {
        return Projects.illustrations[idx];
    } else if (id.startsWith('concept-art')) {
        return Projects.concept_arts[idx];
    }
}

export default Projects;