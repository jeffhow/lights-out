function getPuzzleConfig(level){
    const puz=[];
    puz[ 0]=[0,0,21,0,0 ];
    puz[ 1]=[21,21,0 ,21,21];
    puz[ 2]=[10,27,27,27,10];
    puz[ 3]=[0 ,27,0 ,17,27];
    puz[ 4]=[15,23,23,24,27];
    puz[ 5]=[0 ,0 ,21,21,14];
    puz[ 6]=[15,17,17,17,15];
    puz[ 7]=[0 ,4 ,10,21,10];
    puz[ 8]=[10,31,14,26,7 ];
    puz[ 9]=[14,14,14,0 ,0 ];
    puz[10]=[21,21,21,21,14];
    puz[11]=[31,10,27,14,10];
    puz[12]=[8 ,20,10,5 ,2 ];
    puz[13]=[0 ,0 ,2 ,2 ,2 ];
    puz[14]=[0 ,2 ,0 ,2 ,0 ];
    puz[15]=[1 ,1 ,1 ,1 ,31];
    puz[16]=[0 ,0 ,4 ,14,31];
    puz[17]=[4 ,10,21,10,4 ];
    puz[18]=[21,0 ,21,0 ,21];
    puz[19]=[0 ,0 ,17,0 ,0 ];
    puz[20]=[30,2 ,14,2 ,2 ];
    puz[21]=[14,17,17,17,14];
    puz[22]=[0 ,0 ,28,12,4 ];
    puz[23]=[0 ,0 ,17,31,18];
    puz[24]=[1 ,3 ,7 ,15,30];
    puz[25]=[17,17,31,17,17];
    puz[26]=[4 ,14,4 ,4 ,4 ];
    puz[27]=[0 ,0 ,28,28,28];
    puz[28]=[0 ,2 ,0 ,0 ,0 ];
    puz[29]=[0 ,0 ,4 ,0 ,0 ];
    puz[30]=[17,19,21,25,17];
    puz[31]=[31,8 ,4 ,2 ,31];
    puz[32]=[8 ,8 ,21,17,25];
    puz[33]=[20,17,17,22,30];
    puz[34]=[24,10,17,21,0 ];
    puz[35]=[4 ,10,17,31,17];
    puz[36]=[0 ,14,14,14,0 ];
    puz[37]=[21,10,21,10,21];
    puz[38]=[10,1 ,3 ,12,10];
    puz[39]=[0 ,0 ,10,0 ,0 ];
    puz[40]=[17,10,4 ,4 ,4 ];
    puz[41]=[7 ,9 ,7 ,9 ,7 ];
    puz[42]=[17,11,7 ,2 ,14];
    puz[43]=[0 ,27,31,4 ,14];
    puz[44]=[14,5 ,28,15,21];
    puz[45]=[4 ,14,31,14,4 ];
    puz[46]=[4 ,31,5 ,18,16];
    puz[47]=[0 ,17,4 ,17,0 ];
    puz[48]=[17,10,4 ,10,17];
    puz[49]=[31,31,31,31,31];
    puz[50]=[27,0 ,27,0 ,27];
    puz[51]=[31,4 ,0 ,4 ,31];
    puz[52]=[31,10,4 ,10,31];
    puz[53]=[10,17,0 ,27,17];
    puz[54]=[4 ,6 ,27,12,4 ];
    puz[55]=[10,31,21,31,10];
    puz[56]=[21,17,27,17,21];
    puz[57]=[0 ,0 ,14,2 ,0 ];
    puz[58]=[16,8 ,4 ,6 ,5 ];
    puz[59]=[0 ,21,17,21,17];
    puz[60]=[31,14,14,14,31];
    puz[61]=[17,10,0 ,10,17];
    puz[62]=[14,10,14,8 ,14];
    puz[63]=[15,9 ,15,7 ,9 ];
    puz[64]=[21,21,21,21,14];
    puz[65]=[14,2 ,14,8 ,14];
    puz[66]=[31,17,21,17,31];
    puz[67]=[21,0 ,21,0 ,21];
    puz[68]=[10,21,14,21,10];
    puz[69]=[21,0 ,0 ,0 ,21];
    puz[70]=[31,29,27,23,31];
    puz[71]=[31,4 ,31,17,17];
    puz[72]=[27,10,27,10,27];
    puz[73]=[4 ,10,31,17,31];
    puz[74]=[17,27,21,17,17];
    puz[75]=[31,21,31,21,31];
    puz[76]=[14,4 ,4 ,4 ,14];
    puz[77]=[14,10,31,14,27];
    puz[78]=[0 ,0 ,4 ,0 ,0 ];
    puz[79]=[17,0 ,4 ,0 ,17];
    puz[80]=[27,27,0 ,27,27];
    puz[81]=[10,0 ,17,14,4 ];
    puz[82]=[21,14,27,14,21];
    puz[83]=[17,19,21,25,17];
    puz[84]=[21,21,27,21,21];
    puz[85]=[4 ,4 ,14,21,21];
    puz[86]=[21,21,21,21,31];
    puz[87]=[0 ,14,14,14,0 ];
    puz[88]=[4 ,10,17,31,17];
    puz[89]=[21,10,21,10,21];
    puz[90]=[17,14,10,14,17];
    puz[91]=[4 ,10,17,10,4 ];
    puz[92]=[21,0 ,10,0 ,21];
    puz[93]=[10,31,10,31,10];
    puz[94]=[31,21,31,29,31];
    puz[95]=[17,10,4 ,10,17];
    puz[96]=[31,4 ,31,4 ,31];
    puz[97]=[31,14,4 ,14,31];
    puz[98]=[4 ,21,31,21,4 ];
    puz[99]=[31,31,31,31,31];

    return puz[level];
}

export {getPuzzleConfig};
