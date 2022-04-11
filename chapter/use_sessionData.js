// total_qnumber = {
//     one: "b1_17, b1_23, b2_19, b2_26, b3_25, b3_26, b3_27, b3_28, b3_30",
//     two: "b1_1, b2_2, b2_4, b2_6, b2_7, b2_10, b2_11, b3_2, b3_7",
//     three: "b1_2, b1_3, b1_4, b1_5, b1_6, b2_1, b2_5, b2_8, b2_9",
//     four: "b2_3, b3_1, b3_3, b3_4, b3_5, b3_6, b3_8, b3_9, b3_10",
//     five: "b1_8, b1_11, b1_14, b2_12, b2_15, b3_13, b3_15, b3_17, b3_20",
//     six: "b1_7, b1_13, b1_15, b1_16, b2_14, b2_16, b3_12, b3_14, b3_18",
//     seven: "b1_9, b1_10, b1_12, b2_13, b2_17, b2_18, b3_11, b3_16, b3_19",
//     eight: "b1_19, b2_21, b2_22, b2_23, b2_24, b2_25, b2_27, b3_21, b3_23",
//     nine: "b1_18, b1_20, b1_21, b1_22, b2_20, b3_22, b3_24, b3_29, b3_31"
// }

chapter_enneaNum = {
    ch1: [2, 3, 3, 3, 3, 3, 6, 5, 7, 7, 5, 7, 6, 5, 6, 6, 1, 9, 8, 9, 9, 9, 1],
    ch2: [3, 2, 4, 2, 3, 2, 2, 3, 3, 2, 2, 5, 7, 6, 5, 6, 7, 7, 1, 9, 8, 8, 8, 8, 8, 1, 8],
    ch3: [4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 7, 6, 5, 6, 5, 7, 5, 6, 7, 5, 8, 9, 8, 9, 1, 1, 1, 1, 9, 1, 9]
}

function checkEnnea_Nsum(chapter, question_num, val) {
    if(chapter == "ch1") {
        var before_val = sessionStorage.getItem(ch1[question_num-1])
        sessionStorage.setItem(ch1[question_num-1], before_val+val)
    }
}