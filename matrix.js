let type = 0;

let m1 = new Array();
let m2 = new Array();
let m3 = new Array();
let m4 = new Array();

var input = document.getElementById("input_id"),
    out = document.getElementById("output_id"),
    information = document.getElementById("input_information_id");

document.getElementById('confirm_button_id').onclick = function() {
    switch (type)
    {
        case 0:
            width_find(parseInt(input.value));
            m1.length = 0;
            m2.length = 0;
            m3.length = 0;
            m4.length = 0;
        break;
        case 2:
            opred_2_find(input.value);
        break;
        case 3:
            opred_3_find(input.value);
        break;
        case 4:
            opred_4_find(input.value);
        break;
    }
    input.value = "";
}

function width_find(value) 
{
    if(value > 1 && value < 5)
    {
    out.innerText = 'Размер матрицы: ';
    out.innerText += input.value;
    information.innerHTML = '<br><p>Введите матрицу</p><br><p>↓</p>';
    type = value;
    }
}

function opred_2_find(value) 
{
    let k = 0;
    let p = 0;
    let number = "";
    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m1.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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

    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m2.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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
    m2.push(parseInt(number));

    console.log(m1);
    console.log(m2);
    out.innerText = 'Определитель = '
    out.innerText += m1[0]*m2[1] - m1[1]*m2[0];
    information.innerHTML = '<p>Укажите размер квадратной матрицы (2,&nbsp;3,&nbsp;4)</p><br><p>↓</p>';
    type = 0;
}

function opred_3_find(value) 
{
    let k = 0;
    let p = 0;
    let number = "";
    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m1.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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

    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m2.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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

    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m3.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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
    m3.push(parseInt(number));

    out.innerText = 'Определитель = '
    out.innerText += m1[0]*m2[1]*m3[2] + m1[1]*m2[2]*m3[0] + m1[2]*m2[0]*m3[1] - m1[2]*m2[1]*m3[0] - m1[1]*m2[0]*m3[2] - m1[0]*m2[2]*m3[1];
    information.innerHTML = '<p>Укажите размер квадратной матрицы (2,&nbsp;3,&nbsp;4)</p><br><p>↓</p>';
    type = 0;
}

function opred_4_find(value) 
{
    let k = 0;
    let p = 0;
    let number = "";
    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m1.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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

    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m2.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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

    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m3.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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

    for (let i = k; i < value.length; i++)
    {
        k++;
        if (value.substr(i, 1) == ' ')
        {
            p++;
            m4.push(parseInt(number));
            number = "";
            if (p == type)
            {
            p = 0;
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
    m4.push(parseInt(number));

    let m11;
    let m22;
    let m33;
    m11 = [m2[1], m2[2], m2[3]];
    m22 = [m3[1], m3[2], m3[3]];
    m33 = [m4[1], m4[2], m4[3]];
    let def1 = m1[0] * (1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1]);
    
    m11 = [m2[0], m2[2], m2[3]];
    m22 = [m3[0], m3[2], m3[3]];
    m33 = [m4[0], m4[2], m4[3]];
    let def2 = m1[1] * (-1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1]);
    
    m11 = [m2[0], m2[1], m2[3]];
    m22 = [m3[0], m3[1], m3[3]];
    m33 = [m4[0], m4[1], m4[3]];
    let def3 = m1[2] * (1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1]);
    
    m11 = [m2[0], m2[1], m2[2]];
    m22 = [m3[0], m3[1], m3[2]];
    m33 = [m4[0], m4[1], m4[2]];
    let def4 = m1[3] * (-1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1]);

    out.innerText = 'Определитель = '
    out.innerText += def1 + def2 + def3 + def4;
    information.innerHTML = '<p>Укажите размер квадратной матрицы (2,&nbsp;3,&nbsp;4)</p><br><p>↓</p>';
    type = 0;
}