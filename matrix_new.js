// Код разрабтал Лужинский Владимир (Miss✾Vovursik)
// 2022

let type = 0; // type - n размер n*n матрицы

var input = document.getElementById("input_id"),
    out = document.getElementById("output_id"),
    information = document.getElementById("input_information_id");

document.getElementById('confirm_button_id').onclick = function() {
    if (type == 0)
    {
        width_find(parseInt(input.value));
    }
    else
    opred_find(input.value);
    input.value = "";
}

function width_find(value) 
{
    if(value > 1)
    {
    out.innerText = 'Размер матрицы: ';
    out.innerText += value + 'x' + value;
    information.innerHTML = '<br><p>Введите матрицу</p><br><p>↓</p>';
    type = value;
    }
    else 
    out.innerText = 'Неверный размер матрицы';
}

function opred_find(value)
{
    let M = new Array();
    let symbol = 0; // символ строки
    let line_N = 0; // количество чисел в строке матрицы
    let line = 0; // строка матрицы
    let number = "";
for (let t = 0; t < type; t++)
{
        M.push([]);
        for (let i = symbol; i < value.length; i++)
    {
        symbol++;
        if (value.substr(i, 1) == ' ')
        {
            line_N++;
            M[line].push(parseInt(number));
            number = "";
            if (line_N == type)
            {
            line_N = 0;
            line++;
            break;
            }
        }
        else if (value.substr(i, 1) == '-')
        {
            number = '-';
        }
        else
        {
            number += value.substr(i, 1);
        }
    }
}
    M[line].push(parseInt(number));

    console.log(M);
    out.innerText = 'Определитель: '
    out.innerText += matrix_math(M, type);
    information.innerHTML = '<p>Укажите размер квадратной матрицы</p><br><p>↓</p>';
    type = 0;
}

function matrix_math(M, type)
{
    if (type > 2)
    {
        let k = 0;
        for (let i = 0; i < type; i++)
        {
            let sM = new Array();
            for (let j = 1; j < type; j++)
            {
                sM.push([]);
                for (let r = 0; r < type; r++)
                {
                    if (r != i)
                    {
                        sM[j-1].push(M[j][r]);
                    }
                }    
            }
            console.log(sM);
            k += Math.pow(-1, (2 + i)) * M[0][i] * matrix_math(sM, type - 1);
        }
        return k;
    }
    else
    {
        return M[0][0]*M[1][1]-M[1][0]*M[0][1];
    }
}