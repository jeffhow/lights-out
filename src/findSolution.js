function findSolution(puzzleState){

    const vectors = puzzleState.map( row => parseInt(row.join(''), 2));
    const boardSize = vectors.length;

    let posit = vectors.map( t => t*2 ); // mult by 2 

    posit.push( posit[0] ); // Store first row data at end of array
    posit.unshift(0); // Add leading 0 to array
    
    // Used instead of 1<<x for speed.
    const qbit = [2,4,8,16,32,64]; 

    let mask=qbit[5]-2; // 62

    var hints = [0,0,0,0,0,0];

    function solveBoard(){
        // solve board till bottom row
        for(let i=2;i<=5;i++){           
            let c=posit[i-1]&mask; // prev row bitwise mask
            posit[i]^=c^(c+c)^(c>>1); //current row bitwise c
            posit[i+1]^=c; // next row bitwise c
            posit[i-1]=0; // prev row set to 0
            hints[i]^=c; // hint is c bitwise
        }
    
    }

    // solve board up to last row
    solveBoard();

    // save bottom row vector
    var aim = posit[5];
    posit[5]=0;

    // Build up matrix of bottom rows for each possible top light
    var bottomRows = [34,20,56,0, 0];
    var inverse = [6, 14,12,54,42];

    // Note rows below l are 0, i.e. push patterns that have no effect.
    // Now try to make aim from non-zero rows
    let m=0; // current row
    let c;
    for(let k=0;k<5;k++){   // current column
        c=qbit[k]; // qbit 1-5
        if(bottomRows[m]&c){
            if(aim&c){
                aim^=bottomRows[m];
                // push top buttons as indicated in inverse matrix
                let d=inverse[m];
                hints[1]^=d;
                posit[1]=(posit[1]^d^(d+d)^(d>>1))&mask;
                posit[2]^=d;
            }
            m++; //move to next row
        }
    }

    // Expand solution
    solveBoard();

    return hints.slice(1).map( row => row / 2).map(c => (c.toString(2).padStart(boardSize,'0').split('').map(b => parseInt(b))));

}

export {findSolution}
