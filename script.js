/* Initialize DOM components */
const board = document.getElementById('gameboard');
const message_this = document.getElementById('message');
const reset = document.getElementById('btnReset');

const spot0 = document.getElementById('0');
const spot1 = document.getElementById('1');
const spot2 = document.getElementById('2');
const spot3 = document.getElementById('3');
const spot4 = document.getElementById('4');
const spot5 = document.getElementById('5');
const spot6 = document.getElementById('6');
const spot7 = document.getElementById('7');
const spot8 = document.getElementById('8');



/* spot0.addEventListener('click', (Event) => {field.updateGame(spot0);});
spot1.addEventListener('click', (Event) => {field.updateGame(spot1);});
spot2.addEventListener('click', (Event) => {field.updateGame(spot2);});
spot3.addEventListener('click', (Event) => {field.updateGame(spot3);});
spot4.addEventListener('click', (Event) => {field.updateGame(spot4);});
spot5.addEventListener('click', (Event) => {field.updateGame(spot5);});
spot6.addEventListener('click', (Event) => {field.updateGame(spot6);});
spot7.addEventListener('click', (Event) => {field.updateGame(spot7);});
spot8.addEventListener('click', (Event) => {field.updateGame(spot8);});
 */
reset.addEventListener('click', (Event) => field.resetBoard());



const field = (() => {
    let counter = 0;

    const allSpots = [[spot0,spot1,spot2],[spot3,spot4,spot5],[spot6,spot7,spot8]];

    const createBoard = () => {
        for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let spot = allSpots[i][j];
                spot.classList.add('jsHover');
                spot.dataset.choice = 0;
                spot.addEventListener('click', updateGame.bind(spot, spot), {once: true});
            }
        }
                
    }
    function updateGame() {
        this.textContent = "X";
        console.log("You clicked " + this.id);
        this.classList.remove('jsHover');
        this.dataset.choice = 1;
        console.log(checkBoard());
    }

    function resetBoard() {
        counter = 0;
        for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let spot = allSpots[i][j];
                if (spot.textContent !== "") {
                    spot.addEventListener('click', updateGame.bind(spot, spot), {once: true});
                }
                spot.textContent = "";
                spot.classList.add('jsHover');
                spot.dataset.choice = 0;                
            }
        }
    }

    function checkBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                counter += parseInt(allSpots[i][j].dataset.choice);
            }

            if (counter == 3) {
                return "player";
            } else if (counter == -3) {
                return "comp";
            } else {
                counter = 0;
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                counter += parseInt(allSpots[j][i].dataset.choice);
            }

            if (counter == 3) {
                return "player";
            } else if (counter == -3) {
                return "comp";
            } else {
                counter = 0;
            }
        }

        

        for (let i = 0; i<3; i++) {
            counter += parseInt(allSpots[i][i].dataset.choice);
        }

        if (counter == 3) {
            return "player";
        } else if (counter == -3) {
            return "comp";
        } else {
            counter = 0;
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 2; j > -1; j--) {
                counter += parseInt(allSpots[i][j].dataset.choice);
            }            
        }

        if (counter == 3) {
            return "player";
        } else if (counter == -3) {
            return "comp";
        } else {
            counter = 0;
        }

        return 0;
    }


    return {updateGame, resetBoard, createBoard};
})();

field.createBoard();






