//自然数 = 0
//1で"0"を認める
//2で負の値を認める
//4で少数を認める
//8で空白を厳格に処理しない
//16で頭がピリオドである数字をfalseにする(本来はtrue)
//32で3桁区切りの,を無視する

const NATURAL_ONLY = 0;
const ZERO_AND_NATURAL = 1;
//2は全ての整数から0を除く
const ALL_INTEGER = 3;
const ALL_REAL = 7;
const SPACE_NOTSTRICT = 8;
const NO_FIRST_PERIOD = 16;
const ACCOUNTING_NUM = 32;

function isN(instr, modtype){
    let reval = true;                                       //返り
    //instrが条件に一致した数値かを判断してboolean型のデータを返します。

    //そもそもmodtypeが整数でなかったり、範囲外であるとき
    if(modtype > 63 || modtype < 0 || Number.isInteger(modtype) == false || isNaN(modtype)){
        console.log("invalid modtype");
    }else{
        //,は無視
        if(0 != (modtype & 32)){
            instr = instr.replace(RegExp(",","g"),"");      //","を削除
            instr = instr.replace("\\","").replace("$","").replace("€","");     //通貨系
        }else{
            //,がある時点で文字とみなす
            for(let i = 0 ; i < instr.length ; i++){
                if(instr.substring(i, i+1) == ","){
                    reval = false;
                }
            }
        }

        //冒頭の.を認めない処理
        //-.〇も弾きたい
        if(0 != (modtype & 16)){
            if(instr.substring(0,1) == "." || instr.substring(0,2) == "-."){
                //冒頭が.のとき
                reval = false;
            }
        }

        //空白処理系
        if(0 != (modtype & 8)){
            //空白の厳格な処理をせず、全て無視する
            instr = instr.replace(RegExp(" ","g"),"");      //空白を削除
        }else{
            //空白を厳格に処理する(一個でも存在すれば即時にfalse)
            for(let i = 0 ; i < instr.length ; i++){
                if(instr.substring(i, i+1) == " "){
                    reval = false;
                }
            }
        }

        //小数点があるか判別
        if(0 == (modtype & 4)){
            //少数を認めない
            //最後に入るピリオドは理論的には整数といえば整数なので無視する
            for(let i = 0 ; i < instr.length - 1 ; i++){
                if(instr.substring(i, i+1) == "."){
                    reval = false;
                }
            }
        }

        reval = reval == true ? !isNaN(instr) : false;

        //ここまで来たら文字系処理はtrueなので、数値化する
        let val = parseFloat(instr);

        //負数を認めるかどうか
        if(0 == (modtype & 2)){
            //認めない
            if(val < 0){
                reval = false;
            }
        }

        //0を認めるかどうか
        if(0 == (modtype & 1)){
            //認めない
            if(val == 0){
                reval = false;
            }
        }

        return reval;
    }
}