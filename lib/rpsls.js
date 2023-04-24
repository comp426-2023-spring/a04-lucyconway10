function autoplay(options) {
    return options[Math.floor((Math.random()*options.length))];
}

const rpsOptions = ['rock', 'paper', 'scissors']
const rpslsOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']


export function rps(shot) {

    if (shot == null) {
        return {player : autoplay(rpsOptions)}
    }

    let user = shot.toLowerCase();

    if (rpsOptions.includes(user) == false) {
        console.error("Invalid move")
        throw new RangeError()
    }
    let opponent = autoplay(rpsOptions);
    let result = ''

    if (user === opponent) {
        result = 'tie'
    } else if (user === 'rock' && opponent === 'scissors' || user === 'paper' && opponent === 'rock' || user === 'scissors' && opponent === 'paper') {
        result = 'win'
    } else {
        result = 'lose'
    }

    return { player: user, opponent: opponent, result: result};
}


export function rpsls(shot) {

    if (shot == null) {
        return {player : autoplay(rpslsOptions)}
    }

    let user = shot.toLowerCase();

    if (rpslsOptions.includes(user) == false) {
        console.error("Invalid move")
        throw new RangeError()
    }

    let opponent = autoplay(rpslsOptions);
    let result = ''

    if (user === opponent) {
        result = 'tie'
    } else if (user === 'rock' && (opponent === 'paper' || opponent === 'spock') || user === 'paper' && (opponent === 'scissors' || opponent === 'lizard') || user === 'scissors' && (opponent === 'rock' || opponent === 'spock')) {
        result = 'lose'
    } else if (user === 'lizard' && (opponent === 'rock' || opponent === 'scissors') || user === 'spock' && (opponent === 'lizard' || opponent === 'paper')){
        result = 'lose'
    } else {
        result = 'win'
    }

    return { player: user, opponent: opponent, result: result };

}